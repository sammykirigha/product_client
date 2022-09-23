import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from "react-redux";

import Navbar from "../../../common/Navbar";
import Button from "../../../common/Button";
import { schema } from "../validation/ProductValidation";
import { AppDispatch, RootState } from "../../../store";
import { IFormInput } from "../../../common/Interfaces";
import { createProduct } from "../../../redux/actions";
import { useSelector } from "react-redux";

export default function ProductAdd() {

  const dispatch = useDispatch<AppDispatch>()
  const {message} = useSelector((state: RootState) => state.products);
  const navigate = useNavigate();

  const [selectedValue, setSelectedValue] = useState("")
  const [error, setError]= useState("")

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: IFormInput) => {
    const response = await dispatch(createProduct(data))
    if (response.payload !== 200) {
      setError(`An error occured...., try different sku`)
      setTimeout(() => {
       setError("")
      }, 3000)
    } else {
      navigate("/")
    }
  };
  

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.currentTarget.value)
  }

  return (
    <div className='h-screen'>
      <form id='product_form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)} >
        <div>
          <Navbar title='Product Add' >
            <Button text='Save' type="submit" />
            <Button text='Cancel' type="button" to='/' />
          </Navbar>
        </div>
        <div>
         {error &&  <div className="bg-red-300 w-fit flex mt-3 justify-center">
            <p className="py-2 px-5 text-lg font-[500]">{ error}</p>
          </div>}
          <div className=" mt-5 flex items-center  flex-row gap-x-4">
            <label
              className="text-lg  font-medium after:content-['*'] after:ml-0.5 after:text-red-500"
            >
              Sku
            </label>
            <div className={`relative flex-1}`}>
              <input
                {...register("sku")}

                id="sku"
                type="text"
                className="ml-10 w-[300px] h-[40px] rounded-md  placeholder:italic outline outline-gray-200 placeholder:text-slate-300 placeholder:pl-1 focus:border-blue-500 focus:ring-blue-500 "
              />
              <p className="bg-white pt-2 text-lg text-red-500 ml-10">{errors.sku?.message}</p>
            </div>
          </div>
          <div className=" mt-5 flex items-center  flex-row gap-x-4">
            <label
              className="text-lg  font-medium after:content-['*'] after:ml-0.5 after:text-red-500"
            >
              Name
            </label>
            <div className={`relative flex-1}`}>
              <input
                {...register("name")}
                id="name"
                type="text"
                className="ml-6 w-[300px] h-[40px] rounded-md  placeholder:italic outline outline-gray-200 placeholder:text-slate-300 placeholder:pl-1 focus:border-blue-500 focus:ring-blue-500 "
              />
              <p className="bg-white pt-2 text-lg text-red-500 ml-6">{ errors.name?.message}</p>
            </div>
          </div>
          <div className=" mt-5 flex items-center  flex-row gap-x-4">
            <label
              className="text-lg  font-medium after:content-['*'] after:ml-0.5 after:text-red-500"
            >
              Price ($)
            </label>
            <div className={`relative flex-1}`}>
              <input
                {...register("price")}

                id="price"
                type="text"
                className="ml-2 w-[300px] h-[40px] rounded-md  placeholder:italic outline outline-gray-200 placeholder:text-slate-300 placeholder:pl-1 focus:border-blue-500 focus:ring-blue-500 "
              />
              <p className="bg-white pt-2 text-lg text-red-500 ml-1">{errors.price?.message}</p>
            </div>
          </div>
        </div>

        <div className='mt-10 flex gap-5' id='productType'>
          <span> Type Switcher</span>
          <select className='outline' onChange={handleChange}>
            <option className='' >Select Type</option>
            <option className='' value="DVD" >DVD</option>
            <option className='' value="Furniture">Furniture</option>
            <option className='' value="Book">Book</option>
          </select>
        </div>

        <div>
          {selectedValue === "Book" ? (
            <div className='flex flex-col ' id='Book'>
              <div className=" mt-5 flex items-center  flex-row gap-x-4">
                <label
                  className="text-lg  font-medium after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  Weight (KG)
                </label>
                <div className={`relative flex-1}`}>
                  <input
                    {...register("weight")}

                    id='weight'
                    type='number'
                    className=" w-[300px] h-[40px] rounded-md  placeholder:italic outline outline-gray-200 placeholder:text-slate-300 placeholder:pl-1 focus:border-blue-500 focus:ring-blue-500 "
                  />
                <p className="bg-white pt-2 text-lg text-red-500 ml-1">{errors.weight?.message ? "weight is an interger and it is a required field": ""}</p>
                </div>
              </div>
              <span className='text-slate-900 font-bold text-lg mt-5'>Please, provide weight in Kg.</span>
            </div>

          ) : selectedValue === "Furniture" ? (
            <div className='flex flex-col' id='Furniture'>
              <div className=" mt-5 flex items-center  flex-row gap-x-4">
                <label
                  className="text-lg  font-medium after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  Height (CM)
                </label>
                <div className={`relative flex-1}`}>
                  <input
                    {...register("height")}

                    id='height'
                    type='number'
                    className=" w-[300px] h-[40px] rounded-md  placeholder:italic outline outline-gray-200 placeholder:text-slate-300 placeholder:pl-1 focus:border-blue-500 focus:ring-blue-500 "
                  />
                </div>
                <p>{errors.height?.message}</p>
              </div>
              <div className=" mt-5 flex items-center  flex-row gap-x-4">
                <label
                  className="text-lg  font-medium after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  Width (CM)
                </label>
                <div className={`relative flex-1}`}>
                  <input
                    {...register("width")}

                    id='width'
                    type='number'
                    className="ml-2 w-[300px] h-[40px] rounded-md  placeholder:italic outline outline-gray-200 placeholder:text-slate-300 placeholder:pl-1 focus:border-blue-500 focus:ring-blue-500 "
                  />
                </div>
                <p>{errors.width?.message}</p>
              </div>
              <div className=" mt-5 flex items-center  flex-row gap-x-4">
                <label
                  className="text-lg  font-medium after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  Length (CM)
                </label>
                <div className={`relative flex-1}`}>
                  <input
                    {...register("length")}

                    id='length'
                    type='number'
                    className="ml-1 w-[300px] h-[40px] rounded-md  placeholder:italic outline outline-gray-200 placeholder:text-slate-300 placeholder:pl-1 focus:border-blue-500 focus:ring-blue-500 "
                  />
                </div>
                <p>{errors.length?.message}</p>
              </div>
              <span className='text-slate-900 font-bold text-lg mt-5'>Please, provide dimension in HxWxL. </span>
            </div>

          ) : selectedValue === "DVD" ? (
            <div className='flex flex-col' id='DVD'>
              <div className=" mt-5 flex items-center  flex-row gap-x-4">
                <label
                  className="text-lg  font-medium after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  Size (MB)
                </label>
                <div className={`relative flex-1}`}>
                  <input
                    {...register("size")}

                    id='size'
                    type='number'
                    className=" w-[300px] h-[40px] rounded-md  placeholder:italic outline outline-gray-200 placeholder:text-slate-300 placeholder:pl-1 focus:border-blue-500 focus:ring-blue-500 "
                  />
                </div>
                <p>{errors.size?.message}</p>
              </div>
              <span className='text-slate-900 font-bold text-lg mt-5'>Please, provide disc space in MB.</span>
            </div>
          ) : null}
        </div>

      </form>
    </div>
  );
}