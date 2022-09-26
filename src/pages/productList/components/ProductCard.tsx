import React from 'react';
import { Product } from '../../../common/Interfaces';

interface IProductProps {
  product: Product;
  id?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>, sku: string) => void;
  isChecked?: boolean;
}

const ProductCard: React.FC<IProductProps> = ({ product, id, handleChange, isChecked }) => {
  return (
    <div className='flex items-start shadow-md overflow-x-hidden bg-white border border-gray-200 px-5 py-5 '>
      <input className='delete-checkbox mt-2' type="checkbox" onChange={(e) => handleChange(e, product.sku)} checked={isChecked} id={id} value={product.sku} />
      <div className='flex items-start px-5 pt-5'>
        <ul className='text-center'>
          <li className=''>
            <span >{product.sku}</span>
          </li>
          <li className=''>
            <span >{product.name}</span>
          </li>
          <li className=''>
            <span className='text-center'>{product.price}.00 $</span>
          </li>

          {product.size === 0 ? null : (
            <li>
              <span className='text-slate-900 text-lg tracking-wider font-[400]'>Size: </span>
              <span>{product.size} MB</span>
            </li>
          )}
          {product.weight === 0 ? null : (
            <li>
              <span className='text-slate-900 text-lg tracking-wider font-[400]'>Weight: </span>
              <span>{product.weight}KG</span>
            </li>
          )}
          {product.height === 0 && product.width === 0 && product.length === 0 ? null : (
            <li className=' flex justify-start items-end px-0 mx-0'>
              <span className='text-slate-900 text-lg tracking-wider font-[400]'>Dimension: </span>
              <span>{product.height}x{product.width}x{product.length}</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default ProductCard