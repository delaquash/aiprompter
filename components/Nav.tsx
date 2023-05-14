"use client"
import { signOut, signIn, getProviders, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface IProvider {
    id?: any ;
    name?: any;
}
const Nav = () => {
    const isUserLoggedIn = true;

    const [ providers, setProviders ]= useState<IProvider>()
    
    useEffect(()=> {
        const setProvider = async ()=> {
            const response:any = await getProviders();
            setProviders(response)
        }
        setProvider()
    }, [])

  return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href="/" className="flex flex-center gap-2">
            <Image 
                src="/assets/images/logo.svg"
                alt="Logo"
                height={30}
                width={30}
                className="object-contain"            
            />
            <p className="logo_text">Promptopia</p>
        </Link>
        {/* desktop nav */}
        <div className="sm:flex hidden">
            {isUserLoggedIn ? (
                <div className="flex gap-3 md:gap-5">
                    <Link href="/create-prompt" className="black_btn">
                        Create Post
                    </Link>
                    <button type="button" onClick={signOut} className="outline_btn">
                        Sign Out
                    </button>
                    <Link href="/profile">
                        <Image
                            src="/assets/images/Emmanuel.jpg"
                            height={37}
                            width={37}
                            alt="Profile"
                        />
                    </Link>
                </div>
            ): (
                <>
                    {providers && 
                        Object.values(providers).map((provider)=>(
                            <button
                                type="button"
                                key={provider.name}
                                onClick={()=>signIn(provider.id)}
                                className="black_btn"
                            >
                                SIGN IN
                            </button>
                        ))
                    }
                </>
            )}
        </div>
    </nav>
  )
}

export default Nav