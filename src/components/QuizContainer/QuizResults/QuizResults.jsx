import { Button } from "@hope-ui/solid"
import { useQuizData } from "../../../context/quizState";
import { createSignal, onMount } from "solid-js";
import getUserResultPoints from "../../../helper/result";

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
        console.log("Points: ", points);
        setPoints(points);

    })


    return (
        <div>
            <p>
                QuizResults
            </p>
            <p>
                Achived Points: 
                {points()}
            </p>

            <Button onClick={() => cleanQuiz()}>Back to start the Quiz again</Button>

        </div>
    )
}

export default QuizResults