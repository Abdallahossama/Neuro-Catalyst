// @/components/today-hours.tsx
"use client";

import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A bar chart with a custom label";

const chartData = [
  { month: "gym", Totalhours: 50 },
  { month: "study", Totalhours: 305 },
  { month: "work", Totalhours: 237 },
  { month: "cooking", Totalhours: 100 }, // Added more data for demonstration
  { month: "cooking", Totalhours: 100 }, // Added more data for demonstration
  { month: "cooking", Totalhours: 100 }, // Added more data for demonstration
];

const chartConfig = {
  desktop: {
    color: "var(--chart-2)",
  },
  label: {
    color: "var(--primary)",
  },
} satisfies ChartConfig;

export default function TodayHours() {
  // Calculate dynamic height for the chart
  const barHeight = 10; // Approximate height for each bar including spacing
  const chartHeight = chartData.length * barHeight + 50; // Add some padding

  return (
    <Card className="w-[100%] gap-2">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="mb-2">Total hours Actions</CardTitle>
            <CardDescription>January - June 2024</CardDescription>
          </div>
          <div className="flex gap-2 leading-none font-medium">
            Total hours is 8 <TrendingUp className="h-4 w-4" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="min-h-[200px] w-[100%]"
          style={{ height: chartHeight }}
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="Totalhours" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="Totalhours"
              layout="vertical"
              fill="var(--primary)"
              radius={4}
            >
              <LabelList
                dataKey="month"
                position="insideLeft"
                offset={8}
                className="fill-gray-800"
                fontSize={14}
              />
              <LabelList
                dataKey="Totalhours"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
