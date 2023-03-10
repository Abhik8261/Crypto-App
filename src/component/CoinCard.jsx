import React from 'react'
import { Link } from 'react-router-dom';
import { Image, VStack,Heading,Text } from '@chakra-ui/react';

const CoinCard = ({name,img,symbol,price,id,currencySymbol='₹' ,col,boxcol}) => {
  return (
    <Link to={`/coin/${id}`} >

    <VStack w={'52'} shadow='lg' p={'8'} borderRadius={'lg'} transition='all 0.3s' m={'4'} style={{color:`${col}`,backgroundColor:`${boxcol}`}}
    css={{
        "&:hover":{
            transform:'scale(1.1)',
        },
    }}
    >
    <Image src={img} w='10' h={'10'} objectFit={'contain'} alt='Exchanges'/>
    <Heading size={'md'} noOfLines={1} style={{textTransform:'uppercase'}}>
        {symbol} 
        
    </Heading>
    <Text noOfLines={1}>{name}
    
    </Text>
    <Text noOfLines={1}>{price?`${currencySymbol}${price}`:'NA'}
    
    </Text>
    </VStack>
        </Link>
  )
}

export default CoinCard