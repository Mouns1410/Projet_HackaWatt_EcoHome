import React from 'react'
import { Link } from "react-router-dom"
import iconBaseFooter from "./../img/homeFooter.svg"
import iconAppsFooter from "./../img/appFooter.svg"
import iconGiftFooter from "./../img/giftFooter.svg"
import iconUserFooter from "./../img/iconUserFooter.svg"
import Logo from "./../img/pngegg.png"


export default function Footer() {
    return (
        <div className='bg-cyan-500 flex items-center justify-around h-[100%] w-[100%] border border-t-black border-r-black border-l-black rounded-t-3xl'>
            <div>
                <Link to={"/Acceuil"}>
                    <img src={Logo} className="h-11" />
                </Link>
            </div>
            <div>
                <img src={iconBaseFooter} className="h-8" />
            </div>
            <div>
                <img src={iconAppsFooter} className="h-10" />
            </div>
            <div>
                <img src={iconGiftFooter} className="h-8" />
            </div>
            <div>
                <Link to={"/Parametres"}>
                    <img src={iconUserFooter} className="h-8" />
                </Link>
            </div>
        </div>
    )
}
