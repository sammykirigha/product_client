import React, { useEffect, useState } from 'react'
import Button from '../../../common/Button'
import { Product } from '../../../common/Interfaces'
import Navbar from '../../../common/Navbar'
import ProductCard from './ProductCard'

const productList = [
  {
    SKU: "2jkoiunb43059-89",
    name: "Clean Code",
    price: 300,
    weight: "2 Kg"
  },
  {
    SKU: "2jkoiu98trt59-89",
    name: "Desk",
    price: 300,
    dimension: "24x45x15"
  },
  {
    SKU: "2jkoihjkbrhgoirt59-89",
    name: "DVDCV",
    price: 300,
    size: "300 MB"
  },
  {
    SKU: "2jko3u943y7fh8trt59-89",
    name: "Desk",
    price: 300,
    dimension: "24x45x15"
  },
  {
    SKU: "2jko00409r34fj59-89",
    name: "ReactJs",
    price: 300,
    weight: "3 Kg"
  }
]



const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [ischeckedState, setIsCheckedState] = useState<boolean[]>(
    new Array(products.length).fill(true)
  )
  const [selectedProducts, setSelectedProducts] = useState<string[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, sku: string) => {
    if (e.target.checked) {
      setSelectedProducts(prev => ([...prev, sku]))
    } else {
      setSelectedProducts(prev => (prev.filter(item => item !== sku)))
    }
  }

  const onMassDelete = () => {
    setProducts(products.filter(product=> !selectedProducts.includes(product.SKU)))   
  }


  useEffect(() => {
    setProducts(productList)
  }, [])

  return (
    <div className='bg-gray-100 custom-breakpoint-container h-screen'>
      <Navbar title='Product List' >
        <Button text='add' type="button" to='/add-product' />
        <Button handleClick={onMassDelete} id='#delete-product-btn' text='massdelete' type="button" />
      </Navbar>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-3 px-3 gap-4'>
        {products?.map((product) => {
          return (
            <ProductCard product={product} key={product.SKU} handleChange={handleChange} id={product.SKU} />
          )
        })}
      </div>
    </div>
  )
}

export default ProductList