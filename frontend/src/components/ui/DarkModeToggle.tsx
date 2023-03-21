import { Icon, IconButton, useColorMode } from '@chakra-ui/react'
import { FaMoon, FaSun } from "react-icons/fa";

export const DarkModeToggle: React.FC = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  let label = 'Switch to dark mode';
  let icon = FaMoon;

  if (colorMode === "dark") {
    label = 'Switch to light mode';
    icon = FaSun;
  }

  return (
    <IconButton
      aria-label={label}
      colorScheme='yellow'
      icon={<Icon as={icon} />}
      onClick={toggleColorMode}
      size='sm'
      variant='ghost'
      {...props}
    />
  );
}
