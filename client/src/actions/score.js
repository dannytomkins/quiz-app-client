import axios from 'axios'

const host = "http://localhost:2121";


    export const getScoresByUserId = (id) => {
        return axios.get(host + "/score/" + id);
    }

