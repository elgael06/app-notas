import React from "react";
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
   IonIcon,
} from "@ionic/react";
type agregar ={setEstatus:(estatus:boolean)=>void, estatus:boolean,titulo:String,descripcion:String,ConfirmarBorrado:()=>void }

const VistaNotas =(props:agregar)=>{
    let {setEstatus,estatus,titulo,descripcion,ConfirmarBorrado} = props;

    return(
        <IonContent >
            <IonModal isOpen={estatus}>
            <IonHeader translucent >
            <IonToolbar  color="warning">
            
              <IonTitle> <IonIcon name="trash" color="danger"  onClick={ConfirmarBorrado}> Borrar</IonIcon> Ver Nota</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={()=>setEstatus(false)}>Cerrar</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
            <IonContent fullscreen>
            <IonItem>
                <IonLabel position="stacked">Titilo</IonLabel>
                <IonInput required type="text" disabled> {titulo}</IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="stacked">Descripcion</IonLabel>
                <IonTextarea rows={6} cols={20}  disabled auto-grow={true}>
                {descripcion}
                  </IonTextarea>
            </IonItem>
            </IonContent>
            </IonModal>
        </IonContent>
    );
}

export default VistaNotas;