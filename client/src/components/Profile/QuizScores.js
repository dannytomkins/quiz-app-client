import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Link } from "react-router-dom";


import { getScoresByUserId } from '../../actions/score';
// import { getAllScores } from '../../actions/score';
// import { getQuizById } from '../../actions/quiz';
// import { getAllQuizzes } from '../../actions/quiz';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'

const QuizScores = () => {
  const id = Cookies.get('id');

  const [score, setScore] = useState([])

  useEffect(() => {
    getScoresByUserId(id)
    .then(score => {setScore(score.data)});
  }, []);

  return (
    <div>
      <h2>Your Scores</h2>
      {console.log(score)}
      {score.length > 0 ? (
        score.map((score) => (
          <Card variant = "outlined" sx={{ width: '80%', mx: 'auto', mb: '10px'}}>
            <CardContent>
              <Typography variant='h5' component='div'>
                {score.quiz.quizName}
              </Typography>
              <Typography variant='h3'>
                {score.score} / {score.quiz.question.length}
              </Typography>
              <Button variant='h5' component='div' component = {Link} to = {`/quiz/${score.quiz.id}`}>
              Try again?
              </Button>
            </CardContent>
          </Card>
        ))
      ) : (
        <p>No scores found</p>
      )}
    </div>
  );
};

export default QuizScores;
