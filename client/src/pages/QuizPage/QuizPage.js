import React, {Component} from "react";
import quiz from "../../actions/quiz";
import Quiz from "../../components/Quiz/Quiz";

// let params = new URLSearchParams(document.location.search.substring(1));
// let quizId = params.get("quizId");
// console.log(quizId);

class QuizPage extends Component {

    render() {
        return(
            <div>
                <Quiz />
            </div>
        )
    }
}

export default QuizPage;