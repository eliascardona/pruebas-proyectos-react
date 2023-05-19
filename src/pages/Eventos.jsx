import React, { useEffect, useState } from "react"
import { firestore } from "../firebase/base"
import { collection, onSnapshot } from "firebase/firestore"
import TarjetaDeEventoDos from "../components/eventos/TarjetaDeEventoDos"
import StyledHeader from "../components/StyledHeader/StyledHeader"

const FETCH_STATES = {
  LOADING: 'loading',
  SUCCESS: 'success',
  UNAUTHORIZED: 'unauthorized',
  PERMISSION_DENIED: 'permission denied',
  ERROR: 'error',
};

const Eventos = () => {
  const [dataClientes, setDataClientes] = useState({
    state: FETCH_STATES.LOADING,
    information: [],
  });
  
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(firestore, 'clientes'),
      (snapshot) => {
        const data = [];
        snapshot.forEach((doc) => {
          data.push(doc.data());
        });
        setDataClientes({ state: FETCH_STATES.SUCCESS, information: data });
      },
      (error) => {
        console.log(error, error.code);
        switch (error.code) {
          case 'permission-denied':
            setDataClientes({ state: FETCH_STATES.PERMISSION_DENIED, information: [] });
            break;
          case 'unauthenticated':
            setDataClientes({ state: FETCH_STATES.UNAUTHORIZED, information: [] });
            break;
          default:
            setDataClientes({ state: FETCH_STATES.ERROR, information: [] });
            break;
        }
      }
    );
    return unsubscribe;
  }, [])
  return (
    <>
      <StyledHeader h1={"Eventos"} p={"Fomentamos la innovación"}/>
      {
        dataClientes.information.map((info, i, arr) => {
          return (
            <TarjetaDeEventoDos {...info} />
          )
        })
      }
    </>
  );
};

export default Eventos;