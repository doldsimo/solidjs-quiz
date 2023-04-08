import QuizContainer from "../components/QuizContainer/QuizContainer";
import quiz from "../resources/Quizes/02/quiz.json";

function Quiz() {

    return (
        <>
            <QuizContainer quiz={quiz}/>
        </>

    );
}

export default Quiz;