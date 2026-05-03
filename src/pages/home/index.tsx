import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
} from "./style";

export const Home = (): JSX.Element => {
  const githubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}/portifolio-igor-pt`;

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
              />
              <Text type="heading2" color="grey4">
                Olá, meu nome é {userData.nameUser}
                <Text as="div" type="heading3" color="brand1">
                Eu amo criar e desenvolver projetos
                </Text>
              </Text>
            </Flex>

            <Text type="body1" color="grey2">
              Portfólio de projetos e tecnologias
            </Text>

            <HeaderButtonsArea>
              <Button type="primary" as="a" href="#projects">
                Ver projetos
              </Button>

              <Button as="a" type="outline" href={portfolioUrl}>
                Código fonte
              </Button>

              <Button as="a" type="circle" href={githubUrl}>
                <FaGithub />
              </Button>
            </HeaderButtonsArea>

            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>

      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text type="heading4" color="grey4">
                Meus projetos
              </Text>

              <Text type="body1" color="grey2">
                Projetos paralelos
              </Text>
            </ProjectsAreaSocialMediaMessage>

            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>

      <Contacts />
    </main>
  );
};