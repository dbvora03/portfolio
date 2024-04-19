import CurrentWork from "@/components/home/CurrentWork";
import Header from "@/components/home/Header";
import HomePageTitle from "@/components/home/HomePageTitle";
import Strong from "@/components/home/Strong";
import { Text, Flex } from "@chakra-ui/react";
import projects from "@/utils/projects.json";
import ProjectItem from "@/components/home/ProjectItem";

export default function Home() {
  return (
    <Flex justifyContent="center">
      <Flex flexDirection={"column"} w={{ base: "80%", lg: "50%" }} gap={5}>
        <Header />
        <HomePageTitle />
        <CurrentWork />
        <Text color="black" fontSize={16}>
          Best way to get a hold of me via{" "}
          <Strong link="mailto:dbvora03@gmail.com">email</Strong>
        </Text>
        <Flex justifyContent="center" my="5">
          <Flex flexDirection={"column"} gap={4} w="100%">
            <Text color="black" fontWeight="600" fontSize={20}>
              Some stuff i built
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
      </Flex>
    </Flex>
  );
}
