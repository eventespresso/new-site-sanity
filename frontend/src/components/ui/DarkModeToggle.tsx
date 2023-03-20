import { IconButton, useColorMode } from '@chakra-ui/react'
import { FaMoon, FaSun } from "react-icons/fa";

export const DarkModeToggle: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      rounded="full"
      aria-label="change theme"
      size="xs"
      onClick={toggleColorMode} icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
    />
  );
}
