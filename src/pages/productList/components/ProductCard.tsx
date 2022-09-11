import React from 'react'
import { ProductProps } from '../../../common/Interfaces'


// TODO: Move prop here
 const ProductCard: React.FC<ProductProps> = ({ product, id, handleChange, isChecked}) => {



  return (
      <div className='flex items-start mt-3 shadow-md bg-white border border-gray-200 px-5 py-5 '>
        <input className='delete-checkbox mt-2' type="checkbox" onChange={(e)=>handleChange(e,product.SKU )} checked={isChecked} id={id} value={product.SKU} />
        <div className='flex items-start px-10 pt-5'>
          <ul className=''>
            <li>
              <span className='text-slate-900 text-lg tracking-wider font-semibold'>SKU: </span>
              <span>{product.SKU}</span>
            </li>
            <li>
              <span className='text-slate-900 text-lg tracking-wider font-semibold'>Name: </span>
              <span>{product.name}</span>
            </li>
            <li>
              <span className='text-slate-900 text-lg tracking-wider font-semibold'>Price: $</span>
              <span>{product.price}</span>
            </li>
            {product.size && (
              <li>
                <span className='text-slate-900 text-lg tracking-wider font-semibold'>Size: </span>
                <span>{product.size}</span>
              </li>
            )}
            {product.weight && (
              <li>
                <span className='text-slate-900 text-lg tracking-wider font-semibold'>Weight: </span>
                <span>{product.weight}</span>
              </li>
            )}
            {product.dimension && (
              <li>
                <span className='text-slate-900 text-lg tracking-wider font-semibold'>Dimension: </span>
                <span>{product.dimension}</span>
              </li>
            )}

          </ul>
        </div>
      </div>
  )
}

export default ProductCard