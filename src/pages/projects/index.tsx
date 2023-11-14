import React, {useState} from 'react'
import { Text, Flex, Box, Avatar, Divider } from '@chakra-ui/react'
import Strong from '@/components/home/Strong'
import projects from "../../utils/projects.json"
import ProjectItem from '@/components/home/ProjectItem'
import Header from '@/components/home/Header'

const Projects = () => {

  const [selectedTab, setSelectedTab] = useState<string>("all")

  return (
    <Flex justifyContent="center">
      <Flex flexDirection={"column"} w="50%" gap={4}>
        <Header/>
        <Text color="black" fontWeight="600" fontSize={40}>
          Here{"'"}s some of my work
        </Text>
        {projects.map((item: any) => (
          <ProjectItem 
            description={item.description}
            link={item?.link}
            title={item.title}
            key={item.title}
          />
        ))}
      </Flex>
    </Flex>
  )
}

export default Projects