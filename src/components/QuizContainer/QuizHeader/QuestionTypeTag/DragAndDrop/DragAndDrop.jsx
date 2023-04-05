import { Tag, TagLabel, TagLeftIcon } from '@hope-ui/solid'
import { AiOutlineDrag } from 'solid-icons/ai'

const DragAndDrop = () => {
    return (
        <Tag size="md">
            <TagLeftIcon as={AiOutlineDrag} />
            <TagLabel>Drag And Drop</TagLabel>
        </Tag>
    )
}

export default DragAndDrop