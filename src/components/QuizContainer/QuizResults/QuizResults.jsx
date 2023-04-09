import { Button, Container, Heading } from "@hope-ui/solid"
import { useQuizData } from "../../../context/quizState";
import { createSignal, onMount } from "solid-js";
import getUserResultPoints from "../../../helper/result";
import styles from './QuizResults.module.css';

const QuizResults = () => {
    const { setCurrentPage, setCurrentQuestion, setAllUserAnswers, quiz, allUserAnswers } = useQuizData();
    const [points, setPoints] = createSignal(0);

    const cleanQuiz = () => {
        setCurrentPage(0);
        setCurrentQuestion({});
        setAllUserAnswers(Array.from({ length: quiz().questions.length }, i => i = null));
        // setQuiz({});
    }

    onMount(() => {
        const points = getUserResultPoints(allUserAnswers(), quiz());
        console.log("output: ", points);
        setPoints(points);
    })


    return (
        <Container>
            <Heading level={1} size="xl">
                Results
            </Heading>
            <br />
            <p>
                You have achieved <b class={styles.achivedPoints}>{points().resultSum}</b> out of <b class={styles.allPoints}>{points().maxSum}</b> points.
            </p>

            <Button style={{ "margin": "auto" }}>Result informations</Button>
            <br />
            <Button style={{ "margin": "auto" }} onClick={() => cleanQuiz()}>Back to start the Quiz again</Button>

        </Container>
    )
}

export default QuizResults