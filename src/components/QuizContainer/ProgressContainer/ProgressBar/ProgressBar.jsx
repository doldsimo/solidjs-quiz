import { Button, Progress, ProgressIndicator, ProgressLabel } from "@hope-ui/solid"
import { useQuizData } from "../../../../context/quizState";

const ProgressBar = () => {
  const { progress, setProgress } = useQuizData();
  return (
    <>
      <Progress size="lg" height="3em" value={progress()} >
        <ProgressIndicator />
        <ProgressLabel />
      </Progress>
      <Button onClick={() => setProgress(progress() + 5)}>+5</Button>
    </>
  )
}

export default ProgressBar