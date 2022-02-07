import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaLinkedin } from 'react-icons/fa';
  import { ReactNode } from 'react';
import { Logo } from './Logo';
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg='blackAlpha.100'
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{ color: 'whiteAlpha.600' }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export function Footer() {
    return (
      <Box
        bg='blue.600'
        color='gray.400'>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Logo />
          <Text>Av. Paulista, 1842 - conjunto 155 - CEP 01310-200 - Bela Vista - Sao Paulo/Sp</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Linkedin'} href={'https://br.linkedin.com/company/conteud'}>
              <FaLinkedin fontSize={25}/>
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }