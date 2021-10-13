import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

import { getScoresByUserId } from '../../actions/score';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const QuizScores = () => {
  const id = Cookies.get('id');

  // const [score, setScore] = useState([])

  // useEffect(() => {
  //   getScoresByUserId(id).then(score => {setScore(score.data)});
  // }, []);

  const score = [
    { quizId: 1, scorePercent: 100 },
    { quizId: 33, scorePercent: 80 },
    { quizId: 90, scorePercent: 40 },
  ];

  console.log(score);

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
                {score.scorePercent}
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
