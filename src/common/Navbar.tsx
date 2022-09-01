import React from 'react'

const Navbar: React.FC<{ title: string, children:React.ReactNode }> = (props) => {
	
  return (
	  <div className='custom-breakpoint-container flex items-center justify-between flex-col sm:flex-col md:flex-row mt-5 border border-b-gray-500 py-3'>
		  <span className='text-lg text-[2rem] font-bold tracking-wider'>{props.title}</span>
		  <div className='flex gap-[5rem] flex-col sm:flex-col md:flex-row sm:gap-2 '>
			  {props.children}
		  </div>
	</div>
  )
}

export default Navbar