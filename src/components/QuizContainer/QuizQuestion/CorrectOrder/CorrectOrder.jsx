import { Box, Checkbox, Heading, Text,  } from "@hope-ui/solid";
import { useQuizData } from "../../../../context/quizState";
import { createSignal, onCleanup, onMount } from "solid-js";

import SortableVerticalList from './SortableVerticalList';

import styles from "./SortableVerticalList.module.css";


const CorrectOrder = () => {
    const { currentQuestion, allUserAnswers, currentPage } = useQuizData();
    const realPage = currentPage(); // herlping variable for using onMount and onCleanup mehtod with correct page

    const [checkedAnswers, setCheckedAnswers] = createSignal(Array.from({ length: currentQuestion().answers.length }, i => i = false));

    const setAnswer = (i) => {
        let newAnsArray = [...checkedAnswers()];
        newAnsArray[i] = !newAnsArray[i];
        setCheckedAnswers(newAnsArray);
    }


    onMount(() => {
        if (allUserAnswers()[realPage - 1] !== null) {
            setCheckedAnswers([...allUserAnswers()[realPage - 1]]);
        }
    });

    onCleanup(() => {
        allUserAnswers()[realPage - 1] = checkedAnswers();
    });

    return (
        <div>
            <Heading level="2" size="xl" my="$3">{currentQuestion().question}</Heading>
            <div>
                <SortableVerticalList items={currentQuestion().answers}/>
            </div>
        </div>
    )
}

export default CorrectOrder