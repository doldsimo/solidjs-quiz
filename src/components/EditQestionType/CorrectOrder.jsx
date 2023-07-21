import { Button, IconButton, Input, Select, SelectContent, SelectIcon, SelectListbox, SelectOption, SelectOptionIndicator, SelectOptionText, SelectPlaceholder, SelectTrigger, SelectValue, Text, Textarea, InputGroup } from "@hope-ui/solid";
import { AiFillDelete, AiOutlinePlus } from "solid-icons/ai";
import { For } from "solid-js";

function CorrectOrder(props) {


    const addNewAnswer = () => {
        let newAnswers = props.modalQuestion.answers.concat("");
        props.setModalQuestion(prevState => ({
            ...prevState,
            answers: newAnswers
        }));
    }

    const deleteAnswer = (index) => {
        console.log(index);
        let newAnswers = props.modalQuestion.answers.filter((_, i) => i !== index);
        console.log(newAnswers);
        props.setModalQuestion(prevState => ({
            ...prevState,
            answers: newAnswers
        }));
    }

    const handleQuestionOnchange = (e) => {
        console.log("change");
        console.log(e.target.value);

    }

    return (
        <>

            <div style={{ display: "flex" }}>

                <Text style={{ margin: "1em" }}>Questiontype:</Text>
                <div style={{ width: "12em", margin: "1em" }}>
                    <Select defaultValue={"bla"} value={props.currentQuestionType} onChange={(e) => props.setCurrentQuestionType(e)}>
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
        </>
    );

}

export default CorrectOrder;