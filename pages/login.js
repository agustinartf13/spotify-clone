import React from "react";
import { getProviders, signIn } from "next-auth/react";

function Login({ providers }) {
  return (
    <div className="flex flex-col bg-black items-center min-h-screen justify-center w-full">
      <img className="w-52 mb-10" src="https://links.papareact.com/9xl" />

      {Object.values(providers).map((provider) => (
        <div className="flex flex-col space-y-5" key={provider.name}>
          <button
            className="bg-[#000] text-white rounded-full py-4 px-10 justify-center border-2 border-[#18d860] font-semibold hover:bg-[#18d860]"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
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
      providers,
    },
  };
}
