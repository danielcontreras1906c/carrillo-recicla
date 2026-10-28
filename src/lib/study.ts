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

/** Clarifies the scope of each content card without suggesting a category or an answer. */
export const cardHelp: Record<string,string> = {
 T01: 'Información sobre los días de recolección en la comunidad donde vives. No tienes que escribir un día.',
 T02: 'Información para saber a qué hora conviene dejar los residuos listos para la recolección. No tienes que indicar una hora.',
 T03: 'Información sobre las calles o zonas que recorre el camión recolector. No tienes que indicar una calle.',
 T04: 'Avisos que informan si la recolección cambia de día, se retrasa o se cancela.',
 T05: 'Indicaciones sobre qué puede hacer una persona si la recolección esperada no se realiza.',
 T06: 'Información sobre lugares donde se pueden entregar materiales para reciclar.',
 T07: 'Información sobre los horarios de atención de los lugares que reciben materiales reciclables. Un centro de acopio es uno de esos lugares.',
 T08: 'Información sobre los tipos de materiales que acepta cada lugar de entrega. No todos reciben lo mismo.',
 T09: 'Información para encontrar un lugar de entrega, como su ubicación, dirección o indicaciones para llegar.',
 T10: 'Información sobre opciones para entregar aparatos que ya no se usan, como computadoras o televisores.',
 T11: 'Información sobre opciones para entregar muebles que ya no se usan, como sillas, mesas o sillones.',
 T12: 'Indicaciones para preparar los materiales antes de entregarlos, por ejemplo, si deben estar limpios o secos.',
 T13: 'Información sobre cómo colocar los residuos para la recolección: bolsas, recipientes u otras condiciones.',
 T14: 'Información sobre qué tipos de residuos acepta el servicio de recolección y cuáles no.',
 T15: 'Información para identificar qué materiales pueden separarse para reciclar. No tienes que hacer una lista.',
 T16: 'Información sobre fechas y lugares de actividades especiales para recibir residuos o materiales.'
};
