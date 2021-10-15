import React, { Component } from "react";
// import API from "../../utils/API";

import ProfileBanner from "../../components/Profile/ProfileBanner";
import QuizFeed from "../../components/Feed/QuizFeed";
import Cookies from "js-cookie"
import QuizScores from "../../components/Profile/QuizScores";
import { getQuizzesByUserId } from "../../actions/quiz";
import QuizzesByUser from "../../components/Profile/QuizzesByUser";

class ProfilePage extends Component {

    state = {
        savedVisits: [],
        // id: Cookies.get("id")
    };

    // componentDidMount() {
    //     let id = this.state.id;
    //     API.getMyVisits(id)
    //     .then(res => {
    //         if (res.data.data === "error") {
    //             throw new Error(res.data.data);
    //         }
    //         else {
    //             this.setState({ savedVisits: res.data})
    //             console.log(this.state.savedVisits)
    //             }
    //         })
    //         .catch(err => console.log(err))
    // }


    state = {savedQuizzes: []};

    componentDidMount() {
        const userId = Cookies.get('id')

        getQuizzesByUserId(userId)
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
        return (
            <div>
                <ProfileBanner />
                <QuizScores />
                <QuizzesByUser quizzes = {this.state.savedQuizzes} />
            </div>
        )
    }
}

export default ProfilePage;