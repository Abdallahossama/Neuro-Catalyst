"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, scale } from "motion/react";
export default function Home() {
  const transition = {
    duration: 0.8,
    delay: 0.5,
    scale: " 2",
  };
  return (
    <div className="flex flex-col h-screen gap-5  items-center justify-center moshGradiant">
      <motion.h1
        initial={{ y: 100, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={transition}
        className=" text-center text-slate-900"
      >
        Neuro Catalyst
      </motion.h1>

      <motion.p
        initial={{ y: 100, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.7,
        }}
        className="text-slate-700 uppercase tracking-widest text-2xl "
      >
        Your way for growth
      </motion.p>
      <motion.div
        initial={{ y: 100, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.8,
        }}
      >
        <Button className="text-2xl  hover:cursor-pointer ">
          <Link href="/dashboard" className="text-2xl font-bold text-slate-900">
            Lets's Start!
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}
