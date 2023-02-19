import React from 'react'
import { Image, VStack,Heading,Text } from '@chakra-ui/react'

const ExchangeCard = ({name,img,rank,url,boxcol,col}) => {
    
  return (
    <a href={url} target={'blank'}>

<VStack style={{background:`${boxcol}`,color:`${col}`}} w={'52'} shadow='lg' p={'8'} borderRadius={'lg'} transition='all 0.3s' m={'4'}
css={{
    "&:hover":{
        transform:'scale(1.1)',
    },
}}
>
<Image src={img} w='10' h={'10'} objectFit={'contain'} alt='Exchanges'/>
<Heading size={'md'} noOfLines={1} >
    {rank} 
   
</Heading>
<Text >
{name}
</Text>
</VStack>
    </a>
  )
}

export default ExchangeCard