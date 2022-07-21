import axios from "axios";
import api from "../ComponetApi";
import { authHeader } from "./BaseService"
import instance from "../../Utils/Axios";

class ApplicationService {
    async applyfirst(any) {
        return await instance.post(api.leave, any, {
            headers: authHeader(),
        });
    }

    async applySecond(a, b) {
        const url = api.leave + `/${a}`
        console.log(url)

        return await instance.post(url, b, { headers: authHeader(), })
    }



}

export default new ApplicationService();


