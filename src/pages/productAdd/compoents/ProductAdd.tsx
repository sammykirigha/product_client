import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import Button from '../../../common/Button';
import InputField from '../../../common/InputField';
import Navbar from '../../../common/Navbar';

const ProductAdd: React.FC = () => {
  const navigate = useNavigate()
  const [selectedValue, setSelectedValue] = React.useState("")
  const [sku, setSku] = useState("")
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [size, setSize] = useState("")
  const [weight, setWeight] = useState("")
  const [width, setWidth] = useState("")
  const [length, setLength] = useState("")
  const [height, setHeight] = useState("")

  const onSkuChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSku(event.currentTarget.value)
   
  }

    const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value)
    
  }

    const onPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.currentTarget.value)
   
  }

    const onSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSize(event.currentTarget.value)
    
  }
    const onWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWidth(event.currentTarget.value)
    
  }

    const onWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(event.currentTarget.value)
  }

    const onLengthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLength(event.currentTarget.value)
  }

    const onHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(event.currentTarget.value)
  }



  const handleSubmit = () => {
    console.log("saving the state", {name, price, sku, width, weight, height, length, size});
    // navigate("/")
    
  }
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement> ) => {
     setSelectedValue(event.currentTarget.value)
  }
  
  
  return (
    <div className='custom-breakpoint-container'>
      <Navbar title='Product Add' >
         <Button text='Save' type="button"  handleClick={handleSubmit}  />
			   <Button text='Cancel' type="button" to='/'  />
      </Navbar>
      <div id='product_form' className='flex flex-col'>
        <InputField label='SKU' type='text' name='SKU' placeholder='Enter SKU' left={5} value={sku } onChange={onSkuChange} />
       <InputField label='Name' type='text' name='name' placeholder='Enter Name' left={7} value={name} onChange={onNameChange} />
       <InputField label='Price ($)' type='text' name='price' placeholder='Enter Price'  left={6} value={price} onChange={onPriceChange} />
      </div>
      <div className='mt-10 flex gap-5' id='productType'>
        <span> Type Switcher</span>
        <select className='outline' onChange={handleChange}>
          <option className='' >Select Type</option>
          <option className='' id='DVD' value="DVD" >DVD</option>
          <option className='' id='Furniture' value="Furniture">Funiture</option>
          <option className='' id='Book' value="Book">Book</option>
        </select>
      </div>
      <div>
        {selectedValue === "Book" ? (
          <div className='flex flex-col '>
            <InputField label='Weight (KG)' type='number' name='weight' left={6} value={weight} onChange={onWeightChange} />
            <span className='text-slate-900 font-bold text-lg mt-5'>Please, provide weight in Kg</span>
          </div>
          
        ) : selectedValue === "Furniture" ? (
            <div className='flex flex-col'>
              <InputField label='Height (CM)' type='number' name='height' left={6} value={height} onChange={onHeightChange} />
              <InputField label='Width (CM)' type='number' name='width' left={6} value={width} onChange={onWidthChange} />
              <InputField label='Length (CM)' type='number' name='length' left={6} value={length} onChange={onLengthChange} />
              <span className='text-slate-900 font-bold text-lg mt-5'>Please, provide dimension in HxWxL </span>
            </div>
             
          ) : selectedValue === "DVD" ? (
              <div className='flex flex-col'>
                <InputField label='Size (MB)' type='number' name='size' left={6} value={size} onChange={onSizeChange} />
                <span className='text-slate-900 font-bold text-lg mt-5'>Please, provide disc space in MB</span>
              </div>
        ): null}
      </div>
  </div>
  )
}

export default ProductAdd;