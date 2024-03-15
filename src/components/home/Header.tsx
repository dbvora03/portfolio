import { Avatar, Flex, Link } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <Flex justifyContent={"space-between"} my={5}>
      <Avatar as={Link} href="/" size='md' src="/images/avatae.JPG"/>
      <Flex color="black" gap={3}>
        <Link href="/projects">Projects</Link>
        {/* <Link href="https://linkedin.com/in/d3vora">Linkedin</Link> */}
        <Link href="https://github.com/dbvora03">Github</Link>
      </Flex>
    </Flex>
  )
}

export default Header