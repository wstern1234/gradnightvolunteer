import React from 'react';
import NavBar from '../header';
import { Text, Center, UnorderedList, ListItem } from '@chakra-ui/react';

const home = () => {
  return (
    <div>
      <NavBar />

      <style>
      @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@900&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap');
      </style>
          
      <br />

      <div margin = 'auto 2%'>

        <Text fontSize='xl' color = '#0000FF' fontFamily = 'Nunito'>Emergency Numbers:</Text>

        <Center>
        
        <UnorderedList>
          <ListItem fontSize='sm' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Nunito'>Danville Police dept:</ListItem>
          <Text fontSize='xs' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>(NON emergency direct line after hours)</Text>
          <Text fontSize='xs' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>925-820-2144</Text>
        </UnorderedList>

        </Center>

        <br />
        <br />

        <Text fontSize='xl' color = '#0000FF' fontFamily = 'Nunito'>First Aid phone numbers:</Text>

        <Center>
        
        <UnorderedList>
          <ListItem fontSize='sm' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Nunito'>Gina Kuester</ListItem>
          <Text fontSize='xs' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>7:45pm-10:15pm</Text>
          <Text fontSize='xs' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>925-913-0017</Text>
          <br />
          <ListItem fontSize='sm' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Nunito'>Cam Lacey</ListItem>
          <Text fontSize='xs' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>10:15pm-2:45am</Text>
          <Text fontSize='xs' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>925-389-2649</Text>
        </UnorderedList>

        </Center>



      </div>

      <br />

    </div>
  )
};

export default home;