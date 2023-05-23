import { Button, Center, Box, Heading, Text, Select, SelectTrigger, SelectPlaceholder, SelectIcon, SelectValue, SelectContent, SelectListbox, SelectOption, SelectOptionText, SelectOptionIndicator, Textarea, createDisclosure, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalHeader, ModalBody, ModalFooter, Input, IconButton, Tooltip } from "@hope-ui/solid";

import { AiOutlineCloudDownload } from 'solid-icons/ai'
import { AiOutlinePlus } from 'solid-icons/ai'
import { For, Match, Show, Switch, createSignal } from "solid-js";
import { AiFillDelete } from 'solid-icons/ai'
import { AiOutlineInfoCircle } from 'solid-icons/ai'

function QuizEditor() {

    const [quizData, setQuizData] = createSignal([]);
    const [modalQuestion, setModalQuestion] = createSignal({
        question: "Test Q.",
        answers: [
            "For",
            "Index",
            "All",
            "Switch",
            "Match"
        ],
        correctAnswer: [
            true,
            true,
            false,
            true,
            true
        ],
        point: "10"
    });
    const [currentQestionType, setCurrentQestionType] = createSignal("multiplechoice");
    const [currentIndexQuestion, setCurrentIndexQuestion] = createSignal(-1);

    const { isOpen, onOpen, onClose } = createDisclosure();

    const handleDownloadJSON = () => {
        console.log("download JSON");
        const exampleJSON = {
            title: "Test",
            second: false
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
        setCurrentQestionType("multiplechoice");
        onOpen();
    }

    return (
        <>
            <br />
            <Center>
                <Heading level={1} size={"3xl"}>QuizEditor</Heading>
                <div style={{ margin: "1em" }}>

                    <Tooltip withArrow label="This editor can be used to create a quiz which can be integrated in the quiz component. The output of this editor will be a JSON file which can also can be edited afterwards to make small changes">
                        <AiOutlineInfoCircle color="red" />
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
                    <div>
                        <div>
                            <Heading level={3} size={"base"}># 1</Heading>
                        </div>
                        <Button leftIcon={<AiOutlinePlus />} variant="outline" onclick={addNewQuestion}>Add question</Button>
                        <br />
                        <br />
                        <Button leftIcon={<AiOutlineCloudDownload boxSize={18} />} onClick={() => handleDownloadJSON()}>Download your Quiz JSON</Button>
                    </div>
                </Match>


                <Modal opened={isOpen()} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalCloseButton />
                        <ModalHeader>Add Question</ModalHeader>
                        <ModalBody>
                            <div style={{ display: "flex" }}>
                                <Text style={{ margin: "1em" }}>Questiontype:</Text>
                                <div style={{ width: "12em", margin: "1em" }}>
                                    <Select defaultValue={"bla"} value={currentQestionType()} onChange={(e) => setCurrentQestionType(e)}>
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
                                <Textarea placeholder="Basic usage" value={modalQuestion() !== null ? modalQuestion().question : ""} />
                            </div>
                            <div>
                                <Switch>
                                    <Match when={currentQestionType() === "multiplechoice"}>
                                        <div>
                                            <Show
                                                when={modalQuestion() !== null}
                                            >
                                                <Text style={{ margin: "1em" }}>Answer Options:</Text>

                                                <For each={modalQuestion().answers}>
                                                    {(item, index) => (
                                                        <div style={{ display: "flex", margin: "1em" }}>
                                                            <Text style={{ margin: "auto", "margin-right": ".5em" }}>{index() + 1}</Text>
                                                            <Input placeholder={index() + 1} size="md" value={item} />
                                                            <IconButton colorScheme="danger" aria-label="Search" icon={<AiFillDelete />} />
                                                        </div>
                                                    )}
                                                </For>
                                            </Show>
                                            <Button leftIcon={<AiOutlinePlus />} variant="outline" >Add answer</Button>
                                        </div>
                                        <div>
                                            <Text style={{ margin: "1em" }}>Numbers of correct answers, devide with comas:</Text>
                                            <Input placeholder="Numbers devided by comas" value={modalQuestion() !== null ? modalQuestion().correctAnswer.map((item, index) => item === true && index + 1).filter(item => item !== false) : null} />
                                        </div>
                                        <div>
                                            <Text style={{ margin: "1em" }}>Points per correct answer:</Text>
                                            <Input placeholder="Points" value={modalQuestion() !== null ? modalQuestion().point : ""} />
                                        </div>


                                    </Match>
                                    <Match when={currentQestionType() === "singlechoice"}>
                                        <p>singlechoice</p>
                                    </Match>
                                    <Match when={currentQestionType() === "correctorder"}>
                                        <p>correctorder</p>
                                    </Match>
                                    <Match when={currentQestionType() === "numberinput"}>
                                        <p>numberinput</p>
                                    </Match>
                                    <Match when={currentQestionType() === "gaptext"}>
                                        <p>gaptext</p>
                                    </Match>
                                </Switch>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={onClose}>Close and Save</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Switch>




        </>
    );
}

export default QuizEditor;