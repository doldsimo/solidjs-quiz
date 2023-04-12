export function isSingleChoiceCorrect(userAnswer, correctAnswer) {
    if (userAnswer === null) {
        return false;
    }
    let isCorrect = true;
    if (Number(userAnswer) !== Number(correctAnswer)) {
        isCorrect = false;
    }
    return isCorrect;
}

export function isMultipleChoiceCorrect(userAnswer, correctAnswer) {
    let isCorrect = true;
    for (let i = 0; i < correctAnswer.length; i++) {
        if (correctAnswer[i] !== userAnswer[i]) {
            isCorrect = false;
        }
    }
    return isCorrect;
}

