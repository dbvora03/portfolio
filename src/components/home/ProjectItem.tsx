import { Flex, Text, Box, Link } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { GoLinkExternal } from "react-icons/go"

const ProjectItem = ({description, title, link}: {description: string, title: string, link?: string}) => {
  
  console.log(link)
  return (
    <Flex flexDirection="column" gap={2}>
      <Flex alignItems={"center"} gap={2}>
        <Text color="black" fontWeight="600" fontSize={20}>
          {title}
        </Text>
        {link && <Link href={link}><GoLinkExternal color="black"/></Link>}
      </Flex>
      <Text color="black" fontWeight="500" fontSize={14}>
        {description}
      </Text>
      <Box bg="black" h="0.5px"  />
    </Flex>
  )
}

export default ProjectItem