import { Button, IconButton, Input, Select, SelectContent, SelectIcon, SelectListbox, SelectOption, SelectOptionIndicator, SelectOptionText, SelectPlaceholder, SelectTrigger, SelectValue, Text, Textarea, InputGroup } from "@hope-ui/solid";
import { AiFillDelete, AiOutlinePlus } from "solid-icons/ai";
import { For } from "solid-js";

function GapText(props) {
    const addNewAnswer = () => {
        let prevState = props.modalQuestion();
        let newAnswers = prevState.answers.concat(prevState.answers == [] ? "" : prevState.answers[prevState.answers.length - 1]);
        prevState.answers = newAnswers;
        let newState = { ...prevState } //For reload, else its the safe reference so UI will not be updated
        props.setModalQuestion(newState);
    }

    const deleteAnswer = (index) => {
        let prevState = props.modalQuestion();
        let newAnswers = props.modalQuestion().answers.filter((_, i) => i !== index);
        prevState.answers = newAnswers;
        let newState = { ...prevState } //For reload, else its the safe reference so UI will not be updated
        props.setModalQuestion(newState);
    }

    const handleQuestionOnchange = (e) => {
        // console.log(e.target.value);
        let prevState = props.modalQuestion();
        prevState.question = e.target.value;
        let newState = { ...prevState } //For reload, else its the safe reference so UI will not be updated
        props.setModalQuestion(newState);
    }

    const handleQuestionTypeChange = (e) => {
        // console.log(e);
        props.setCurrentQuestionType(e);
        let prevState = props.modalQuestion();
        prevState.questionType = e;
        let newState = { ...prevState } //For reload, else its the safe reference so UI will not be updated
        props.setModalQuestion(newState);
    }

    function setTrueValues(array1, array2) {
        for (const index of array2) {
            if (index >= 0 && index <= array1.length) {
                array1[index - 1] = true;
            }
        }
    }

    const handleCorrectQuestionChange = (e) => {
        // console.log(e.target.value);
        // console.log(e.target.value.length);
        const lastCharacter = e.target.value.slice(-1);
        // console.log(lastCharacter);
        if (e.target.value.length === 0 || lastCharacter === "," || lastCharacter === "0") {
            // console.log("no change");
        } else {
            let prevState = props.modalQuestion();
            // console.log("Länge: ", props.modalQuestion().answers.length);
            let answersArray = new Array(props.modalQuestion().answers.length).fill(false); // default all variables to false
            const numbersArray = e.target.value.split(",").map(Number);
            setTrueValues(answersArray, numbersArray);
            // console.log(answersArray);

            prevState.correctAnswer = answersArray;
            let newState = { ...prevState } //For reload, else its the safe reference so UI will not be updated
            // console.log(newState);
            props.setModalQuestion(newState);
        }
    }

    const handleChangePoints = (e) => {
        // console.log(e.target.value);
        let prevState = props.modalQuestion();
        prevState.point = e.target.value;
        let newState = { ...prevState } //For reload, else its the safe reference so UI will not be updated
        props.setModalQuestion(newState);
    }

    const handleOneQuestionAnserChange = (index, e) => {
        console.log("change item: ", index, e.target.value)

        let prevState = props.modalQuestion();
        prevState.correctAnswer[index] = e.target.value;
        // let newState = { ...prevState } //For reload, else its the safe reference so UI will not be updated
        // props.setModalQuestion(newState);
    }

    return (
        <>

            {
                props.isEditing() ? null : <div style={{ display: "flex" }}>
                    <Text style={{ margin: "1em" }}>Questiontype:</Text>
                    <div style={{ width: "12em", margin: "1em" }}>
                        <Select defaultValue={"gaptext"} value={props.currentQuestionType} onChange={(e) => handleQuestionTypeChange(e)}>
                            <SelectTrigger>
                                <SelectPlaceholder>Choose questiontype</SelectPlaceholder>
                                <SelectValue />
                                <SelectIcon />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectListbox>
                                    <For each={["multiplechoice", "singlechoice", "correctorder", "numberinput", "gaptext"]}>
                                        {item => (
                                            <SelectOption value={item} >
                                                <SelectOptionText>{item}</SelectOptionText>
                                                <SelectOptionIndicator />
                                            </SelectOption>
                                        )}
                                    </For>
                                </SelectListbox>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            }
            <div style={{ display: "flex" }}>
                <Text style={{ margin: "1em" }}>Questiontext: <br /> <small>(if you want to insert a gap item write "***" inside the text, and add the correct word in the correct order as an answer below)</small></Text>


            </div >
            <Input onkeyup={(e) => handleQuestionOnchange(e)} placeholder="Type your questiontext..." value={props.modalQuestion() !== null ? props.modalQuestion().question : ""} />
            <div>
                <Text style={{ margin: "1em" }}>Answer Options:</Text>
                <For each={props.modalQuestion() !== null ? props.modalQuestion()?.answers : []}>
                    {(item, index) => (
                        <div style={{ display: "flex", margin: "1em" }}>
                            <Text style={{ margin: "auto", "margin-right": ".5em" }}>{index() + 1}</Text>
                            <InputGroup>
                                <Input placeholder={index() + 1} size="md" value={item} onkeyup={(e) => handleOneQuestionAnserChange(index(), e)} />
                            </InputGroup>
                            <IconButton colorScheme="danger" aria-label="Delete" onclick={() => deleteAnswer(index())} icon={<AiFillDelete />} />
                        </div>
                    )}
                </For>
                {/* {props.modalQuestionAnswers} */}
                <Button leftIcon={<AiOutlinePlus />} variant="outline" onclick={addNewAnswer}>Add answer</Button>
            </div >
            {/* <div>
                <Text style={{ margin: "1em" }}>Numbers of correct answers, devide with comas:</Text>
                <Input placeholder="Numbers devided by comas" value={props.modalQuestion() !== null ? Array.isArray(props.modalQuestion().correctAnswer) ? props.modalQuestion()?.correctAnswer.map((item, index) => item === true && index + 1).filter(item => item !== false) : null : null} onkeyup={(e) => handleCorrectQuestionChange(e)} />
            </div> */}
            <div>
                <Text style={{ margin: "1em" }}>Points per correct answer:</Text>
                <Input placeholder="Points" value={props.modalQuestion() !== null ? props.modalQuestion().point : ""} onkeyup={(e) => handleChangePoints(e)} />
            </div>
        </>
    );

}

export default GapText;