import { ReactElement } from 'react';

import { AccordionButton, AccordionItem, AccordionPanel, Flex, Icon, List, ListItem, Stack, Text } from '@chakra-ui/react';

import { BsCheckCircleFill } from 'react-icons/bs';


interface SoluctionContainerProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
  panelContent: string[];
}

export function SoluctionContainer({ text, icon, iconBg, panelContent }: SoluctionContainerProps) {
  return (
    <AccordionItem>
          <AccordionButton>
              <Stack direction={'row'} align={'center'}>
                  <Flex
                      w={8}
                      h={8}
                      align={'center'}
                      justify={'center'}
                      rounded={'full'}
                      bg={iconBg}>
                      {icon}
                  </Flex>
                  <Text fontWeight={600}>{text}</Text>
              </Stack>
          </AccordionButton>

          <AccordionPanel pb={4}>
              <List spacing="2" my='2.5'>
                  {panelContent.map((text: string) => (
                      <ListItem key={text}>
                          <Stack direction='row' spacing='3' display='flex' alignItems='center'>
                            <Icon as={BsCheckCircleFill} color='green.500'/>
                            <Text>{text}</Text>
                          </Stack>
                      </ListItem>
                  ))}
              </List>
          </AccordionPanel>

      </AccordionItem>
  );
};
