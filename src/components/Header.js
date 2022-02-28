import React from 'react'
import Image from 'next/image'
import {SearchIcon, ShoppingCartIcon, MenuIcon} from '@heroicons/react/outline'
function Header() {
  return (
    <header className ='sticky'>
        {/* Top nav */}
        <div className = 'flex items-center bg-amazon_blue p-1 flex-grow py-2'>
            {/* Left heder Amazon image */}
            <div className = 'mt-2 flex items-center flex-grow sm:flex-grow-0'> 
            <Image 
             src = 'https://links.papareact.com/f90'
             width = {150}
             height = {40}
            //  layout = 'fill'
             objectFit = "contain"
             className = 'cursor-pointer '
            />    
            </div>
            {/* Search Bar */}
            <div className = ' hidden sm:flex  hover:bg-yellow-500 bg-yellow-400 items-center h-10 rounded-md flex-grow cursor-pointer'>
                <input type="text" className = 'outline-none p-2 h-full w-6 flex-grow flex-shrink rounded-l-md'/>
                <SearchIcon  className = 'h-12  p-4 rounded-r-lg '/>
            </div>
            {/* Right side */}
            <div className = 'flex text-white text-sm mx-4 space-x-7 items-center whitespace-nowrap'>
                <div className = 'link'>
                    <p>Hello, Yonatan Tesfaye</p>
                    <p className = ''>Account & list</p>
                </div>
                <div className = 'link'>
                    <p>Returns</p>
                    <p className = 'font-semibold text-lg'>& Orders</p>
                </div>
                <div className = 'link flex items-center '>
                    <div className = 'relative hover:animate-bounce'>
                    <ShoppingCartIcon className = 'w-12 ' />
                    <p className = ' absolute top-0 left-7 h-5 w-5 bg-yellow-400 text-black font-bold  rounded-full flex items-center justify-center'>10</p>
                    </div>
                    <p className = 'hidden sm:inline-flex mt-2 font-extrabold'>Cart</p>
                </div>
            </div>
        </div>
        {/* Bottom Nav */}
        <div className = 'flex bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6 whitespace-nowrap items-center'>
            <p className = 'link flex items-center'>
                <MenuIcon className = 'h-6 mr-1'/>
                All
            </p>
            <p className = 'link '>Prime Video</p>
            <p className = 'link '>Amazon Business</p>
            <p className = 'link '>Today's Deals</p>
            <p className = 'link hidden lg:inline-flex'>Electronics</p>
            <p className = 'link hidden lg:inline-flex'>Food & Grocery</p>
            <p className = 'link hidden lg:inline-flex'>prime</p>
            <p className = 'link hidden lg:inline-flex'>Buy Again</p>
            <p className = 'link hidden lg:inline-flex'>Shopper Toolkit</p>
            <p className = 'link hidden lg:inline-flex'>Health & Personal Care</p>
        </div>
    </header>
  )
}

export default Header