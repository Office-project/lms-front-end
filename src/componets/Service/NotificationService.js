import axios from "axios";
import api from "../ComponetApi";
import { authHeader } from "./BaseService"

class NotificationService {
    getMyNotifications() {
        return axios.get(api.custom_notice, {
            headers: authHeader(),
        });
    }

    async getDocument(props) {
        const url = api.download_doc + props
        console.log(url)
        return axios.post(url, {
            headers: authHeader(),
        });
    }

}

export default new NotificationService();