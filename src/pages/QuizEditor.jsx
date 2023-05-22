import { Button, Center, Box, Heading } from "@hope-ui/solid";

import { AiOutlineCloudDownload } from 'solid-icons/ai'
import { AiOutlinePlus } from 'solid-icons/ai'

function QuizEditor() {

    const handleDownloadJSON = () => {
        console.log("download JSON");
        const exampleJSON = {
            title: "Test",
            second: false
        }
        download(JSON.stringify(exampleJSON), "quiz.json", "text/plain");
    }

    const download = (content, fileName, contentType) => {
        const a = document.createElement("a");
        const file = new Blob([content], { type: contentType });
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
    }

    return (
        <>
            <br />
            <Center>
                <div>
                    <Heading level={1} size={"3xl"}>QuizEditor</Heading>
                    <Button leftIcon={<AiOutlinePlus />} variant="outline">Add new question</Button>
                    <br />
                    <br />
                    <Button leftIcon={<AiOutlineCloudDownload boxSize={18} />} onClick={() => handleDownloadJSON()}>Download your Quiz JSON</Button>
                </div>
            </Center>
        </>
    );
}

export default QuizEditor;