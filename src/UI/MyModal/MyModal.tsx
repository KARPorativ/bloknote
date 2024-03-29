import classes from "./MyModal.module.css";
import cn from "classnames";
import React, { useEffect, useRef } from "react";

interface IModal {
  isOpen: boolean;
  setOpen: (stat: boolean) => void;
  children: JSX.Element;
}

const MyModal: React.FC<IModal> = ({ isOpen, setOpen, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.addEventListener("click", (e: MouseEvent): void => {
      if (
        containerRef.current &&
        divRef.current &&
        !e.composedPath().includes(containerRef.current) &&
        e.composedPath().includes(divRef.current)
      ) {
        setOpen(false);
        console.log(e.composedPath().includes(containerRef.current));
      }
    });
  }, [setOpen]);
  //fdrfgruyh5yt5yfytryg

  return (
    <div
      ref={divRef}
      className={cn(classes.modal, { [classes.active]: isOpen == true })}
    >
      <div className={classes.component} ref={containerRef}>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
