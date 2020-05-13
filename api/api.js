import * as axios from "axios";

const API = axios.create({
    baseURL:`https://simple-blog-api.crew.red/posts`,
    headers: {
        'Content-Type': 'application/json'
    },
});

export default API;