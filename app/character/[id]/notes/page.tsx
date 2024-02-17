"use client";
import { getCharacterNotes } from "@/app/lib/utils";
import { BackButton } from "@/app/ui/btn";

export default function CharacterNotes({ params }: { params: { id: string } }) {
  const id = params.id;
  console.log(id);

  const notes = getCharacterNotes();
  const characterNotes = notes.filter(
    (note) => note.characterId.toString() === id
  );

  console.log(notes);
  return (
    <>
      <BackButton />
      <div>
        <p className="text-3xl font-bold">Character&apos;s notes</p>
        <ul className="mt-10">
          {characterNotes.map((note, i) => (
            <li
              key={i}
              className="bg-blue-700 px-4 py-2 rounded-md text-white font-semibold"
            >
              {note.notes}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
