"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useEffect } from "react";

interface SearchBarProps {
  setCountries: (countries: any) => void;
}

export default function SearchBar({ setCountries }: SearchBarProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearchChange = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 600);

  useEffect(() => {
    const query = searchParams.get("query");
    if (query) {
      const fetchCountriesBySearch = async () => {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${query}`
        );
        const data = await response.json();
        setCountries(data);
      };
      fetchCountriesBySearch();
    }
  }, [searchParams, setCountries]);

  return (
    <div className="relative w-full max-w-xs">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <Search className="h-4" />
      </div>
      <Input
        type="text"
        placeholder="Search for a country..."
        className="pl-10"
        onChange={(e) => handleSearchChange(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
}
