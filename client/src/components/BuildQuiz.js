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




function BuildQuiz() {

    const [inputField, setInputField] = useState([
        { question: '', correctAnswer: '', wrongAnswerOne: '', wrongAnswerTwo: '', wrongAnswerThree: '' }
    ])

    const [difficulty, setDifficulty] = useState('', []);

    const [title, setTitle] = useState('', []);

    const [category, setCategory] = useState('', [])

    const handleChangeInput = (index, event) => {
        const values = [...inputField];
        values[index][event.target.name] = event.target.value;
        setInputField(values);
    }

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleDifficultyChange = (event) => {
        setDifficulty(event.target.value);
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // add Axios calls
        console.log("Input Field", inputField);
        console.log("Difficulty " + difficulty);
        console.log("QuizName: " + title);
        console.log("Category: " + category);
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
            <form sx = {{ m:1 }} onSubmit = {handleSubmit}>
                <h3>Quiz Name</h3>
                    <div sx = {{ }}>
                        <TextField 
                                sx = {{ m:1, width: '100%'}}
                                name="title"
                                label="Quiz Name"
                                variant="filled"
                                onChange={event => handleTitleChange(event)}
                                />

                        <h3>Difficulty</h3>
                                <Select
                                sx = {{ m:1, width: '100%'}}
                                name = "difficulty"
                                value = {difficulty}
                                variant = "filled"
                                onChange={event => handleDifficultyChange(event)}
                                >
                                <MenuItem value = 'easy'>
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={"easy"}>Easy</MenuItem>
                                <MenuItem value={"medium"}>Medium</MenuItem>
                                <MenuItem value={"hard"}>Hard</MenuItem>
                                </Select>

                        <h3>Category</h3>
                                <Select
                                sx = {{ m:1, width: '100%'}}
                                name = "category"
                                value = {category}
                                variant = "filled"
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
                                
                             
                    </div>
                    <h3>Questions</h3>
                {inputField.map((inputField, index) => (
                    <div key = {index}>
                        <TextField 
                        sx = {{ m:1, width: '100%'}}
                        name="question"
                        label="Question"
                        variant="filled"
                        value={inputField.question}
                        onChange={event => handleChangeInput(index, event)}
                        />

                        <TextField 
                        sx = {{ m:1, width: '100%'}}
                        name="correctAnswer"
                        label="Correct Answer"
                        variant="filled"
                        value={inputField.correctAnswer}
                        onChange={event => handleChangeInput(index, event)}
                        />

                        <TextField 
                        sx = {{ m:1, width: '100%'}}
                        name="wrongAnswerOne"
                        label="Wrong Answer"
                        variant="filled"
                        value={inputField.wrongAnswerOne}
                        onChange={event => handleChangeInput(index, event)}
                        />

                        <TextField 
                        sx = {{ m:1, width: '100%'}}
                        name="wrongAnswerTwo"
                        label="Wrong Answer"
                        variant="filled"
                        value={inputField.wrongAnswerTwo}
                        onChange={event => handleChangeInput(index, event)}
                        />

                        <TextField 
                        sx = {{ m:1, width: '100%'}}
                        name="wrongAnswerThree"
                        label="Wrong Answer"
                        variant="filled"
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
                    sx = {{ m:1 }}
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