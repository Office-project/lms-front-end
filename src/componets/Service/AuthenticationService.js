import axios from "axios";
import api from "../ComponetApi";
import instance from "../../Utils/Axios";

class AuthenticationService {

    login(user) {
        return instance.post(api.login, user);
    }
    register(user) {
        return instance.post(api.staff, user);
    }
}

export default new AuthenticationService();