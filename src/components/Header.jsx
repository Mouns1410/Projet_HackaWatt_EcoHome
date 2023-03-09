import React from 'react'
import Logo from "./../img/pngegg.png"

export default function Header() {
    return (
        <div className='Header w-screen h-[70px] bg-red-600 flex items-center border border-b-black'>
            <div className='h-[100%] w-[30%] flex justify-center items-center'>
                <img src={Logo} className="h-[75px]" />
            </div>
            <div className='h-[100%] w-[70%] flex items-center text-4xl'>
                EcoHome
            </div>
        </div>
    )
}
