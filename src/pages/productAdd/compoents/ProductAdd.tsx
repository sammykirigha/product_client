import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Navbar from "../../../common/Navbar";
import Button from "../../../common/Button";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

interface FormInput {
  sku: string;
  name: string;
  price: string;
  size: number;
  width: number;
  weight: number;
  height: number;
  length: number;
}

const schema = yup.object({
  sku: yup.string().required(),
  name: yup.string().required(),
  price: yup.string().required(),
  size: yup.number().positive().integer(),
  width: yup.number().positive().integer(),
  weight: yup.number().positive().integer(),
  height: yup.number().positive().integer(),
  length: yup.number().positive().integer(),
});

export default function ProductAdd() {
  const [selectedValue, setSelectedValue] = useState("")
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm<FormInput>({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: FormInput) => {
    const { sku, name, price, weight, width, height, length } = data
    try {
      axios.post("http://localhost/skuapi/index.php/products/create-product",
        { sku, name, price, weight, width, height, length }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      ).then(({ data }) => {
        // console.log("response data", data);
        if (data !== "") {
          alert("Uncaught Exception: Duplicate entry '368768hbjhbdksjh' for key 'UC_products'");
        } else {
          navigate("/")
        }

      })
    } catch (error) {
      console.log("catchec error", error);
    }

  };

  console.log("errore",errors);
  

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.currentTarget.value)
  }


  return (
    <div className='custom-breakpoint-container'>
      <form id='product_form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)} >
        <div>
          <Navbar title='Product Add' >
            <Button text='Save' type="submit" />
            <Button text='Cancel' type="button" to='/' />
          </Navbar>
        </div>
        <div>
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
                className="ml-1 w-[300px] h-[40px] rounded-md  placeholder:italic outline outline-gray-200 placeholder:text-slate-300 placeholder:pl-1 focus:border-blue-500 focus:ring-blue-500 "
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
              <span className='text-slate-900 font-bold text-lg mt-5'>Please, provide weight in Kg</span>
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
                    className=" w-[300px] h-[40px] rounded-md  placeholder:italic outline outline-gray-200 placeholder:text-slate-300 placeholder:pl-1 focus:border-blue-500 focus:ring-blue-500 "
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
                    className=" w-[300px] h-[40px] rounded-md  placeholder:italic outline outline-gray-200 placeholder:text-slate-300 placeholder:pl-1 focus:border-blue-500 focus:ring-blue-500 "
                  />
                </div>
                <p>{errors.length?.message}</p>
              </div>
              <span className='text-slate-900 font-bold text-lg mt-5'>Please, provide dimension in HxWxL </span>
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
              <span className='text-slate-900 font-bold text-lg mt-5'>Please, provide disc space in MB</span>
            </div>
          ) : null}
        </div>

      </form>
    </div>
  );
}