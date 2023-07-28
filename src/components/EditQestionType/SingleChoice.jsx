import { Button, IconButton, Input, Select, SelectContent, SelectIcon, SelectListbox, SelectOption, SelectOptionIndicator, SelectOptionText, SelectPlaceholder, SelectTrigger, SelectValue, Text, Textarea, InputGroup } from "@hope-ui/solid";
import { AiFillDelete, AiOutlinePlus } from "solid-icons/ai";
import { For } from "solid-js";

function SingleChoice(props) {

    const addNewAnswer = () => {
        let prevState = props.modalQuestion();
        let newAnswers = props.modalQuestion().answers.concat("");
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
        // console.log(e.target.value);
        let prevState = props.modalQuestion();
        prevState.questionType = e;
        let newState = { ...prevState } //For reload, else its the safe reference so UI will not be updated
        props.setModalQuestion(newState);
    }


    return (
        <>
            {
                props.isEditing() ? null : <div style={{ display: "flex" }}>
                    <Text style={{ margin: "1em" }}>Questiontype:</Text>
                    <div style={{ width: "12em", margin: "1em" }}>
                        <Select defaultValue={"multiplechoice"} value={props.currentQuestionType} onChange={(e) => handleQuestionTypeChange(e)}>
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
                <Text style={{ margin: "1em" }}>Answer Options:</Text>
                <For each={props.modalQuestion() !== null ? props.modalQuestion().answers : []}>
                    {(item, index) => (
                        <div style={{ display: "flex", margin: "1em" }}>
                            <Text style={{ margin: "auto", "margin-right": ".5em" }}>{index() + 1}</Text>
                            <Input placeholder={index() + 1} size="md" value={item} />
                            <IconButton colorScheme="danger" aria-label="Delete" onclick={() => deleteAnswer(index())} icon={<AiFillDelete />} />
                        </div>
                    )}
                </For>
                {/* {props.modalQuestionAnswers} */}
                <Button leftIcon={<AiOutlinePlus />} variant="outline" onclick={addNewAnswer}>Add answer</Button>
            </div >
            <div>
                <Text style={{ margin: "1em" }}>Numbers of the correct answers: <br /><small>(Only one because of singele choice question)</small></Text>
                <Input placeholder="Numbers devided by comas" value={props.modalQuestion() !== null ? props.modalQuestion().correctAnswer.map((item, index) => item === true && index + 1).filter(item => item !== false) : null} />
            </div>
            <div>
                <Text style={{ margin: "1em" }}>Points per correct answer:</Text>
                <Input placeholder="Points" value={props.modalQuestion() !== null ? props.modalQuestion().point : ""} />
            </div>

        </>
    );

}

export default SingleChoice;