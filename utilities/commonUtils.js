
export class commonUtils {

    static async waitForSeconds(page,seconds) {
        await page.waitForSeconds(seconds*1000);
    } 

    static async takeScreenshot(page,name) {
        await page.screenshot({

            path : 'screenshots/${name}.png',
            fullPage : true

        });
    }

    /**
   * Generates a random integer between a minimum and maximum value (inclusive).
   * @param {number} min - The lowest possible number.
   * @param {number} max - The highest possible number.
   * @returns {number}
   */
    static async generateRandomNo(min,max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    /**
   * Generates a random string of numbers of a specific length (useful for phone numbers or IDs).
   * @param {number} length - How many digits the string should have.
   * @returns {string}
   */
    static async getRandomNumericString(length) {
        let result = '';
        for (let i = 0; i < length; i++) {
        result += Math.floor(Math.random() * 10);
        }
        return result;
    }
}

