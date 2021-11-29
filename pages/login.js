import React from "react";
import { getProviders, signIn } from 'next-auth/react'

function Login({ providers }) {
  return (
    <div className="flex flex-col bg-black items-center min-h-screen justify-center w-full">
      <img className="w-52 mb-5" src="https://links.papareact.com/9xl" />

      {Object.values(providers).map((provider) => (
        <div>
          <button className="bg-[#18d860] text-white p-5 rounded-full px-10 justify-center">
            Login with {provider.name}
          </button>
        </div>
      ))}
      
    </div>
  );
}

export default Login;


export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers
    }
  }
}