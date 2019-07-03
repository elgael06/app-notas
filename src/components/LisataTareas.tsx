import React  from "react";
import { IonContent,IonCard,IonCardTitle,IonList } from "@ionic/react";

import iNota from '../interface/iNota'
import Nota from './Nota'

type  iListaTareas  = {  notas :  iNota[],borrarNota:(id: Number)=>void }

const LisataTareas = ( props:iListaTareas)=>{
let {notas,borrarNota} = props;
return (<IonContent  style={{
    height: "490px",
    overflowY: "auto",
    width: "100%"
  }}>
    {notas ? (
        <IonList  style={{ padding: "20px" }}>
          {notas.map((e, i) => (
            <Nota nota={e} borrarNota={() => borrarNota(i)} />
          ))}
        </IonList>
      ) : (
        <IonCard
          color="warning "
          style={{
            padding: "20px",
            marginTop: "20px"
          }}
        >
          <IonCardTitle>Sin Notas A Mostrar</IonCardTitle>
        </IonCard>
      )}
</IonContent>)
}


export default LisataTareas;