import { Tag, TagLabel, TagLeftIcon } from "@hope-ui/solid";
import { OcDotfill3 } from 'solid-icons/oc'

const SingleChoiceQuestion = () => {
    return (
        <Tag size="md">
            <TagLeftIcon as={OcDotfill3} />
            <TagLabel>Single Choice Question</TagLabel>
        </Tag>
    )
}

export default SingleChoiceQuestion;