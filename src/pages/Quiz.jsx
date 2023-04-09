import QuizContainer from "../components/QuizContainer/QuizContainer";
// import quiz from "../resources/Quizes/00/quiz.json";
import quiz from "../resources/Quizes/01/quiz.json";

function Quiz() {

    return (
        <>
            <QuizContainer quiz={quiz}/>
        </>

    );
}

export default Quiz;