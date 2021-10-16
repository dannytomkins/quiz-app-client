import React, {useState } from "react";
import Container from "@mui/material/Container"
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Icon from "@mui/material/Icon";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Box from "@mui/material/Box"
import quiz from "../../actions/quiz";
import Cookies from "js-cookie";
import { ToastContainer, toast } from 'react-toastify';

function BuildQuiz() {

    const [inputField, setInputField] = useState([
        { question: '', correctAnswer: '', wrongAnswerOne: '', wrongAnswerTwo: '', wrongAnswerThree: '' }
    ])

    const userId = Cookies.get('id');

    const [level, setLevel] = useState('', []);

    const [quizName, setQuizName] = useState('', []);

    const [category, setCategory] = useState('', [])

    const handleChangeInput = (index, event) => {
        const values = [...inputField];
        values[index][event.target.name] = event.target.value;
        setInputField(values);
    }

    const handleQuizNameChange = (event) => {
        setQuizName(event.target.value);
    }

    const handleLevelChange = (event) => {
        setLevel(event.target.value);
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (level && category && quizName && userId) {
            quiz.postQuiz({level, category, quizName, userId})
            .then(
                quiz.postQuestions(inputField)
                .then(
                    window.location.href = "http://www.localhost:3000/"
                )
            )
        } else {
            toast("All fields must be filled out properly to submit a quiz");
        }

    }

    const handleAddFields = () => {
        setInputField([...inputField, {question: '', correctAnswer: '', wrongAnswerOne: '', wrongAnswerTwo: '', wrongAnswerThree: ''}])
    }

    const handleRemoveFields = (index) => {
        const values = [...inputField];
        if (index > 0) {
            values.splice(index, 1);
            setInputField(values);
        }

    }

    return (
        <Container>
            <ToastContainer/>
            <form sx = {{ m:1 }} onSubmit = {handleSubmit}>
                <h1>Quiz Info</h1>
                    <Box sx={{ minWidth: 120 }}>
                        <TextField 
                                sx = {{ mb:1,  width: '100%'}}
                                name="quizName"
                                label="quizName"
                                onChange={event => handleQuizNameChange(event)}
                                />

                                <FormControl fullWidth> 
                                    <InputLabel id="difficulty">Difficulty</InputLabel>
                                    <Select
                                    labelId = "difficulty"
                                    sx = {{ mb:1,  width: '100%'}}
                                    name = "level"
                                    value = {level}
                                    label = "Difficulty"
                                    onChange={event => handleLevelChange(event)}
                                    >
                                    <MenuItem value = 'easy' label = "difficulty">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={"easy"}>Easy</MenuItem>
                                    <MenuItem value={"medium"}>Medium</MenuItem>
                                    <MenuItem value={"hard"}>Hard</MenuItem>
                                    </Select>
                                </FormControl> 
                            
                            <FormControl fullWidth> 
                                <InputLabel id="category">Category</InputLabel>
                                    <Select
                                    sx = {{ mb:1, width: '100%'}}
                                    labelId = "category"
                                    name = "category"
                                    value = {category}
                                    label = "Category"
                                    onChange={event => handleCategoryChange(event)}
                                    >
                                    <MenuItem value= 'Sports'>
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={"Trivia"}>Trivia</MenuItem>
                                    <MenuItem value={"Coding"}>Coding</MenuItem>
                                    <MenuItem value={"Science"}>Science</MenuItem>
                                    <MenuItem value={"Politics"}>Politics</MenuItem>
                                    <MenuItem value={"Geography"}>Geography</MenuItem>
                                    <MenuItem value={"Movies"}>Movies</MenuItem>
                                    <MenuItem value={"Music"}>Music</MenuItem>
                                    <MenuItem value={"Sports"}>Sports</MenuItem>
                                    <MenuItem value={"Literature"}>Literature</MenuItem>
                                    <MenuItem value={"Other"}>Other</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                    <h1>Questions</h1>
                {inputField.map((inputField, index) => (
                    <div key = {index}>
                        <TextField 
                        sx = {{mb:1, width: '100%'}}
                        name="question"
                        label="Question"
                        value={inputField.question}
                        onChange={event => handleChangeInput(index, event)}
                        />

                        <TextField 
                        sx = {{mb:1, width: '100%'}}
                        name="correctAnswer"
                        label="Correct Answer"
                        value={inputField.correctAnswer}
                        onChange={event => handleChangeInput(index, event)}
                        />

                        <TextField 
                        sx = {{mb:1, width: '100%'}}
                        name="wrongAnswerOne"
                        label="Wrong Answer"
                        value={inputField.wrongAnswerOne}
                        onChange={event => handleChangeInput(index, event)}
                        />
                        

                        <TextField 
                        sx = {{mb: 1, width: '100%'}}
                        name="wrongAnswerTwo"
                        label="Wrong Answer"
                        value={inputField.wrongAnswerTwo}
                        onChange={event => handleChangeInput(index, event)}
                        />

                        <TextField 
                        sx = {{mb: 1, width: '100%'}}
                        name="wrongAnswerThree"
                        label="Wrong Answer"
                        value={inputField.wrongAnswerThree}
                        onChange={event => handleChangeInput(index, event)}
                        />
                        <div>
                        <IconButton
                        onClick = {() => handleRemoveFields(index)}>
                            <RemoveIcon />
                        </IconButton>
                        <IconButton
                            onClick = {() => handleAddFields()}>
                            <AddIcon />
                        </IconButton>
                        </div>
                    </div>
                ))  }
                <Button 
                    sx = {{ mb:1 }}
                    variant="contained" 
                    color="primary" 
                    type="submit" 
                    endIcon={<Icon>check</Icon>}
                    onClick={handleSubmit}
                    >
                    Done
                </Button>
                
            </form>           
        </Container>
    )
}

export default BuildQuiz;