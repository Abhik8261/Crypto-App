import { Box,Image,Text} from '@chakra-ui/react'
import React from 'react'
import Typewriter from "typewriter-effect";
import Bit from './images/bit.jpg'
import { motion } from "framer-motion";
const Home = () => {
  return (
    <Box bg={'black'} w={'full'} h='90vh'>
       <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}>
          
      <Image w={'full'} h={'full'} objectFit={'contain'} src={'https://res.cloudinary.com/dqigf7rd4/image/upload/v1676828467/websites%20images/pngwing.com_2_yuj9gq.png'}  filter={"grayscale(1)"}/>
        </motion.div>
      <Text fontSize={'6xl'} textAlign={'center'} fontWeight={'thick'} color={'white'} mt={'-10'}>
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