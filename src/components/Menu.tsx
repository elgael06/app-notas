import React from "react";
import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonMenu,
    IonList,
    IonItem,
    IonContent,
    IonRouterOutlet
} from "@ionic/react";

const Menu:React.FC =()=>{
    return (  <>
      <IonMenu side="start" menuId="first">
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Start Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
  
      <IonMenu side="start" menuId="custom" class="my-custom-menu">
        <IonHeader>
          <IonToolbar color="tertiary">
            <IonTitle>Custom Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
  
      <IonMenu side="end" type="push">
        <IonHeader>
          <IonToolbar color="danger">
            <IonTitle>End Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonRouterOutlet></IonRouterOutlet>
    </>)
}

export default Menu;