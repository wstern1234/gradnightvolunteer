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

        <Text fontSize='xl' color = '#0000FF' fontFamily = 'Nunito'>Grad Night Chair Phone Numbers:</Text>

        <Center>
        
        <UnorderedList>
          <ListItem fontSize='sm' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Nunito'>Amy Vassel</ListItem>
          <Text fontSize='xs' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>Facilities: security, fencing, lighting, general</Text>
          <Text fontSize='xs' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>510-759-9139</Text>
          <br />
          <ListItem fontSize='sm' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Nunito'>Barbara Goodman</ListItem>
          <Text fontSize='xs' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>Facilities: security, fencing, lighting</Text>
          <Text fontSize='xs' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>925-260-8018</Text>
          <br />
          <ListItem fontSize='sm' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Nunito'>Michelle Storm</ListItem>
          <Text fontSize='xs' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>Design</Text>
          <Text fontSize='xs' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>925-895-1641</Text>
          <br />
          <ListItem fontSize='sm' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Nunito'>Patty Giammona</ListItem>
          <Text fontSize='xs' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>Design</Text>
          <Text fontSize='xs' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>925-548-4720</Text>
          <br />
          <ListItem fontSize='sm' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Nunito'>Nicole Tam</ListItem>
          <Text fontSize='xs' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>Food/Activities</Text>
          <Text fontSize='xs' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>512-466-2346</Text>
          <br />
          <ListItem fontSize='sm' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Nunito'>Kim Lonergan</ListItem>
          <Text fontSize='xs' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>Admin: Check in & out, volunteer check in, First Aid</Text>
          <Text fontSize='xs' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>510-333-4949</Text>
        </UnorderedList>

        </Center>

      </div>

      <br />

    </div>
  )
};

export default home;