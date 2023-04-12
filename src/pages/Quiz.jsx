import QuizContainer from "../components/QuizContainer/QuizContainer";
import quiz from "../resources/Quizes/04/quiz.json";

function Quiz() {

    return (
        <>
            <QuizContainer quiz={quiz}/>
        </>

    );
}

export default Quiz;