import axios from "axios";
import api from "../ComponetApi";
import { authHeader } from "./BaseService"

class NotificationService {
    getMyNotifications() {
        return axios.get(api.custom_notice, {
            headers: authHeader(),
        });
    }

    getDocument(props) {
        const link = api.download_doc + props
        return axios.get(link, {
            headers: authHeader(),
            responseType: "blob"
        });
    }

    async accept(position, id) {
        const payload = { name: "me" }
        const links = `${api.basic}/actions/${position}/${id}`;
        return await axios.post(links, payload, {
            headers: authHeader(),
        });
    }

    async decline(position, id, payload) {
        const url = `${api.basic}/actions/${position}/${id}`;

        console.log(url)
        console.log(url)

        return await axios.delete(url, { data: payload, headers: authHeader() });

    }

    createLocation(payload) {
        return axios.post(api.locations, payload, {
            headers: authHeader()
        })
    }

}

export default new NotificationService();