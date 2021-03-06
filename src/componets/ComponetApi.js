// const base = "http://51.77.99.34:8080/lms-api"
const base = "http://127.0.0.1:8080"
const api = {
    basic: base,
    staff: `${base}/admin/staff`,
    department: `${base}/admin/department`,
    dashboard: `${base}/dashboard`,
    leavetype: `${base}/admin/leave_types`,
    hod: `${base}/admin/hod`,
    hodUpdate: `${base}/admin/hod/update`,
    hodTab: `${base}/hods`,
    locations: `${base}/admin/locations`,
    leave: `${base}/leave`,
    all_leave: `${base}/leave/all_history`,
    history: `${base}/leave/history`,
    leave_relief_officer: `${base}/leave/relief_appoval`,
    leave_hod: `${base}/leave/hod_approval`,
    leave_admin: `${base}/leave/admin_approval`,
    login: `${base}/api/v1/auth/login`,
    logout: `${base}/api/v1/auth/logout`,
    user_option: `${base}/user_option`,
    user_option_dept: `${base}/user_options_dept`,
    department_option: `${base}/department_option`,
    location_option: `${base}/location_option`,
    leave_type_option: `${base}/leave_option`,
    staffs_data: `${base}/emp-data`,
    change_password: `${base}/change_password`,
    custom_notice: `${base}/leave/custom_notification`,
    download_doc: `${base}/download/`
}
export default api;