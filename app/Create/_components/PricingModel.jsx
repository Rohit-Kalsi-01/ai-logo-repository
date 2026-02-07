"use client"

import React, { useEffect } from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { SignInButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'

function PricingModel({formData}) {
  const{user}=useUser();

  useEffect(()=>{
     if(formData?.title && typeof window!=='undefined'){
      localStorage.setItem('formData',JSON.stringify(formData))
     }
  },[formData])

  return (
    <div className=' text-center max-w-2xl mx-auto'>
      <HeadingDescription 
      title={Lookup.LogoPricingModelTitle}
      description={Lookup.LogoColorPaletteDesc}/>

      <div className='flex flex-col items-center mt-5'>
        {Lookup.pricingOption.map((pricing,index)=>(
           <div key={index} className='flex flex-col items-center p-5  border'>
            <Image src={pricing.icon} alt={pricing.title} width={60} height={60}/>
            <h2 className='font-medium text-2xl' >{pricing.title}</h2>
            <div>
                {pricing.features.map((feature,index)=>(
                 <h2 className='text-lg mt-3' key={index}>{feature}</h2>
                ))}
            </div>
       { user?
       <Link href={'/generate-logo?type='+pricing.title}>
       <Button className="mt-5">{pricing.button}</Button>  
       </Link>
       : <SignInButton mode='modal' forceRedirectUrl={'/generate-logo?type='+pricing.title}>
        <Button className="mt-5">{pricing.button}</Button>  
        </SignInButton>}
                
              
 
            
           
            </div>
        ))}
      </div>
    </div>
    
  )
}

export default PricingModel
