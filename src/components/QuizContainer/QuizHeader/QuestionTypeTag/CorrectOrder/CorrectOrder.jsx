import { Tag, TagLabel, TagLeftIcon } from '@hope-ui/solid'
import { RiEditorListOrdered } from 'solid-icons/ri'

const CorrectOrder = () => {
    return (
        <Tag size="md">
            <TagLeftIcon as={RiEditorListOrdered} />
            <TagLabel>Correct Order</TagLabel>
        </Tag>
    )
}

export default CorrectOrder