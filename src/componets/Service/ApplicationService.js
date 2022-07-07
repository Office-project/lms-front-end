import axios from "axios";
import api from "../ComponetApi";
import { authHeader } from "./BaseService"

class ApplicationService {
    async applyfirst(any) {
        return await axios.post(api.leave, any, {
            headers: authHeader(),
        });
    }

    async applySecond(a, b) {
        const url = api.leave + `/${a}`
        console.log(url)

        return await axios.post(url, b, { headers: authHeader(), })
    }



}

export default new ApplicationService();


