import React, { FC, useState } from "react";
import { INote } from "../interface/note.interface";
import { PiPencilLine } from "react-icons/pi";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { DeleteNote } from "../store/addNoteSlice";
import MyModal from "../UI/MyModal/MyModal";
import ChangNote from "./ChangNote";

interface IProps {
  note: INote;
  st: string;
}

const Note: FC<IProps> = ({ note, st }) => {
  //
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState<boolean>(false);
  function modalOpen() {
    setOpenModal(true);
  }

  return (
    <div>
      <div className={"cart " + note.type}>
        <h4>{note.title}</h4>
        <hr />
        <div>{note.description}</div>
        <button className="pen" onClick={() => modalOpen()}>
          <PiPencilLine></PiPencilLine>
        </button>
        <button className="backet" onClick={() => dispatch(DeleteNote(note))}>
          <MdDeleteForever></MdDeleteForever>
        </button>
      </div>
      <MyModal setOpen={setOpenModal} isOpen={openModal}>
        <ChangNote setOpen={setOpenModal} note={note}></ChangNote>
      </MyModal>
    </div>
  );
};

export default Note;
