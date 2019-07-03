import iNota from '../interface/iNota';

const ObetnerNotas =()=> ComprobarNotas() ? JSON.parse( localStorage.getItem("listaNotas") || "" )  :  [] ;

const ComprobarNotas = () => localStorage.getItem("listaNotas")!= null;

const InsertarNota =(nueva :iNota)=>{
        let notas:iNota[] = ObetnerNotas();
        notas.push(nueva);
        localStorage.setItem("listaNotas",JSON.stringify(notas));
}

const BorrarNota=(index:Number)=>{
    let notas:iNota[] = ObetnerNotas();
    notas = notas.filter((e,i)=>{
        return index!== i;
    });
    localStorage.setItem("listaNotas",JSON.stringify(notas));
}
export {
    ObetnerNotas,
    ComprobarNotas,
    InsertarNota,
    BorrarNota
}