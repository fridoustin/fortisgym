"use client"

import { auth, db } from '@/lib/firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const router = useRouter();

    const handleSignIn = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            // const userId = userCredential.user.uid;

            router.push('/')

            // untuk mengambil data dari firestore //
            // const userDoc = await getDoc(doc(db, "users", userId));
            // if(userDoc.exists()){
            //     const userData = userDoc.data()
            // }
        } catch (error){
            setError("Failed to Login: " + (error as Error).message)
        }
    }

    return (
        <main className="bg-white flex justify-center items-center min-h-screen p-6 pt-24">
            <div className='card bg-gray-800 w-96 shadow-xl px-12 py-12'>
                <h1 className='font-bold text-4xl flex justify-center pb-8 text-white'>Sign In</h1>
                <p className='text-white pb-1'>Email</p>
                <label className="input input-bordered flex items-center gap-2 bg-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 ">
                        <path
                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                <input 
                    type="text" 
                    className="grow text-black" 
                    placeholder="example@gmail.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </label>
                <p className='text-white pb-1 pt-4'>Password</p>
                <label className="input input-bordered flex items-center gap-2 bg-white">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd" />
                </svg>
                <input 
                    type="password" 
                    className="grow text-black" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </label>
                <button 
                    className='bg-[#ffc519] mt-8 rounded-xl text-black py-3 hover:bg-[#b39232]'
                    onClick={handleSignIn}
                    >
                        Login
                </button>
                <p className='text-white text-center py-2'>or</p>
                <button className='bg-white rounded-xl text-black py-3 hover:bg-slate-200'>Login With Google</button>
                <div className='flex justify-between pt-4'>
                    <p className='text-white text-s'>Belum punya akun?</p>
                    <a className="link link-hover text-[#ffc519]" href="/auth/signup">Buat akun</a>
                </div>
            </div>
        </main>
    )
}

export default SignIn