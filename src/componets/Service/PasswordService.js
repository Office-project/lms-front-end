import axios from "axios";
import instance from "../../Utils/Axios";
import api from "../ComponetApi";
import { authHeader } from "./BaseService"

class PasswordService {
    changePassword(payload) {
        return instance.post(api.change_password, payload, {
            headers: authHeader(),
        });
    }

}

export default new PasswordService();