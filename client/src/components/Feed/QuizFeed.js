import React from "react";
// import Cookies from "js-cookie";
import Card from '@mui/material/Card';
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
            {/* {props.quizzes.map(quiz => { */}
            <Card variant = "outlined" sx={{ width: '80%', mx: 'auto', mb: '10px'}}>
                <CardContent>
                    <Typography variant = "h3" color = "text.primary" gutterBottom>
                        Quiz Name
                    </Typography>
                    <Typography variant = "overline" sx = {{ fontSize: 20}} color = "text.secondary">
                        Quiz Category
                    </Typography>
                    <br/>
                    <Typography variant = "overline" sx = {{ fontSize: 20}} color = "text.secondary">
                        Quiz Difficulty
                    </Typography>
                </CardContent>
            </Card>
            {/* }) */}
        {/* } */}
        </div>
   

    
    
    
        // <Container fluid>
        //     <div className="card">
        //         <div className="card-body">
        //         <Row>
        //                 <Col size = "1" ></Col>
        //                 <Col size = "10">
        //                 {props.visits.map(visit => {
        //                             return Cookies.get("id") && (
        //                                 <div className = "post-bg rounded-3 p-1 border mb-3">

        //                                 {/* Post Header */}
        //                                 <Row >
        //                                     <Col size = "12">
        //                                     <h1 className = "text-white text-center p-2 postTime">{visit.user.first_name} {visit.user.last_name}</h1>
        //                                     </Col>
        //                                     <Col size = "12">
        //                                     <h1 className = "text-center text-white p-2 postTitle">Posted: {visit.date}</h1>   
        //                                     </Col>
        //                                 </Row>
        
        //                                 {/* Post Photo */}
        //                                 <Row>
        //                                     <Col size = "6" className = "mw-50">
        //                                         <img  src= {visit.image} alt="placeholder" />
        //                                     </Col>
        //                                 </Row>
        
        //                                 <Row>
        //                                     <Col size = "10">
        //                                         <br />
        //                                         <h2>{visit.park} - {visit.status}</h2><br />
        //                                         <h3>Rating: {visit.rating}/5</h3>
        //                                     </Col>
        //                                 </Row>
        
        
        //                                 {/* Post Body */}
        //                                 <Row >
        //                                     <Col size = "1"></Col>
        //                                     <Col size = "10">
        //                                         <h3>Activity: {visit.activity} for {visit.length} {visit.unit}</h3>
        //                                         <h3 className = "text-white mt-2">"{visit.body}"</h3>
                                               
        //                                     </Col>
        //                                     <Col size = "1"></Col>
        //                                 </Row>
        //                                 <Row>
        //                                     {/* <PostComment /> */}
        //                                 </Row>
        //                                 <br />
        //                                 <br />

        //                             </div>

                                    
        //                             )
        //                         })}
        //                 </Col>

        //                 <Col size = "1" ></Col>
        //             </Row>
        //         </div>
        //     </div>
        //     <br />
        //     <br />
        // </Container>
    )
}

export default QuizFeed;
