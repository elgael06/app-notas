import { IonContent,IonCardTitle, IonItem,  IonFab, IonIcon, IonActionSheet } from "@ionic/react";
import React, { useState }  from "react";
import iNota from '../interface/iNota'

type  iItem  = {  nota :  iNota,borrarNota:(id: Number)=>void ,id:Number  ,verNota:(seleccion:iNota,id:Number)=>void }


const Nota =(props:iItem)=>{
    let { nota, borrarNota,id,verNota} =props;
    const [showActionSheet,  setShowActionSheet] = useState(false)

return (
    <IonItem>
        <IonIcon name="list-box" />
        <IonCardTitle>{nota.titulo}</IonCardTitle>
        <IonContent>
            <IonFab  vertical="bottom" horizontal="end" slot="fixed">
                    <IonIcon name="options"  onClick={()=>setShowActionSheet(true)} />
            </IonFab>
                <IonActionSheet
                isOpen={showActionSheet}
                onDidDismiss={() => setShowActionSheet(false)}
                buttons={[
                  {
                    text: 'Mostrar',
                    role: 'destructive',
                    icon: 'eye',
                    handler: () => {
                      console.log('Delete clicked');
                      verNota(nota,id);
                    }
                  },                
                  {
                    text: 'Editar',
                    role: 'destructive',
                    icon: 'list',
                    handler: () => {
                      console.log('Editar clicked');
                    }
                  },
                {
                    text: 'Eliminar',
                    role: 'destructive',
                    icon: 'trash',
                    handler: () => {
                      console.log('Delete clicked');
                      borrarNota(id)
                    }
                  },]
                }
                >
                </IonActionSheet>
        </IonContent>
    </IonItem>
)
}

export default Nota;






