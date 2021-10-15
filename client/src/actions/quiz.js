import axios from 'axios'

const host = "http://localhost:2121";

export default {

    getQuizzes : function() {
        return axios.get(host + "/quiz");
    },

    postQuiz : function (quiz) {
        return axios.post(host + "/quiz", quiz);
    },

    postQuestions : function (questions) {
        return axios.post(host + "/question", questions);
    }
}

export const getAllQuizzes = () => {
    return axios.get(host + "/quiz");
}

export const getQuizById = (quizId) => {
    return axios.get(host + "/quiz/" + quizId);
}

export const getQuizzesByUserId = (id) => {
    return axios.get(host + "/quiz/user/" + id);
}