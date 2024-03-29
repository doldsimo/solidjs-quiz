import { Button, IconButton, Input, Select, SelectContent, SelectIcon, SelectListbox, SelectOption, SelectOptionIndicator, SelectOptionText, SelectPlaceholder, SelectTrigger, SelectValue, Text, Textarea, InputGroup } from "@hope-ui/solid";
import { AiFillDelete, AiOutlinePlus } from "solid-icons/ai";
import { For, createSignal } from "solid-js";

function CorrectOrder(props) {
    const [correctAnswersIndexs, setCorrectAnswersIndexs] = createSignal(null);

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

    function setTrueValues(array1, array2) {
        for (const index of array2) {
            if (index >= 0 && index <= array1.length) {
                array1[index - 1] = true;
            }
        }
    }

    const handleCorrectQuestionChange = (e) => {
        const lastCharacter = e.target.value.slice(-1);
        if (e.target.value.length === 0 || lastCharacter === "," || lastCharacter === "0") {
        } else {
            // debugger;
            let prevState = props.modalQuestion();
            let answersArray = new Array(props.modalQuestion().answers.length).fill(""); // default all variables to false
            const numbersArray = e.target.value.split(",").map(Number);
            const allAnswers = props.modalQuestion().answers;
            setCorrectAnswersIndexs(numbersArray);

            // Fülle das answersArray mit den Werten aus allAnswers basierend auf den Positionen in numbersArray
            answersArray = numbersArray.map((position) => {
                const index = position - 1;
                if (index >= 0 && index < allAnswers.length) {
                    return allAnswers[index];
                } else {
                    return "";
                }
            });
            prevState.correctAnswer = answersArray;
            let newState = { ...prevState } //For reload, else its the safe reference so UI will not be updated
            props.setModalQuestion(newState);
        }
    }

    const handleChangePoints = (e) => {
        let prevState = props.modalQuestion();
        prevState.point = e.target.value;
        let newState = { ...prevState } //For reload, else its the safe reference so UI will not be updated
        props.setModalQuestion(newState);
    }

    const handleOneQuestionAnserChange = (index, e) => {
        let prevState = props.modalQuestion();
        prevState.answers[index] = e.target.value;
        // let newState = { ...prevState } //For reload, else its the safe reference so UI will not be updated
        // props.setModalQuestion(newState);
    }

    const showInputCorrectAnswer = () => {
        if (correctAnswersIndexs() !== null) {
            return correctAnswersIndexs();
        } else {
            let prevState = props.modalQuestion();

            const order = prevState.answers;
            const selectedOrder = prevState.correctAnswer
            // Finde die Indizes der Werte aus selectedOrder in der Reihenfolge von order
            if (Array.isArray(selectedOrder)) {
                const indexes = selectedOrder.map((value) => order.indexOf(value) + 1);
                const indexesString = indexes.join(",");
                setCorrectAnswersIndexs(indexesString);
                return indexesString;
                
            }
            return "";
        }
    }

    return (
        <>
            {
                props.isEditing() ? null : <div style={{ display: "flex" }}>
                    <Text style={{ margin: "1em" }}>Questiontype:</Text>
                    <div style={{ width: "12em", margin: "1em" }}>
                        <Select defaultValue={"correctorder"} value={props.currentQuestionType} onChange={(e) => handleQuestionTypeChange(e)}>
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
                <Text style={{ margin: "1em" }}>Question:</Text>
                <InputGroup>
                    <Input onkeyup={(e) => handleQuestionOnchange(e)} placeholder="Type your question..." value={props.modalQuestion() !== null ? props.modalQuestion().question : ""} />
                </InputGroup>
            </div>
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
                <Button leftIcon={<AiOutlinePlus />} variant="outline" onclick={addNewAnswer}>Add answer</Button>
            </div >
            <div>
                <Text style={{ margin: "1em" }}>Numbers of correct answers, in the correct order, devide with comas:</Text>
                <Input placeholder="Numbers devided by comas" value={showInputCorrectAnswer()} onkeyup={(e) => handleCorrectQuestionChange(e)} />
            </div>
            <div>
                <Text style={{ margin: "1em" }}>Points per correct answer:</Text>
                <Input placeholder="Points" value={props.modalQuestion() !== null ? props.modalQuestion().point : ""} onkeyup={(e) => handleChangePoints(e)} />
            </div>
        </>
    );

}

export default CorrectOrder;