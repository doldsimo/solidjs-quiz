import { Tag, TagLabel, TagLeftIcon, Text } from "@hope-ui/solid"
import { useQuizData } from "../../../context/quizState";
import Multiplechoice from "./QuestionTypeTag/Multiplechoice/Multiplechoice";
import YesNo from "./QuestionTypeTag/YesNo/YesNo";
import CorrectOrder from "./QuestionTypeTag/CorrectOrder/CorrectOrder";
import DragAndDrop from "./QuestionTypeTag/DragAndDrop/DragAndDrop";
import RelatonQuestion from "./QuestionTypeTag/RelationQuestion/RelatonQuestion";


const QuizHeader = () => {
    const { currentPage } = useQuizData();
    return (
        <div>
            <Text>#: {currentPage()}</Text>

            <div>
                <Multiplechoice/>
                <YesNo/>
                <CorrectOrder/>
                <DragAndDrop/>
                <RelatonQuestion/>
               
            </div>
        </div>
    )
}

export default QuizHeader