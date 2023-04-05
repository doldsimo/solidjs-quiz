import { Container } from "@hope-ui/solid"
import ProgressBar from "../ProgressBar/ProgressBar"

import { Show } from "solid-js"
import { useQuizData } from "../../../context/quizState"
import QuizHeader from "../QuizHeader/QuizHeader"
import QuizQuestion from "../QuizQuestion/QuizQuestion"
import QuizFooter from "../QuizFooter/QuizFooter"


const QuizContent = () => {
    const { progress, questionsSum, allowBackjumping, setCurrentPage, currentPage } = useQuizData();
    return (
        <>
            <br />
            <ProgressBar />
            <Container>
                <QuizHeader />
                <QuizQuestion />
                <QuizFooter />
            </Container>
        </>
    )
}


export default QuizContent