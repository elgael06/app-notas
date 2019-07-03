import React  from "react";
import { IonContent,IonCardTitle, IonItem } from "@ionic/react";
import iNota from '../interface/iNota'

type  iItem  = {  nota :  iNota,borrarNota:(id: Number)=>void  }


const Nota =(props:iItem)=>{
    let { nota, borrarNota} =props;
return (
    <IonItem>
        <IonContent>
            <IonCardTitle>{nota.titulo}</IonCardTitle>
        </IonContent>
    </IonItem>
)
}

export default Nota;