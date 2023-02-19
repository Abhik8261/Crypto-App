import { Box,Image,Text} from '@chakra-ui/react'
import React from 'react'
import Typewriter from "typewriter-effect";
import Bit from './images/bit.jpg'
const Home = () => {
  return (
    <Box bg={'black'} w={'full'} h='90vh'>
      <Image w={'full'} h={'full'} objectFit={'contain'} src={Bit}/>
      <Text fontSize={'6xl'} textAlign={'center'} fontWeight={'thick'} color={'white'} mt={'-20'}>
      <Typewriter options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: ["X-Crypto "],
            }}/></Text>
    </Box>
  )
}

export default Home