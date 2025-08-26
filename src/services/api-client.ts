import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params: {
        key:'7e5b08883c7c4823a6e0b1ad901c67c4'
    }
})