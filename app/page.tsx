"use client";

import SearchBar from "@/components/SearchBar";
import CountrySelect from "@/components/CountrySelect";
import CountryCard from "@/components/CountryCard";
import { Country } from "@/lib/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedRegion, setSelectedRegion] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      let url = "https://restcountries.com/v3.1/all";
      if (selectedRegion) {
        url = `https://restcountries.com/v3.1/region/${selectedRegion}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
    };
    fetchCountries();
  }, [selectedRegion]);

  return (
    <div className="px-16">
      <div className="flex justify-between my-10">
      <SearchBar setCountries={setCountries}/>
      <CountrySelect onSelectRegion={setSelectedRegion} />
      </div>
      <ul className="grid md:grid-cols-2 lg:grid-cols-4">
        {countries.map((country: Country) => (
          <li>
            <CountryCard country={country} />
          </li>
        ))}
      </ul>
    </div>
  );
}
