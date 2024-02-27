import { FormEventHandler } from "react";

export default function AddNoteForm({ note, handleSubmit, setNote}: {
    note: string, handleSubmit: FormEventHandler, setNote: Function
}) {
    return (
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="text-xl font-bold">Note</label>
          <textarea
            placeholder="Add character notes here..."
            cols={40}
            rows={10}
            value={note}
            className="border-2 border-blue-500 rounded-md px-4 py-2"
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        <button className="self-start bg-black text-white font-semibold py-2 px-4 rounded-md">
          Submit
        </button>
      </form>
    );
}