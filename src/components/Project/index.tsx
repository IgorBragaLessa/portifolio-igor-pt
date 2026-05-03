import {
  Project as ProjectWrapper,
  ProjectTitle,
  ProjectStack,
  ProjectStackTech,
  ProjectLink,
  ProjectLinks,
} from "./style";

import { Text } from "@/styles/Text";
import { useEffect, useState } from "react";
import { FaGithub, FaShare } from "react-icons/fa";
import { userData } from "@/utils/userData";

interface ReposType {
  id: number;
  name: string;
  language: string;
  description: string;
  html_url: string;
  homepage: string;
}

export const Project = (): JSX.Element => {
  const [repositories, setRepositories] = useState<ReposType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${userData.githubUser}/repos?sort=created&direction=desc`
        );

        const json = await response.json();

        if (Array.isArray(json)) {
          setRepositories(json);
        } else {
          setRepositories([]);
        }
      } catch (error) {
        console.error("Erro ao buscar repositórios:", error);
        setRepositories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Text color="grey2">Carregando projetos...</Text>;
  }

  return (
    <>
      {repositories.map((repository) => (
        <ProjectWrapper key={repository.id}>
          <ProjectTitle
            as="h2"
            type="heading3"
            css={{ marginBottom: "$3" }}
            color="grey4"
          >
            {repository.name}
          </ProjectTitle>

          <ProjectStack>
            <Text type="body2" color="grey2">
              Linguagem principal:
            </Text>

            <ProjectStackTech>
              <Text color="grey2" type="body2">
                {repository.language || "Não identificada"}
              </Text>
            </ProjectStackTech>
          </ProjectStack>

          <Text type="body1" color="grey2">
            {repository.description?.substring(0, 129) ||
              "Sem descrição disponível"}
          </Text>

          <ProjectLinks>
            <ProjectLink target="_blank" href={repository.html_url}>
              <FaGithub /> Código no Github
            </ProjectLink>

            {repository.homepage && (
              <ProjectLink target="_blank" href={repository.homepage}>
                <FaShare /> Ver demonstração
              </ProjectLink>
            )}
          </ProjectLinks>
        </ProjectWrapper>
      ))}
    </>
  );
};