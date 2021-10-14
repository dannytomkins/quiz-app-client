import axios from 'axios'

const host = "http://localhost:2121";

export default {

    getIndividualQuiz : function (quizId) {
        return axios.get(host + "/quiz/" + quizId);
    },

    postQuiz : function (quiz) {
        return axios.post(host + "/quiz", quiz);
    },

    postQuestions : function (questions) {
        return axios.post(host + "/question", questions);
    }
}

export const getQuizById = (quizId) => {
    return axios.get(host + "/quiz/" + quizId);
}