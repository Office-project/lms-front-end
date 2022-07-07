import axios from "axios";
import api from "../ComponetApi";

class AuthenticationService {

    login(user) {
        return axios.post(api.login, user);
    }
    register(user) {
        return axios.post(api.staff, user);
    }
}

export default new AuthenticationService;