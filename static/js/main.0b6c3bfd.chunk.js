(this["webpackJsonpfantasy-football"]=this["webpackJsonpfantasy-football"]||[]).push([[0],{20:function(e,a,t){e.exports=t(39)},25:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var r=t(0),l=t.n(r),n=t(12),s=t.n(n),i=(t(25),t(1)),c=t(2),o=t(4),m=t(3),u=t(5),p=t(9),f=(t(31),t(32),t(33),t(11)),h=t.n(f),d=(t(34),[{label:"gk",value:"gk"},{label:"def",value:"def"},{label:"mid",value:"mid"},{label:"for",value:"for"}]),y=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"onChange",value:function(e){this.props.onChange(e)}},{key:"render",value:function(){var e=this,a=this.props.selected;return l.a.createElement("div",{className:"TagFilter"},l.a.createElement("button",{className:h()("tag-filter-item",a&&a.length?null:"active"),onClick:function(){return e.onChange("")}},"All"),d.map((function(t){return l.a.createElement("button",{className:h()("tag-filter-item",a&&a.length&&a.includes(t.value)?"active":null),onClick:function(){return e.onChange(t.value)},key:t.value},t.label)})))}}]),a}(l.a.Component),b=(t(35),t(36),function(e){function a(){var e,t;Object(i.a)(this,a);for(var r=arguments.length,l=new Array(r),n=0;n<r;n++)l[n]=arguments[n];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).addPlayer=function(){t.props.addPlayer(t.props.player)},t.discardPlayer=function(){t.props.discardPlayer(t.props.player)},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props,a=e.player,t=e.isSelected,r=e.isDisabled;return l.a.createElement("div",{className:h()("PlayersListItem",r&&!t?"disabled":null,t?"selected":null)},l.a.createElement("div",{className:"player-item-action"},t||r?null:l.a.createElement("button",{className:"player-action-btn",onClick:this.addPlayer},l.a.createElement("i",{className:"fa fa-plus"})),t?l.a.createElement("button",{className:"player-action-btn",onClick:this.discardPlayer},l.a.createElement("i",{className:"fa fa-check"})):null),l.a.createElement("div",{className:"player-item-icon"},l.a.createElement("img",{alt:"player",src:a.TeamShirt,className:"player-image"}),l.a.createElement("span",{className:"player-role"},a.Role)),l.a.createElement("div",{className:"player-item-info"},l.a.createElement("div",{className:"player-item-name"},a.DisplayName()),l.a.createElement("div",{className:"player-item-location"},l.a.createElement("span",{className:"player-item-team"},a.Team),l.a.createElement("span",{className:"player-item-club"},a.Club))),l.a.createElement("div",{className:"player-item-form"},a.Form),l.a.createElement("div",{className:"player-item-pts"},a.PTS),l.a.createElement("div",{className:"player-item-price"},a.PriceFormatted()))}}]),a}(l.a.Component)),v=t(10),_=t.n(v),g=t(13),E=[{first_name:"P",last_name:"Aubamey",team:"Arsenal",club:"Crystal Palace",role:"def",price:13e6,pts:58,form:6.2,team_shirt:"/shirt_1.svg"},{first_name:"R",last_name:"Firmino",team:"Liverpool",club:"Spurs",role:"mid",price:124e5,pts:49,form:4.4,team_shirt:"/shirt_2.svg"},{first_name:"A",last_name:"Lacazette",team:"Arsenal",club:"Crystal Palace",role:"gk",price:118e5,pts:14,form:3.5,team_shirt:"/shirt_1.svg"},{first_name:"T",last_name:"Abraham",team:"Burnley",club:"Chelsea",role:"for",price:11.5,pts:42,form:4.3,team_shirt:"/shirt_3.svg"},{first_name:"S",last_name:"Haller",team:"West Ham",club:"Sheffield United",role:"for",price:103e5,pts:42,form:4,team_shirt:"/shirt_4.svg"},{first_name:"B",last_name:"Saka",team:"Arsenal",club:"Crystal Palace",role:"for",price:9.3,pts:0,form:0,team_shirt:"/shirt_1.svg"},{first_name:"matuesh",last_name:"Kurry",team:"Poland",club:"Polska",role:"gk",price:3.3,pts:0,form:0,team_shirt:"/shirt_1.svg"},{first_name:"C",last_name:"Czadoman",team:"Polski",club:"Lower silesia",role:"for",price:3.3,pts:0,form:0,team_shirt:"/shirt_1.svg"},{first_name:"J",last_name:"Ruda Szalona",team:"Polski",club:"Wroclaw Stare",role:"for",price:11e4,pts:12,form:56,team_shirt:"/shirt_5.svg"},{first_name:"J",last_name:"Paskovich",team:"Polski",club:"Warsaw",role:"mid",price:5e4,pts:42,form:56,team_shirt:"/shirt_6.svg"},{first_name:"J",last_name:"Paskovich",team:"Polski",club:"Berlinski",role:"mid",price:9379178,pts:22,form:36,team_shirt:"/shirt_7.svg"},{first_name:"Q",last_name:"Ivanowich",team:"Polski",club:"Berlinski",role:"mid",price:9379178,pts:22,form:36,team_shirt:"/shirt_7.svg"},{first_name:"M",last_name:"Curry",team:"Polski",club:"Radium",role:"mid",price:21312,pts:22,form:36,team_shirt:"/shirt_8.svg"},{first_name:"M",last_name:"Hamulewego",team:"Austraian Football",club:"Eagle",role:"mid",price:21312,pts:22,form:36,team_shirt:"/shirt_9.svg"},{first_name:"M",last_name:"Sarajan",team:"Austraian Football",club:"Eagle",role:"def",price:31123,pts:22,form:36,team_shirt:"/shirt_9.svg"},{first_name:"S",last_name:"Trump",team:"Austraian Football",club:"Eagle",role:"mid",price:5e5,pts:22,form:36,team_shirt:"/shirt_10.svg"},{first_name:"S",last_name:"Trump",team:"Czeck republic",club:"Parah football",role:"def",price:3e4,pts:12,form:12,team_shirt:"/shirt_11.svg"},{first_name:"S",last_name:"Naderi",team:"Yemen National",club:"Yemenies",role:"def",price:5e5,pts:22,form:36,team_shirt:"/shirt_12.svg"},{first_name:"S",last_name:"Salsberg",team:"Yuventous",club:"Eagle",role:"def",price:2e5,pts:22,form:36,team_shirt:"/shirt_12.svg"}];function N(){return k.apply(this,arguments)}function k(){return(k=Object(g.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.resolve(E));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var P=t(8),O="FETCH_PLAYERS_SUCCESSFUL",j="ADD_PLAYER_TO_TEAM",R="REMOVE_PLAYER_FROM_TEAM";var S=t(19);var C=Object(P.b)({players:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;return a.type===O?a.payload:e},teamPlayers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;if(a.type===j){var t=a.payload;return[].concat(Object(S.a)(e),[t])}if(a.type===R){var r=a.payload;return e.filter((function(e){return e.UID!==r.UID}))}return e}}),w=Object(P.c)(C);var T=function(){function e(a){Object(i.a)(this,e),this.FirstName="",this.LastName="",this.Role="",this.Team="",this.Club="",this.TeamShirt="",this.UID=""+Math.random(),this.PTS=0,this.Form=0,this.price=0,this.FirstName=a.first_name,this.LastName=a.last_name,this.Role=a.role,this.Team=a.team,this.Club=a.club,this.TeamShirt=a.team_shirt,this.PTS=a.pts,this.Form=a.form,this.price=+a.price}return Object(c.a)(e,[{key:"DisplayName",value:function(){return[this.FirstName.substr(0,1),this.LastName].join(" ")}},{key:"PriceFormatted",value:function(){return this.price?(e=this.price,Math.abs(Number(e))>=1e9?Math.abs(Number(e))/1e9+"B":Math.abs(Number(e))>=1e6?Math.abs(Number(e))/1e6+"M":Math.abs(Number(e))>=1e3?Math.abs(Number(e))/1e3+"K":Math.abs(Number(e))):"-";var e}}]),e}(),A=function(){function e(a){Object(i.a)(this,e),this.players=[],this.players=a}return Object(c.a)(e,[{key:"GetForwards",value:function(){return this.players.filter((function(e){return"for"===e.Role}))}},{key:"GetGoalKeeper",value:function(){return this.players.find((function(e){return"gk"===e.Role}))}},{key:"GetDefenders",value:function(){return this.players.filter((function(e){return"def"===e.Role}))}},{key:"GetMidfielders",value:function(){return this.players.filter((function(e){return"mid"===e.Role}))}}]),e}();function M(){return(M=Object(g.a)(_.a.mark((function e(){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:if((a=e.sent)&&a.length){e.next=5;break}return e.abrupt("return");case 5:w.dispatch({type:O,payload:a.map((function(e){return new T(e)}))});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F=function(e){function a(){var e,t;Object(i.a)(this,a);for(var r=arguments.length,l=new Array(r),n=0;n<r;n++)l[n]=arguments[n];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).addPlayer=function(e){!function(e){w.dispatch({type:j,payload:e})}(e)},t.discardPlayer=function(e){!function(e){w.dispatch({type:R,payload:e})}(e)},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.players,r=a.showRoles,n=a.teamPlayers;return r&&r.length&&t&&(t=t.filter((function(e){return(r||[]).includes(e.Role)}))),l.a.createElement("div",{className:"PlayersList"},(t||[]).map((function(a){var t=!!n.find((function(e){return e.UID===a.UID})),r=!function(e,a){return 11!==a.length&&((1!==a.filter((function(e){return"gk"===e.Role})).length||"gk"!==e.Role)&&((5!==a.filter((function(e){return"def"===e.Role})).length||"def"!==e.Role)&&((5!==a.filter((function(e){return"mid"===e.Role})).length||"mid"!==e.Role)&&(3!==a.filter((function(e){return"for"===e.Role})).length||"for"!==e.Role))))}(a,n);return l.a.createElement(b,{key:a.UID,player:a,isSelected:t,isDisabled:r,discardPlayer:e.discardPlayer,addPlayer:e.addPlayer})})))}}]),a}(l.a.Component);var D=Object(p.b)((function(e){return{players:e.players,teamPlayers:e.teamPlayers}}),{})(F),L=function(e){function a(){var e,t;Object(i.a)(this,a);for(var r=arguments.length,l=new Array(r),n=0;n<r;n++)l[n]=arguments[n];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={filterRole:[]},t.onSelectedRoleChange=function(e){if(!e)return t.setState({filterRole:[]});t.setState({filterRole:[e]})},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"Sidebar"},l.a.createElement(y,{onChange:this.onSelectedRoleChange,selected:this.state.filterRole}),l.a.createElement(D,{showRoles:this.state.filterRole}))}}]),a}(l.a.Component),G=(t(38),function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=new A(this.props.teamPlayers),a=e.GetGoalKeeper(),t=e.GetDefenders(),r=e.GetMidfielders(),n=e.GetForwards();return l.a.createElement("div",{className:"Playground"},l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"play-field"},l.a.createElement("img",{alt:"player",src:"/field.png",className:"field-image"}),l.a.createElement("div",{className:"players-holder"},l.a.createElement("div",{className:"goal-keeper players-section"},a?null:l.a.createElement("img",{alt:"player",src:"/shirt.svg",className:"player-placeholder animate-focus"}),a?l.a.createElement("img",{alt:"player",src:a.TeamShirt,className:"player-placeholder-selected"}):null),l.a.createElement("div",{className:"defender players-section"},[1,2,3,4,5].map((function(e,a){return a<t.length?l.a.createElement("img",{alt:"player",src:t[a].TeamShirt,className:"player-placeholder-selected"}):l.a.createElement("img",{alt:"player",src:"/shirt.svg",className:"player-placeholder animate-focus"})}))),l.a.createElement("div",{className:"midfielder players-section"},[1,2,3,4,5].map((function(e,a){return a<r.length?l.a.createElement("img",{alt:"player",src:r[a].TeamShirt,className:"player-placeholder-selected"}):l.a.createElement("img",{alt:"player",src:"/shirt.svg",className:"player-placeholder animate-focus"})}))),l.a.createElement("div",{className:"forward players-section"},[1,2,3].map((function(e,a){return a<n.length?l.a.createElement("img",{alt:"player",src:n[a].TeamShirt,className:"player-placeholder-selected"}):l.a.createElement("img",{alt:"player",src:"/shirt.svg",className:"player-placeholder animate-focus"})})))))))}}]),a}(l.a.Component));var I=Object(p.b)((function(e){return{teamPlayers:e.teamPlayers}}),{})(G),U=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){!function(){M.apply(this,arguments)}()}},{key:"render",value:function(){return l.a.createElement(p.a,{store:w},l.a.createElement("div",{className:"App"},l.a.createElement(L,null),l.a.createElement(I,null)))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.0b6c3bfd.chunk.js.map