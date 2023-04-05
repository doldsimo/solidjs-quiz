
import { Tag, TagLabel, TagLeftIcon } from '@hope-ui/solid'
import { TbRelationOneToOne } from 'solid-icons/tb'

const RelatonQuestion = () => {
    return (
        <Tag size="md">
            <TagLeftIcon as={TbRelationOneToOne} />
            <TagLabel>Relations</TagLabel>
        </Tag>
    )
}

export default RelatonQuestion