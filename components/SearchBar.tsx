import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative w-full max-w-xs">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <Search className="h-4"/>
      </div>
      <Input
        type="text"
        placeholder="Search for a country..."
        className="pl-10"
      />
    </div>
  );
}
