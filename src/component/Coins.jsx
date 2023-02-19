import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './coins.css'
import { server } from './../index';
import { Container,HStack, RadioGroup,Radio } from '@chakra-ui/react';
import Loader from '../component/Loader/Loader'
import ErrorComponent from './ErrorComponent.jsx';
import CoinCard from './CoinCard';
import Pagination from 'react-responsive-pagination';

const Coins = ({col ,boxcol}) => {
  const [coins, setCoins] = useState()
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState('inr')
  const currencySymbol=currency==='inr'?'₹':currency==='eur'?'€':'$'
  
const changePage=(page)=>{
  setPage(page);
  setLoading(true);
}
const totalPages=123;

  useEffect(() => {
    
  const fetchCoins= async()=>{
    try {
      const {data}=await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
      setCoins(data);
      setLoading(false);
    
    } catch (error) {
      setLoading(false);
      setError(true);
     };
  }
  fetchCoins()
   
  }, [currency,page]);
 
  if(error) return <ErrorComponent message={'error while fetching the coins'}/>
  
  return (
    <Container maxW={"container.xl"}>
    {
      loading ? (<Loader/>) : <>

      <RadioGroup value={currency} onChange={setCurrency} p={'8'} style={{color:`${col}`}}>
        <HStack spacing={'4'}>
          <Radio value='inr'>INR</Radio> 
          <Radio value='usd'>USD</Radio>
          <Radio value='eur'>EUR</Radio>

        </HStack>
      </RadioGroup>

      <HStack  wrap={'wrap'} justifyContent={'space-evenly'}>
      {
        coins.map((i)=>(
          <CoinCard key={i.id} id={i.id} name={i.name} img={i.image} price={i.current_price} symbol={i.symbol} currencySymbol={currencySymbol} col={col} boxcol={boxcol}/>
        ))
      }
      </HStack>

<Pagination  total={totalPages}
      current={page}
      onPageChange={page =>changePage(page)}
>

</Pagination>

    
      </>
    }
    
    </Container>
  )
}



export default Coins