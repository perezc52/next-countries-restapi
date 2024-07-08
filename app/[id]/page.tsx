import BackButton from "@/components/BackButton";
import deslugify from "@/lib/deslugify";

export default async function CountryPage({
  params,
}: {
  params: { id: string };
}) {
  console.log(params);
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${deslugify(params.id)}?fullText=true`
  );
  const country = await response.json();
  console.log(country);
  return (
    <main>
      <BackButton />
    </main>
  );
}
