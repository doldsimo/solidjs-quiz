import { Tag, TagLabel, TagLeftIcon } from '@hope-ui/solid'
import { AiOutlineCheck } from 'solid-icons/ai'
const YesNo = () => {
    return (
        <Tag size="md">
            <TagLeftIcon as={AiOutlineCheck} />
            <TagLabel>Yes/No</TagLabel>
        </Tag>
    )
}

export default YesNo