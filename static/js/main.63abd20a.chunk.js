(this.webpackJsonpkubasta=this.webpackJsonpkubasta||[]).push([[0],{77:function(t,e,i){},83:function(t,e,i){"use strict";i.r(e);var n=i(2),o=i(0),s=i.n(o),a=i(11),c=i.n(a),r=i(128),d=i(129),p=i(130),l=(i(77),i(62)),u=Object(l.a)({palette:{type:"dark"}}),h=i(60),f=i(13),b=i(121),g=i(114),k=i(9);function m(t){var e=Object(k.b)(),i=Object(k.c)((function(t){return t.game}));return Object(n.jsx)("button",{style:{top:t.position.top,left:t.position.left,width:t.size.width,height:t.size.height},onClick:function(){t.onClick&&t.onClick({dispatch:e,state:i})}})}function v(t){var e=Object(k.b)(),i=Object(k.c)((function(t){return t.game}));return Object(n.jsx)("input",{style:{top:t.position.top,left:t.position.left,width:t.size.width,height:t.size.height},type:t.type,onChange:function(n){t.onChange&&t.onChange(n.target.value,{dispatch:e,state:i})}})}var w=Object(g.a)((function(){return{imgContainer:{position:"relative","& > img":{width:"100%"},"& > *:not(img)":{position:"absolute",background:"transparent",border:"none"}}}})),j={x:0,y:0};function x(t){var e,i,o=w();return Object(n.jsxs)("div",{className:o.imgContainer,onClick:function(t){var e=t.target.getBoundingClientRect(),i={x:t.clientX-e.left,y:t.clientY-e.top},n={x:i.x/e.width,y:i.y/e.height},o={x:j.x-n.x,y:j.y-n.y};j=n,console.info("Clicked on:",i,n,o),console.info(JSON.stringify({position:{top:"".concat((100*n.y).toFixed(2),"%"),left:"".concat((100*n.x).toFixed(2),"%")},size:{height:"".concat((100*o.y).toFixed(2),"%"),width:"".concat((100*o.x).toFixed(2),"%")}}))},children:[t.component,null===(e=t.buttons)||void 0===e?void 0:e.map((function(t,e){return Object(n.jsx)(m,{position:t.position,size:t.size,onClick:t.onClick},e)})),null===(i=t.textFields)||void 0===i?void 0:i.map((function(t,e){return Object(n.jsx)(v,{position:t.position,size:t.size,type:t.type,onChange:t.onChange},e)}))]})}var I=i(46),y="desktopnetworknotconnected",O=Object(I.b)({name:"game",initialState:{points:150,activeTaskId:1,activeScreenId:y,showFeedbackDialog:!1,feedbackText:""},reducers:{setActiveTaskId:function(t,e){var i=e.payload;t.activeTaskId=i.id},setActiveScreenId:function(t,e){var i=e.payload;t.activeScreenId=i.id},closeFeedbackDialog:function(t){t.showFeedbackDialog=!t.showFeedbackDialog},openFeedbackDialog:function(t,e){var i,n,o,s,a=e.payload;t.showFeedbackDialog=!0,t.feedbackText=a.text,t.nextTaskId=null!==(i=null===(n=a.next)||void 0===n?void 0:n.taskId)&&void 0!==i?i:t.activeTaskId,t.nextScreenId=null!==(o=null===(s=a.next)||void 0===s?void 0:s.screenId)&&void 0!==o?o:t.activeScreenId},updatePoints:function(t,e){var i=e.payload;t.points=t.points+i.points},gameOver:function(t){t.activeTaskId=1,t.activeScreenId=y},setUserInput:function(t,e){var i=e.payload;t.userInput=i.userInput},task3Feedback:function(t,e){e.payload.twoFactorSelected?(t.points+=10,t.feedbackText="You did not care to turn on Two-Factor-Verification (2FV)? Attackers will have access to your account in no time."):t.feedbackText="Good job for turning on Two-Factor-Verification (2FV).",t.userInput.length>=12?(t.points+=5,t.feedbackText+=" Good job for selecting a safe password"):(t.points-=5,t.feedbackText+=" You\u2019re making it too easy! The password you chose was too easy to guess and compute. A safe password should have a minimum length of 12."),t.nextTaskId=4,t.nextScreenId="emails",t.showFeedbackDialog=!0}}}),C=O.reducer,z=O.actions,F=function(t){return e={src:t},Object(n.jsx)("img",{src:e.src,alt:"Desktop"});var e};var S=i.p+"static/media/availablenetworks.1e5b6f9a.png",T=i.p+"static/media/connectedopennetwork.3add7549.png",D=i.p+"static/media/connectedsecurenetwork.16346748.png",A=i.p+"static/media/discoverableonnetwork.f641c86c.png",E=i.p+"static/media/desktopnetworknotconnected.1d992857.png",P=i.p+"static/media/pressonopennetwork.218e43b6.png",G=i.p+"static/media/pressonsecurenetwork.166db23d.png",N=i.p+"static/media/typeinpassword.c41db31f.png",B={title:"Connect to Network",setting:"You just ordered your first coffee of the day at Starbucks. You were going to meet up there with a friend later but want to get some work done first. The cashier hands you the receipt \u2013 it has the WIFI password on it: \u201cstarplatinum\u201d. Perfect. Time to get to work.",instructions:"To go online you need to connect to the network. This location has both an open and a password-protected network. Which one do you choose?",description:"Connect safely to the internet",screens:{desktopnetworknotconnected:{component:F(E),buttons:[{position:{left:"92%",top:"94.5%"},size:{width:"2%",height:"4%"},onClick:function(t){(0,t.dispatch)(z.setActiveScreenId({id:"availablenetworks"}))}}]},availablenetworks:{component:F(S),buttons:[{position:{left:"92%",top:"94.5%"},size:{width:"2%",height:"4%"},onClick:function(t){(0,t.dispatch)(z.setActiveScreenId({id:"desktopnetworknotconnected"}))}},{position:{left:"77%",top:"28%"},size:{width:"22%",height:"8%"},onClick:function(t){(0,t.dispatch)(z.setActiveScreenId({id:"pressonopennetwork"}))}},{position:{left:"77%",top:"36%"},size:{width:"22%",height:"8%"},onClick:function(t){(0,t.dispatch)(z.setActiveScreenId({id:"pressonsecurenetwork"}))}}]},pressonsecurenetwork:{component:F(G),buttons:[{position:{left:"92%",top:"94.5%"},size:{width:"2%",height:"4%"},onClick:function(t){(0,t.dispatch)(z.setActiveScreenId({id:"desktopnetworknotconnected"}))}},{position:{top:"48.5%",left:"89.5%"},size:{width:"9.5%",height:"4%"},onClick:function(t){(0,t.dispatch)(z.setActiveScreenId({id:"typeinpassword"}))}},{position:{top:"28.1%",left:"76.4%"},size:{width:"24%",height:"8%"},onClick:function(t){(0,t.dispatch)(z.setActiveScreenId({id:"pressonopennetwork"}))}}]},pressonopennetwork:{component:F(P),buttons:[{position:{left:"92%",top:"94.5%"},size:{width:"2%",height:"4%"},onClick:function(t){(0,t.dispatch)(z.setActiveScreenId({id:"desktopnetworknotconnected"}))}},{position:{left:"76.6%",top:"50.9%"},size:{width:"24%",height:"8%"},onClick:function(t){(0,t.dispatch)(z.setActiveScreenId({id:"pressonsecurenetwork"}))}},{position:{left:"89.5%",top:"45.45%"},size:{width:"9.5%",height:"3.5%"},onClick:function(t){var e=t.dispatch;e(z.updatePoints({points:L})),e(z.setActiveScreenId({id:"connectedopennetwork"})),e(z.openFeedbackDialog({text:"Oh no! Open networks should be avoided whenever possible. Accessing sensitive information on such networks can result in that data getting compromised, e.g. login data to your banking. If given the choice, it is usually better to connect to a secured network.",next:{taskId:1,screenId:"desktopnetworknotconnected"}}))}}]},typeinpassword:{component:F(N),buttons:[{position:{left:"92%",top:"94.5%"},size:{width:"2%",height:"4%"},onClick:function(t){(0,t.dispatch)(z.setActiveScreenId({id:"desktopnetworknotconnected"}))}},{position:{top:"28.1%",left:"76.4%"},size:{width:"24%",height:"8%"},onClick:function(t){(0,t.dispatch)(z.setActiveScreenId({id:"pressonopennetwork"}))}},{position:{top:"52.1%",left:"79.7%"},size:{width:"9.7%",height:"3.8%"},onClick:function(t){(0,t.dispatch)(z.setActiveScreenId({id:"discoverableonnetwork"}))}}],textFields:[{position:{left:"79.8%",top:"47.3%"},size:{height:"03.2%",width:"18.9%"},type:"password"}]},connectedopennetwork:{component:F(T),buttons:[{position:{left:"76.6%",top:"46.17%"},size:{width:"24%",height:"8%"},onClick:function(t){(0,t.dispatch)(z.setActiveScreenId({id:"pressonsecurenetwork"}))}}]},connectedsecurenetwork:{component:F(D),buttons:[]},discoverableonnetwork:{component:F(A),buttons:[{position:{top:"59%",left:"79.7%"},size:{width:"9.7%",height:"3.8%"},onClick:function(){window.alert("fail")}},{position:{top:"59%",left:"89.5%"},size:{width:"9.7%",height:"3.8%"},onClick:function(t){var e=t.dispatch;e(z.setActiveScreenId({id:"connectedsecurenetwork"})),e(z.updatePoints({points:10})),e(z.openFeedbackDialog({text:"Good! It\u2019s always better to leave attackers the least possible amount of attack surface, which you just did.",next:{screenId:"antiviruspopup",taskId:2}}))}}]}},buttons:[{text:"dawdawa",onClick:function(t){var e=t.dispatch,i=t.state;console.log(e,i)}},{text:"dawdawa",onClick:function(t){var e=t.dispatch,i=t.state;console.log(e,i)}},{text:"dawdawa",onClick:function(t){var e=t.dispatch,i=t.state;console.log(e,i)}},{text:"dawdawa",onClick:function(t){var e=t.dispatch,i=t.state;console.log(e,i)}},{text:"dawdawa",onClick:function(t){var e=t.dispatch,i=t.state;console.log(e,i)}}]},M=i.p+"static/media/antiviruspopup.98332630.png",W=i.p+"static/media/antivirussettingsoff.0443898b.png",R=i.p+"static/media/antivirussettingson.52d29d00.png",V={1:B,2:{title:"Antivirus",description:"Deal appropriately with default antivirus",screens:{antiviruspopup:{component:F(M),buttons:[{position:{left:"75.3%",top:"78.23%"},size:{width:"23.37%",height:"15.68%"},onClick:function(t){(0,t.dispatch)(z.setActiveScreenId({id:"antivirussettingsoff"}))}}]},antivirussettingsoff:{component:F(W),buttons:[{position:{left:"38.88%",top:"50.53%"},size:{width:"2.75%",height:"2.35%"},onClick:function(t){var e=t.dispatch;e(z.updatePoints({points:10})),e(z.setActiveScreenId({id:"antivirussettingson"})),e(z.openFeedbackDialog({text:"Alright! Now you are finally protected from known threats again. Never turn off your antivirus program, even if a software asks for it!",next:{screenId:"changepassword",taskId:3}}))}},{position:{left:"79.32%",top:"1.22%"},size:{width:"2.65%",height:"3.35%"},onClick:function(t){var e=t.dispatch;e(z.updatePoints({points:-10})),e(z.openFeedbackDialog({text:"What are you doing?! You were supposed to turn on the antivirus software! Even just the default Windows virus & threat protection will keep you safe from known malware and attacks.",next:{screenId:"changepassword",taskId:3}}))}},{position:{left:"38.88%",top:"75.5%"},size:{width:"2.65%",height:"2.35%"},onClick:function(t){var e=t.dispatch;e(z.updatePoints({points:-10})),e(z.openFeedbackDialog({text:"What are you doing?! You were supposed to turn on the antivirus software, not turn it off even further! Even just the default Windows virus & threat protection will keep you safe from known malware and attacks.",next:{screenId:"changepassword",taskId:3}}))}}]},antivirussettingson:{component:F(R),buttons:[]}}},3:{title:"Choose a safe password.",setting:"It has been 6 months since you have changed your password.",instructions:"Choose a safe password.",description:"Choose a safe password.",screens:{changepassword:{component:F(i.p+"static/media/changepassword.02533d2c.png"),buttons:[{position:{left:"92%",top:"94.5%"},size:{width:"2%",height:"4%"},onClick:function(t){t.dispatch}},{position:{left:"7.28%",top:"71.87%"},size:{width:"15.75%",height:"10.17%"},onClick:function(t){(0,t.dispatch)(z.task3Feedback({twoFactorSelected:!0}))}},{position:{left:"48.63%",top:"71.87%"},size:{width:"32.02%",height:"10.17%"},onClick:function(t){(0,t.dispatch)(z.task3Feedback({twoFactorSelected:!1}))}}],textFields:[{position:{left:"5.99%",top:"39.03%"},size:{height:"5.84%",width:"74.83%"},type:"password"},{position:{left:"5.99%",top:"56.21%"},size:{height:"5.84%",width:"74.83%"},type:"password",onChange:function(t,e){var i=e.dispatch;console.log("new input value: "+t),i(z.setUserInput({userInput:t}))}}]}}},4:{title:"Emails",setting:"It is time to read your emails. In your mailbox, there are several emails.",instructions:"Investigate them and decide on your course of action.",description:"Investigate them and decide on your course of action.",screens:{emails:{component:F(i.p+"static/media/Email- Emails.bb9c0c2b.png"),buttons:[{position:{left:"0%",top:"13.8888889%"},size:{width:"22.65625%",height:"15.2777778%"},onClick:function(t){var e=t.dispatch;e(z.setActiveTaskId({id:5})),e(z.setActiveScreenId({id:"attachment"}))}},{position:{left:"0%",top:"88.88%"},size:{width:"100%",height:"11.11%"},onClick:function(t){(0,t.dispatch)(z.openFeedbackDialog({text:"Game over! Don\u2019t get tricked by malicious ads. That\u2019s how you actually infect your computer.",next:{taskId:1,screenId:"desktopnetworknotconnected"}}))}}]}}},5:{title:"Malicious email attachment",setting:"This email appears to be from an unknown sender.",instructions:"Investigate and decide on your course of action.",description:"Investigate and decide on your course of action.",screens:{attachment:{component:F(i.p+"static/media/Email- Attachment.e9f8a7bb.png"),buttons:[{position:{left:"75.78125%",top:"9.5333333%"},size:{width:"6.71875%",height:"4.5833333%"},onClick:function(t){var e=t.dispatch;e(z.openFeedbackDialog({text:"Do not engage in conversations with a scammer, you may not notice revealing valuable information about yourself.",next:{taskId:6,screenId:"link"}})),e(z.updatePoints({points:-5}))}},{position:{left:"83.59375%",top:"9.5333333%"},size:{width:"6.71875%",height:"4.5833333%"},onClick:function(t){var e=t.dispatch;e(z.openFeedbackDialog({text:"Smart! Reporting spam helps your email\u2019s algorithms to recognize suspicious emails as spam.",next:{taskId:6,screenId:"link"}})),e(z.updatePoints({points:10}))}},{position:{left:"91.40625%",top:"9.5333333%"},size:{width:"6.71875%",height:"4.5833333%"},onClick:function(t){var e=t.dispatch;e(z.openFeedbackDialog({text:"Good! Ignoring suspicious emails is one way to do it.",next:{taskId:6,screenId:"link"}})),e(z.updatePoints({points:5}))}},{position:{left:"24.609375%",top:"43.6111111%"},size:{width:"14.0625%",height:"5.5555556%"},onClick:function(t){var e=t.dispatch;e(z.openFeedbackDialog({text:"Never download email attachments from unverified sources, attachments may contain hidden malware.",next:{taskId:6,screenId:"link"}})),e(z.updatePoints({points:-10}))}},{position:{left:"0%",top:"88.88%"},size:{width:"100%",height:"11.11%"},onClick:function(t){(0,t.dispatch)(z.openFeedbackDialog({text:"Game over! Don\u2019t get tricked by malicious ads. That\u2019s how you actually infect your computer.",next:{taskId:1,screenId:"desktopnetworknotconnected"}}))}}]}}},6:{title:"Suspicious link",setting:"It is time to read your emails. In your mailbox, there are several emails.",instructions:"Investigate them and decide on your course of action.",description:"Investigate them and decide on your course of action.",screens:{link:{component:F(i.p+"static/media/Email- Link.56bb2123.png"),buttons:[{position:{left:"75.78125%",top:"9.5333333%"},size:{width:"6.71875%",height:"4.5833333%"},onClick:function(t){(0,t.dispatch)(z.openFeedbackDialog({text:"Do not engage in conversations with a scammer, you may not notice revealing valuable information about yourself.",next:{taskId:7,screenId:"blackmail"}}))}},{position:{left:"83.59375%",top:"9.5333333%"},size:{width:"6.71875%",height:"4.5833333%"},onClick:function(t){var e=t.dispatch;e(z.openFeedbackDialog({text:"Smart! Reporting spam helps your email\u2019s algorithms to recognize suspicious emails as spam.",next:{taskId:7,screenId:"blackmail"}})),e(z.updatePoints({points:10}))}},{position:{left:"91.40625%",top:"9.5333333%"},size:{width:"6.71875%",height:"4.5833333%"},onClick:function(t){var e=t.dispatch;e(z.openFeedbackDialog({text:"Good! Ignoring suspicious emails is one way to do it.",next:{taskId:7,screenId:"blackmail"}})),e(z.updatePoints({points:5}))}},{position:{left:"41.40625%",top:"34.7222222%"},size:{width:"26.5625%",height:"2.7777778%"},onClick:function(t){var e=t.dispatch;e(z.openFeedbackDialog({text:"NEVER click on links in suspicious emails. Links may take you to infected websites or even auto-download malicious files.",next:{taskId:7,screenId:"blackmail"}})),e(z.updatePoints({points:-10}))}},{position:{left:"0%",top:"88.88%"},size:{width:"100%",height:"11.11%"},onClick:function(t){(0,t.dispatch)(z.openFeedbackDialog({text:"Game over! Don\u2019t get tricked by malicious ads. That\u2019s how you actually infect your computer.",next:{taskId:1,screenId:"desktopnetworknotconnected"}}))}}]}}},7:{title:"Blackmail",setting:"It is time to read your emails. In your mailbox, there are several emails.",instructions:"Investigate them and decide on your course of action.",description:"Investigate them and decide on your course of action.",screens:{blackmail:{component:F(i.p+"static/media/Email- Blackmail.936ac049.png"),buttons:[{position:{left:"75.78125%",top:"9.5333333%"},size:{width:"6.71875%",height:"4.5833333%"},onClick:function(t){t.dispatch;z.openFeedbackDialog({text:"Do not engage in conversations with a scammer, you may not notice revealing valuable information about yourself.",next:{taskId:8,screenId:"moneytransfer"}})}},{position:{left:"83.59375%",top:"9.5333333%"},size:{width:"6.71875%",height:"4.5833333%"},onClick:function(t){var e=t.dispatch;e(z.openFeedbackDialog({text:"Smart! Reporting spam helps your email\u2019s algorithms to recognize suspicious emails as spam.",next:{taskId:8,screenId:"moneytransfer"}})),e(z.updatePoints({points:10}))}},{position:{left:"91.40625%",top:"9.5333333%"},size:{width:"6.71875%",height:"4.5833333%"},onClick:function(t){var e=t.dispatch;e(z.openFeedbackDialog({text:"Good! Ignoring suspicious emails is one way to do it.",next:{taskId:8,screenId:"moneytransfer"}})),e(z.updatePoints({points:5}))}},{position:{left:"0%",top:"88.88%"},size:{width:"100%",height:"11.11%"},onClick:function(t){(0,t.dispatch)(z.openFeedbackDialog({text:"Game over! Don\u2019t get tricked by malicious ads. That\u2019s how you actually infect your computer.",next:{taskId:1,screenId:"desktopnetworknotconnected"}}))}}]}}},8:{title:"Money transfer",setting:"It is time to read your emails. In your mailbox, there are several emails.",instructions:"Investigate them and decide on your course of action.",description:"Investigate them and decide on your course of action.",screens:{moneytransfer:{component:F(i.p+"static/media/Email- Money transfer.5d21133f.png"),buttons:[{position:{left:"75.78125%",top:"9.5333333%"},size:{width:"6.71875%",height:"4.5833333%"},onClick:function(t){t.dispatch;z.openFeedbackDialog({text:"Do not engage in conversations with a scammer, you may not notice revealing valuable information about yourself.",next:{taskId:9,screenId:"netflixpassword"}})}},{position:{left:"83.59375%",top:"9.5333333%"},size:{width:"6.71875%",height:"4.5833333%"},onClick:function(t){(0,t.dispatch)(z.openFeedbackDialog({text:"Smart! Reporting spam helps your email\u2019s algorithms to recognize suspicious emails as spam.",next:{taskId:9,screenId:"netflixpassword"}}))}},{position:{left:"91.40625%",top:"9.5333333%"},size:{width:"6.71875%",height:"4.5833333%"},onClick:function(t){(0,t.dispatch)(z.openFeedbackDialog({text:"Good! Ignoring suspicious emails is one way to do it.",next:{taskId:9,screenId:"netflixpassword"}}))}},{position:{left:"0%",top:"88.88%"},size:{width:"100%",height:"11.11%"},onClick:function(t){(0,t.dispatch)(z.openFeedbackDialog({text:"Game over! Don\u2019t get tricked by malicious ads. That\u2019s how you actually infect your computer.",next:{taskId:1,screenId:"desktopnetworknotconnected"}}))}}]}}},9:{title:"Netflix password",setting:"It is time to read your emails. In your mailbox, there are several emails.",instructions:"Investigate them and decide on your course of action.",description:"Investigate them and decide on your course of action.",screens:{netflixpassword:{component:F(i.p+"static/media/Email- Netflix password.c54ac902.png"),buttons:[{position:{left:"75.78125%",top:"9.5333333%"},size:{width:"6.71875%",height:"4.5833333%"},onClick:function(t){var e=t.dispatch;e(z.updatePoints({points:-5})),e(z.openFeedbackDialog({text:"Do not engage in conversations with a scammer, you may not notice revealing valuable information about yourself."}))}},{position:{left:"83.59375%",top:"9.5333333%"},size:{width:"6.71875%",height:"4.5833333%"},onClick:function(t){var e=t.dispatch;e(z.openFeedbackDialog({text:"Smart! Reporting spam helps your email\u2019s algorithms to recognize suspicious emails as spam.",next:{taskId:1,screenId:"desktopnetworknotconnected"}})),e(z.updatePoints({points:10}))}},{position:{left:"91.40625%",top:"9.5333333%"},size:{width:"6.71875%",height:"4.5833333%"},onClick:function(t){var e=t.dispatch;e(z.openFeedbackDialog({text:"Good! Ignoring suspicious emails is one way to do it.",next:{taskId:1,screenId:"desktopnetworknotconnected"}})),e(z.updatePoints({points:5}))}}]}}}},L=-30,Y=i(132),J=i(115),H=i(118),U=i(119),q=i(85),X=function(t){return Object(n.jsx)(J.a,{disableTypography:!0,className:"MuiTypography-root MuiTypography-h6",children:Object(n.jsx)(q.a,{variant:"h6",children:t.text})})};function K(){var t=Object(k.c)((function(t){return t.game})),e=Object(k.b)();return Object(n.jsx)("div",{children:Object(n.jsxs)(Y.a,{open:t.showFeedbackDialog,children:[Object(n.jsx)(X,{text:t.feedbackText}),Object(n.jsx)(H.a,{children:Object(n.jsx)(U.a,{autoFocus:!0,onClick:function(){e(z.closeFeedbackDialog()),e(z.setActiveTaskId({id:t.nextTaskId})),e(z.setActiveScreenId({id:t.nextScreenId}))},color:"primary",children:"Go to next task"})})]})})}var Q=i(5),Z=i(120),$=Object(Q.a)((function(t){return{root:{height:10,borderRadius:5},colorPrimary:{backgroundColor:t.palette.grey["light"===t.palette.type?200:700]},bar:{borderRadius:5,backgroundColor:"#1a90ff"}}}))(Z.a);function _(){var t=s.a.useState(50),e=Object(f.a)(t,2),i=e[0],a=e[1],c=Object(k.c)((function(t){return t.game}));return Object(o.useEffect)((function(){var t=c.points/300*100;a(t)}),[c.points]),Object(n.jsx)("div",{children:Object(n.jsx)($,{variant:"determinate",value:i})})}var tt=Object(g.a)((function(t){return{imgContainer:{margin:t.spacing(4)},btnContainer:{margin:t.spacing(0)}}}));function et(){var t=tt(),e=Object(k.b)(),i=Object(k.c)((function(t){return t.game})),s=Object(o.useState)(void 0),a=Object(f.a)(s,2),c=a[0],r=a[1];return Object(o.useEffect)((function(){e(z.setActiveTaskId({id:1})),e(z.setActiveScreenId({id:"desktopnetworknotconnected"}))}),[e]),Object(o.useEffect)((function(){r(i.activeTaskId&&i.activeScreenId?V[i.activeTaskId].screens[i.activeScreenId]:void 0)}),[i.activeTaskId,i.activeScreenId]),c?Object(n.jsxs)(b.a,{container:!0,spacing:1,children:[Object(n.jsx)(b.a,{item:!0,xs:12,children:Object(n.jsx)(_,{})}),Object(n.jsxs)(b.a,{item:!0,xs:12,className:t.imgContainer,children:[Object(n.jsx)(x,Object(h.a)({},c)),Object(n.jsx)(K,{})]})]}):null}var it=i(40),nt=i(117),ot=i(127),st=i(124),at=i(125),ct=i(126),rt=i(131),dt=i(133),pt=i(123),lt=i(138),ut=i(122),ht=i(134),ft=i(135);function bt(){var t=s.a.useState(0),e=Object(f.a)(t,2),i=e[0],a=e[1],c=Object.keys(V).sort().map((function(t){return V[t].title})),r=Object(k.c)((function(t){return t.game}));return Object(o.useEffect)((function(){var t=r.activeTaskId?r.activeTaskId:-1;t=parseInt(t.toString()),console.log(t),-1!==t&&a(t-1)}),[r.activeTaskId]),Object(n.jsx)("div",{children:Object(n.jsx)(lt.a,{activeStep:i,orientation:"vertical",children:c.map((function(t,e){return Object(n.jsxs)(ut.a,{children:[Object(n.jsx)(ht.a,{children:t}),Object(n.jsx)(ft.a,{children:Object(n.jsx)(q.a,{children:(i=e,V[i+1]?V[i+1].description:"")})})]},t);var i}))})})}function gt(t){return Object(n.jsx)("div",{role:"tabpanel",hidden:t.activeTabId!==t.tabId,children:t.activeTabId===t.tabId&&Object(n.jsx)(rt.a,{p:3,children:t.children})})}var kt=Object(g.a)((function(t){return{paper:{width:"100%"}}}));function mt(t){var e=kt(),i=s.a.useState(2),o=Object(f.a)(i,2),a=o[0],c=o[1],r=Object(k.b)(),d=Object(k.c)((function(t){return t.game}));return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(nt.a,{square:!0,className:e.paper,elevation:3,children:Object(n.jsxs)(dt.a,{centered:!0,value:a,onChange:function(t,e){c(e)},children:[Object(n.jsx)(pt.a,{icon:Object(n.jsx)(st.a,{})}),Object(n.jsx)(pt.a,{icon:Object(n.jsx)(at.a,{})}),Object(n.jsx)(pt.a,{icon:Object(n.jsx)(ct.a,{})})]})}),Object(n.jsxs)(gt,{activeTabId:a,tabId:0,children:[Object(n.jsx)(q.a,{gutterBottom:!0,variant:"h4",children:t.info.title}),Object(n.jsx)(q.a,{gutterBottom:!0,variant:"body1",children:t.info.setting}),Object(n.jsx)(q.a,{gutterBottom:!0,variant:"body2",children:t.info.instructions}),t.buttons?Object(n.jsx)(b.a,{container:!0,spacing:1,children:t.buttons.map((function(t){return Object(n.jsx)(b.a,{item:!0,xs:6,children:Object(n.jsx)(U.a,{fullWidth:!0,variant:"outlined",onClick:function(){t.onClick&&t.onClick({dispatch:r,state:d})},children:t.text})})}))}):null]}),Object(n.jsx)(gt,{activeTabId:a,tabId:1,children:Object(n.jsx)(bt,{})}),Object(n.jsxs)(gt,{activeTabId:a,tabId:2,children:[Object(n.jsx)(q.a,{variant:"h3",gutterBottom:!0,children:"Welcome to GOME"}),Object(n.jsx)(q.a,{variant:"body1",gutterBottom:!0,children:"Check out other tabs in the sidebar to see your current assignment. This panel can be opened and closed whenever you please. Some tasks will be performed in this window."}),Object(n.jsx)(q.a,{variant:"body2",gutterBottom:!0,children:"Cyber awareness training tool for ITC8210HACS, TalTech."}),Object(n.jsxs)(q.a,{variant:"caption",children:["Authors:",Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Elizabete Liene \u0160terna 201671IVCM"}),Object(n.jsx)("li",{children:"Gediminas Mila\u0161ius 201678IVCM"}),Object(n.jsx)("li",{children:"Marieke Jahn 201684IVCM"}),Object(n.jsx)("li",{children:"Olivier Levasseur 201637IVCM"})]})]})]})]})}var vt=function(){return{width:window.innerWidth,height:window.innerHeight}};var wt=Object(g.a)((function(t){return{sidebarContainer:{position:"absolute",top:"1rem",height:"calc(100% - 2rem)",zIndex:100,display:"flex"},paper:Object(it.a)({width:530,transition:"all 0.3s",padding:t.spacing(2)},t.breakpoints.down("xs"),{width:"100%"}),drawerBtn:{transition:"all 0.3s"}}}));function jt(){var t,e=Object(o.useState)(!0),i=Object(f.a)(e,2),s=i[0],a=i[1],c=Object(o.useState)(0),r=Object(f.a)(c,2),d=r[0],p=r[1],l=wt(),u=Object(o.useState)(),h=Object(f.a)(u,2),b=h[0],g=h[1],m=function(){var t=Object(o.useState)(vt()),e=Object(f.a)(t,2),i=e[0],n=e[1];return Object(o.useEffect)((function(){var t=function(){n(vt())};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),i}().width,v=Object(k.c)((function(t){return t.game.activeTaskId}));return Object(o.useEffect)((function(){g(v?V[v]:void 0)}),[v]),Object(o.useEffect)((function(){p(m>600?530:m)}),[m]),Object(n.jsxs)("div",{className:l.sidebarContainer,children:[Object(n.jsx)(nt.a,{className:l.paper,style:{marginLeft:s?0:-d},children:Object(n.jsx)(mt,{info:{title:null!==(t=null===b||void 0===b?void 0:b.title)&&void 0!==t?t:"",instructions:null===b||void 0===b?void 0:b.instructions,setting:null===b||void 0===b?void 0:b.setting},buttons:null===b||void 0===b?void 0:b.buttons})}),Object(n.jsx)(U.a,{onClick:function(){return a(!s)},children:Object(n.jsx)(ot.a,{className:l.drawerBtn,style:{transform:s?"rotate(180deg)":""}})})]})}var xt=function(){return Object(n.jsxs)(r.a,{theme:u,children:[Object(n.jsx)(d.a,{}),Object(n.jsxs)("div",{children:[Object(n.jsx)(jt,{}),Object(n.jsx)(p.a,{maxWidth:"lg",children:Object(n.jsx)(et,{})})]})]})},It=i(15),yt=Object(It.c)({game:C}),Ot=Object(I.a)({reducer:yt});c.a.render(Object(n.jsx)(k.a,{store:Ot,children:Object(n.jsx)(xt,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.63abd20a.chunk.js.map