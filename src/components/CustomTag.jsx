import { Tag, TagLabel } from '@chakra-ui/react'
export function CustomTag({ content, icon, bg, dark }) {
    return (
        <Tag
            className={`rounded flex py-1 px-2 items-center gap-1 font-medium`}
            bg={bg}
            textColor={dark ? '#000' : null}
        >
            {icon}
            <TagLabel>{content}</TagLabel>
        </Tag>
    )
}
