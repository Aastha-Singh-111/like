import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import HeroSection from '../../components/heroSection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import Testimonial from '../../components/testimonial/Testimonial'
import Track from '../../components/track/Track'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/cartSlice'
function Home() {

  // const dispatch = useDispatch();
  // const cartItem = useSelector((state)=> state.cart)

  // console.log(cartItem)

  // const addCart = () => {
  //   dispatch(addToCart("shirt"));
  // }

  // const deleteCart = () => {
  //   dispatch(deleteFromCart("shirt"));
  // }

  return (
      <>
      <Layout>
      {/* <div>

      <button className='bg-gray-300 p-5' onClick={()=>addCart()}>Addd</button><br />
      <button className='bg-gray-300 p-5' onClick={()=>deleteCart()}>Dell</button>

      </div> */}
       <HeroSection/>
       <Filter/>
       <ProductCard/>
       <Track/>
       <Testimonial/>
      </Layout>

      </>
  )
}

export default Home