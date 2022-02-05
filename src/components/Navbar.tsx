import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';

import { NavLink } from './NavLink';

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Logo } from './Logo';

const Links = ['Home', 'Soluções', 'Parceiros', 'Sobre nós']

export function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <>
        <Box bg='rgba(0, 0, 0, .85)' px='2'>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'} maxW={'8xl'} width='100%' mx='auto'>
              <Logo />
              <HStack
              width='60%'
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </HStack>

              <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
          </Flex>
  
          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
      </>
    );
  }