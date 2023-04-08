import { Switch, createEffect, createSignal } from "solid-js"
import SingleChoice from "./SingleChoice/SingleChoice";
import { useQuizData } from "../../../context/quizState";
import MultipleChoice from "./MultipleChoice/MultipleChoice";

let counter = 0;

const QuizQuestion = () => {
  const { currentQuestion, currentPage } = useQuizData();

  const [helper, setHelper] = createSignal(true);


  // Two effects are needed when only same questionstype is used to trigger unmount method for saving results to
  // On every currentPage change this mehtod is fired wich is for unmount the Question type in the match method
  createEffect(() => {
    currentPage();
    setHelper(false);
    counter = 0;
  });
  // is triggered after helper() is changed. This Method changes the helper back, that Question type is mounted again
  createEffect(() => {
    helper()
    if (counter === 0) {
      setHelper(true);
    }
  });

  return (
    <div style={{ "margin-bottom": ".7em" }}>
      <Switch>
        <Match when={currentQuestion().questionType === "singlechoice"}>
          {helper() && <SingleChoice />}
        </Match>
        <Match when={currentQuestion().questionType === "multiplechoice"}>
          {helper() && <MultipleChoice />}

        </Match>
      </Switch>
    </div>
  )
}

export default QuizQuestion