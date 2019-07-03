import React, { useState } from "react";
import { IonContent,
   IonModal,
   IonHeader,
   IonToolbar,
   IonTitle,
   IonButtons,
   IonButton,
   IonItem,
   IonLabel,
   IonInput,
   IonTextarea } from "@ionic/react";

import iNota from '../interface/iNota';

type agregar ={setEstatus:(estatus:boolean)=>void, estatus:boolean,guardar:(nota:iNota)=>void }

const titleProps:string="";
const descriptionProps:string="";

const AgregarNota =(props:agregar)=>{
    let {setEstatus,estatus,guardar} = props;
    const [titulo,setTitutlo]=useState(titleProps)
    const [descripcion,setDescripcion]=useState(descriptionProps)

  const checarGuardar=():void=>{
      let notaR:iNota= {
        descripcion:descripcion,
        titulo:titulo,
      }
      descripcion!=="" && titulo!==""?function(){
     guardar(notaR)
    setDescripcion("");
    setTitutlo("");
    }():window.alert("Fatan Parametros...");
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
                <IonInput required type="text"  value={titulo}  
                onIonChange={(e:any)=>setTitutlo(e.target.value)} > </IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="stacked">Descripcion</IonLabel>
                <IonTextarea rows={6} cols={20} value={descripcion} 
                onIonChange={(e:any)=>setDescripcion(e.target.value)}>
                  </IonTextarea>
            </IonItem>
            </IonContent>
            <IonButton color="success" onClick={checarGuardar}>Guardar</IonButton>
            </IonModal>
        </IonContent>
    );
}

export default AgregarNota;