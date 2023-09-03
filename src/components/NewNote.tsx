import React, { useState } from "react";
import { INote } from "../interface/note.interface";
import { useDispatch } from "react-redux";
import { AddNewNote } from "../store/addNoteSlice";

// interface IProps{
//   setOpen:
// }

const NewNote = ({ setOpen }: { setOpen: (value: boolean) => void }) => {
  const [formData, setFormData] = useState<INote>({
    title: "",
    description: "",
    type: "Обычные",
  });

  const dispatch = useDispatch();

  function addNote() {
    console.log(formData);
    dispatch(AddNewNote(formData));
    setFormData({ title: "", description: "", type: "Обычные" });
    setOpen(false);
  }
  return (
    <div className="change">
      <label>Введите заголовок:</label>
      <br />
      <input
        value={formData.title}
        // onChange={(e) => setFormData(formData.title:e.target.value}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        placeholder="Заголовок..."
      ></input>
      <hr />
      <label>Введите описание:</label>
      <br />
      <textarea
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
        placeholder="Введите описание..."
      ></textarea>
      <br />
      <label>Выберите тип: </label>

      <select
        value={formData.type}
        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
      >
        <option value="Срочные">Срочный</option>
        <option value="Важные">Важный</option>
        <option value="Обычные">Обычный</option>
        <option value="Дневник">Дневник</option>
        <option value="Секретные">Секретный</option>
      </select>
      <br />
      <button onClick={addNote}>Закладить</button>
    </div>
  );
};

export default NewNote;
