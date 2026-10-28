import test from 'node:test';
import assert from 'node:assert/strict';
import {restoreSuggestedGroup,moveCard} from '../src/lib/classification.ts';
import {suggestions} from '../src/lib/study.ts';
test('recovers a removed default group, without changing the remaining groups',()=>{
 const groups=[{id:'custom',name:'Mi grupo',cards:['T01']}];
 const result=restoreSuggestedGroup(groups,suggestions[0],'new-default');
 assert.deepEqual(result,[...groups,{id:'new-default',name:suggestions[0],cards:[]}]);
 assert.equal(groups.length,1);
});
test('does not duplicate an existing name, even with different capitalization or spaces',()=>{
 const groups=[{id:'custom',name:'  '+suggestions[0].toUpperCase()+'  ',cards:[]}];
 assert.equal(restoreSuggestedGroup(groups,suggestions[0],'new'),groups);
});
test('respects the existing 20-group limit and rejects non-default names',()=>{
 const groups=Array.from({length:20},(_,i)=>({id:String(i),name:'Personal '+i,cards:[]}));
 assert.equal(restoreSuggestedGroup(groups,suggestions[0],'new'),groups);
 assert.deepEqual(restoreSuggestedGroup([],'Un grupo inventado','new'),[]);
});
test('a restored default can be removed and restored again without losing cards',()=>{
 const groups=[{id:'other',name:'Otro',cards:['T02']}];
 const restored=restoreSuggestedGroup(groups,suggestions[1],'one');
 const removed=restored.filter(g=>g.id!=='one');
 assert.deepEqual(restoreSuggestedGroup(removed,suggestions[1],'two'),[...groups,{id:'two',name:suggestions[1],cards:[]}]);
});
test('returning a card removes it from its group and adds it once to pending',()=>{
 const draft={groups:[{id:'g0',name:'Grupo',cards:['T01','T02']}],pending:['T03'],comment:'Conservar'};
 const before=structuredClone(draft);
 const result=moveCard(draft,'T01','pending');
 assert.deepEqual(result.groups[0].cards,['T02']);
 assert.deepEqual(result.pending,['T03','T01']);
 assert.equal(result.comment,'Conservar');
 assert.deepEqual(draft,before);
 assert.deepEqual(moveCard(result,'T01','pending').pending,['T03','T01']);
});
test('a returned card can be classified again in a restored group',()=>{
 const draft={groups:[{id:'g0',name:'Grupo',cards:['T01']}],pending:[] as string[]};
 const returned=moveCard(draft,'T01','pending');
 const restored={...returned,groups:restoreSuggestedGroup(returned.groups,suggestions[1],'restored')};
 const result=moveCard(restored,'T01','restored');
 assert.deepEqual(result.pending,[]);
 assert.deepEqual(result.groups.find(g=>g.id==='restored')?.cards,['T01']);
 assert.equal(result.groups.flatMap(g=>g.cards).filter(id=>id==='T01').length,1);
});
test('invalid targets and unknown cards cannot remove cards from the activity',()=>{
 const draft={groups:[{id:'g0',name:'Grupo',cards:['T01']}],pending:[]};
 assert.equal(moveCard(draft,'T01','missing'),draft);
 assert.equal(moveCard(draft,'missing','pending'),draft);
});
