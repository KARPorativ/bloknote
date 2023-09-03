import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ChangeStatus } from "../store/addNoteSlice";
import MyModal from "../UI/MyModal/MyModal";
import ChangNote from "./ChangNote";
import Password from "./Password";

const AsideMeny = () => {
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState<boolean>(false);
  function modalOpen() {
    // dispatch(ChangeStatus("Секретные"));
    setOpenModal(true);
  }

  return (
    <div>
      <div className="aside">
        <button
          style={{ backgroundColor: "" }}
          onClick={() => dispatch(ChangeStatus("Все"))}
        >
          Все
        </button>
        <button
          style={{ backgroundColor: "red" }}
          onClick={() => dispatch(ChangeStatus("Срочные"))}
        >
          Срочно
        </button>
        <button
          style={{ backgroundColor: "orange" }}
          onClick={() => dispatch(ChangeStatus("Важные"))}
        >
          Важные
        </button>
        <button
          style={{ backgroundColor: "green" }}
          onClick={() => dispatch(ChangeStatus("Обычные"))}
        >
          Обычные
        </button>
        <button
          style={{ backgroundColor: "blue" }}
          onClick={() => dispatch(ChangeStatus("Дневник"))}
        >
          Дневник
        </button>
        <button
          style={{ backgroundColor: "black", color: "white" }}
          onClick={() => modalOpen()}
        >
          Секретные
        </button>
      </div>
      <MyModal setOpen={setOpenModal} isOpen={openModal}>
        <Password setOpen={setOpenModal}></Password>
      </MyModal>
    </div>
  );
};

export default AsideMeny;
