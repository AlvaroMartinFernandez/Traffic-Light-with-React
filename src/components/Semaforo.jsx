import Light from "./Light";
import { useState, useEffect } from "react";
export default function Semaforo() {

  const SEMAFORO = ["bg-danger", "bg-warning", "bg-success"];

  const [status, setStatus] = useState([false, false, false]);
  const [play, setPlay] = useState(false);
  const [contador, setContador] = useState(0);

  useEffect(() => {

    if (play === true) {
      console.log("useEffect contador");
      console.log(contador);
      setStatus((prevStatus) => {
        const newStatus = [prevStatus[2], prevStatus[0], prevStatus[1]];
        return newStatus;
      });
      handleOnPlay();
    }
  }, [contador]);

  useEffect(() => {
    console.log(play);
    if (play === true) {
      console.log("useEffect play");
      handleOnPlay();
    }
  }, [play]);

  console.log(status);
  const handleOnClick = (index) => {

    let newStatus = [false, false, false];
    status[index] === false ? newStatus[index] = true : newStatus[index] = false;
    setStatus(newStatus);
  };

  const handleOnPlay = () => {
    setTimeout(() => {
      console.log(status);
      setContador((prevContador) => prevContador + 1);
    }, 1500);
  };

  return (
    <>
      <div className="row  d-flex justify-content-center align-items-center m-4">
        <div className="row bg-black rounded border border-dark semaforo d-flex justify-content-center align-items-center">
          {SEMAFORO.map((color, index) => <Light key={index} onClick={() => handleOnClick(index)} color={color} status={status[index]} />)}
        </div>
      </div>
      <div className="row  d-flex justify-content-center align-items-center m-4">
        <button type="button" onClick={() => {
          setStatus([true, false, false]);
          setPlay((prePlay) => !prePlay);
        }
        }
          className="col-2 btn btn-primary">{play ? 'Pausar' : 'Reproducir'}</button>
      </div>
    </>
  );
}
