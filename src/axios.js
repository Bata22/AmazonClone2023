import axios from "axios"; 

    const instance = axios.create({
        baseURL: 'http://localhost:5001/fir-clone-b2210/us-central1/api'
    });

export default instance;
/* 2:05 */