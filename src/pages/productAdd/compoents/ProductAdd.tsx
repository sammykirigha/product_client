import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import Button from '../../../common/Button';
import InputField from '../../../common/InputField';
import Navbar from '../../../common/Navbar';

const ProductAdd: React.FC = () => {
  const navigate = useNavigate()
  const [selectedValue, setSelectedValue] = React.useState("")
  const [state, setState] = useState({
    name: "",
    price: "",
    sku: "",
    weight: "",
    size: "",
    width: 0,
    length: 0,
    height: 0
  })


  const saveProductHandler = () => {
      console.log("saving the product");
      navigate("/")
  }

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement> ) => {
    //  console.log(event.target.value);
     setSelectedValue(event.target.value)
  }

  console.log(selectedValue);
  
  
  return (
    <div className='custom-breakpoint-container'>
      <Navbar title='Product Add' >
         <Button text='Save' type="button"  handleClick={saveProductHandler}  />
			   <Button text='Cancel' type="button" to='/'  />
      </Navbar>
      <div id='product_form' className='flex flex-col'>
       <InputField label='SKU' type='text' name='SKU' placeholder='Enter SKU' left={5} />
       <InputField label='Name' type='text' name='name' placeholder='Enter Name' left={7} />
       <InputField label='Price ($)' type='text' name='price' placeholder='Enter Price'  left={6}/>
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
            <InputField label='Weight (KG)' type='number' name='weight' left={6} />
            <span className='text-slate-900 font-bold text-lg mt-5'>Please, provide weight in Kg</span>
          </div>
          
        ) : selectedValue === "Furniture" ? (
            <div className='flex flex-col'>
              <InputField label='Height (CM)' type='number' name='height' left={6} />
              <InputField label='Width (CM)' type='number' name='width' left={6} />
              <InputField label='Length (CM)' type='number' name='length' left={6} />
              <span className='text-slate-900 font-bold text-lg mt-5'>Please, provide dimension in HxWxL </span>
            </div>
             
          ) : selectedValue === "DVD" ? (
              <div className='flex flex-col'>
                <InputField label='Size (MB)' type='number' name='size' left={6} />
                <span className='text-slate-900 font-bold text-lg mt-5'>Please, provide disc space in MB</span>
              </div>
        ): null}
      </div>
  </div>
  )
}

export default ProductAdd;