import { Flex, Stack, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';


interface FeatureProps {
    title: string;
    text: string;
    icon: ReactElement;
}

export function FeatureItem({ title, text, icon }: FeatureProps) {
    return (
      <Stack spacing='4' bg='blue.600' p='8' borderRadius='xl'>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={'gray.100'}
          mb={1}>
          {icon}
        </Flex>
        <Stack spacing='1'>
            <Text color='green.500' fontWeight='bold' letterSpacing={.5}>{title}</Text>
            <Text color={'gray.400'}>{text}</Text>
        </Stack>
      </Stack>
    );
  };