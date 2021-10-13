import axios from 'axios'

const host = "http://localhost:2121";

export default {

    getIndividualQuiz : function (quizId) {
        return axios.get(host + "/quiz/" + quizId);
    },

}