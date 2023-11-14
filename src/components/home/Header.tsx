import { Avatar, Flex, Link } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <Flex justifyContent={"space-between"} my={5}>
      <Avatar as={Link} href="/" size='md' src="/images/avatae.JPG"/>
      <Flex color="black">
        <Link href="/projects">Projects</Link>
      </Flex>
    </Flex>
  )
}

export default Header