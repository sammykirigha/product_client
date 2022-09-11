import React from 'react'

const Navbar: React.FC<{ title: string, children:React.ReactNode }> = (props) => {
	
  return (
	  <div className='custom-breakpoint-container !py-3 flex flex-col items-start sm:items-center md:flex-row md:items-center md:px-2 md:justify-between lg:items-center  border-b border-gray-400 '>
		  <span className='text-lg text-[2rem] font-bold tracking-wider'>{props.title}</span>
		  <div className='flex mt-5 md:mt-0 gap-3'>
			  {props.children}
		  </div>
	</div>
  )
}

export default Navbar