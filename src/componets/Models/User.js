export default class User {
    constructor(
        role,
        token,
        firstName,
        lastName,
        email,
        department,
        location,
        initail,
        supervisor,
        joinDate
    ) {
        this.role = role;
        this.token = token;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.department = department;
        this.location = location;
        this.initail = initail;
        this.supervisor = supervisor;
        this.joinDate = joinDate;
    }
}
