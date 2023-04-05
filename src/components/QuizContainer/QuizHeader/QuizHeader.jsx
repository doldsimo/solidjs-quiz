import { Tag, TagLabel, TagLeftIcon, Text } from "@hope-ui/solid"
import { useQuizData } from "../../../context/quizState";
import Multiplechoice from "./QuestionTypeTag/MultiplechoiceTag/MultiplechoiceTag";
import TrueFalseQuestion from "./QuestionTypeTag/TrueFalseTag/TrueFalseTag";
import CorrectOrder from "./QuestionTypeTag/CorrectOrderTag/CorrectOrderTag";
import DragAndDrop from "./QuestionTypeTag/DragAndDropTag/DragAndDropTag";
import RelatonQuestion from "./QuestionTypeTag/RelationTag/RelationTag";
import SingleChoiceQuestion from "./QuestionTypeTag/SingleChoiceTag/SingleChoiceQuestion";
import { Switch } from "solid-js";


const QuizHeader = () => {
    const { currentPage, currentQuestion } = useQuizData();

    return (
        <div>
            <Text>#{currentPage()}:</Text>

            <Switch>
                <Match when={currentQuestion().questionType === "singlechoice"}>
                    <SingleChoiceQuestion />
                </Match>
                <Match when={currentQuestion().questionType === "multiplechoice"}>
                    <SingleChoiceQuestion />
                </Match>
                <Match when={currentQuestion().questionType === "truefalsequestion"}>
                    <TrueFalseQuestion />
                </Match>
                <Match when={currentQuestion().questionType === "correctorder"}>
                    <CorrectOrder />
                </Match>
                <Match when={currentQuestion().questionType === "draganddrop"}>
                    <CorrectOrder />
                </Match>
                <Match when={currentQuestion().questionType === "relatonquestion"}>
                    <RelatonQuestion />
                </Match>
            </Switch>
        </div>
    )
}

export default QuizHeader