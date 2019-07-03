import React  from "react";
import { IonCard,IonCardTitle,IonList } from "@ionic/react";

import iNota from '../interface/iNota'
import Nota from './Nota'

type  iListaTareas  = {  notas :  iNota[],borrarNota:(id: Number)=>void ,verNota:(seleccion:iNota,id:Number)=>void}

const LisataTareas = ( props:iListaTareas)=>{
let {notas,borrarNota,verNota} = props;
return notas.length>0 ?<IonList  style={{ padding: "20px",marginTop:"50px" }} mode="md" >
          {notas.map((e, i) =><Nota nota={e} key={i} id={i} borrarNota={() => borrarNota(i)} verNota={verNota} />)}
        </IonList>
        : (<IonCard
          color="warning "
          style={{
            padding: "20px",
            marginTop: "50px"
          }}
          slot="fixed"
        >
          <IonCardTitle>Sin Notas A Mostrar</IonCardTitle>
        </IonCard>)
}


export default LisataTareas;