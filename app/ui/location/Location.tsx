import { useQuery, gql } from "@apollo/client";

const QUERY = gql`
  query Results {
    characters {
      results {
        name
        species
        id
        status
      }
    }
  }
`;

export default function Countries() {
  const { data, loading, error } = useQuery(QUERY);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  console.log(data);
  const characters = data.characters.results.slice(0, 4);

  return (
    <div>
      {characters.map((character: Character) => (
        <div key={character.id}>
          <h3>{character.name}</h3>
          <p>
            {character.species} - {character.status}
          </p>
        </div>
      ))}
    </div>
  );
}
