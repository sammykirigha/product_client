import React from 'react'
import {useNavigate} from "react-router-dom"
import Button from '../../../common/Button';
import Navbar from '../../../common/Navbar';

const ProductAdd = () => {
  const navigate = useNavigate()


  const saveProductHandler = () => {
      console.log("saving the product");
      navigate("/")
      
  }
  return (
    <div>
      <Navbar title='Product Add' >
         <Button text='Save' type="button"  handleClick={saveProductHandler}  />
			   <Button text='Cancel' type="button" to='/'  />
      </Navbar>
  </div>
  )
}

export default ProductAdd;