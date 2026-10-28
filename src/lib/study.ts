export const cards = [
['T01','Qué días pasa el camión por mi comunidad'],
['T02','A qué hora sacar la basura'],
['T03','Por cuáles calles pasa el camión'],
['T04','Avisos de cambios o cancelaciones de la recolección'],
['T05','Qué hacer cuando el camión no pasa'],
['T06','Dónde llevar los materiales reciclables'],
['T07','A qué hora abren y cierran los centros de acopio'],
['T08','Qué materiales recibe cada centro de acopio'],
['T09','Cómo llegar a un centro de acopio'],
['T10','Dónde llevar aparatos electrónicos que ya no uso'],
['T11','Dónde llevar muebles viejos'],
['T12','Cómo limpiar y preparar los materiales para entregarlos'],
['T13','Qué bolsa o recipiente usar para sacar los residuos'],
['T14','Qué residuos se pueden entregar al camión recolector'],
['T15','Qué materiales puedo separar para reciclar'],
['T16','Cuándo y dónde se realizan campañas de recolección'],
] as const;
export const suggestions = ['Recolección de basura','Centros de acopio','Guía de reciclaje'];
export type Group = { id:string; name:string; cards:string[] };
export type Answer = {id:string;createdAt:string;community:string;duration:number;groups:Group[];comment:string};
