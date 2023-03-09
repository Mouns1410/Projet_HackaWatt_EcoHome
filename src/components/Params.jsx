import React from 'react'
import iconUserFooter from "./../img/iconUserFooter.svg"
import Footer from "./Footer"

// FAIRE DES HOVER

export default function Params() {
    return (
        <div className='Params h-screen w-screen bg-pink-100 text-black '>
            <div className='relative w-screen h-[70px] bg-blue-200 flex justify-center items-center'>
                <div className='absolute border border-black rounded-full p-7 top-7 flex justify-end items-center bg-white' >
                    <img className='h-[70px]' src={iconUserFooter} alt="" />
                </div>
            </div>
            <div className='mt-24 w-screen flex justify-center text-3xl'>
                Prénom &nbsp; Nom
            </div>
            <div className='w-screen flex justify-center text-lg mt-8'>
                <span className='font-bold'>ID : &nbsp;</span> Sarah Dominguez
            </div>
            <div className='w-screen flex justify-center text-lg mt-1'>
                <span className='font-bold'>N° Client : &nbsp;</span> 240284770328
            </div>
            <div className='mt-12 flex flex-col gap-5 justify-center items-center'>
                <button class="bg-white w-[50%] text-black font-semibold  py-2 px-4 border border-black rounded">
                    Mes données
                </button>
                <button class="bg-white w-[50%] text-black font-semibold  py-2 px-4 border border-black rounded">
                    Problèmes
                </button>
                <button class="bg-white w-[50%] text-black font-semibold  py-2 px-4 border border-black rounded">
                    Questions ? FAQ
                </button>
                <button class="bg-white w-[50%] text-black font-semibold  py-2 px-4 border border-black rounded">
                    Service Client
                </button>
            </div>
            <div className='w-screen h-[56px] mt-[46px]'>
                    <Footer />
                </div>
        </div>
    )
}
