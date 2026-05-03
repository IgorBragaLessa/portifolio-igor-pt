import { StackCard } from "./style";
import { Text } from "@/styles/Text";
import { IconType } from "react-icons/lib";

interface StackProps {
  title: string;
  icon: string | IconType;
}

export const Stack = ({ title, icon }: StackProps): JSX.Element => {
  const isString = typeof icon === "string";

  return (
    <StackCard>
      <Text>{title}</Text>

      {isString ? (
        <img
          src={icon}
          alt={title}
          title={title}
          height="84px"
          width="84px"
        />
      ) : (
        (() => {
          const Icon = icon as IconType;
          return <Icon size={84} color="#868E96" />;
        })()
      )}
    </StackCard>
  );
};