import React from "react";
// import Cookies from "js-cookie";
import Card from '@mui/material/Card';
import { Link } from "react-router-dom";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Cookies from "js-cookie";

const QuizFeed = props => {
    console.log(props); 
    return !Cookies.get("id") && (props.quizzes.length === 0) ? (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 36 }} color="text.secondary" gutterBottom>
                    Sorry!
                </Typography>

                <Typography variant="h5">
                    There are currently no quizzes uploaded!
                </Typography>
            </CardContent>
        </Card>

    ) : ( 
        <div>
            {props.quizzes.map(quiz => {
                return (
                    <Card variant = "outlined" sx={{ width: '80%', mx: 'auto', mb: '10px'}}>
                        <CardContent>
                            <Typography component = {Link} variant = "h3"  to = {`/quiz/${quiz.id}`} color = "text.primary" gutterBottom>
                                {quiz.quizName}
                            </Typography>
                            <br />
                            <Typography variant = "overline" sx = {{ fontSize: 20}} color = "text.secondary">
                                Category : {quiz.category}
                            </Typography>
                            <br/>
                            <Typography variant = "overline" sx = {{ fontSize: 20}} color = "text.secondary">
                                Difficulty : {quiz.level}
                            </Typography>
                        </CardContent>
                    </Card>
                 )
             }) 
        } 
    </div>
    )
}

export default QuizFeed;
