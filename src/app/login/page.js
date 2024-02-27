"use client";
import React from 'react';
import {useState} from "react";
import Image from 'next/image';
import { signIn } from "next-auth/react";


const LoginPage = () => {
     const [email, setEmail] = useState(" ");
     const [password, setPassword] = useState(" ");
     const [loginInProgress, setLoginInProgress] = useState(false);


     async function handleFormSubmit(ev) {
       ev.preventDefault();
       setLoginInProgress(true);
        
    await signIn('credentials', {email, password, callbackUrl: '/'}); 

       setLoginInProgress(false);
     }
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-5">
        Login
        </h1>
      <form className="max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          disabled={loginInProgress}
          onChange={ev => setEmail(ev.target.value)}
        />

        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          disabled={loginInProgress}
          onChange={ev => setPassword(ev.target.value)}
        />
        <button disabled={loginInProgress} type="submit">
          Login
        </button>
        <div className="py-4 text-center text-gray-500">
          or login with the provider
        </div>
        <button 
        type="button"
        onClick={() => signIn('google', {callbackUrl:'/'})}
        className="flex items-center justify-center gap-4">
          <Image
            src={"/google-logo.png"}
            width={24}
            height={24}
            alt={"google logo"}
          />
          Login with google
        </button>
      </form>
    </section>
  );
}

export default LoginPage