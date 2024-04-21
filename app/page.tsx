"use client";

import ClientOnly from "./ui/location/ClientOnly";
import SearchLocationsByEpisode from "./ui/location/SearchLocation";
import { ApolloWrapper } from "./apolloclientwrapper";
import { useState } from "react";
import RadioGroupContainer from "./ui/filter/radioGroupContainer";

export default function Home() {
  const [selectedValue, setSelectedValue] = useState("location");

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <ApolloWrapper>
      <main className="flex flex-col items-center justify-between">
        <ClientOnly>
          <div className="flex flex-col xl:flex-row">
            <div className="w-[320px] flex flex-col items-center self-center mb-8 xl:self-start">
              <p className="text-xl font-semibold">Filter locations by: </p>
              <RadioGroupContainer
                handleRadioChange={handleRadioChange}
                selectedValue={selectedValue}
              />
            </div>
            <SearchLocationsByEpisode filterType={selectedValue} />
          </div>
        </ClientOnly>
      </main>
    </ApolloWrapper>
  );
}
