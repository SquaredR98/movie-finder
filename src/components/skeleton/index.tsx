import React from "react";
import { Card, CardContent } from "../ui/card";

export default function Skeleton() {
  return (
    <Card className="h-[320px] rounded-none animate-pulse bg-slate-900 border-none">
      <CardContent className="flex items-center justify-center relative h-[100%]"></CardContent>
    </Card>
  );
}
