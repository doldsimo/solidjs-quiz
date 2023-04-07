import { Box, HStack, Heading, Radio, RadioGroup, Text } from "@hope-ui/solid"
import { useQuizData } from "../../../../context/quizState";
import { createSignal, onCleanup, onMount } from "solid-js";

import styles from './SingleChoice.module.css';

const SingleChoice = () => {
    const { currentQuestion, setAllUserAnswers, allUserAnswers, currentPage } = useQuizData();
    const realPage = currentPage(); // herlping variable for using onMount and onCleanup mehtod with correct page

    const [checkedAnswer, setCheckedAnswer] = createSignal(null);

    const setAnswer = (i) => {
        setCheckedAnswer(i);
    }

    onMount(() => {
        if (allUserAnswers()[realPage - 1] !== null) {
            setCheckedAnswer(allUserAnswers()[realPage - 1]);
        }
    })

    onCleanup(() => {
        // console.log("cleanup SC");
        allUserAnswers()[realPage - 1] = checkedAnswer();
        // console.log("new Answers: ", allUserAnswers());
    });

    return (
        <div>
            <Heading level="2" size="xl" my="$3">{currentQuestion().question}</Heading>
            <div>
                <Index each={currentQuestion().answers}>
                    {(answer, i) => (
                        <Box class={i === checkedAnswer() ? `${styles.answerBox} ${styles.answerBoxActive}` : styles.answerBox} w="100%" p="$4" borderRadius="$md" onClick={() => setAnswer(i)}>
                            <Radio class={styles.radioButton} checked={i === checkedAnswer()} variant="outline"><Text>{answer}</Text></Radio>
                        </Box>)}
                </Index>
            </div>
        </div>
    )
}

export default SingleChoice;