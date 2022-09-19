import React from 'react'
import { ProductProps } from '../../../common/Interfaces'


// TODO: Move prop here
 const ProductCard: React.FC<ProductProps> = ({ product, id, handleChange, isChecked}) => {



  return (
      <div className='flex items-start mt-3 shadow-md bg-white border border-gray-200 px-5 py-5 '>
        <input className='delete-checkbox mt-2' type="checkbox" onChange={(e)=>handleChange(e,product.sku )} checked={isChecked} id={id} value={product.sku} />
        <div className='flex items-start px-10 pt-5'>
          <ul className=''>
            <li>
              <span className='text-slate-900 text-lg tracking-wider font-semibold'>SKU: </span>
              <span>{product.sku}</span>
            </li>
            <li>
              <span className='text-slate-900 text-lg tracking-wider font-semibold'>Name: </span>
              <span>{product.name}</span>
            </li>
            <li>
              <span className='text-slate-900 text-lg tracking-wider font-semibold'>Price: $</span>
              <span>{product.price}</span>
          </li>
          
            {product.size === 0? null: (
              <li>
                <span className='text-slate-900 text-lg tracking-wider font-semibold'>Size(MB): </span>
                <span>{product.size}</span>
              </li>
            )}
            {product.weight === 0? null: (
              <li>
                <span className='text-slate-900 text-lg tracking-wider font-semibold'>Weight(KG): </span>
                <span>{product.weight}</span>
              </li>
            )}
            {product.height === 0? null: (
              <li>
                <span className='text-slate-900 text-lg tracking-wider font-semibold'>Height(CM): </span>
                <span>{product.height}</span>
              </li>
          )}
           {product.width === 0? null: (
              <li>
                <span className='text-slate-900 text-lg tracking-wider font-semibold'>Width(CM): </span>
                <span>{product.width}</span>
              </li>
            )}
             {product.width === 0? null: (
              <li>
                <span className='text-slate-900 text-lg tracking-wider font-semibold'>Length(CM): </span>
                <span>{product.width}</span>
              </li>
            )}

          </ul>
        </div>
      </div>
  )
}

export default ProductCard