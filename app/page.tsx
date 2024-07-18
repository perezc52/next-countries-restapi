

import SearchBar from "@/components/SearchBar";
import CountrySelect from "@/components/CountrySelect";
import CountryCard from "@/components/CountryCard";
import { Country } from "@/lib/types";

export default async function Home() {

  const response = await fetch("https://restcountries.com/v3.1/all");
  const countries = await response.json();
  return (
    <div>
      <SearchBar />
      <CountrySelect />
      <ul className="grid md:grid-cols-4 gap-4">
        {countries.map((country: Country) => (
          <li>
            <CountryCard country={country} />
          </li>
        ))}
      </ul>
    </div>
  );
}
