import axios from 'axios'

const host = "http://localhost:2121"

export default {
    registerUser : function(user) {
    return axios.post(host + '/user', user);
    },

    loginUser : function(user) {
        return axios.post(host + "/login")
    }
}