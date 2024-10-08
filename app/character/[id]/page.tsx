"use client";
import { getClient } from "@/apollo-client";
import { ApolloWrapper } from "@/app/apolloclientwrapper";
import { addCharacterNote } from "@/app/lib/utils";
import { BackButton } from "@/app/ui/btn";
import AddNoteForm from "@/app/ui/character/AddNoteForm";
import { gql, useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

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

export default function CharacterDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;

  const [showForm, setShowForm] = useState(false);
  const [note, setNote] = useState("");
  // const { data, loading, error } = await getClient().query({
  //   query: GET_CHARACTER,
  //   variables: { id },
  // });

  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { character } = data;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!note) return;
    // Your form submission logic here
    setNote("");
    addCharacterNote(character.id, note);
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <BackButton />
        <button
          className="bg-black px-3 py-2 text-white font-bold rounded-md"
          onClick={() => setShowForm((st) => !st)}
        >
          {showForm ? "Close Form" : "Add Note"}
        </button>
      </div>
      <div className="flex flex-col xl:flex-row justify-around mb-8">
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
        {showForm && (
          <AddNoteForm setNote={setNote} handleSubmit={handleSubmit} note={note} />
        )}
      </div>
      <Link
        href={`/character/${character.id}/notes`}
        className="bg-black py-2 px-4 text-white rounded-md"
      >
        Go to {character.name}&apos;s notes
      </Link>
    </>
  );
}
