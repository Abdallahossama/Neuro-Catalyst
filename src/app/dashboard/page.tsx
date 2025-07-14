// src/app/page.tsx
"use client";
import { PlusIcon, Settings2Icon } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import TodayHours from "@/components/today-hours";
import WeeklyTotalHours from "@/components/weekly-total-hours";

const Page = () => {
  const actionsData = ["Study", "Programming", "Reading"];
  interface TimerData {
    hour: string;
    minutes: string;
  }
  const [actions, setAction] = useState<string[]>(actionsData);
  const newActionRef = useRef<HTMLInputElement>(null);
  const [isStopwatch, setIsStopwatch] = useState<boolean>(false);
  const [timer, setTimer] = useState<TimerData>({
    hour: "00",
    minutes: "00",
  });
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const setTimerData = (hour: string, minutes: string) => {
    const currentTime = new Date();
    console.log(
      "Current Time:",
      currentTime.getHours(),
      currentTime.getMinutes()
    );
    setTimer({ hour, minutes });
  };

  const handleActionFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (newActionRef.current) {
      const actionValue = newActionRef.current.value.trim();
      if (actionValue) {
        setAction((prevActions) => [...prevActions, actionValue]);
        newActionRef.current.value = "";
        setIsPopoverOpen(false);
      }
    }
  };

  return (
    <div className="flex flex-col  items-center justify-start w-full h-screen gap-10  pb-5">
      {/* Timer Section */}
      <div className="flex flex-col gap-5 items-center justify-start w-[100%] h-[40%]">
        <Card className="md:max-w-[500px] w-[100%] mx-auto">
          <div className="flex mx-auto gap-5 items-center justify-center ">
            <Button
              variant={"default"}
              className="text-xs py-1 px-3 text-white"
              onClick={() => setIsStopwatch(false)}
            >
              Countdown
            </Button>
            <Button
              variant={"default"}
              className="text-xs py-1 px-3 text-white"
              onClick={() => setIsStopwatch(true)}
            >
              Stopwatch
            </Button>
          </div>
          <CardContent className="flex items-center flex-col gap-2 justify-center rounded-2xl md:w-[500px] px-5 py-2 mx-auto ">
            <div className="grid grid-cols-5 items-center w-full ">
              <div className="col-span-2"></div>
              <CardTitle className="col-span-1 text-center font-semibold text-lg py-1">
                {isStopwatch ? "Stopwatch" : "Countdown"}
              </CardTitle>
              <div className="col-span-1"></div>
              {!isStopwatch && (
                <Button
                  variant={"secondary"}
                  className="col-span-1 justify-self-end "
                  onClick={() => setTimerData("1", "15")}
                >
                  <Settings2Icon />
                </Button>
              )}
            </div>
            <div className="flex gap-5 items-center justify-center">
              <p className="font-semibold text-3xl">{timer.hour}</p>
              <span>:</span>
              <p className="font-semibold text-3xl">{timer.minutes}</p>
              <span>:</span>
              <p className="font-semibold text-3xl">00</p>
            </div>
          </CardContent>
        </Card>
        <div className=" flex gap-5">
          <Select>
            <SelectTrigger className="w-[280px] placeholder:text-center">
              <SelectValue placeholder="Select an action" />
            </SelectTrigger>
            <SelectContent>
              {actions.map((action, index) => (
                <SelectItem value={action} key={index}>
                  {action}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                className="px-3 border-1 bg-accent rounded-xl font-bold"
              >
                <PlusIcon className="h-4 w-4 font-bold" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="mt-3">
              <form
                onSubmit={handleActionFormSubmit}
                className="flex flex-col justify-center gap-2"
              >
                <p className="text-[16px] text-center">Add Action</p>
                <Input
                  placeholder="Enter the action title"
                  ref={newActionRef}
                />
                <Button
                  type="submit"
                  variant="default"
                  className="w-[30%] mx-auto mt-2 text-white"
                >
                  Submit
                </Button>
              </form>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <TodayHours />
    </div>
  );
};

export default Page;
