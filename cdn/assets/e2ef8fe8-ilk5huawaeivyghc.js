import{n as e}from"./f025431a-a3bvh9d3e42dbe8l.js";import{F as t,L as n}from"./2340486e-fq3084fh09vi6d4t.js";import{OPt as r,SPt as i}from"./4813494d-mwv00e596sp9hdsh.js";function a(e){if(e.trigger.type!==`API`)return null;let t=Reflect.get(e,`api_trigger_id`);return typeof t==`string`?t:e.id}function o(e){return(e??[]).filter(e=>e.trigger.type===`API`)}function s(){return i(`1010509169`)}function c(e){return`${u}${encodeURIComponent(e)}/trigger`}function l(e){return`curl -sS -X POST \\
  "${c(e)}" \\
  -H "Authorization: Bearer $AGENT_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "input": "Hello world"
  }' \\
  -w '\\nHTTP %{response_code}\\n'`}var u,d,f,p,m=e((()=>{r(),t(),u=`https://api.chatgpt.com/v1/workspace_agents/`,d=()=>({deployment_id:n(),api_trigger:{type:`API`,instructions:`Run this agent from the API channel.`},materialized_trigger_id:null,pending_deletion:!1}),f=e=>e.pending_deletion!==!0,p=e=>e.materialized_trigger_id??null}));export{o as a,m as c,p as i,f as l,c as n,a as o,l as r,s,d as t};
//# sourceMappingURL=e2ef8fe8-ilk5huawaeivyghc.js.map