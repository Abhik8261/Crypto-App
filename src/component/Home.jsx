import { Box,Image,Text} from '@chakra-ui/react'
import React from 'react'
import Bit from './images/bit.jpg'
const Home = () => {
  return (
    <Box bg={'black'} w={'full'} h='90vh'>
      <Image w={'full'} h={'full'} objectFit={'contain'} src={Bit}/>
      <Text fontSize={'6x1'} textAlign={'center'} fontWeight={'thin'} color={'whiteAlpha.700'} mt={'-20'}>Xcrypto</Text>
    </Box>
  )
}

export default Home