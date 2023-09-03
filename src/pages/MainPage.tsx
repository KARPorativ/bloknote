import React, { useState } from "react";
import NoteList from "../components/NoteList";
import { FiPlusCircle } from "react-icons/fi";
import MyModal from "../UI/MyModal/MyModal";
import NewNote from "../components/NewNote";
import AsideMeny from "../components/AsideMeny";

const MainPage = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  function menuAdd() {
    setOpenModal(true);
  }

  return (
    <div>
      <div className="mainaside">
        <div className="aside">
          <AsideMeny></AsideMeny>
        </div>
        <div className="vertical-line"></div>
      </div>

      <div className="mainplan">
        <div style={{ width: 100 }}></div>
        <NoteList></NoteList>
        <button className="butplus" onClick={menuAdd}>
          <FiPlusCircle size="100"></FiPlusCircle>
        </button>
        <MyModal setOpen={setOpenModal} isOpen={openModal}>
          <NewNote setOpen={setOpenModal}></NewNote>
        </MyModal>
      </div>
    </div>
  );
};

export default MainPage;
