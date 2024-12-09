"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useTheme } from "next-themes";
const chartData = [
  { spec: "Frontend", rating: 8 },
  { spec: "Backend", rating: 4 },
  { spec: "Databases", rating: 8 },
  { spec: "DevOps", rating: 4 },
  { spec: "Bots", rating: 2 },
];

const chartConfig = {
  rating: {
    label: "Rating",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function Chart() {
  const theme = useTheme();
  return (
    <Card className="w-full">
      <CardHeader className="items-center pb-4 text-2xl">
        <CardTitle>My competencies</CardTitle>
        <CardDescription>What I excel at.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] w-full "
        >
          <RadarChart data={chartData}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarGrid gridType="circle" />
            <PolarAngleAxis
              dataKey="spec"
              tick={{ fill: theme.theme === "dark" ? "white" : "black" }}
            />
            <Radar
              dataKey="rating"
              fill="var(--color-rating)"
              fillOpacity={0.6}
              dot={{
                r: 3,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
