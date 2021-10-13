import React, {Component} from "react";
import quiz from "../../actions/quiz";
import Quiz from "../../components/Quiz/Quiz";

// let params = new URLSearchParams(document.location.search.substring(1));
// let quizId = params.get("quizId");
// console.log(quizId);

class QuizPage extends Component {
    state = {
        data: {}
    }

    // componentDidMount() {
    //     quiz.getIndividualQuiz(props.id)
    //     .then(res => {
    //         if(res.data.data === "error") {
    //             throw new Error(res.data.data);
    //         }
    //         else {
    //             let results = res.data.data[0];
    //             this.setState({data: results});
    //         }
    //     })
    //     .catch(err => console.log(err));
    // }

    render() {
        return(
            <div>
                <Quiz questions = {this.state.questions} />
            </div>
        )
    }
}

export default QuizPage;