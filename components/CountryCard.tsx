import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Country } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import slugify from "@/lib/slugify";

interface CountryProps {
  country: Country;
}

export default function CountryCard({ country }: CountryProps) {
  return (
    <Card className="w-[300px] h-[400px]">
      <CardHeader className="p-0">
        <Link href={`/${slugify(country.name.common)}`}>
          <Image
            className="w-full h-full"
            src={country.flags.png}
            width={100}
            height={100}
            alt={`Flag of ${country.name.common}`}
          />
        </Link>
      </CardHeader>
      <CardContent className="p-5">
        <h1 className="text-xl font-extrabold my-3">{country.name.common}</h1>
        <ul>
          <li className="mb-1">
            <span className="font-semibold">Population: </span>
            {country.population}
          </li>
          <li className="mb-1">
            <span className="font-semibold">Region: </span>
            {country.region}
          </li>
          <li className="mb-1">
            <span className="font-semibold">Capital: </span>
            {country.capital}
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
