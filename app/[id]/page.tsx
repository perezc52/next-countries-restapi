import BackButton from "@/components/BackButton";
import deslugify from "@/lib/deslugify";
import Image from "next/image";
import getOfficialName from "@/lib/getOfficialCountryName";
import formatPopulation from "@/lib/formatPopulation";
import getCurrencyName from "@/lib/getCurrencyName";

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

  console.log(country.currencies);
  const officialName = getOfficialName(country.name);
  const population = formatPopulation(country.population);
  const currency = getCurrencyName(country.currencies);
  const languages = Object.values(country.languages).join(", ");
  console.log(languages);

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
      <div className="flex justify-between gap-14">
        <div className="relative w-full h-[400px]">
          <Image
            className="object-cover"
            src={country.flags?.png || country.flags?.svg}
            layout="fill"
            alt={country.flags?.alt}
          />
        </div>
        <div className="w-full p-14">
          <h1 className="text-3xl font-bold">{country.name?.common}</h1>
          <div>
            <ul>
              <li>
                <span>Native Name: </span>
                {officialName}
              </li>
              <li>
                <span>Population: </span>
                {population}
              </li>
              <li>
                <span>Region: </span>
                {country.region}
              </li>
              <li>
                <span>Sub Region: </span>
                {country.subregion}
              </li>
              <li>
                <span>Capital: </span>
                {country.capital}
              </li>
            </ul>

            <ul>
              <li>
                <span>Top Level Domain: </span>
                {country.tld}
              </li>
              <li>
                <span>Currency: </span>
                {currency}
              </li>
              <li>
                <span>Languages: </span>
                {languages}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
