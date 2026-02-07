"use client"
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

function Header(){
    const {user}=useUser();
    const route=useRouter();
    return (
        <div className='px-10 lg:px-32 xl:px-48 2xl:px-56 p-4 flex justify-between items-center shadow-sm'>
            <Image src={'/logo.svg'} alt='logo' width={180} height={100}  onClick={()=>route.push()}  />
            <div className='flex gap-3 items-center'>
                 {user ? <Button onClick={()=>route.push('/demo')}>Demo Logo</Button>:
                 <Button>Get Started</Button>}
                 <UserButton />
            </div>
        </div>
    )
}

export default Header