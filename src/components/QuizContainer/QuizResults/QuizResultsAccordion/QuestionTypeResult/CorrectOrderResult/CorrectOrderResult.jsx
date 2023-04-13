
import { Box, Text } from "@hope-ui/solid";
import { useQuizData } from "../../../../../../context/quizState";
import styles from "./CorrectOrder.module.css";
import { Index } from "solid-js";

const CorrectOrder = (props) => {
    const { allUserAnswers } = useQuizData();

    return (
        <div>
            <Index each={props.question.correctAnswer}>
                {(answer, i) => (
                    <div class={styles.answerContainer}>
                        <Text>
                            {i + 1 + ": "}
                        </Text>
                        <Box class={props.question.correctAnswer[i] === allUserAnswers()[props.qIndex][i] ? styles.correctAnswer : styles.wrongAnswer}>
                            <Text>{answer()}</Text>
                        </Box>
                    </div>
                )}
            </Index>
        </div>
    )
}

export default CorrectOrder