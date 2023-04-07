export default function getUserResultPoints(userAnswers, quiz) {
    // console.log(userAnswers);
    // console.log(quiz);
    let resultSum = 0;
    for (let i = 0; i < quiz.questions.length; i++) {
        let result = 0;
        switch (quiz.questions[i].questionType) {
            case "singlechoice":
                result = checkSingleChoiceQuestion(userAnswers[i], quiz.questions[i].correctAnswer, quiz.questions[i].point);
                break;
            case "multiplechoice":
                result = checkMultipleChoiceQuestion(userAnswers[i], quiz.questions[i].correctAnswer, quiz.questions[i].point);
                break;
            default:
                break;
        }
        resultSum = resultSum + result;
    }
    return resultSum;
}

// Helper functions for calculate user points

const checkSingleChoiceQuestion = (userAnswer, quizAnswer, pointsForQuestion) => {
    let points = 0
    let numberUserAnswer = Number(userAnswer);
    let numberQuizAnswer = Number(quizAnswer);
    let numberPointsForQuestion = Number(pointsForQuestion);

    if (numberUserAnswer === numberQuizAnswer) {
        points = points + numberPointsForQuestion;
    }
    return points;
}

const checkMultipleChoiceQuestion = (userAnswer, quizAnswer, pointsForQuestion) => {
    let points = 0;
    let numberPointsForQuestion = Number(pointsForQuestion);

    for (let i = 0; i < userAnswer.length; i++) {
        if (userAnswer[i] === quizAnswer[i]) {
            points = points + numberPointsForQuestion;
        }
    }
    return points;
}