import React, {useState, useEffect} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { getQuizById } from "../../actions/quiz";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

const Quiz = () => {
    // console.log(props);

    // const questions = [
	// 	{
	// 		questionText: 'What is the capital of France?',
	// 		answerOptions: [
	// 			{ answerText: 'New York', isCorrect: false },
	// 			{ answerText: 'London', isCorrect: false },
	// 			{ answerText: 'Paris', isCorrect: true },
	// 			{ answerText: 'Dublin', isCorrect: false },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'Who is CEO of Tesla?',
	// 		answerOptions: [
	// 			{ answerText: 'Jeff Bezos', isCorrect: false },
	// 			{ answerText: 'Elon Musk', isCorrect: true },
	// 			{ answerText: 'Bill Gates', isCorrect: false },
	// 			{ answerText: 'Tony Stark', isCorrect: false },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'The iPhone was created by which company?',
	// 		answerOptions: [
	// 			{ answerText: 'Apple', isCorrect: true },
	// 			{ answerText: 'Intel', isCorrect: false },
	// 			{ answerText: 'Amazon', isCorrect: false },
	// 			{ answerText: 'Microsoft', isCorrect: false },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'How many Harry Potter books are there?',
	// 		answerOptions: [
	// 			{ answerText: '1', isCorrect: false },
	// 			{ answerText: '4', isCorrect: false },
	// 			{ answerText: '6', isCorrect: false },
	// 			{ answerText: '7', isCorrect: true },
	// 		],
	// 	},
	// ];
	const quizId = useParams();
	// const {id} = quizId
	console.log("param:", quizId);


	const [quiz, setQuiz] = useState(
		{
			"id" : "",
			"quizName" : "",
			"category:" : "",
			"level" : "",
			"userId" : "",
			"question" : []
		}
		);

	useEffect(() => {
		
		getQuizById(quizId.id).then(quiz => {setQuiz(quiz.data)})
		console.log("useEffect Engaged!");
		console.log(quiz);
	  }, []);

	  console.log("Quiz: ", quiz)

    // const [currentQuestion, setCurrentQuestion] = useState(0);
	// const [showScore, setShowScore] = useState(false);
	// const [score, setScore] = useState(0);

    // const handleAnswerOptionClick = (isCorrect) => {
    //     if (isCorrect) {
    //         setScore(score + 1);
    //     }

    //     const nextQuestion = currentQuestion+1;
    //     if (nextQuestion < questions.length) {
    //         setCurrentQuestion(nextQuestion);
    //     } else {
    //         setShowScore(true);
    //     }
    // };

    return (
		
		<div>
		{quiz.question.length > 0 ? (
		 	quiz.question.map((question) => (
		 	  <Card variant='outlined'>
		 		<CardContent>
		 		  <Typography variant='h5' component='div'>
		 			{question.id}
		 		  </Typography>
		 		  <Typography variant='h3'>
		 			{question.id}
		 			{'%'}
		 		  </Typography>
		 		</CardContent>
		 	  </Card>
		 	))
		   ) : (
		 	<p>No scores found</p>
		   )}

			{/* {quiz.data.question.map(question => {
				return (
					<p>{question.correctAnswer}</p>
				)
			})}
			{showScore ? (
				<Card>
                    <CardContent>
                        You scored {score} out of {questions.length}
                    </CardContent>
                </Card>
			) : (
				<>
					<div>
						<Card>
                            <CardContent>
							    <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </CardContent>
						</Card>
                        <Card>
                            <CardContent>
                                <div className='question-text'>{questions[currentQuestion].questionText}</div>
                            </CardContent>
						</Card>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<Button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</Button>
						))}
					</div>
				</>
			)} */}
		</div>
	);




    // return (
    //     <div>
    //     {/* {props.questions.map(question => { */}
    //     <Card variant = "outlined" sx={{ width: '80%', mx: 'auto', mb: '10px'}}>
    //         <CardContent>
    //             <Typography variant = "h3" color = "text.primary" gutterBottom>
    //                 Question number 'numbered index'
    //             </Typography>
    //             <br />
    //             <Typography variant = "overline" sx = {{ fontSize: 20}} color = "text.secondary">
    //                 Answer One'[0]'
    //             </Typography>
    //             <br/>
    //             <Typography variant = "overline" sx = {{ fontSize: 20}} color = "text.secondary">
    //                 Answer Two'[0]'
    //             </Typography>
    //             <br />
    //             <Typography variant = "overline" sx = {{ fontSize: 20}} color = "text.secondary">
    //                 Answer Three'[0]'
    //             </Typography>
    //             <br/>
    //             <Typography variant = "overline" sx = {{ fontSize: 20}} color = "text.secondary">
    //                 Answer Four'[0]'
    //             </Typography>
    //             <br />
    //         </CardContent>
    //     </Card>
    //     {/* }) */}
    // {/* } */}
    // </div>
    // )
}

export default Quiz