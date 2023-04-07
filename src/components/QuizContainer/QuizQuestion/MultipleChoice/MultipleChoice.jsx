import { Box, Checkbox, HStack, Heading, Radio, RadioGroup, Text } from "@hope-ui/solid"
import { useQuizData } from "../../../../context/quizState";
import { createSignal } from "solid-js";
import styles from "./MultipleChoice.module.css";

const MultipleChoice = () => {
    const { currentQuestion } = useQuizData();

    const [checkedAnswers, setCheckedAnswers] = createSignal(Array.from({ length: currentQuestion().answers.length }, i => i = false));

    const setAnswer = (i) => {
        console.log("clicked");
        let newAnsArray = [...checkedAnswers()];
        newAnsArray[i] = !newAnsArray[i];
        setCheckedAnswers(newAnsArray);
    }

    return (
        <div>
            <Heading level="2" size="xl" my="$3">{currentQuestion().question}</Heading>
            <div>
                <Index each={currentQuestion().answers}>
                    {(answer, i) => (
                        <Box class={checkedAnswers()[i] === true ? `${styles.answerBox} ${styles.answerBoxActive}` : styles.answerBox} w="100%" p="$4" borderRadius="$md" onClick={() => setAnswer(i)}>
                            <Checkbox class={styles.radioButton} checked={checkedAnswers()[i]}><Text>{answer}</Text></Checkbox>
                        </Box>)}
                </Index>
            </div>
        </div>
    )
}

export default MultipleChoice;