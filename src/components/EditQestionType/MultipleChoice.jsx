import { Button, IconButton, Input, Select, SelectContent, SelectIcon, SelectListbox, SelectOption, SelectOptionIndicator, SelectOptionText, SelectPlaceholder, SelectTrigger, SelectValue, Text, Textarea, InputGroup } from "@hope-ui/solid";
import { AiFillDelete, AiOutlinePlus } from "solid-icons/ai";
import { For } from "solid-js";

function MultipleChoice(props) {


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
                    <Select defaultValue={"bla"} value={props.currentQestionType} onChange={(e) => setCurrentQestionType(e)}>
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
            <div style={{ display: "flex" }}>
                <Text style={{ margin: "1em" }}>Question:</Text>
                <InputGroup> 
                    <Input placeholder="Type your question..." value={props.modalQuestion !== null ? props.modalQuestion.question : ""} onChange={(e) => handleQuestionOnchange(e)} />
                    <Input type="number"placeholder="Your answer (Number)" onChange={(e) => console.log(e)}  />
                </InputGroup>
            </div>
            <div>
                <Text style={{ margin: "1em" }}>Answer Options:</Text>
                <For each={props.modalQuestion !== null ? props.modalQuestion.answers : []}>
                    {(item, index) => (
                        <div style={{ display: "flex", margin: "1em" }}>
                            <Text style={{ margin: "auto", "margin-right": ".5em" }}>{index() + 1}</Text>
                            <Input placeholder={index() + 1} size="md" value={item} />
                            <IconButton colorScheme="danger" aria-label="Delete" onclick={() => deleteAnswer(index())} icon={<AiFillDelete />} />
                        </div>
                    )}
                </For>
                {props.modalQuestionAnswers}
                <Button leftIcon={<AiOutlinePlus />} variant="outline" onclick={addNewAnswer}>Add answer</Button>
            </div>
            <div>
                <Text style={{ margin: "1em" }}>Numbers of correct answers, devide with comas:</Text>
                <Input placeholder="Numbers devided by comas" value={props.modalQuestion !== null ? props.modalQuestion.correctAnswer.map((item, index) => item === true && index + 1).filter(item => item !== false) : null} />
            </div>
            <div>
                <Text style={{ margin: "1em" }}>Points per correct answer:</Text>
                <Input placeholder="Points" value={props.modalQuestion !== null ? props.modalQuestion.point : ""} />
            </div>

        </>
    );

}

export default MultipleChoice;