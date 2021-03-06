import React, { Component } from "react";
// import API from "../utils/API";
import quiz from "../../actions/quiz";
import QuizFeed from "../../components/Feed/QuizFeed";
import WelcomeBanner from "../../components/WelcomeBanner/WelcomeBanner";

class DashboardPage extends Component {

    state = {savedQuizzes: []};

    componentDidMount() {
        quiz.getQuizzes()
        .then(res => {
            if (res.data.data === "error") {
                throw new Error(res.data.data);
            }
            this.setState({ savedQuizzes: res.data.reverse()});
            console.log(this.state.savedQuizzes.reverse());
        })
        .catch(err => console.log(err));
    }

    render() {
        return(
            <div>
                <WelcomeBanner />
                <QuizFeed quizzes = {this.state.savedQuizzes} />
            </div>
        )
    }
}

export default DashboardPage;