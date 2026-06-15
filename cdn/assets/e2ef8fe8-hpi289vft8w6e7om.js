import{n as e}from"./f025431a-nfv3yx8yna1zxcro.js";import{I as t,R as n}from"./2340486e-nkspzopkdvwv825h.js";import{cNt as r,nNt as i}from"./4813494d-d1xxp0gn9qjqk5u6.js";function a(e){if(e.trigger.type!==`API`)return null;let t=Reflect.get(e,`api_trigger_id`);return typeof t==`string`?t:e.id}function o(e){return(e??[]).filter(e=>e.trigger.type===`API`)}function s(){return i(`1010509169`)}function c(e){return`${u}${encodeURIComponent(e)}/trigger`}function l(e){return`curl -sS -X POST \\
  "${c(e)}" \\
  -H "Authorization: Bearer $AGENT_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "input": "Hello world"
  }' \\
  -w '\\nHTTP %{response_code}\\n'`}var u,d,f,p,m=e((()=>{r(),t(),u=`https://api.chatgpt.com/v1/workspace_agents/`,d=()=>({deployment_id:n(),api_trigger:{type:`API`,instructions:`Run this agent from the API channel.`},materialized_trigger_id:null,pending_deletion:!1}),f=e=>e.pending_deletion!==!0,p=e=>e.materialized_trigger_id??null}));export{o as a,m as c,p as i,f as l,c as n,a as o,l as r,s,d as t};
//# sourceMappingURL=e2ef8fe8-hpi289vft8w6e7om.js.map