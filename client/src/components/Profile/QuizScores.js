import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

import { getScoresByUserId } from '../../actions/score';
import { getAllScores } from '../../actions/score';
import { getQuizById } from '../../actions/quiz';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const QuizScores = () => {
  const id = Cookies.get('id');

  const [score, setScore] = useState([])
  const [quiz, setQuiz] = useState([])


  // useEffect(() => {
  //   getScoresByUserId(id).then(score => {setScore(score.data)});
  // }, []);

  useEffect(() => {
    getAllScores()
    .then(score => {setScore(score.data)})
    .then(score.forEach(score => {
      getQuizById(score.quizId)
      .then(quiz => {setQuiz(quiz.data)})
    }));
    console.log("quiz: ", quiz);

  }, []);

  

  // const score = [
  //   { quizId: 1, scorePercent: 100 },
  //   { quizId: 33, scorePercent: 80 },
  //   { quizId: 90, scorePercent: 40 },
  // ];

  console.log("score: ", score);
  console.log("quiz: ", quiz);


  return (
    <div>
      <h2>Your Scores</h2>
      {console.log(score)}
      {score.length > 0 ? (
        score.map((score) => (
          <Card variant='outlined'>
            <CardContent>
              <Typography variant='h5' component='div'>
                {/* Change this to quiz.quizname when available */}
                {score.quizId}
              </Typography>
              <Typography variant='h3'>
                {score.score}
                {'%'}
              </Typography>
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
