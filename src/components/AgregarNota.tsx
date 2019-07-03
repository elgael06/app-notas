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
   IonTextarea, 
   IonAlert} from "@ionic/react";

import iNota from '../interface/iNota';

type agregar ={setEstatus:(estatus:boolean)=>void, estatus:boolean,guardar:(nota:iNota)=>void }

const titleProps:string="";
const descriptionProps:string="";

const AgregarNota =(props:agregar)=>{
    let {setEstatus,estatus,guardar} = props;
    const [titulo,setTitutlo]=useState(titleProps)
    const [descripcion,setDescripcion]=useState(descriptionProps);
    const [showAlert1, setShowAlert1] = useState(false);

  const checarGuardar=():void=>{
      let notaR:iNota= {
        descripcion:descripcion,
        titulo:titulo,
      }
      descripcion!=="" && titulo!==""?function(){
     guardar(notaR)
    setDescripcion("");
    setTitutlo("");
    }():setShowAlert1(true);
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
                <IonTextarea rows={6} cols={20} value={descripcion}  auto-grow={true}
                onIonChange={(e:any)=>setDescripcion(e.target.value)}>
                  </IonTextarea>
            </IonItem>
            </IonContent>
            <IonButton color="success" onClick={checarGuardar}>Guardar</IonButton>
            </IonModal>
            <IonAlert
          isOpen={showAlert1}
          onDidDismiss={() => setShowAlert1(false)}
          header={"Alerta"}
          message={"-Faltan Parametros !!!"}
          buttons={[
            {
              text: "Aceptar",
              cssClass: "primary",
              handler:()=>setShowAlert1(false)
            }
          ]}
      />
        </IonContent>
    );
}

export default AgregarNota;