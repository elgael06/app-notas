import { IonContent,IonCardTitle, IonItem,  IonFab, IonIcon, IonButton, IonFabList } from "@ionic/react";
import React  from "react";
import iNota from '../interface/iNota'

type  iItem  = {  nota :  iNota,borrarNota:(id: Number)=>void ,id:Number  ,verNota:(seleccion:iNota,id:Number)=>void }


const Nota =(props:iItem)=>{
    let { nota, borrarNota,id,verNota} =props;

return (
    <IonItem>
        <IonIcon name="list" />
        <IonCardTitle>{nota.titulo}</IonCardTitle>
        <IonContent>
            <IonFab  vertical="bottom" horizontal="end" slot="fixed">
                <IonButton >
                    <IonIcon name="settings" />
                </IonButton>
                <IonFabList side="start">
                    <IonButton  color="danger" onClick={()=>borrarNota(id)}><IonIcon name="trash" /></IonButton>
                    <IonButton color="warning"  onClick={()=> verNota(nota,id)} ><IonIcon name="eye" /></IonButton>
                    <IonButton color="secondary" ><IonIcon name="list" /></IonButton>
                </IonFabList>
            </IonFab>
        </IonContent>
    </IonItem>
)
}

export default Nota;






