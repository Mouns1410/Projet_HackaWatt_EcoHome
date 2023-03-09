import React from 'react'
import Header from "./Header"
import iconHome from "./../img/iconHome.svg"
import Footer from "./Footer"

export default function acceuil() {
    return (
        <div className='h-screen w-screen bg-green-100 text-black'>
            <Header />
            <div className='h-8 flex items-center justify-center w-screen'>
                Vers une consommation maitrisée
            </div>
            <div className='w-screen h-[75%] bg-purple-300'>
                <div className='w-screen h-[55%] bg-yellow-100 flex items-center gap-3'>
                    <div className='h-[80%] w-1/2 bg-teal-500 flex flex-col gap-2 justify-center items-center'>
                        <div className="text-center radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value": "70", "--size": "9.5em",}}>
                            Conso du Jour
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex gap-1 items-center'>
                                <p className='text-lg'>kW</p>
                                <input type="checkbox" class="toggle toggle-success" />
                                <p className='text-xl'>€</p>
                            </div>
                            <div className='flex justify-center'>
                                <p>1047 kW</p>
                            </div>
                        </div>
                    </div>
                        <div className='h-[80%] w-1/2 bg-slate-400 flex justify-center items-center'>
                            <img src={iconHome} className="h-[180px] absolute" />
                            <p className='relative mb-12 text-center font-semibold text-3xl'>
                                My  
                                <br /> 
                                Home
                            </p>
                        </div>
                    </div>
                <div className='w-screen h-[47%] bg-red-600'>
                    <div className='w-screen h-[20%] flex justify-center items-center font-semibold text-xl'>
                        Les pièces
                    </div>
                    <div className='h-[80%] w-screen bg-green-600 flex justify-around items-center'>
                        <div className='border border-black h-[110px] w-[110px] flex justify-center items-center'>
                            <div className='border border-black h-[95px] w-[95px]'>
                            
                            </div>  
                        </div>
                        <div className='border border-black h-[110px] w-[110px] flex justify-center items-center'>
                            <div className='border border-black h-[95px] w-[95px]'>
                            
                            </div>  
                        </div> 
                        <div className='border border-black h-[110px] w-[110px] flex justify-center items-center'>
                            <div className='border border-black h-[95px] w-[95px] flex justify-center items-center'>
                                <span className='text-7xl mb-1'>+</span>
                            </div>  
                        </div> 
                    </div>
                </div>
                <div className='w-screen h-[56px]'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}
