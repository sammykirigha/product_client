import React from 'react'
import Button from '../../../common/Button'
import Navbar from '../../../common/Navbar'

const ProductList = () => {
  return (
    <div>
      <Navbar title='Product List' >
         <Button text='add' type="button" to='/add-product'  />
			  <Button text='massdelete' type="button" to=''  />
      </Navbar>
      <div></div>
  </div>
  )
}

export default ProductList