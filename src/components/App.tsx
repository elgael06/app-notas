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
import VistaNotas from './VistaNota';
import  {
  ObetnerNotas,
  InsertarNota,
  BorrarNota
} from '../manager/rescatarNotas'

let listaNotas: Array<iNota>=ObetnerNotas();
let idBorradoProps:Number=-1;
let seleccionProps :iNota={
  titulo:"",descripcion:""
};

const App: React.FC = () => {
  //const [dato, setDato] = useState("");
  const [Lista, setLista] = useState(listaNotas);
  const [showAlert1, setShowAlert1] = useState(false);
  const [vistaModal,setVistaModal] = useState(false);
  const [vistaModaVistal,setVistaModalVista] = useState(false);
  const [seleccion,setSeleccion] =useState(seleccionProps);
  const [idBorrado,setIdBorrado] = useState(idBorradoProps);

  const guardarNota = (nota: iNota) => {
    console.log("Guardar...");  
    InsertarNota(nota);
    setLista(ObetnerNotas());
    setVistaModal(false)
  };
  const borrarNota = (id: Number) => {
    setIdBorrado(id);
    setShowAlert1(true);
  };
  const ConfirmarBorrado=()=>{
    console.log("Borrar !!!");
    const lista = Lista.filter((e:iNota, i:Number) => i !== idBorrado);
    BorrarNota(idBorrado);
    setLista(lista);
    setShowAlert1(false);
    setVistaModalVista(false);
  }
  const verNota =(seleccionNota :iNota,id:Number)=>{
   console.log("Nota=> ",seleccionNota ) ;
   setSeleccion(seleccionNota);
   setVistaModalVista(true);
   setIdBorrado(id);
  }
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
      
      <LisataTareas  notas={Lista} borrarNota={borrarNota}  verNota={verNota}  />
      <AgregarNota estatus={vistaModal} setEstatus={setVistaModal} guardar={guardarNota} />
      <VistaNotas setEstatus ={setVistaModalVista} 
              estatus={vistaModaVistal} 
              titulo={seleccion.titulo || ""} 
              descripcion={seleccion.descripcion || ""}  
              ConfirmarBorrado={()=>setShowAlert1(true)}
          />
      <IonFab vertical="bottom" horizontal="end" slot="fixed" onClick={()=>setVistaModal(true)}>
        <IonFabButton  color="primary">
          <IonIcon name="add" />
        </IonFabButton>
      </IonFab>
      <IonAlert
          isOpen={showAlert1}
          onDidDismiss={() => setShowAlert1(false)}
          header={"Confirmar"}
          message={"¿ Eliminar Nota Seleccionada ?"}
          buttons={[
            {
              text: "Cancelar",
              role: "cancel",
              cssClass: "secondary",
              handler: blah => {
                console.log("Confirm Cancel.");
                setIdBorrado(-1);                
              }
            },
            {
              text: "Aceptar",
              cssClass: "primary",
              handler: ConfirmarBorrado
            }
          ]}
      />
      </IonContent>
    </IonApp>
  );
};

export default App;
