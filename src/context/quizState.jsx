import { createContext, createSignal, useContext, createEffect } from "solid-js";

export const QuizContext = createContext();

export function QuizProvider(props) {
    const [progress, setProgress] = createSignal(0);            // Progress in % from the quiz
    const [questionsSum, setQuestionsSum] = createSignal(10);    // sum of all questions from the quiz
    const [currentPage, setCurrentPage] = createSignal(10);    // sum of all questions from the quiz  //-1 is for showng start page, 0 is the first Question 1, the seconde usw.
    const [allowBackjumping, setAllowBackjumping] = createSignal(true);    // set if it is allowed to jump back, true means it is allowed
    const [quizStyle, setQuizStyle] = createSignal("true");    // set quizstyle at the moment there are two styles: ("scroll" | "default") 


    createEffect(() => {
        console.log("Current Page", currentPage());
      });

    return <QuizContext.Provider value={{ progress, setProgress, questionsSum, setQuestionsSum, allowBackjumping, setAllowBackjumping, currentPage, setCurrentPage }}>
        {props.children}
    </QuizContext.Provider >
}

// Function for only one line import to import the state, so this function can be used to get access to the global state from the quiz:
export function useQuizData() {
    return useContext(QuizContext);
}