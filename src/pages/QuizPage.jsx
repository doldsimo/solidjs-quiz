import quiz from "../resources/Quizes/SolidJS/quiz.json";
import Quiz from "solid-quiz";

function QuizPage() {

    return (
        <>
            <br />
            <Quiz quiz={quiz}/>
        </>
    );
}

export default QuizPage;