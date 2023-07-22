import { Button, Center, Box, Heading, Text, Select, SelectTrigger, SelectPlaceholder, SelectIcon, SelectValue, SelectContent, SelectListbox, SelectOption, SelectOptionText, SelectOptionIndicator, Textarea, createDisclosure, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalHeader, ModalBody, ModalFooter, Input, IconButton, Tooltip, Checkbox } from "@hope-ui/solid";

import { AiOutlineCloudDownload } from 'solid-icons/ai'
import { AiOutlinePlus } from 'solid-icons/ai'
import { For, Match, Show, Switch, createEffect, createSignal } from "solid-js";

import { AiOutlineInfoCircle, AiFillEdit, AiFillDelete } from 'solid-icons/ai'
import MultipleChoice from "../components/EditQestionType/MultipleChoice";
import SingleChoice from "../components/EditQestionType/SingleChoice";
import CorrectOrder from "../components/EditQestionType/CorrectOrder";
import NumberInput from "../components/EditQestionType/NumberInput";
import GapText from "../components/EditQestionType/GapText";


function QuizEditor() {

    const [quizData, setQuizData] = createSignal([{
        "question": "What are new JSX components that solidjs has out of the box compared to React?",
        "questionType": "multiplechoice",
        "answers": [
            "For",
            "Index",
            "All",
            "Switch",
            "Match"
        ],
        "correctAnswer": [
            true,
            true,
            false,
            true,
            true
        ],
        "point": "10"
    }]);


    const [modalQuestion, setModalQuestion] = createSignal({
        "question": "What are new JSX components that solidjs has out of the box compared to React?",
        "questionType": "multiplechoice",
        "answers": [
            "For",
            "Index",
            "All",
            "Switch",
            "Match"
        ],
        "correctAnswer": [
            true,
            true,
            false,
            true,
            true
        ],
        "point": "10"
    });
    const [modalQuestionAnswers, setModalQuestionAnswers] = createSignal([]);
    const [isEditing, setIsEditing] = createSignal(false);
    const [currentQuestionType, setCurrentQuestionType] = createSignal("multiplechoice");
    const [currentIndexQuestion, setCurrentIndexQuestion] = createSignal(-1);

    const { isOpen, onOpen, onClose } = createDisclosure();

    const handleDownloadJSON = () => {
        console.log("download JSON");
        const exampleJSON = {
            // title: "Test",
            questions: quizData()
        }
        download(JSON.stringify(exampleJSON), "quiz.json", "text/plain");
    }

    const download = (content, fileName, contentType) => {
        const a = document.createElement("a");
        const file = new Blob([content], { type: contentType });
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
    }

    const addNewQuestion = () => {
        setCurrentQuestionType("multiplechoice");
        onOpen();
    }


    const saveAndCloseModal = () => {
        onClose();
        console.log(modalQuestion());
        console.log(currentIndexQuestion());
        let newQuizData;
        // if quiz index -1 adding new question to the end of the questions array
        if (isEditing()) {
            let newData = quizData();
            console.log("newData: ", newData);
            newData[currentIndexQuestion()] = modalQuestion();

            newQuizData = [...newData];
            console.log("newQuizData: ", newQuizData);

            setIsEditing(false);
        } else {
            newQuizData = quizData().concat(modalQuestion());
        }
        setQuizData(newQuizData);
        // if (currentIndexQuestion() === -1) {

        // }
    }

    const deleteQuizQuestion = (index) => {
        console.log(index);
        let newQuestions = quizData().filter((_, i) => i !== index);
        setQuizData(newQuestions);
    }

    const handleEditing = (item, index) => {
        setCurrentIndexQuestion(index);
        setIsEditing(true);
        let getModalQuestion = quizData()[index];
        setModalQuestion(getModalQuestion);

        setCurrentQuestionType(getModalQuestion.questionType);
        onOpen();
    }

    return (
        <>
            <br />
            <Center>
                <Heading level={1} size={"3xl"}>Quiz editor</Heading>
                <div style={{ margin: "1em" }}>

                    <Tooltip withArrow label="This editor can be used to create a quiz which can be integrated in the quiz component. The output of this editor will be a JSON file which can also can be edited afterwards to make small changes">
                        <AiOutlineInfoCircle color="red" size={18} />
                    </Tooltip>
                </div>
            </Center>
            <br />
            <Switch>
                <Match when={quizData().length === 0}>
                    <Center>
                        <Button leftIcon={<AiOutlinePlus />} variant="outline" onclick={addNewQuestion}>Add question</Button>
                    </Center>
                </Match>
                <Match when={quizData().length !== 0}>
                    <Center>
                        <div>
                            <div>
                                <For each={quizData()}>
                                    {(item, index) => (
                                        <div value={item} style={{ "background-color": "lightgrey", "margin-bottom": "1em", padding: ".5em" }}>
                                            <Heading level={3} size={"base"}># {index() + 1}</Heading>
                                            <div style={{ display: "flex" }}>
                                                <div >
                                                    <Text>{item.question}</Text>
                                                    <Text style={{ color: "grey" }}>{item.questionType}</Text>
                                                </div>
                                                <IconButton style={{ "margin-right": "1em", "margin-left": "1em" }} colorScheme="warning" aria-label="Edit" icon={<AiFillEdit />} onClick={() => handleEditing(item, index())} />
                                                <IconButton style={{ "margin-right": "1em" }} colorScheme="danger" onClick={() => deleteQuizQuestion(index())} aria-label="Delete" icon={<AiFillDelete />} />
                                            </div>

                                        </div>
                                    )}
                                </For>
                            </div>
                            <Button leftIcon={<AiOutlinePlus />} variant="outline" onclick={addNewQuestion}>Add question</Button>
                            <br />
                            <br />
                            <Button leftIcon={<AiOutlineCloudDownload boxSize={18} />} onClick={() => handleDownloadJSON()}>Download your Quiz JSON</Button>
                        </div>
                    </Center>
                </Match>


                <Modal opened={isOpen()} onClose={() => { onClose(); isEditing() === true ? setIsEditing(false) : setIsEditing(true) }}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalCloseButton />
                        <ModalHeader>{isEditing() ? "Edit question" : "Add question"}</ModalHeader>
                        <ModalBody>
                            <div>
                                <Switch>
                                    <Match when={currentQuestionType() === "multiplechoice"}>
                                        <MultipleChoice modalQuestion={modalQuestion} modalQuestionAnswers={modalQuestionAnswers()} setModalQuestion={setModalQuestion} currentQuestionType={currentQuestionType()} setCurrentQuestionType={setCurrentQuestionType} isEditing={isEditing} setIsEditing={setIsEditing} />
                                    </Match>
                                    <Match when={currentQuestionType() === "singlechoice"}>
                                        <SingleChoice modalQuestion={modalQuestio} modalQuestionAnswers={modalQuestionAnswers()} setModalQuestion={setModalQuestion} currentQuestionType={currentQuestionType()} setCurrentQuestionType={setCurrentQuestionType} isEditing={isEditing} setIsEditing={setIsEditing} />
                                    </Match>
                                    <Match when={currentQuestionType() === "correctorder"}>
                                        <CorrectOrder modalQuestion={modalQuestion} modalQuestionAnswers={modalQuestionAnswers()} setModalQuestion={setModalQuestion} currentQuestionType={currentQuestionType()} setCurrentQuestionType={setCurrentQuestionType} isEditing={isEditing} setIsEditing={setIsEditing} />
                                    </Match>
                                    <Match when={currentQuestionType() === "numberinput"}>
                                        <NumberInput modalQuestion={modalQuestion} modalQuestionAnswers={modalQuestionAnswers()} setModalQuestion={setModalQuestion} currentQuestionType={currentQuestionType()} setCurrentQuestionType={setCurrentQuestionType} isEditing={isEditing} setIsEditing={setIsEditing} />
                                    </Match>
                                    <Match when={currentQuestionType() === "gaptext"}>
                                        <GapText modalQuestion={modalQuestion} modalQuestionAnswers={modalQuestionAnswers()} setModalQuestion={setModalQuestion} currentQuestionType={currentQuestionType()} setCurrentQuestionType={setCurrentQuestionType} isEditing={isEditing} setIsEditing={setIsEditing} />
                                    </Match>
                                </Switch>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={saveAndCloseModal}>Close and Save</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Switch>




        </>
    );
}

export default QuizEditor;
