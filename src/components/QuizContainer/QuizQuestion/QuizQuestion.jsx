import { Switch } from "solid-js"
import SingleChoice from "./SingleChoice/SingleChoice";
import { useQuizData } from "../../../context/quizState";

const QuizQuestion = () => {
  const { currentQuestion } = useQuizData();
  return (
    <div style={{ "margin-bottom": ".7em" }}>
      <Switch>
        <Match when={currentQuestion().questionType === "singlechoice"}>
          <SingleChoice />
        </Match>
      </Switch>
    </div>
  )
}

export default QuizQuestion