"use client";

import createApolloClient from "@/apollo-client";
import { ApolloProvider } from "@apollo/client";
import Image from "next/image";
import ClientOnly from "./ui/location/ClientOnly";
import Countries from "./ui/location/Location";
import SearchLocationsByEpisode from "./ui/location/EpisodeLocation";

export default function Home() {
  const client = createApolloClient();
  return (
    <ApolloProvider client={client}>
      <main className="flex flex-col items-center justify-between">
        <ClientOnly>
          <SearchLocationsByEpisode />
        </ClientOnly>
      </main>
    </ApolloProvider>
  );
}
