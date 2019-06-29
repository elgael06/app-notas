import React, { useState } from "react";
import { IonContent } from "@ionic/react";
interface iNota {
    titulo: "";
    descripcion: "";
  }
  let listaNotas: Array<iNota>;
interface itareas { tareas: iNota[] }

const LisataTareas: React.FC=(props :itareas)=>{
    let {tareas} = props;
return (<IonContent >
    listo
</IonContent>)
}


export default LisataTareas;