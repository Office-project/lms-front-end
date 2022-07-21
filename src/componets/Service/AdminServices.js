import axios from "axios";
import api from "../ComponetApi";
import { authHeader } from "./BaseService"
import instance from "../../Utils/Axios";

class AdminServices {
    createDepatment(payload) {
        return instance.post(api.department, payload, {
            headers: authHeader(),
        });
    }

    createStaff(payload) {
        return instance.post(api.staff, payload, {
            headers: authHeader()
        });
    }

    getStaff() {
        return instance.get(api.staffs_data, {
            headers: authHeader()
        })
    }

    getAllLeave() {
        return instance.get(api.all_leave, { headers: authHeader() })
    }

    async createHOD(payload) {
        return await instance.post(api.hod, payload, { headers: authHeader() })
    }

    async updateHod(payload) {
        return await instance.post(api.hodUpdate, payload, { headers: authHeader() })
    }

    getHODs() {
        return instance.get(api.hodTab, { headers: authHeader() })
    }

    getAllDepartment() {
        return instance.get(api.department, {
            headers: authHeader(),
        })
    }

    createLocation(payload) {
        return instance.post(api.locations, payload, {
            headers: authHeader()
        })
    }

    getAllLocation() {
        return instance.get(api.location_option, {
            headers: authHeader(),
        })
    }

}

export default new AdminServices();