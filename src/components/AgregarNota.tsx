import React, { useState, SyntheticEvent  } from "react";
import { IonContent, IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonNote, IonItem, IonLabel, IonInput, IonTextarea } from "@ionic/react";

import iNota from '../interface/iNota'

type agregar ={setEstatus:(estatus:boolean)=>void, estatus:boolean,guardar:(nota:iNota)=>void }
let nota : iNota= {
  descripcion:"",
  titulo:"",
}

const AgregarNota =(props:agregar)=>{
    let {setEstatus,estatus,guardar} = props;
    const [nueva ,setNueva] = useState(nota)
    const [titulo,setTitutlo]=useState(nota.titulo)
    const [descripcion,setDescripcion]=useState(nota.descripcion)

  const checarGuardar=():void=>{
      let notaR:iNota= {
        descripcion:"",
        titulo:"",
      }
     notaR.titulo = titulo;
     notaR.descripcion = descripcion;
     guardar(notaR);
  }

    return(
        <IonContent >
            <IonModal isOpen={estatus}>
            <IonHeader translucent>
            <IonToolbar>
              <IonTitle>Agregar Nota</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={()=>setEstatus(false)}>Cerrar</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
            <IonContent fullscreen>
            <IonItem>
                <IonLabel position="stacked">Titilo</IonLabel>
                <IonInput  required type="text"  value={titulo}  onChange={(e: SyntheticEvent ):void=>setTitutlo(e.target.value || "")} ></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="stacked">Descripcion</IonLabel>
                <IonTextarea rows={6} cols={20}    value={descripcion}   onChange={(e:Event)=>setDescripcion(e.target.value|| "")}></IonTextarea>
            </IonItem>
            <IonButton color="success" onClick={checarGuardar}>Guardar</IonButton>
            </IonContent>
            </IonModal>
        </IonContent>
    );
}

export default AgregarNota;