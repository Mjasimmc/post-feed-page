import React from 'react';
import logo from '../assets/headlogo.png'
import profileImage from '../assets/profileImage.jpg'
import PopUpPost from '../components/posts/PopUpPost';

const Header = () => {
    return (
        <header className="w-full pt-[26px]  px-[100px] flex justify-between items-center  bg-white   top-0 z-[50]">
            <img src={logo} className='h-[96px] w-[57px]  ' alt="" />
            <div className="flex gap-4">
                <button className='w-[207px] flex items-center h-[52px] rounded-[45px] bg-[#E7AD99] font-[500] text-[20px]  text-[#FFFFFF] '>
                    <img src={profileImage} className='aspect-square h-full rounded-[45px] w-[52px]' alt="" />
                   <span className='px-4'> Aysha Sunny</span>
                </button>
                <button className='w-[180px] h-[52px] rounded-[45px] bg-[#E7AD99] font-[500] text-[20px]  text-[#FFFFFF] '>logout</button>
            </div>
            <PopUpPost/>
        </header>
    );
}

export default Header;
