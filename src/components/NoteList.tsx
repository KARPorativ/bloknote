import React, { useState } from "react";
import Note from "./Note";
import NewNote from "./NewNote";
import { useSelector } from "react-redux";
import { INote, INotes } from "../interface/note.interface";
import { RootState } from "../store";

const NoteList = () => {
  // const [notes, setNotes] = useState([]);

  const notes = useSelector((state: RootState) => state.note.notes);
  const st = useSelector((state: RootState) => state.note.status);

  return (
    <div className="gridpos">
      {notes.length == 0 ? <h1 style={{ width: 500 }}>Заметок нет</h1> : false}

      {st == "Все"
        ? notes
            .filter((item) => item.type != "Секретные")
            .map((note: INote) => <Note note={note} st={st}></Note>)
        : notes
            .filter((item) => item.type == st)
            // .filter((item) =>
            //   (item.type == "Все") ? item.type != "Секретные" : item.type == st

            .map((note: INote) => <Note note={note} st={st}></Note>)}
    </div>
  );
};

export default NoteList;
