import { getClient } from "@/apollo-client";
import { BackButton } from "@/app/ui/btn";
import { gql } from "@apollo/client";
import Image from "next/image";

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      gender
      id
      image
      location {
        name
      }
      name
      origin {
        name
      }
      species
      status
      type
    }
  }
`;

export default async function CharacterDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;

  const { data, loading, error } = await getClient().query({
    query: GET_CHARACTER,
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { character } = data;

  return (
    <>
      <BackButton />
      <div className="flex flex-col md:flex-row items-center gap-8 md:items-center md:justify-center md:h-[70%]">
        <Image
          src={character.image}
          width={320}
          height={350}
          alt={character.name}
          className="rounded-full"
        />
        <div className="flex flex-col gap-2">
          <p className="text-xl">
            <span className="font-semibold">Name:</span> {character.name}
          </p>
          <p className="text-xl">
            <span className="font-semibold">Origin:</span>{" "}
            {character.origin.name}
          </p>
          <p className="text-xl">
            <span className="font-semibold">Location:</span>
            {character.location.name}
          </p>
          <p className="text-xl">
            <span className="font-semibold">Species:</span> {character.name}
          </p>
          <p className="text-xl">
            <span className="font-semibold">Status:</span> {character.status}
          </p>
        </div>
      </div>
    </>
  );
}
