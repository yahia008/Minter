'use client'
import React from 'react'
import FieldProvider from './FieldProvider';
import axios from 'axios'
import { useState } from 'react';
import { createOptions } from '@/utils/utils';
import Image from 'next/image';
import DotLoader from 'react-spinners/DotLoader'
import {useEffect } from 'react';
import Minter from './Minter';
import { Donegal_One } from 'next/font/google';
import { error } from 'console';



export interface Pic {
    generated_image?: string;
    handler:(e: React.MouseEvent<HTMLButtonElement>)=> void
    input:string 
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const ImageProvider = () => {
    const [pic, setPic] = useState<Pic | null>(null)
    const [input, setInput] = useState<string>('')
    const [loading, setloading] = useState<boolean>()
    const [history, setHistotry] = useState([])


    useEffect(() => {
    //     const storedData = localStorage.getItem("urls");
    //     const articlesFromLocalStorage = storedData //?  JSON.parse(storedData):[];
    
    //     if (articlesFromLocalStorage) {
    //       setHistotry(articlesFromLocalStorage);
    //     }
      }, []
    );
    
    
  
    const handler = async(e: React.MouseEvent<HTMLButtonElement>) => {

        e.preventDefault();
       const options = createOptions(input)
    
        try {
            setloading(true)
            const response = await axios.request(options);
            if(response) setloading(false)
            console.log(response.data);
             setPic(response.data)
             setInput('')
             localStorage.setItem('urls', JSON.stringify(pic?.generated_image))
             setloading(false)
    
        } catch (error) {
            console.error(error);
            setInput('')
            setloading(false)
        }
    };

    const handleChange =(e:React.ChangeEvent<HTMLInputElement  | HTMLTextAreaElement>) => {
        setInput(e.target.value)
    }

  return (
    <div className='w-full flex flex-col justify-center items-center'>

        <div className='bg-gray-300 h-[300px] mt-5 w-[300px] border border-cyan-400 rounded' >
        {loading ? (
    <div className='flex justify-center items-center h-full w-full'><DotLoader color='#008B8B'/></div> // This can be replaced with any loading spinner component
) : (
    pic?.generated_image && (
        <Image
            src={pic.generated_image}
            height={400}
            width={300}
            alt="my pic"
            className="h-full w-full"
        />
    )
)}

        </div>


        <FieldProvider handler={handler} input={input} handleChange={handleChange} />
        <Minter input={input} url={pic?.generated_image || ""}/>
        </div>
  )
}

export default ImageProvider