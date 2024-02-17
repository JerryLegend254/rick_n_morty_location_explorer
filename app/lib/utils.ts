export function truncateString(str: string) {
  if (str.length <= 24) {
    return str;
  } else {
    return str.slice(0, 20) + "...";
  }
}

// Define the interface for character notes
interface CharacterNote {
  characterId: number;
  notes: string[];
}

// Function to retrieve character notes from localStorage
export function getCharacterNotes(): CharacterNote[] {
  const storedNotes = localStorage.getItem("characterNotes");
  return storedNotes ? JSON.parse(storedNotes) : [];
}

// Function to update character notes in localStorage
export function updateCharacterNotes(notes: CharacterNote[]): void {
  localStorage.setItem("characterNotes", JSON.stringify(notes));
}

// Function to add a note for a character
export function addCharacterNote(characterId: number, note: string): void {
  const characterNotes = getCharacterNotes();
  const existingCharacterNote = characterNotes.find(
    (note) => note.characterId === characterId
  );

  if (existingCharacterNote) {
    existingCharacterNote.notes.push(note);
  } else {
    characterNotes.push({ characterId, notes: [note] });
  }

  updateCharacterNotes(characterNotes);
}

// Function to remove a note for a character
export function removeCharacterNote(
  characterId: number,
  noteIndex: number
): void {
  const characterNotes = getCharacterNotes();
  const characterIndex = characterNotes.findIndex(
    (note) => note.characterId === characterId
  );

  if (characterIndex !== -1) {
    characterNotes[characterIndex].notes.splice(noteIndex, 1);
    updateCharacterNotes(characterNotes);
  }
}
