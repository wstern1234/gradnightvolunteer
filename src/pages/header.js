import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Button, Menu, MenuButton, MenuList, MenuItem, Center } from "@chakra-ui/react";
import gradNightLogo from './gradNightLogo.png';
import { HamburgerIcon } from '@chakra-ui/icons';
import './header.css';

const Header = (props) => {

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="#00e878"
      color="white"
      {...props}
    >    

      <Flex className = 'logoTitle' align="center" mr={5}>

        <Link to="/">
          <img
            className = 'logo'
            borderRadius = '50%'
            position = 'relative'
            width = '125px'
            margin = '-250px 0px'
            src = {gradNightLogo}
            alt = "site logo"
          />
        </Link>

        <Link to="/">
          <h1
          className='titleText'>
            Grad Night Volunteers
          </h1>
        </Link>
      </Flex>

      <Menu>
        <MenuButton
        as={Button}
        className = 'menuBtn'
        variant='outline'
        display={{ base: "block", lg: "none" }}>
          <HamburgerIcon />
        </MenuButton>
        <MenuList bgColor = '#00e878'>

          <Center>
            <Link to="/">
            
              <MenuItem _hover={{color: "#DCDCDC", bgColor: '#00e878'}}>Home</MenuItem>
            
            </Link>
          </Center>

          <Center>
            <Link to="/map">
            
              <MenuItem _hover={{color: "#DCDCDC", bgColor: '#00e878'}}>Map</MenuItem>
            
            </Link>
          </Center>
          <Center>
            <Link to="/emergency">
            
              <MenuItem _hover={{color: "#DCDCDC", bgColor: '#00e878'}}>Emergency</MenuItem>
            
            </Link>
          </Center>

        </MenuList>
      </Menu>



      <Box
        className = 'navButtons'
        width={{ sm: "full", md: "auto" }}
        alignItems="center">

        <Link to="/">
          <Button variant="ghost" _hover={{color: "#DCDCDC"}}>Home</Button>
        </Link>
        <Link to="/map">
          <Button variant="ghost" _hover={{color: "#DCDCDC"}}>Map</Button>
        </Link>
        <Link to="/emergency">
          <Button variant="ghost" _hover={{color: "#DCDCDC"}}>Emergency</Button>
        </Link>

      
      </Box>
    </Flex>
  );
};

export default Header;