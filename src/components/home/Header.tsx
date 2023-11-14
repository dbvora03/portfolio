import { Avatar, Flex, Link } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <Flex justifyContent={"space-between"} my={5}>
      <Avatar as={Link} href="/" size='md' src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"/>
      <Flex color="black">
        <Link href="/projects">Projects</Link>
      </Flex>
    </Flex>
  )
}

export default Header