"use client";
import { Timer } from "lucide-react";
import { Settings2Icon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme-button";

const page = () => {
  interface TimerData {
    hour: string;
    minutes: string;
  }
  const [isStopewatch, setIsStopwatch] = useState<boolean>(false);
  const [timer, setTimer] = useState<TimerData>({
    hour: "00",
    minutes: "00",
  });
  const setTimerData = (hour: string, minutes: string) => {
    const currentTime = new Date();
    console.log(
      "Current Time:",
      currentTime.getHours(),
      currentTime.getMinutes()
    );

    setTimer({ hour, minutes });
  };

  return (
    <div>
      <div className=" flex  items-center justify-center  p-8 pb-20 gap-16 sm:p-20 ">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <ModeToggle />
          <p className="text-lg">Welcome to the dashboard!</p>
          <Timer className="w-16 h-16 text-blue-500" />
        </div>
      </div>
      {/* timer */}
      <div className="flex mx-auto gap-5 items-center justify-center mb-5">
        <Button onClick={() => setIsStopwatch(true)}>Countdown</Button>
        <Button onClick={() => setIsStopwatch(false)}>Stopwatch</Button>
      </div>
      {isStopewatch ? (
        <div className="flex items-center flex-col gap-2 justify-center  rounded-2xl w-[500px] px-5 py-5 mx-auto text-white bg-lime-900 ">
          <div className="grid grid-cols-5 items-center w-full">
            <div className="col-span-2"></div>
            <p className="col-span-1 text-center font-semibold text-lg">
              {isStopewatch ? "Countdown" : "Stopwatch"}
            </p>
            <div className="col-span-1"></div>
            <Button
              className="col-span-1 justify-self-end"
              onClick={() => setTimerData("1", "15")}
            >
              <Settings2Icon />
            </Button>
          </div>
          <div className="flex gap-5 items-center justify-center">
            <p className="font-semibold text-3xl">{timer.hour}</p>
            <span>:</span>
            <p className="font-semibold text-3xl">{timer.minutes}</p>
            <span>:</span>
            <p className="font-semibold text-3xl">00</p>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2 flex-col justify-center  rounded-2xl w-[500px] px-5 py-5 mx-auto text-white bg-lime-900 ">
          <div className="grid grid-cols-5 items-center w-full">
            <div className="col-span-2"></div>
            <p className="col-span-1 text-center font-semibold text-lg">
              {isStopewatch ? "Countdown" : "Stopwatch"}
            </p>
            <div className="col-span-1"></div>
            <Button
              className="col-span-1 justify-self-end"
              onClick={() => setTimerData("1", "15")}
            >
              <Settings2Icon />
            </Button>
          </div>
          <div className="flex gap-5 items-center justify-center">
            <p className="font-semibold text-3xl">{timer.hour}</p>
            <span>:</span>
            <p className="font-semibold text-3xl">{timer.minutes}</p>
            <span>:</span>
            <p className="font-semibold text-3xl">00</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
