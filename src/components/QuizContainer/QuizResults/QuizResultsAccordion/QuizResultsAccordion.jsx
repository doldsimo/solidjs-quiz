import { Switch, Match, createMemo } from "solid-js";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Center, Icon, Text } from "@hope-ui/solid";
import { useQuizData } from "../../../../context/quizState";
import styles from "./QuizResultsAccordion.module.css";
import SingleChoiceResult from "./QuestionTypeResult/SingleChoiceResult/SingleChoiceResult";
import MultipleChoiceResult from "./QuestionTypeResult/MultipleChoiceResult/MultipleChoiceResult";
import { AiFillCheckCircle, AiFillCloseCircle } from 'solid-icons/ai'
import { isMultipleChoiceCorrect, isSingleChoiceCorrect } from "../../../../helper/isQuestionCorrect";


const QuizResultsAccordion = () => {
    const { quiz, allUserAnswers } = useQuizData();

    createMemo(() => {
        console.log(quiz());
        console.log(allUserAnswers());
    });

    return (
        <div>
            <Accordion>
                <For each={quiz().questions}>
                    {(question, i) => (
                        <AccordionItem >
                            {/* {console.log("question: ", question)}
                            {console.log("question: ", question.correctAnswer)} */}
                            <h2>
                                <AccordionButton>
                                    <Switch>
                                        <Match when={question.questionType === "singlechoice"}>
                                            <Center style={{ "margin-right": "0.5em" }}>
                                                {isSingleChoiceCorrect(allUserAnswers()[i()], question.correctAnswer) ? <AiFillCheckCircle class={styles.correctAnswer} /> : <AiFillCloseCircle class={styles.wrongAnswer} />}
                                            </Center>
                                            <Text class={isSingleChoiceCorrect(allUserAnswers()[i()], question.correctAnswer) ? styles.correctAnswer : styles.wrongAnswer} flex={1} fontWeight="$medium" textAlign="start">
                                                #{i() + 1}: {question.question}
                                            </Text>
                                            <AccordionIcon />
                                        </Match>
                                        <Match when={question.questionType === "multiplechoice"}>
                                            <Center style={{ "margin-right": "0.5em" }}>
                                                {isMultipleChoiceCorrect(allUserAnswers()[i()], question.correctAnswer) ? <AiFillCheckCircle class={styles.correctAnswer} /> : <AiFillCloseCircle class={styles.wrongAnswer} />}
                                            </Center>
                                            <Text class={isMultipleChoiceCorrect(allUserAnswers()[i()], question.correctAnswer) ? styles.correctAnswer : styles.wrongAnswer} flex={1} fontWeight="$medium" textAlign="start">
                                                #{i() + 1}: {question.question}
                                            </Text>
                                            <AccordionIcon />
                                        </Match>
                                    </Switch>

                                </AccordionButton>
                            </h2>
                            <AccordionPanel>
                                <Switch>
                                    <Match when={question.questionType === "singlechoice"}>
                                        <SingleChoiceResult question={question} qIndex={i()} />
                                    </Match>
                                    <Match when={question.questionType === "multiplechoice"}>
                                        <MultipleChoiceResult question={question} qIndex={i()} />
                                    </Match>
                                </Switch>
                            </AccordionPanel>
                        </AccordionItem>
                    )
                    }
                </For>
            </Accordion>
            <br />
        </div>
    )
}

export default QuizResultsAccordion;