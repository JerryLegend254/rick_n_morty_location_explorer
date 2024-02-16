"use client";
import { truncateString } from "@/app/lib/utils";
import { gql, useQuery, ApolloError } from "@apollo/client";
import { useState } from "react";

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

const SearchLocationsByEpisode = () => {
  const [searchTerm, setSearchTerm] = useState("Anato");
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

  // Filter locations based on episodes associated with characters who reside in those locations
  const filteredLocations = locationsData.locations.results?.filter(
    (location: Location) =>
      location.residents.some((resident: Character) =>
        resident.episode.some((episode) =>
          episode.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
  );
  return (
    <div className="flex flex-col justify-center gap-12">
      <input
        type="text"
        placeholder="Search by episode name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-2 py-1 border-2 border-blue-500 w-[400px] rounded-md self-center"
      />
      <ul className="grid grid-cols-5 gap-10">
        {filteredLocations.map((location: Location) => (
          <li
            key={location.id}
            className="group rounded-lg border border-gray-300 px-4 py-2 transition-colors hover:border-gray-200 hover:bg-gray-100 hover:dark:border-neutral-300 hover:dark:bg-neutral-400/30 w-[300px] flex-wrap"
          >
            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-1 text-xl font-semibold`}>
                {truncateString(location.name)}
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-70 text-balance`}>
                {location.type}
              </p>
              <div className="mt-4 flex justify-between items-center gap-4">
                <span className="flex-1 w-100 h-[2px] bg-gray-400"></span>
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-blue-500 font-bold">
                  -&gt;
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchLocationsByEpisode;
