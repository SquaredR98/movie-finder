import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ISelection } from "@/sections/carousel";

interface ICarouselSelectProps {
  setSelection: any;
  selections: ISelection[];
}

export default function CarouselSelect({
  setSelection,
  selections,
}: ICarouselSelectProps) {
  return (
    <Select onValueChange={(value: string) => setSelection(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue className="text-lg" placeholder={selections[0].name} />
      </SelectTrigger>
      <SelectContent className="bg-none">
        {selections.map(({ name, key }, idx: number) => (
          <SelectItem key={idx} className="text-base" value={key}>
            {name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
