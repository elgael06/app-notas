import React  from "react";
import { IonContent,IonCard,IonCardTitle, IonItem, IonLabel } from "@ionic/react";
import iNota from '../interface/iNota'

type  iItem  = {  nota :  iNota,borrarNota:(id: Number)=>void  }


const Nota =(props:iItem)=>{
    let { nota, borrarNota} =props;

    console.log(nota)
return (
    <IonItem>
        <IonContent>
            <IonLabel>{nota.titulo}</IonLabel>
        </IonContent>
    </IonItem>
)
}

export default Nota;