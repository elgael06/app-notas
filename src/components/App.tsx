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

interface iNota {
  titulo: "";
  descripcion: "";
}
let listaNotas: Array<iNota>;

const App: React.FC = () => {
  //const [dato, setDato] = useState("");
  const [Lista, setLista] = useState(listaNotas);
  const [showAlert1, setShowAlert1] = useState(false);

  const guardarrNota = (nota: iNota) => {
    console.log("Guardar...");
    const respaldo = Lista.map(e => e);
    respaldo.push(nota);
    setLista(respaldo);
    console.log(Lista);
  };
  const agregarNota = (nueva: any) => {
    console.log("Agregar...");
    const el: HTMLElement =
      document.getElementById("#agregarNota") || document.body;
    el.style.display = "flex";
    setShowAlert1(true);
  };
  const borrarNota = (id: number) => {
    console.log("Borrar !!!");
    const lista = Lista.filter((e, i) => i != id);
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
        <IonButton style={{ float: "right " }} onClick={agregarNota}>
          {" "}
          Agregar <IonIcon name="add-circle" />{" "}
        </IonButton>
        <IonCardTitle style={{ marginTop: "30px" }}>Lista Notas</IonCardTitle>
        <LisataTareas />
      </IonContent>
      <IonButton>Listo</IonButton>
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
