import { Tag, TagLabel, TagLeftIcon, Text } from "@hope-ui/solid"
import { useQuizData } from "../../../context/quizState";
import Multiplechoice from "./QuestionTypeTag/Multiplechoice/Multiplechoice";
import TrueFalseQuestion from "./QuestionTypeTag/TrueFalseQuestion/TrueFalseQuestion";
import CorrectOrder from "./QuestionTypeTag/CorrectOrder/CorrectOrder";
import DragAndDrop from "./QuestionTypeTag/DragAndDrop/DragAndDrop";
import RelatonQuestion from "./QuestionTypeTag/RelationQuestion/RelatonQuestion";
import SingleChoiceQuestion from "./QuestionTypeTag/SingleChoiceQuestion/SingleChoiceQuestion";


const QuizHeader = () => {
    const { currentPage } = useQuizData();
    return (
        <div>
            <Text>#: {currentPage()}</Text>

            <div>
                <Multiplechoice/>
                <TrueFalseQuestion/>
                <CorrectOrder/>
                <DragAndDrop/>
                <RelatonQuestion/>
                <SingleChoiceQuestion/>
               
            </div>
        </div>
    )
}

export default QuizHeader