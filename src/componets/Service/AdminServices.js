import axios from "axios";
import api from "../ComponetApi";
import { authHeader } from "./BaseService"

class AdminServices {
    createDepatment(payload) {
        return axios.post(api.department, payload, {
            headers: authHeader(),
        });
    }

    createStaff(payload) {
        return axios.post(api.staff, payload, {
            headers: authHeader()
        });
    }

    getStaff() {
        return axios.get(api.staffs_data, {
            headers: authHeader()
        })
    }

    getAllDepartment() {
        return axios.get(api.department, {
            headers: authHeader(),
        })
    }

    createLocation(payload) {
        return axios.post(api.locations, payload, {
            headers: authHeader()
        })
    }

    getAllLocation() {
        return axios.get(api.location_option, {
            headers: authHeader(),
        })
    }

}

export default new AdminServices();