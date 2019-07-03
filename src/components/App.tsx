import React, { useState } from "react";
import {
  IonApp,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonIcon,
  IonAlert,
  IonFab,
  IonFabButton
} from "@ionic/react";
import LisataTareas from "./LisataTareas";
import iNota from '../interface/iNota';
import AgregarNota from './AgregarNota';

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
    setVistaModal(false)
  };
  const borrarNota = (id: Number) => {
    console.log("Borrar !!!");
    const lista = Lista.filter((e:iNota, i:Number) => i !== id);
    setLista(lista);
  };
  return (
    <IonApp>
      <IonContent>
      <IonHeader slot="fixed">
        <IonToolbar color="primary">
          <IonTitle style={{ textAlign: "center", fontSize: "21px" }}>
            Aplicacion De Notas
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <LisataTareas  notas={Lista} borrarNota={borrarNota}   />
      <AgregarNota estatus={vistaModal} setEstatus={setVistaModal} guardar={guardarrNota} />
      <IonFab vertical="bottom" horizontal="end" slot="fixed" onClick={()=>setVistaModal(true)}>
        <IonFabButton  color="primary">
          <IonIcon name="add" />
        </IonFabButton>
      </IonFab>
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
      </IonContent>
    </IonApp>
  );
};

export default App;
