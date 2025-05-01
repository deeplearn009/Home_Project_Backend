import React, { useEffect } from 'react'
import styles from './Basket.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getBasketThunk } from '../../redux/reducers/basketSlice'
import Card from '../../components/card/Card'

const Basket = () => {

  const dispatch = useDispatch()

  const data = useSelector((state) => state.basket.basket)
  console.log(data);
  

  useEffect(() => {
    dispatch(getBasketThunk())
  }, [])
  
  return (
    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
      {data?.map(item => <Card item={item} btn={"basket"}/>)}
    </div>
  )
}

export default Basket
