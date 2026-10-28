import {suggestions,type Group} from './study.ts';
type Classification={groups:Group[];pending:string[]};
const normalize=(name:string)=>name.trim().toLocaleLowerCase('es');
export function restoreSuggestedGroup(groups:Group[],name:string,id:string):Group[]{
 if(!suggestions.includes(name)||groups.length>=20||groups.some(g=>normalize(g.name)===normalize(name))||groups.some(g=>g.id===id))return groups;
 return [...groups,{id,name,cards:[]}];
}
export function moveCard<T extends Classification>(draft:T,id:string,to:string):T{
 if(to!=='pending'&&!draft.groups.some(g=>g.id===to))return draft;
 if(!draft.pending.includes(id)&&!draft.groups.some(g=>g.cards.includes(id)))return draft;
 const groups=draft.groups.map(g=>({...g,cards:g.cards.filter(card=>card!==id)}));
 const pending=draft.pending.filter(card=>card!==id);
 if(to==='pending')pending.push(id);else groups.find(g=>g.id===to)!.cards.push(id);
 return {...draft,groups,pending};
}
