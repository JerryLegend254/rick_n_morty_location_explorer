import { getClient } from "@/apollo-client";
import { BackButton, NavigationBtn } from "@/app/ui/btn";
import CharacterCard from "@/app/ui/character/CharacterCard";
import { ApolloProvider, gql, useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";

const GET_LOCATION = gql`
  query GetLocation($id: ID!) {
    location(id: $id) {
      name
      residents {
        id
        image
        name
        status
      }
      type
    }
  }
`;

export default async function LocationDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;

  const { data, loading, error } = await getClient().query({
    query: GET_LOCATION,
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { location } = data;
  return (
    <>
      <NavigationBtn destination="/" caption="Back to location list" />
      <div className="mt-8">
        <p className="text-3xl font-bold">
          {location.name} -{" "}
          <span className="text-blue-700 italic">{location.type}</span>
        </p>
        <div className="flex justify-center">
          <ul className="flex flex-col sm:grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid grid-cols-4 mt-8 gap-6 mx-auto">
            {data?.location.residents?.map((res: Character) => <CharacterCard key={res.id} res={res} />)}
          </ul>
        </div>
      </div>
    </>
  );
}
