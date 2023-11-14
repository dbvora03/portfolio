import CurrentWork from '@/components/home/CurrentWork'
import Header from '@/components/home/Header'
import HomePageTitle from '@/components/home/HomePageTitle'
import Strong from '@/components/home/Strong'
import { Text, Flex } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex justifyContent="center">
      <Flex flexDirection={"column"} w="50%" gap={5}>
        <Header/>
        <HomePageTitle/>
        <CurrentWork/>
        <Text color="black" fontSize={18}>
          Previously, I contributed to building a non-custodial staking platform at ether.fi, 
          helped KPMG increase their presence in the NFT space, 
          and expanded test capabilities at Dropbase
        </Text>
        <Text color="black" fontSize={18}>
          Think I{"'"}d be a good addition to your team? Here{"'"}s my <Strong link="/Dhruv_Vora_Resume.pdf">resume</Strong> and <Strong link="mailto:dbvora03@gmail.com">email</Strong>
        </Text>
      </Flex>
    </Flex>
  )
}
