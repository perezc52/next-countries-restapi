interface Country {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  }

export default function getOfficialName(country: Country): string {
    if (country?.nativeName && Object.keys(country?.nativeName).length > 0) {
      // Get the first native name entry and its official name
      const firstNativeName = Object.values(country?.nativeName)[0];
      return firstNativeName?.official;
    }
    return country?.official;
  }