import { createContext, createSignal, useContext } from "solid-js";

export const QuizContext = createContext();

export function QuizProvider(props) {
    const [progress, setProgress] = createSignal(0);            // Progress in % from the quiz
    const [questionsSum, setQuestionsSum] = createSignal(0);    // sum of all questions from the quiz

    return <QuizContext.Provider value={{ progress, setProgress, questionsSum, setQuestionsSum }}>
        {props.children}
    </QuizContext.Provider >
}

// Function for only one line import to import the state, so this function can be used to get access to the global state from the quiz:
export function useQuizData() {
    return useContext(QuizContext);
}