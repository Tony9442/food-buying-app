"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";


export default function ProfilePage() {
  const session = useSession();
  console.log(session)
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const { status } = session;

  useEffect(() => {
    if (status === "authenticated") {
      setUserName(session.data.user.name);
      fetch('/api/profile').then(response => {
        response.json().then(data => {
          setPhone(data.phone);
          setStreetAddress(data.streetAddress);
          setPostalCode(data.postalCode);
          setCity(data.city);
          setCountry(data.country);
        })
      });
    }
  }, [session, status]);

  async function handleProfileInfoUpdate(ev) {
    ev.preventDefault();


    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name:userName,
        streetAddress,
        phone,
        postalCode,
        city,
        country
        }),
    });

    if(response.ok) 
     resolve()
    else 
     reject();
    });

    await toast.promise(savingPromise, {
      loading: 'Saving...',
      success: 'Profile saved!',
      error: 'Could not save'
    });
  
  }

  async function handleFileChange(ev) {
    const files = ev.target.files;
    if (files?.length === 1) {
      const data = new FormData;
      data.set('file', files[0]);
      await fetch("/api/upload", {
        method: "POST",
        body: data,
      });
    }
  }

  if (status === "loading") {
    return "Loading...";
  }

  if (status === "unauthenticated") {
    return redirect("/login");
  }

  const userImage = session.data.user.image;

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-5">Profile</h1>
      <div className="max-w-md mx-auto">
        {/* {saved && (
          <h2 className="text-center bg-pink-100 p-4 rounded-lg border-4 border-green-100">
            Profile saved!
          </h2>
        )}
        {isSaving && (
          <h2 className="text-center bg-blue-300 p-4 rounded-lg border-4 border-blue-100">
            Saving...
          </h2>
        )} */}

        <div className="flex gap-4">
          <div>
            <div className=" p-2 rounded-lg relative">
              <Image
                className="rounded-lg w-[100px] h-full mb-1"
                src={userImage}
                width={250}
                height={250}
                alt={"avatar"}
              />
              <label>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <div className="">
                  <span
                    className="block border rounded-lg px-2
                   text-center cursor-pointer"
                  >
                    Edit
                  </span>
                </div>
              </label>
            </div>
          </div>
          <form className="grow" onSubmit={handleProfileInfoUpdate}>
            <label>Frist and Last</label>
            <input
              type="text"
              placeholder="Frist and Last"
              value={userName}
              onChange={(ev) => setUserName(ev.target.value)}
            />
            <label>Email</label>
            <input
              type="email"
              disabled={true}
              value={session.data.user.email}
            />
            <label>Phone</label>
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(ev) => setPhone(ev.target.value)}
            />
            <label>Address</label>
            <input
              type="text"
              placeholder="Street address"
              value={streetAddress}
              onChange={(ev) => setStreetAddress(ev.target.value)}
            />

            <div className="flex gap-2">
              <div>
                <label>Postal code</label>
                <input
                  type="text"
                  placeholder="Postal code"
                  value={postalCode}
                  onChange={(ev) => setPostalCode(ev.target.value)}
                />
              </div>
              <div>
                <label>City</label>
                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(ev) => setCity(ev.target.value)}
                />
              </div>
            </div>
            <label>City</label>
            <input
              type="text"
              placeholder="Country"
              value={country}
              onChange={(ev) => setCountry(ev.target.value)}
            />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </section>
  );
}
