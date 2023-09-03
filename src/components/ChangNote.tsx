import React, { useState } from "react";
import { IChangeNote, INote } from "../interface/note.interface";
import Note from "./Note";
import { useDispatch } from "react-redux";
import { ChangeNote } from "../store/addNoteSlice";

const ChangNote = ({
  setOpen,
  note,
}: {
  setOpen: (value: boolean) => void;
  note: INote;
}) => {
  const [formData, setFormData] = useState<IChangeNote>({
    old: {
      title: note.title,
      description: note.description,
      type: note.type,
    },
    new: {
      title: note.title,
      description: note.description,
      type: note.type,
    },
  });

  const dispatch = useDispatch();

  function changeNote() {
    console.log(formData);
    dispatch(ChangeNote(formData));
    setOpen(false);
  }

  return (
    <div>
      <div className="change">
        <label>Введите заголовок:</label>
        <br />
        <input
          value={formData.new.title}
          // onChange={(e) => setFormData(formData.title:e.target.value}
          onChange={(e) =>
            setFormData({
              old: { ...formData.old },
              new: { ...formData.new, title: e.target.value },
            })
          }
          //{ ...formData,  new.title: e.target.value }
          placeholder="Заголовок..."
        ></input>
        <hr />
        <label>Введите описание:</label>
        <br />
        <textarea
          value={formData.new.description}
          onChange={(e) =>
            setFormData({
              old: { ...formData.old },
              new: { ...formData.new, description: e.target.value },
            })
          }
          placeholder="Введите описание..."
        ></textarea>
        <br />
        <label>Выберите тип: </label>

        <select
          value={formData.new.type}
          onChange={(e) =>
            setFormData({
              old: { ...formData.old },
              new: { ...formData.new, type: e.target.value },
            })
          }
        >
          <option value="Срочные">Срочный</option>
          <option value="Важные">Важный</option>
          <option value="Обычные">Обычный</option>
          <option value="Дневник">Дневник</option>
          <option value="Секретные">Секретный</option>
        </select>
        <br />
        <button onClick={changeNote}>Закладить</button>
      </div>
    </div>
  );
};

export default ChangNote;
