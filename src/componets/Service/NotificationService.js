import axios from "axios";
import api from "../ComponetApi";
import { authHeader } from "./BaseService"
import instance from "../../Utils/Axios";

class NotificationService {
    getMyNotifications() {
        return instance.get(api.custom_notice, {
            headers: authHeader(),
        });
    }

    getDocument(props) {
        const link = api.download_doc + props
        return instance.get(link, {
            headers: authHeader(),
            responseType: "blob"
        });
    }

    async accept(position, id) {
        const payload = { name: "me" }
        const links = `${api.basic}/actions/${position}/${id}`;
        return await instance.post(links, payload, {
            headers: authHeader(),
        });
    }

    async decline(position, id, payload) {
        const url = `${api.basic}/actions/${position}/${id}`;
        return await instance.delete(url, { data: payload, headers: authHeader() });

    }

    createLocation(payload) {
        return instance.post(api.locations, payload, {
            headers: authHeader()
        })
    }

}

export default new NotificationService();