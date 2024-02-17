"use client";

import { ApolloProvider } from "@apollo/client";
import Image from "next/image";
import ClientOnly from "./ui/location/ClientOnly";
import Countries from "./ui/location/Location";
import SearchLocationsByEpisode from "./ui/location/SearchLocation";
import { ApolloWrapper } from "./apolloclientwrapper";
import { useState } from "react";

// export default function Home() {
//   const [selectedValue, setSelectedValue] = useState("location");

//   const handleRadioChange = (value: string) => {
//     setSelectedValue(value);
//   };

//   return (
//     <ApolloWrapper>
//       <main className="flex flex-col items-center justify-between">
//         <ClientOnly>
//           <div className="flex">
//             <div className="w-[400px]">
//               <p className="text-xl font-semibold">Filter locations by: </p>
//               <div className="flex flex-col gap-2">
//                 <div className="flex gap-2">
//                   <input
//                     type="radio"
//                     id="location"
//                     value="location"
//                     checked={selectedValue === "location"}
//                     onChange={() => handleRadioChange("location")}
//                   />
//                   <label htmlFor="location">Location Name</label>
//                 </div>

//                 <div className="flex gap-2">
//                   <input
//                     type="radio"
//                     id="character"
//                     value="character"
//                     checked={selectedValue === "character"}
//                     onChange={() => handleRadioChange("character")}
//                   />
//                   <label htmlFor="character">Character name</label>
//                 </div>

//                 <div className="flex gap-2">
//                   <input
//                     type="radio"
//                     id="episode"
//                     value="episode"
//                     checked={selectedValue === "episode"}
//                     onChange={() => handleRadioChange("episode")}
//                   />
//                   <label htmlFor="episode">Episode name</label>
//                 </div>
//               </div>
//             </div>
//             <SearchLocationsByEpisode />
//           </div>
//         </ClientOnly>
//       </main>
//     </ApolloWrapper>
//   );
// }
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
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <input
                    type="radio"
                    id="location"
                    value="location"
                    checked={selectedValue === "location"}
                    onChange={() => handleRadioChange("location")}
                  />
                  <label htmlFor="location">Location Name</label>
                </div>

                <div className="flex gap-2">
                  <input
                    type="radio"
                    id="character"
                    value="character"
                    checked={selectedValue === "character"}
                    onChange={() => handleRadioChange("character")}
                  />
                  <label htmlFor="character">Character name</label>
                </div>

                <div className="flex gap-2">
                  <input
                    type="radio"
                    id="episode"
                    value="episode"
                    checked={selectedValue === "episode"}
                    onChange={() => handleRadioChange("episode")}
                  />
                  <label htmlFor="episode">Episode name</label>
                </div>
              </div>
            </div>
            <SearchLocationsByEpisode filterType={selectedValue} />
          </div>
        </ClientOnly>
      </main>
    </ApolloWrapper>
  );
}
