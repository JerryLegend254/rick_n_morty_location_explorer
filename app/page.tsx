import { ApolloProvider } from "@apollo/client";
import Image from "next/image";
import ClientOnly from "./ui/location/ClientOnly";
import Countries from "./ui/location/Location";
import SearchLocationsByEpisode from "./ui/location/EpisodeLocation";
import { ApolloWrapper } from "./apolloclientwrapper";

export default function Home() {
  return (
    <ApolloWrapper>
      <main className="flex flex-col items-center justify-between">
        <ClientOnly>
          <SearchLocationsByEpisode />
        </ClientOnly>
      </main>
    </ApolloWrapper>
  );
}
