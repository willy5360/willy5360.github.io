import axios from "axios";

export class ApiRepository {
    async getApiInfo(source) {
        return (await axios.get(`https://rickandmortyapi.com/api/${source}/`))
            .data;
    }
}
