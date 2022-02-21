import { ReactElement, ReactNode } from 'react';

import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    Icon,
    GridItem,
    List,
    ListItem,
} from '@chakra-ui/react';

type AdvantagesSectionListData = {
    title: string;
    text: string;
    icon: any;
}

type AdvantagesSectionData = {
    image: string;
    sectionTitle: string;
    list: AdvantagesSectionListData[];
}

interface AdvantagesSectionProps {
    isReverseSectionContent?: boolean;
    data: AdvantagesSectionData;
}

export function AdvantagesSection({ isReverseSectionContent = false, data }: AdvantagesSectionProps) {
    return (
        <Container maxW={'8xl'}>
            <SimpleGrid columns={{ base: 1, lg: 2 }} row={{ base: 2, lg: 'auto' }} spacing={{ base: 24, lg: 12 }}>
                {isReverseSectionContent 
                ? (
                    <>
                        <GridItem colStart={{ base: 1, lg: 2 }}  rowStart={{ base: 1, lg: 1 }}>
                            <Flex alignItems='center' justifyContent='center' height='100%' p='4'>
                                <Image
                                    width={{ base: '80%', md: '75%' }}
                                    rounded={'md'}
                                    alt={'feature image'}
                                    src={data.image}
                                    objectFit={'cover'}
                                />
                            </Flex>
                        </GridItem>

                        <GridItem colStart={{ base: 1, lg: 1 }}  rowStart={{ base: 2, lg: 1 }}>
                            <Stack spacing='8'>
                                <Text
                                    textTransform={'uppercase'}
                                    color={'green.500'}
                                    fontWeight={600}
                                    fontSize={'sm'}
                                    bg='green.50'
                                    p={2}
                                    alignSelf={'flex-start'}
                                    rounded={'md'}
                                >
                                    {data.sectionTitle}
                                </Text>
                                
                                <List spacing='6'>
                                    {data.list.map(item => (
                                        <ListItem key={item.title} bg='blue.600' p='6' rounded='2xl'>
                                            <Stack display='flex'alignItems='center' direction='row' spacing={{ base: 0, md: '6' }}>
                                                <Flex borderRadius='md' display={{ base: 'none', md: 'flex' }} alignItems='center' justifyContent='center' color='blue.100' w={{ md: 10, lg: 12 }} h={10} >
                                                    <Icon as={item.icon} color='green.500' w={6} h={6}/>
                                                </Flex>
                                                <Stack spacing={1}>
                                                    <Heading color='green.500' fontSize={[18, 20, 22]}>{item.title}</Heading>
                                                    <Text color={'gray.400'} fontSize={{ base: 'sm', md: 'sm' }}> 
                                                        {item.text}
                                                    </Text>
                                                </Stack>
                                            </Stack>
                                        </ListItem>
                                    ))}
                                </List>
                            </Stack>
                        </GridItem>
                    </>
                ) 
                : (
                    <>
                        <GridItem>
                            <Flex alignItems='center' justifyContent='center' height='100%' p='4'>
                                <Image
                                    width={{ base: '80%', md: '75%' }}
                                    rounded={'md'}
                                    alt={'feature image'}
                                    src={data.image}
                                    objectFit={'cover'}
                                />
                            </Flex>
                        </GridItem>

                        <GridItem>
                            <Stack spacing='8'>
                                <Text
                                    textTransform={'uppercase'}
                                    color={'green.50'}
                                    fontWeight={600}
                                    fontSize={'sm'}
                                    bg='green.500'
                                    p={2}
                                    alignSelf={'flex-start'}
                                    rounded={'md'}
                                >
                                    {data.sectionTitle}
                                </Text>
                                
                                <List spacing='6'>
                                    {data.list.map(item => (
                                        <>
                                            <ListItem bg='blue.50' p='6' rounded='2xl'>
                                                <Stack display='flex'alignItems='center' direction='row' spacing={{ base: 0, md: '6' }}>
                                                    <Flex borderRadius='md' display={{ base: 'none', md: 'flex' }} alignItems='center' justifyContent='center' color='blue.100' w={{ md: 10, lg: 12 }} h={10} >
                                                        <Icon as={item.icon} color='blue.500' w={6} h={6}/>
                                                    </Flex>
                                                    <Stack spacing={1}>
                                                        <Heading color='green.500' fontSize={[16, 18]}>{item.title}</Heading>
                                                        <Text color='gray.600' fontSize={{ base: 'sm', md: 'sm' }}> 
                                                            {item.text}
                                                        </Text>
                                                    </Stack>
                                                </Stack>
                                            </ListItem>
                                        </>
                                    ))}
                                </List>
                            </Stack>
                        </GridItem>
                    </>
                )}
                
            </SimpleGrid>
        </Container>
    );
}