import { Container,Box,Button,HStack,RadioGroup,Radio,VStack,Text, Image,Stat,StatLabel, StatNumber, StatHelpText, StatArrow,Badge} from '@chakra-ui/react'
import React,{useState,useEffect} from 'react'
import Loader from './Loader/Loader';
import axios from 'axios';
import { server } from './../index';
import { useParams } from 'react-router-dom';
import ErrorComponent from './ErrorComponent';
import CustomBar from './CustomBar';
import Items from './Items';
import Chart from './Chart';

const CoinsDetails = ({col,boxcol}) => {
  const [coins, setCoins] = useState({})
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(false);
   const [currency, setCurrency] = useState('inr');
   const [days, setDays] = useState('24h');
   const [chartArray, setChartArray] = useState([])
   const currencySymbol=currency==='inr'?'₹':currency==='eur'?'€':'$'
   const params=useParams();
const btns=['24h' ,'7d','14d','30d','60d','200d','1Y','max']

const switchChartStats=(key)=>{
  switch (key) {
    case '24h':
      setDays('24h');
      setLoading(true);
      break;
    case '7d':
      setDays('7d');
      setLoading(true);
      break;
    case '14d':
      setDays('14d');
      setLoading(true);
      break;
    case '30d':
      setDays('30d');
      setLoading(true);
      break;
    case '60d':
      setDays('60d');
      setLoading(true);
      break;
    case '200d':
      setDays('200d');
      setLoading(true);
      break;
    case '1Y':
      setDays('365d');
      setLoading(true);
      break;
    case 'max':
      setDays('max');
      setLoading(true);
      break;
  
    default:
      setDays('24h');
      setLoading(true);
      break;
  }

}


  useEffect(() => {
    
    const fetchCoin= async()=>{
      try {

        const {data}=await axios.get(`${server}/coins/${params.id}`);
        const {data: chartData}=await axios.get(`${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`);
        
        setCoins(data);
        setChartArray(chartData.prices)
        setLoading(false);
      
      } catch (error) {
        setLoading(false);
        setError(true);
       };
    }
    fetchCoin()
     
    }, [params.id,currency,days]);

    if(error) return <ErrorComponent message={'error while fetching the coins'}/>
  return (
    <Container maxW={'container.xl'}>
      {
        loading ? <Loader/>:
          <>
          <Box w={'full'} borderWidth={1} style={{background:`${boxcol}`,color:`${col}`}}>
         
            <Chart arr={chartArray} days={days} currency={currencySymbol} col={col} boxcol={boxcol}/>
          </Box>
        <HStack p={'4'} overflowX={'auto'} >
          {
            btns.map((i)=>(
              <Button key={i} onClick={()=>{switchChartStats(i)}}>{i}</Button>
            ))
          }

        </HStack>

          <RadioGroup value={currency} onChange={setCurrency} p={'8'} style={{background:`${boxcol}`,color:`${col}`}}>
        <HStack spacing={'4'}>
          <Radio value='inr'>INR</Radio> 
          <Radio value='usd'>USD</Radio>
          <Radio value='eur'>EUR</Radio>

        </HStack>
      </RadioGroup>
      <VStack spacing={'4'} p='16' alignItems={'flex-start'} alignSelf='center' opacity={'0.7'} style={{background:`${boxcol}`,color:`${col}`}}>

        <Text fontSize={'small'}>
        Last Updated  on {Date(coins.market_data.last_updated).split("G")[0]}
        </Text>
        <Image src={coins.image.large} w={'16'} h={'16'} objectFit={'contain'}/>
        <Stat>
          <StatLabel>{coins.name}</StatLabel>
          <StatNumber>{currencySymbol}{coins.market_data.current_price[currency]}</StatNumber>
          <StatHelpText>
            <StatArrow type={coins.market_data.price_change_percentage_24h > 0 ? 'increase':'decrease'}/>
            {coins.market_data.price_change_percentage_24h}%
           
          </StatHelpText>

        </Stat>
          <Badge fontSize={'2xl'} bgColor={'blackAlpha.800'} color={'white'}>
            {`#${coins.market_cap_rank}`}
          </Badge>
          <CustomBar high={`${currencySymbol} ${coins.market_data.high_24h[currency]}`} low={`${currencySymbol} ${coins.market_data.low_24h[currency]}`}/>

          <Box w={'full'} p={'4'}  >
    
            <Items title={'Max Supply'} value={coins.market_data.max_supply}/>
            <Items title={'Circulating Supply'} value={coins.market_data.circulating_supply}/>
            <Items title={'Market Cap'} value={`${currencySymbol} ${coins.market_data.market_cap[currency]}`}/>
            <Items title={'All Time Low'} value={`${currencySymbol} ${coins.market_data.atl[currency]}`}/>
            <Items title={'All Time High'} value={`${currencySymbol} ${coins.market_data.ath[currency]}`}/>
          </Box>


      </VStack>
          </>

        
      }
    </Container>
  )
};

 

export default CoinsDetails