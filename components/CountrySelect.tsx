import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CountrySelectProps {
  onSelectRegion: (region: string) => void;
}

export default function CountrySelect({ onSelectRegion }: CountrySelectProps) {
  return (
    <Select onValueChange={onSelectRegion}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Filter by Region" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="africa">Africa</SelectItem>
        <SelectItem value="america">America</SelectItem>
        <SelectItem value="asia">Asia</SelectItem>
        <SelectItem value="europe">Europe</SelectItem>
        <SelectItem value="oceania">Oceania</SelectItem>
      </SelectContent>
    </Select>
  );
}
