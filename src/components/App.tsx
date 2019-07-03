import React, { useState } from "react";
import {
  IonApp,
  IonButton,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonIcon,
  IonCardTitle,
  IonAlert
} from "@ionic/react";
import LisataTareas from "./LisataTareas";
import iNota from '../interface/iNota'
import AgregarNota from './AgregarNota'

let listaNotas: Array<iNota>=[];

const App: React.FC = () => {
  //const [dato, setDato] = useState("");
  const [Lista, setLista] = useState(listaNotas);
  const [showAlert1, setShowAlert1] = useState(false);
  const [vistaModal,setVistaModal] = useState(false)

  const guardarrNota = (nota: iNota) => {
    console.log("Guardar...");
    let respaldo = Lista.map(e => e) ;
    respaldo.push(nota);
    setLista(respaldo);
    console.log(Lista);
    setVistaModal(false)
  };
  const agregarNota = () => {
    console.log("Agregar...");
    const el: HTMLElement =
      document.getElementById("#agregarNota") || document.body;
    el.style.display = "flex";
    setShowAlert1(true);
  };
  const borrarNota = (id: Number) => {
    console.log("Borrar !!!");
    const lista = Lista.filter((e:iNota, i:Number) => i !== id);
    setLista(lista);
  };
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle style={{ textAlign: "center", fontSize: "21px" }}>
            Aplicacion De Notas
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton color="success" style={{ float: "right " }} onClick={()=>setVistaModal(true)}>
          {" "}
          Agregar <IonIcon name="add-circle" />{" "}
        </IonButton>
        <IonCardTitle style={{ marginTop: "30px" }}>Lista Notas</IonCardTitle>
        <LisataTareas  notas={Lista} borrarNota={borrarNota}   />
      </IonContent>
      <IonButton>Listo</IonButton>

      <AgregarNota estatus={vistaModal} setEstatus={setVistaModal} guardar={guardarrNota} />

      <IonAlert
        isOpen={showAlert1}
        onDidDismiss={() => setShowAlert1(false)}
        header={"Confirmar"}
        subHeader={"Eliminar !!!"}
        message={"Nota Seleccionada ???"}
        buttons={[
          {
            text: "Cancelar",
            role: "cancel",
            cssClass: "secondary",
            handler: blah => {
              console.log("Confirm Cancel: blah");
            }
          },
          {
            text: "Aceptar",
            handler: () => {
              console.log("Confirm Okay");
            }
          }
        ]}
      />
    </IonApp>
  );
};

export default App;
