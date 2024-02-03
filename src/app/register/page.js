"use client";
import { useState } from "react";
import Image from "next/image";
import Link from 'next/link';

const page = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);

  async function handleFormSubmit(ev) {
    //The preventDefault means that we will not use the default we got from out 'form html'
    //instaed we want to send a request to our REGISTER route inside the API
    ev.preventDefault();
    setCreatingUser(true);
     setError(false);
    setUserCreated(false);
     const response = await fetch('/api/register',{
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {'Content-Type': 'application/json'},
    });
    if (response.ok){
      setUserCreated(true);
    } else {
      setError(true);
    }
    setCreatingUser(false);
    
  }
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-5">
        Register
        </h1>
      {userCreated && (
        <div className="my-4 text-center text-sm">
          User created.
          <br /> Now you can{""}
          <Link href={"/login"} className="underline ">
            login &raquo;
          </Link>
        </div>
      )}
       {error && (
        <div className="my-4 text-center text-sm">
          An error has occurred. <br /> Please try again later
        </div>
      )}
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          disabled={creatingUser}
          onChange={(ev) => setEmail(ev.target.value)}
        />

        <input
          type="password"
          placeholder="placeholder"
          value={password}
          disabled={creatingUser}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button type="submit" disabled={creatingUser}>
          Register
        </button>
        <div className="py-4 text-center text-gray-500">
          or login with the provider
        </div>
        <button className="flex items-center justify-center gap-4">
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
};

export default page;
