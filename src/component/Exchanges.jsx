import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { server } from './../index';
import { Container,HStack } from '@chakra-ui/react';
import Loader from '../component/Loader/Loader'
import ExchangeCard from './ExchangeCard';
import ErrorComponent from './ErrorComponent.jsx';

const Exchanges = ({col,boxcol}) => {
  const [exchanges, setExchanges] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    
  const fetchexchange= async()=>{
    try {
      const {data}=await axios.get(`${server}/exchanges`);
      setExchanges(data);
      setLoading(false);
      // console.log(data)
    } catch (error) {
      setLoading(false);
      setError(true);
     };
  }
  fetchexchange()
   
  }, []);
  if(error) return <ErrorComponent message={'error while fetching the data'}/>
  
  return (
    <Container maxW={"container.xl"} >
    {
      loading ? <Loader/> : <>
      <HStack  wrap={'wrap'} justifyContent={'space-between'}>
      {
        exchanges.map((i)=>(
          <ExchangeCard key={i.id} name={i.name} img={i.image} url={i.url} rank={i.trust_score_rank} boxcol={boxcol} col={col}/>
        ))
      }
      </HStack>
      </>
    }
    
    </Container>
  )
}

export default Exchanges