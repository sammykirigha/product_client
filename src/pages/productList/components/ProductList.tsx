import React, { FormEvent, useEffect, useState } from 'react'
import Button from '../../../common/Button'
import Navbar from '../../../common/Navbar';
import ProductCard from './ProductCard';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { fetchProductsData } from '../../../redux/actions';
import { baseUrl } from '../../../constants';
import { useNavigate } from 'react-router-dom';

const ProductList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate();
  const { products } = useSelector((state: RootState) => state.products);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, sku: string) => {
    if (e.target.checked) {
      setSelectedProducts(prev => ([...prev, sku]))
    } else {
      setSelectedProducts(prev => (prev.filter(item => item !== sku)))
    }
  }

  const onMassDelete = async (e: FormEvent) => {
    e.preventDefault()
    await Promise.all(selectedProducts.map(async product => {
      axios({
        method: "DELETE",
        url: `${baseUrl}/products/delete/${product}`,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(() => dispatch(fetchProductsData()))
    }))
    dispatch(fetchProductsData());
  }

  useEffect(() => {
    dispatch(fetchProductsData())
  }, [dispatch])

  return (
    <div className=''>
      <Navbar title='Product List' >
         <button
          id='add'
          type="button"
          onClick={() => navigate('/add-product')}
          className={`btn-primary shadow-lg   bg-[#0076CB] border-0 rounded-none hover:bg-[#0F46A7] `}
        >ADD</button>
        <button
          id='delete-product-btn'
          type="submit"
          onClick={onMassDelete}
          className={`btn-primary shadow-lg  bg-red-500 hover:bg-red-600`}
        >MASS DELETE</button>
      </Navbar>
      <div className="h-screen  overflow-auto slim-scrollbar">

        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-3 px-3 py-3 gap-3  '>
          {products?.map((product) => {
            return (
              <ProductCard product={product} key={product.sku} handleChange={handleChange} id={product.sku} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProductList