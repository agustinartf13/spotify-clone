import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden" style={{backgroundColor: '#000'}}>
      <main>
        <Sidebar/>
      </main>

      <div>{/* player */}</div>
    </div>
  );
}
