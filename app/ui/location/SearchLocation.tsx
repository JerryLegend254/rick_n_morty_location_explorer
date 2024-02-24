"use client";
import { truncateString } from "@/app/lib/utils";
import { gql, useQuery, ApolloError } from "@apollo/client";
import Link from "next/link";
import { useState } from "react";
import LocationCard from "./LocationCard";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        episode {
          id
          name
        }
      }
    }
  }
`;

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      results {
        id
        name
        type
        residents {
          id
          name
          episode {
            id
            name
          }
        }
      }
    }
  }
`;

const SearchLocationsByCategory = ({ filterType }: { filterType: string }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    loading: charactersLoading,
    error: charactersError,
    data: charactersData,
  } = useQuery(GET_CHARACTERS);
  const {
    loading: locationsLoading,
    error: locationsError,
    data: locationsData,
  } = useQuery(GET_LOCATIONS);

  if (charactersLoading || locationsLoading) return <p>Loading...</p>;
  if (charactersError || locationsError)
    return <p>Error: {charactersError?.message || locationsError?.message}</p>;

  // Filter based on selected filter type
  let filteredItems = [];
  if (filterType === "location") {
    filteredItems = locationsData.locations.results.filter(
      (location: Location) =>
        location.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  } else if (filterType === "character") {
    filteredItems = locationsData.locations.results.filter(
      (location: Location) =>
        location.residents.some((resident: Character) =>
          resident.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
  } else if (filterType === "episode") {
    // Logic for episode filtering
    filteredItems = locationsData.locations.results?.filter(
      (location: Location) =>
        location.residents.some((resident: Character) =>
          resident.episode.some((episode) =>
            episode.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
        )
    );
  }

  return (
    <div className="flex flex-col justify-center gap-12">
      <input
        type="text"
        placeholder={`Search by ${filterType} name`}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-2 py-1 border-2 border-blue-500 w-[240px] lg:w-[400px] rounded-md self-center"
      />
      <ul className="flex flex-col sm:grid sm:grid-cols-2 2xl:grid-cols-3 gap-10 px-auto">
        {filteredItems.map((location: Location) => <LocationCard key={location.id} location={location} />)}
      </ul>
    </div>
  );
};

export default SearchLocationsByCategory;
