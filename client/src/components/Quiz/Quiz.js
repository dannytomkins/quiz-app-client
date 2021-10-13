import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Quiz = () => {
    // console.log(props);

    const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion+1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
		<div className='app'>
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
			)}
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