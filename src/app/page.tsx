import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/*<main className="flex min-h-screen flex-col items-center justify-between p-24" style={{backgroundImage: './bg.jpeg'}}>*/}
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className={"text-5xl font-bold"}>Welcome to TimeKube!</h1>
          <p className="py-6">Travel back in time to your past clusters.</p>
          <Link href={"/active_clusters"}>
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
