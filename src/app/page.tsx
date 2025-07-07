import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-screen gap-5  items-center justify-center moshGradiant">
      <h1 className=" text-center text-slate-900">Neuro Catalyst</h1>
      <p className="text-slate-700 uppercase tracking-widest text-2xl ">
        Your way for growth
      </p>
      <Button className="text-2xl  hover:cursor-pointer">
        <Link href="/dashboard" className="text-2xl font-bold text-slate-900">
          Lets's Start!
        </Link>
      </Button>
    </div>
  );
}
