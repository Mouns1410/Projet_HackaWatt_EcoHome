import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./../img/pngegg.png"


export default function inscription() {
        const [bienvenue, setBienvenue] = useState("");

        let verif = (e) => {
        e.preventDefault();
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

        if(!regexEmail.test(e.target[0].value)){
                setBienvenue("Veuillez renseigné un E-mail valable");
        } else if (e.target[1].value == "") {
                setBienvenue("Veuillez renseigné votre numéro de client Proximus");
        } else if(!regexPassword.test(e.target[2].value)){
                setBienvenue("Le Mot de passe doit contenir 8 caractère dont une majuscule, une minuscule et un chiffre");
        } else {
                setBienvenue("");
        }
        
};


return (
        <div className="App h-screen w-screen flex justify-center items-center flex-col gap-10 bg-purple-100 text-black">
                <div className='w-screen h-[50%] flex items-center justify-center flex-col gap-3'>
                        <div className='border-2 border-black rounded-full'>
                                <img src={Logo} className="h-[180px]" />
                        </div>
                        <div className='text-4xl'>
                                EcoHome
                        </div>
                </div>  

                <div className='w-[70%] h-[50%]'>
                        <form onSubmit={(e)=>{verif(e)}}
                                className="flex flex-col gap-3">
                                <input type="text" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 h-12 outline-none"
                                        placeholder="E-mail"
                                        >
                                </input>
                                <input type="number" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 h-12 outline-none"
                                        placeholder="Numéro de client"
                                        >
                                </input>
                                <input type="password" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 h-12 outline-none"
                                        placeholder="Mot de passe"
                                        >
                                </input>
                                <br />
                                <button type="submit" 
                                        className=" w-[50%] mx-auto text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 h-12">
                                        <Link to={"/Acceuil"}>
                                                Connexion
                                        </Link>
                                        {/* Condition de connexion si tout rempli le Link fonctionne */}
                                </button>
                        </form>
                        <div>
                                {bienvenue}
                        </div>
                </div>
        </div>
);
}