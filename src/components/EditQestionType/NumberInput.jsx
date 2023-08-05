import { Button, IconButton, Input, Select, SelectContent, SelectIcon, SelectListbox, SelectOption, SelectOptionIndicator, SelectOptionText, SelectPlaceholder, SelectTrigger, SelectValue, Text, Textarea, InputGroup } from "@hope-ui/solid";
import { AiFillDelete, AiOutlinePlus } from "solid-icons/ai";
import { For } from "solid-js";

function NumberInput(props) {

    const handleQuestionOnchange = (e) => {
        let prevState = props.modalQuestion();
        prevState.question = e.target.value;
        let newState = { ...prevState } //For reload, else its the safe reference so UI will not be updated
        props.setModalQuestion(newState);
    }

    const handleQuestionTypeChange = (e) => {
        props.setCurrentQuestionType(e);
        let prevState = props.modalQuestion();
        prevState.questionType = e;
        let newState = { ...prevState } //For reload, else its the safe reference so UI will not be updated
        props.setModalQuestion(newState);
    }

    const handleOneQuestionAnswerChange = (index, e) => {
        let prevState = props.modalQuestion();
        prevState.answers[index] = e.target.value;
        // let newState = { ...prevState } //For reload, else its the safe reference so UI will not be updated
        // props.setModalQuestion(newState);
    }

    const handleCorrectAnswer = (e) => {
        let prevState = props.modalQuestion();
        prevState.correctAnswer = e.target.value;
        let newState = { ...prevState } //For reload, else its the safe reference so UI will not be updated
        props.setModalQuestion(newState);

    }

    const handleChangePoints = (e) => {
        let prevState = props.modalQuestion();
        prevState.point = e.target.value;
        let newState = { ...prevState } //For reload, else its the safe reference so UI will not be updated
        props.setModalQuestion(newState);
    }


    return (
        <>
            {
                props.isEditing() ? null : <div style={{ display: "flex" }}>
                    <Text style={{ margin: "1em" }}>Questiontype:</Text>
                    <div style={{ width: "12em", margin: "1em" }}>
                        <Select defaultValue={"numberinput"} value={props.currentQuestionType} onChange={(e) => handleQuestionTypeChange(e)}>
                            <SelectTrigger>
                                <SelectPlaceholder>Choose questiontype</SelectPlaceholder>
                                <SelectValue />
                                <SelectIcon />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectListbox>
                                    <For each={["multiplechoice", "singlechoice", "correctorder", "numberinput", "gaptext"]}>
                                        {item => (
                                            <SelectOption value={item}>
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
                <Text style={{ margin: "1em" }}>Question:</Text>
                <InputGroup>
                    <Input onkeyup={(e) => handleQuestionOnchange(e)} placeholder="Type your question..." value={props.modalQuestion() !== null ? props.modalQuestion().question : ""} />
                </InputGroup>
            </div>
            <div>
                <Text style={{ margin: "1em" }}><b>Number</b> of the correct answers:</Text>
                <Input placeholder="Numbers devided by comas" value={props.modalQuestion() !== null ? props.modalQuestion().correctAnswer : null} onkeyup={(e) => handleCorrectAnswer(e)} />
            </div>
            <div>
                <Text style={{ margin: "1em" }}>Points for correct answer:</Text>
                <Input placeholder="Points" value={props.modalQuestion() !== null ? props.modalQuestion().point : ""} onkeyup={(e) => handleChangePoints(e)} />
            </div>

        </>
    );

}

export default NumberInput;