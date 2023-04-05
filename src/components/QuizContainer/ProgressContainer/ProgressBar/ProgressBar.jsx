import { Button, Progress, ProgressIndicator, ProgressLabel } from "@hope-ui/solid"
import { useQuizData } from "../../../../context/quizState";

const ProgressBar = () => {
  const { progress } = useQuizData();
  return (
    <>
      <Progress size="lg" height="1em" value={progress()} >
        <ProgressIndicator />
        <ProgressLabel />
      </Progress>
    </>
  )
}

export default ProgressBar