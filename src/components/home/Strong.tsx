import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import React, { ReactNode } from 'react'

const Strong = ({children, link}: {children: ReactNode, link?: string}) => {

  return (
    <Box
      as="strong"
      fontWeight="normal"
      backgroundColor="#e3e1e1"
      padding="3px"
      color="#333333"
      borderRadius="4px"
      transition="background-color 0.3s"
      _hover={{
        backgroundColor: "#c1bfbf",
      }}
    >
      <Link href={link || ""}>
        {children}
      </Link>
    </Box>
  )
}

export default Strong