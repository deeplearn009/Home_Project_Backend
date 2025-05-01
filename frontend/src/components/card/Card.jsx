import React from 'react'
import styles from './Card.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBasketThunk, postBasketThunk } from '../../redux/reducers/basketSlice'
import { deleteWishThunk, postWishThunk } from '../../redux/reducers/wishSlice'

const Card = ({item, btn}) => {

  const dispatch = useDispatch()

  // const wishlist = useSelector(state => state.wish.wish)
  // const inWishlist = wishlist.some(wishItem => wishItem._id === item._id || wishItem.name === item.name)
  
  const addToBasket = (object) => {
    const data = {
      name : object.name,
      price: object.price,
      author: object.author,
      image: object.image,
      count: "0"
    };

    dispatch(postBasketThunk(data))
  }

  const addToWish = (object) => {
    // if (!inWishlist) {
      const data = {
        name: object.name,
        price: object.price,
        author: object.author,
        image: object.image,
      };
      dispatch(postWishThunk(data))
    // }
  }

  const deleteItem = (btn, id) => {
    if (btn === "basket") {
      dispatch(deleteBasketThunk(id))
    }

    if (btn === "wishlist") {
      dispatch(deleteWishThunk(id))
    }
  }


  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={item.image} alt="" />
      </div>
      <div className={styles.price}>
        <p>{item.name}</p>
        <p>{item.author}</p>
        <p>{item.price}</p>
        
        {btn == "home" ? <div className={styles.btn}><button onClick={() => {addToBasket(item)}}>Add to Basket</button> <button onClick={() => {addToWish(item)}}>Add to Wishlist</button></div>: "" }
        {btn == "basket" || btn == "wishlist" ? <button onClick={() => {deleteItem(btn, item._id)}}>Delete</button>: ""}
      </div>
    </div>
  )
}

export default Card
