import { Icon, IconButton, type IconButtonProps, useColorMode } from '@chakra-ui/react'
import { FaMoon, FaSun } from "react-icons/fa";

interface toggleProps extends Omit<IconButtonProps, "aria-label"> {
  className: string;
}

export const DarkModeToggle = (props: toggleProps) => {
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
      icon={<Icon as={icon} color='yellow.500' />}
      onClick={toggleColorMode}
      size='sm'
      variant='ghost'
      _hover={{
        background: "yellow.900",
        color: "yellow.500",
      }}
      {...props}
    />
  );
}
