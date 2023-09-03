import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ChangeStatus } from "../store/addNoteSlice";

const Password = ({ setOpen }: { setOpen: (value: boolean) => void }) => {
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  function checkPassword() {
    if (password == "123") {
      dispatch(ChangeStatus("Секретные"));
      setOpen(false);
    }
  }

  return (
    <div>
      <label>Введите пароль:</label>
      <br />
      <input
        placeholder="Пароль..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button onClick={checkPassword}>Проверить</button>
    </div>
  );
};

export default Password;
