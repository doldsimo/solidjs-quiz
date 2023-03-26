import { Button } from "@hope-ui/solid";
import { AiFillPlayCircle } from "solid-icons/ai";

import styles from './QuizStartScreen.module.css';

const QuizStartScreen = () => {
    return (
        <div class={styles.container}>
            <Button rightIcon={<AiFillPlayCircle />} variant="outline" class={styles.startButton}>
                Start Quiz
            </Button>
        </div>
    )
}

export default QuizStartScreen;