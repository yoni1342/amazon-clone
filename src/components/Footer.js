import React from 'react'
import { faFacebook, faTelegram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <footer>
        <div className = 'bg-[#37465B] w-full h-9 text-white flex items-center justify-center text-sm p-5'>
            <p>Back to top</p>
        </div>
        <div className = 'bg-amazon_blue-light text-white grid grid-cols-1 gap-y-10 px-32 py-14 cursor-pointer md:grid-cols-2 lg:grid-cols-4'>
            <div className = 'space-y-4 text-sm '>
                <p className='text-lg font-bold'>Get to Know Us</p>
                <p className ='link'>Careers</p>
                <p className ='link'>Blog</p>
                <p className ='link'>About Amazon</p>
                <p className ='link'>Investor Relations</p>
                <p className ='link'>Amazon Devices</p>
                <p className ='link'>Amazon Science</p>
            </div>
            <div className = 'space-y-4 text-sm'>
                <p className='text-lg font-bold'>Make Money with Us</p>
                <p className ='link'>Sell products on Amazon</p>
                <p className ='link'>Sell on Amazon Business</p>
                <p className ='link'>Sell apps on Amazon</p>
                <p className ='link'>Become an Affiliate</p>
                <p className ='link'>Advertise Your Products</p>
            </div>
            <div className = 'space-y-4 text-sm'>
                <p className='text-lg font-bold'>Amazon Payment Products</p>
                <p className ='link'>Amazon Business Card</p>
                <p className ='link'>Shop with Points</p>
                <p className ='link'>Reload Your Balance</p>
                <p className ='link'>Amazon Currency Converter</p>
            </div>
            <div className = 'space-y-4 text-sm'>
                <p className='text-lg font-bold'>Let Us Help You</p>
                <p className ='link'>Amazon and COVID-19</p>
                <p className ='link'>Your Account</p>
                <p className ='link'>Your Orders</p>
                <p className ='link'>Shipping Rates & Policies</p>
                <p className ='link'>Returns & Replacements</p>
                <p className ='link'>Help</p>
            </div>
        </div>
        <div className = 'bg-amazon_blue-light text-white border-t border-amazon_blue px-32 py-10 grid grid-cols-2 items-center'>
        
            <p className = 'text-lg font-bold flex flex-grow'> &copy; Yonatan Tesfaye</p>
            <div className = 'flex space-x-4 flex-grow'>

                <a  href="https://www.facebook.com/yoni.tesfu.7">
                    <FontAwesomeIcon icon={faFacebook} className= 'w-8' />
                </a>
                <a href="https://t.me/Yonatan_Tesfaye">
                    <FontAwesomeIcon icon={faTelegram}  className = 'w-8'/>
                </a>
                <a href="https://github.com/yoni1342">
                    <FontAwesomeIcon icon={faGithub}  className = 'w-8'/>
                </a>
                <a href="https://www.linkedin.com/in/yonatan-tesfaye-8594211a8/">
                    <FontAwesomeIcon icon={faLinkedin}  className = 'w-8'/>            
                </a>
        </div>
        </div>
    </footer>
  )
}

export default Footer