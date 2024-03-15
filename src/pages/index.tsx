import CurrentWork from '@/components/home/CurrentWork'
import Header from '@/components/home/Header'
import HomePageTitle from '@/components/home/HomePageTitle'
import Strong from '@/components/home/Strong'
import { Text, Flex } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex justifyContent="center">
      <Flex flexDirection={"column"} w={{base: "80%", lg: "50%"}} gap={5}>
        <Header/>
        <HomePageTitle/>
        <CurrentWork/>
        <Text color="black" fontSize={18}>
          Previously, I helped build ether.fi with early development, 
          increased KPMG{"'"}s their presence in the NFT space, 
          and expanded test capabilities at Dropbase
        </Text>
        <Text color="black" fontSize={18}>
          Best way to get a hold of me? Here{"'"}s my <Strong link="mailto:dbvora03@gmail.com">email</Strong>
        </Text>
      </Flex>
    </Flex>
  )
}
