
export class apiUtils {

    static async getRequest(request,url) {
        const response = await request.get(url);
    }

    static async postRequest(request,url,data) {
        const response = await request.post(url,{
            data: data
        });
    }


    static async putRequest(request,url,data) {
        const response = await request.put(url,{
            data: data
        });
    }

    



}