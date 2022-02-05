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

interface AdvantagesSectionProps {
    isReverseSectionContent?: boolean;
}

export function AdvantagesSection({ isReverseSectionContent = false }: AdvantagesSectionProps) {
    return (
        <Container maxW={'8xl'}>
            <SimpleGrid columns={{ base: 1, lg: 2 }} row={{ base: 2, lg: 'auto' }} spacing={{ base: 36, lg: 12}}>
                {isReverseSectionContent 
                ? (
                    <>
                        <GridItem colStart={{ base: 1, lg: 2 }}  rowStart={{ base: 1, lg: 1 }}>
                            <Flex alignItems='center' justifyContent='center' height='100%' p='4'>
                                <Image
                                    width={{ base: '100%', md: '90%' }}
                                    rounded={'md'}
                                    alt={'feature image'}
                                    src='/background.svg'
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
                                Vantagens para o seu cliente
                            </Text>
                                
                                <List spacing='6'>
                                    <ListItem bg='blue.50' p='6' rounded='2xl'>
                                        <Stack display='flex'alignItems='center' direction='row' spacing={{ base: 0, md: '6' }}>
                                            <Flex borderRadius='md' display={{ base: 'none', md: 'flex' }} alignItems='center' justifyContent='center' bg='blue.100' color='blue.100' w={{ md: 10, lg: 12 }} h={10} >
                                                <Icon color='blue.500' w={5} h={5}/>
                                            </Flex>
                                            <Stack spacing={1}>
                                                <Heading color='green.500' fontSize={[18, 20, 22]}>ecommerce</Heading>
                                                <Text color='gray.600' fontSize={{ base: 'sm', md: 'md' }}> 
                                                    Os canais online elevam sua marca e inverte a curva do custo de marketing a longo prazo.
                                                </Text>
                                            </Stack>
                                        </Stack>
                                    </ListItem>

                                    <ListItem bg='blue.50' p='6' rounded='2xl'>
                                        <Stack display='flex'alignItems='center' direction='row' spacing={{ base: 0, md: '6' }}>
                                            <Flex borderRadius='md' display={{ base: 'none', md: 'flex' }} alignItems='center' justifyContent='center' bg='blue.100' color='blue.100' w={{ md: 10, lg: 12 }} h={10} >
                                                <Icon color='blue.500' w={5} h={5}/>
                                            </Flex>
                                            <Stack spacing={1}>
                                                <Heading color='green.500' fontSize={[18, 20, 22]}>ecommerce</Heading>
                                                <Text color='gray.600' fontSize={{ base: 'sm', md: 'md' }}> 
                                                    Os canais online elevam sua marca e inverte a curva do custo de marketing a longo prazo.
                                                </Text>
                                            </Stack>
                                        </Stack>
                                    </ListItem>

                                    <ListItem bg='blue.50' p='6' rounded='2xl'>
                                        <Stack display='flex'alignItems='center' direction='row' spacing={{ base: 0, md: '6' }}>
                                            <Flex borderRadius='md' display={{ base: 'none', md: 'flex' }} alignItems='center' justifyContent='center' bg='blue.100' color='blue.100' w={{ md: 10, lg: 12 }} h={10} >
                                                <Icon color='blue.500' w={5} h={5}/>
                                            </Flex>
                                            <Stack spacing={1}>
                                                <Heading color='green.500' fontSize={[18, 20, 22]}>ecommerce</Heading>
                                                <Text color='gray.600' fontSize={{ base: 'sm', md: 'md' }}> 
                                                    Os canais online elevam sua marca e inverte a curva do custo de marketing a longo prazo.
                                                </Text>
                                            </Stack>
                                        </Stack>
                                    </ListItem>
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
                                width={{ base: '100%', md: '90%' }}
                                rounded={'md'}
                                alt={'feature image'}
                                src='/background.svg'
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
                                Vantagens para o seu cliente
                            </Text>
                            
                            <List spacing='6'>
                                <ListItem bg='blue.600' p='6' rounded='2xl'>
                                    <Stack display='flex'alignItems='center' direction='row' spacing={{ base: 0, md: '6' }}>
                                        <Flex borderRadius='md' display={{ base: 'none', md: 'flex' }} alignItems='center' justifyContent='center' bg='gray.200' color='blue.100' w={{ md: 10, lg: 12 }} h={10} >
                                            <Icon color='green.500' w={5} h={5}/>
                                        </Flex>
                                        <Stack spacing={1}>
                                            <Heading color='green.500' fontSize={[18, 20, 22]}>ecommerce</Heading>
                                            <Text color={'gray.400'} fontSize={{ base: 'sm', md: 'md' }}> 
                                                Os canais online elevam sua marca e inverte a curva do custo de marketing a longo prazo.
                                            </Text>
                                        </Stack>
                                    </Stack>
                                </ListItem>

                                <ListItem bg='blue.600' p='6' rounded='2xl'>
                                    <Stack display='flex'alignItems='center' direction='row' spacing={{ base: 0, md: '6' }}>
                                        <Flex borderRadius='md' display={{ base: 'none', md: 'flex' }} alignItems='center' justifyContent='center' bg='gray.200' color='blue.100' w={{ md: 10, lg: 12 }} h={10} >
                                            <Icon color='green.500' w={5} h={5}/>
                                        </Flex>
                                        <Stack spacing={1}>
                                            <Heading color='green.500' fontSize={[18, 20, 22]}>ecommerce</Heading>
                                            <Text color={'gray.400'} fontSize={{ base: 'sm', md: 'md' }}> 
                                                Os canais online elevam sua marca e inverte a curva do custo de marketing a longo prazo.
                                            </Text>
                                        </Stack>
                                    </Stack>
                                </ListItem>

                                <ListItem bg='blue.600' p='6' rounded='2xl'>
                                    <Stack display='flex'alignItems='center' direction='row' spacing={{ base: 0, md: '6' }}>
                                        <Flex borderRadius='md' display={{ base: 'none', md: 'flex' }} alignItems='center' justifyContent='center' bg='gray.200' color='blue.100' w={{ md: 10, lg: 12 }} h={10} >
                                            <Icon color='green.500' w={5} h={5}/>
                                        </Flex>
                                        <Stack spacing={1}>
                                            <Heading color='green.500' fontSize={[18, 20, 22]}>ecommerce</Heading>
                                            <Text color={'gray.400'} fontSize={{ base: 'sm', md: 'md' }}> 
                                                Os canais online elevam sua marca e inverte a curva do custo de marketing a longo prazo.
                                            </Text>
                                        </Stack>
                                    </Stack>
                                </ListItem>
                            </List>
                        </Stack>
                    </GridItem>
                    </>
                )}
                
            </SimpleGrid>
        </Container>
    );
}