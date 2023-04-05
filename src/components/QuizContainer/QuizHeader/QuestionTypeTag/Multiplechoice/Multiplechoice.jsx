import { Tag, TagLabel, TagLeftIcon } from '@hope-ui/solid'
import { FiMoreHorizontal } from 'solid-icons/fi'

const Multiplechoice = () => {
    return (
        <Tag size="md">
            <TagLeftIcon as={FiMoreHorizontal} />
            <TagLabel>Multiple Choice</TagLabel>
        </Tag>
    )
}

export default Multiplechoice