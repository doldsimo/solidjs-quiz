import { useQuizData } from "../../../../../../context/quizState";

const MultipleChoiceResult = () => {
  const { allUserAnswers } = useQuizData();
  return (
    <div>MultipleChoiceResult</div>
  )
}

export default MultipleChoiceResult