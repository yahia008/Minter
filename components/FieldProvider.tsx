'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Textarea} from "@/components/ui/textarea"
import { FaArrowRight } from "react-icons/fa";
import {Pic} from './Image';
import Image from 'next/image';






const FieldProvider = ({handler, input, handleChange}:Pic) => {
   

  return (
    <div className=' w-[380px] sm:w-[600px] mt-3 mb-3'>
        <div className='relative'>
       
       <Textarea value={input} onChange={handleChange}/>
       <div className='absolute right-0 top-5 mr-3'>
            <Button onClick={handler} disabled={!input}><FaArrowRight/></Button>
        </div>
        
                
            
      
        </div>
       
        </div>
  )
}

export default FieldProvider