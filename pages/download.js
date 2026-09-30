
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import * as cheerio from 'cheerio';
import archiver from 'archiver';

// Configuration
const START_CHAPTER = 1;
const END_CHAPTER = 1076;
const BASE_URL = 'https://ww13.readonepiece.com/chapter/one-piece-digital-colored-comics-chapter-';
const OUTPUT_DIR = './one_piece_chapters';

// Helper to pad numbers (e.g., 1 -> "001")
const padZero = (num, size = 3) => String(num).padStart(size, '0');

// Helper to delay requests and avoid getting blocked
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function downloadChapter(chapterNum) {
  const chapterStr = padZero(chapterNum);
  const chapterUrl = `${BASE_URL}${chapterStr}/`;
  const zipPath = path.join(OUTPUT_DIR, `Chapter_${chapterStr}.zip`);

  console.log(`\n🚀 Processing Chapter ${chapterStr}...`);
  console.log(`🌐 Fetching: ${chapterUrl}`);

  try {
    // 1. Fetch the chapter page HTML
    const { data: html } = await axios.get(chapterUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
    });

    const $ = cheerio.load(html);
    const imageUrls = [];

    // 2. Extract image URLs (adjust the selector if the site structure varies)
    $('img').each((_, element) => {
      const src = $(element).attr('src');
      // Filters for manga pages (often hosted on external image servers or CDN paths)
      if (src && (src.includes('cdn') || src.includes('manga') || src.includes('wp-content'))) {
        imageUrls.push(src.trim());
      }
    });

    if (imageUrls.length === 0) {
      console.log(`⚠️ No images found for Chapter ${chapterStr}. Skipping.`);
      return;
    }

    console.log(`📦 Found ${imageUrls.length} pages. Creating zip file...`);

    // 3. Initialize Zip Archiver
    const output = fs.createWriteStream(zipPath);
    const archive = archiver('zip', { zlib: { level: 9 } });

    archive.pipe(output);

    // 4. Download each page directly into the zip file
    for (let i = 0; i < imageUrls.length; i++) {
      const imgUrl = imageUrls[i];
      const pageNum = padZero(i + 1, 2);
      const ext = path.extname(imgUrl).split('?')[0] || '.jpg'; // Fallback to .jpg
      const filename = `page_${pageNum}${ext}`;

      try {
        const response = await axios({
          url: imgUrl,
          method: 'GET',
          responseType: 'stream',
          headers: { 'Referer': chapterUrl }
        });

        archive.append(response.data, { name: filename });
        console.log(`  └─ Added ${filename}`);
      } catch (err) {
        console.error(`  ❌ Failed to download page ${i + 1}: ${err.message}`);
      }

      // Small polite delay between page downloads
      await delay(200);
    }

    // Finalize the zip file
    await archive.finalize();

    // Promise wrapper to wait for the write stream to finish saving
    await new Promise((resolve, reject) => {
      output.on('close', resolve);
      output.on('error', reject);
    });

    console.log(`✅ Chapter ${chapterStr} saved successfully to ${zipPath}`);

  } catch (error) {
    console.error(`❌ Error downloading Chapter ${chapterStr}: ${error.message}`);
  }
}

async function main() {
  for (let c = START_CHAPTER; c <= END_CHAPTER; c++) {
    await downloadChapter(c);
    // 2-second delay between chapters to prevent rate-limiting/IP bans
    await delay(2000);
  }
  console.log('\n🎉 All finished!');
}

main();