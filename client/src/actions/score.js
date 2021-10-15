import axios from 'axios'

const host = "http://localhost:2121";

    export const postScore = (score) => {
        return axios.post(host + "/score", score)
    }


    export const getScoresByUserId = (id) => {
        return axios.get(host + "/score/" + id);
    }

