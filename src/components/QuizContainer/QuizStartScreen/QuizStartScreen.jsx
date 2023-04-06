import { Button } from "@hope-ui/solid";
import { AiFillPlayCircle } from "solid-icons/ai";
import { useQuizData } from "../../../context/quizState";

import styles from './QuizStartScreen.module.css';

const QuizStartScreen = () => {
    const { navigateToQuizPage } = useQuizData();
    return (
        <div class={styles.container}>
            <Button rightIcon={<AiFillPlayCircle />} variant="outline" class={styles.startButton} onClick={() => navigateToQuizPage(1)}>
                Start Quiz
            </Button>
        </div>
    )
}

export default QuizStartScreen;