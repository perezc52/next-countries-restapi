interface Currency {
  name: string;
  symbol: string;
}

interface Country {
  currencies: {
    [key: string]: Currency;
  };
}

export default function getCurrencyName(country: Country): string {
  const firstCurrencyKey = Object.keys(country)[0];
  return country[firstCurrencyKey]?.name || "";
}
