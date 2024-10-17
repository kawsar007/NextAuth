"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { doCredentialLogin } from "../app/actions";
import SocialLogin from "../components/SocialLogin";

const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const response = await doCredentialLogin(formData);

      if (!!response.error) {
        console.error(response.error);
        setError(response.error.message);
      } else {
        router.push("/home");
      }
    } catch (error) {
      console.error(error);
      setError("Check your credentials")
    }
  }
  return (
    <>
    <div className="text-xl text-red-500">{error}</div>
      <form
        onSubmit={onSubmit}
        className='my-5 flex flex-col items-center border p-3 border-gray-200 rounded-md'>
        <div className='my-2'>
          <label htmlFor='email'>Email Address</label>
          <input
            className='border mx-2 border-gray-500 rounded text-black p-2'
            type='email'
            name='email'
            id='email'
          />
        </div>

        <div className='my-2'>
          <label htmlFor='password'>Password</label>
          <input
            className='border mx-2 border-gray-500 rounded text-black p-2'
            type='password'
            name='password'
            id='password'
          />
        </div>

        <button
          type='submit'
          className='bg-orange-300 mt-4 rounded flex justify-center items-center w-36'>
          Ceredential Login
        </button>
      </form>
      <SocialLogin />
    </>
  );
};

export default LoginForm;
