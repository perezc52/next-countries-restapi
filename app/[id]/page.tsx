import BackButton from "@/components/BackButton";
import deslugify from "@/lib/deslugify";
import Image from "next/image";
import getOfficialName from "@/lib/getOfficialCountryName";
import formatPopulation from "@/lib/formatPopulation";
import BorderCountry from "@/components/BorderCountry";
import { Country } from "@/lib/types";

interface Currency {
  name: string;
  symbol: string;
}

export default async function CountryPage({
  params,
}: {
  params: { id: string };
}) {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${deslugify(params.id)}?fullText=true`
  );
  let country = await response.json();
  country = country[0];

  let borderCountryNames: string[];
  if (country.borders) {
    const urlCodes = country?.borders.map((el: string) => `${el},`).join("");
    const response2 = await fetch(
      `https://restcountries.com/v3.1/alpha?codes=${urlCodes}`
    );
    const borderCountries = await response2.json();
    borderCountryNames = borderCountries.map((el: Country) => el.name.common);
  } else {
    borderCountryNames = ["No border countries"];
  }

  console.log(country);
  const officialName = getOfficialName(country.name);
  const population = formatPopulation(country.population);
  const currency = country.currencies
    ? (Object.values(country.currencies)[0] as Currency).name
    : "Unknown";
  console.log(country.currencies);
  const languages = Object.values(country.languages).join(", ");

  if (!country) {
    return (
      <>
        <BackButton />
        <p>country info not found</p>
      </>
    );
  }

  return (
    <main className="px-16">
      <BackButton />
      <div className="md:flex md:justify-between md:gap-14">
        <div className="relative w-full h-[400px]">
          <Image
            className="object-cover"
            src={country.flags?.png || country.flags?.svg}
            layout="fill"
            alt={country.flags?.alt}
          />
        </div>
        <div className="w-full p-7">
          <h1 className="text-3xl font-bold mb-5">{country.name?.common}</h1>
          <div className="md:flex md:justify-between my-10">
            <ul className="space-y-2 mb-10 md:mb-0">
              <li>
                <span className="font-bold">Native Name: </span>
                {officialName}
              </li>
              <li>
                <span className="font-bold">Population: </span>
                {population}
              </li>
              <li>
                <span className="font-bold">Region: </span>
                {country.region}
              </li>
              <li>
                <span className="font-bold">Sub Region: </span>
                {country.subregion}
              </li>
              <li>
                <span className="font-bold">Capital: </span>
                {country.capital}
              </li>
            </ul>

            <ul className="space-y-2">
              <li>
                <span className="font-bold">Top Level Domain: </span>
                {country.tld}
              </li>
              <li>
                <span className="font-bold">Currency: </span>
                {currency}
              </li>
              <li>
                <span className="font-bold">Languages: </span>
                {languages}
              </li>
            </ul>
          </div>
          <span className="font-bold inline-block mb-2">
            Border countries:{" "}
          </span>
          <div className="flex items-center flex-wrap gap-2">
            {borderCountryNames.map((el: string) => (
              <BorderCountry name={el} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
