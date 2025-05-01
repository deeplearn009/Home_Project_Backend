import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWishThunk } from '../../redux/reducers/wishSlice'
import Card from '../../components/card/Card'

const Wishlist = () => {

  const dispatch = useDispatch()

  const data = useSelector((state) => state.wish.wish)
  
  useEffect(() => {
    dispatch(getWishThunk())
  }, [])

  return (
    <div>
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        {data?.map(item => <Card item={item} btn={"wishlist"}/>)}
      </div>
    </div>
  )
}

export default Wishlist
