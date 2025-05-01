import React, { useEffect } from 'react'
import styles from './Home.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getCardsThunk } from '../../redux/reducers/cardSlice'
import Card from '../../components/card/Card'

const Home = () => {

  const dispatch = useDispatch()

  const data = useSelector((state) => state.cards.cards)
  const loading = useSelector((state) => state.cards.loading)
  const error = useSelector((state) => state.cards.error)

  useEffect(() => {
    dispatch(getCardsThunk())
  }, [])


  return (
    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
      {data?.map(item => <Card item={item} btn={"home"}/>)}
    </div>
  )
}

export default Home
