import AllUsers from "@/api/AllUsers.js";

export default {
    login(credentials) {
        return AllUsers().post("user", credentials)

    }
}