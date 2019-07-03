import React  from "react";
import { IonCard,IonCardTitle,IonList } from "@ionic/react";

import iNota from '../interface/iNota'
import Nota from './Nota'

type  iListaTareas  = {  notas :  iNota[],borrarNota:(id: Number)=>void }

const LisataTareas = ( props:iListaTareas)=>{
let {notas,borrarNota} = props;
return notas.length>0 ?<IonList  style={{ padding: "20px",marginTop:"50px" }} mode="ios" >
          {notas.map((e, i) =><Nota nota={e} key={i} borrarNota={() => borrarNota(i)} />)}
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