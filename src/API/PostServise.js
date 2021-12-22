import axios from "axios";

export default class PostServise {
    static async getAll(limit = 10, page = 1) {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts",{
            params :{
                _limit:10,
                _page:1
            }
        })
        return response
    }
}
