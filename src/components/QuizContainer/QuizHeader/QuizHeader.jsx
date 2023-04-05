import { Tag, TagLabel, TagLeftIcon } from "@hope-ui/solid"

const QuizHeader = () => {
    return (
        <div>
            #: 
            <div>
                <Tag size="md">
                    {/* <TagLeftIcon as={IconPlus} /> */}
                    <TagLabel>Tag</TagLabel>
                </Tag>
            </div>
        </div>
    )
}

export default QuizHeader