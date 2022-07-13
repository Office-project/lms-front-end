import axios from "axios";
import api from "../ComponetApi";
import { authHeader } from "./BaseService"

class PasswordService {
    changePassword(payload) {
        console.log(payload)
        return axios.post(api.change_password, payload, {
            headers: authHeader(),
        });
    }

}

export default new PasswordService();