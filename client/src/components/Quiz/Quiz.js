import React, {useState, useEffect} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { getQuizById } from "../../actions/quiz";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { postScore } from "../../actions/score"
import Cookies from "js-cookie";

const Quiz = () => {

	const quizId = useParams();
	console.log("param:", quizId);


	const [quiz, setQuiz] = useState(
		{
			"id" : "",
			"quizName" : "",
			"category:" : "",
			"level" : "",
			"userId" : "",
			"question" : [{
				"id" : "",
				"quizId" : "",
				"question" : "",
				"correctAnswer" : "",
				"wrongAnswerOne" : "",
				"wrongAnswerTwo" : "",
				"wrongAnswerThree" : ""
			},
			{
				"id" : "",
				"quizId" : "",
				"question" : "",
				"correctAnswer" : "",
				"wrongAnswerOne" : "",
				"wrongAnswerTwo" : "",
				"wrongAnswerThree" : ""
			},{
				"id" : "",
				"quizId" : "",
				"question" : "",
				"correctAnswer" : "",
				"wrongAnswerOne" : "",
				"wrongAnswerTwo" : "",
				"wrongAnswerThree" : ""
			},{
				"id" : "",
				"quizId" : "",
				"question" : "",
				"correctAnswer" : "",
				"wrongAnswerOne" : "",
				"wrongAnswerTwo" : "",
				"wrongAnswerThree" : ""
			},{
				"id" : "",
				"quizId" : "",
				"question" : "",
				"correctAnswer" : "",
				"wrongAnswerOne" : "",
				"wrongAnswerTwo" : "",
				"wrongAnswerThree" : ""
			},{
				"id" : "",
				"quizId" : "",
				"question" : "",
				"correctAnswer" : "",
				"wrongAnswerOne" : "",
				"wrongAnswerTwo" : "",
				"wrongAnswerThree" : ""
			},{
				"id" : "",
				"quizId" : "",
				"question" : "",
				"correctAnswer" : "",
				"wrongAnswerOne" : "",
				"wrongAnswerTwo" : "",
				"wrongAnswerThree" : ""
			},{
				"id" : "",
				"quizId" : "",
				"question" : "",
				"correctAnswer" : "",
				"wrongAnswerOne" : "",
				"wrongAnswerTwo" : "",
				"wrongAnswerThree" : ""
			},{
				"id" : "",
				"quizId" : "",
				"question" : "",
				"correctAnswer" : "",
				"wrongAnswerOne" : "",
				"wrongAnswerTwo" : "",
				"wrongAnswerThree" : ""
			},{
				"id" : "",
				"quizId" : "",
				"question" : "",
				"correctAnswer" : "",
				"wrongAnswerOne" : "",
				"wrongAnswerTwo" : "",
				"wrongAnswerThree" : ""
			}
		]
		}
		);

		

	useEffect(() => {
		
		getQuizById(quizId.id).then(quiz => {setQuiz(quiz.data)})
		console.log("useEffect Engaged!");
		console.log(quiz);
	  }, []);

	  console.log("Quiz: ", quiz)

    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (answer) => {
        if (answer == 'correctAnswer') {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion+1;
        if (nextQuestion < quiz.question.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
			postScore({
				"userId" : Cookies.get("id"),
				"quizId" : quiz.id,
				"score" : score + 1
			})
        }
    };

    return (
		<div>
			{showScore ? (
			<Card>
				<CardContent>
					<Typography variant="h4">You scored {score} out of {quiz.question.length}</Typography>

				</CardContent>
			</Card>
		) : (
			<>
				<div>
					<Card>
						<CardContent>
							<Typography variant = "h5">
								Question {currentQuestion + 1} / {quiz.question.length}
							</Typography>
						</CardContent>
					</Card>
					<Card>
						<CardContent>
							<Typography variant = "h2">
								{quiz.question[currentQuestion].question}
							</Typography>

						</CardContent>
					</Card>
					</div>
				<div>
				<Card>
					<CardContent>	
						<Button variant = "overline"  sx = {{ fontSize: 16, width : "80%"}} color = "text.secondary" onClick = {() => handleAnswerOptionClick('correctAnswer')}>
							<Typography variant = "h6">
								{quiz.question[currentQuestion].correctAnswer}
							</Typography>
						</Button>
					</CardContent>
				</Card>
				<br/>
				<Card>
					<CardContent>
						<Button variant = "overline" sx = {{ fontSize: 16, width : "80%"}} color = "text.secondary" onClick = {() => handleAnswerOptionClick('incorrectAnswer')}>
							<Typography variant = "h6">	
								{quiz.question[currentQuestion].wrongAnswerOne}
							</Typography>
						</Button>
					</CardContent>
				</Card>
					<br />
					<Card>
						<CardContent>
							<Button variant = "overline" sx = {{ fontSize: 16, width : "80%"}} color = "text.secondary" onClick = {() => handleAnswerOptionClick('incorrectAnswer')}>
								<Typography variant = "h6">
									{quiz.question[currentQuestion].wrongAnswerTwo}
								</Typography>	
						</Button>
					</CardContent>
				</Card>
					<br/>
					<Card>
						<CardContent>
							<Button variant = "overline" sx = {{ fontSize: 16, width : "80%"}} color = "text.secondary" onClick = {() => handleAnswerOptionClick('incorrectAnswer')}>
								<Typography variant = "h6">
									{quiz.question[currentQuestion].wrongAnswerThree}
								</Typography>
							</Button>
						</CardContent>
					</Card>
					<br />
				</div>
			</>
		)}
		</div>	 	
	);
}

export default Quiz