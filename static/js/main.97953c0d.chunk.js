(window.webpackJsonpstarwars=window.webpackJsonpstarwars||[]).push([[0],{20:function(e,t,n){e.exports=n(43)},25:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(18),c=n.n(r),l=(n(25),n(3)),i=n(4),s=n(6),u=n(5),p=n(2),h=n(7),m=n(8),d=n.n(m),f=n(19),b=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={expanded:!1,species:[]},n.openInfoBox=n.openInfoBox.bind(Object(p.a)(n)),n.closeInfoBox=n.closeInfoBox.bind(Object(p.a)(n)),n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"openInfoBox",value:function(){this.setState({expanded:!this.state.expanded})}},{key:"closeInfoBox",value:function(){this.setState({expanded:!this.state.expanded})}},{key:"componentDidMount",value:function(){var e=this;this.props.charInfo.species.map((function(t){return d.a.get(t).then((function(t){e.setState({species:[].concat(Object(f.a)(e.state.species),[t.data])})}))}))}},{key:"render",value:function(){var e=this.props.charInfo;if(!this.state.expanded)return o.a.createElement("p",{className:"btn btn-info",onClick:this.openInfoBox},"Show Info");var t=this.state.species.map((function(e){return o.a.createElement("li",{key:Math.random()},o.a.createElement("h2",null,"Species: ",e.name))}));return o.a.createElement("div",{className:"character-details"},o.a.createElement("p",{className:"btn btn-danger",onClick:this.closeInfoBox},"Hide Info"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("h2",null,"Gender: ",e.gender)),o.a.createElement("li",null,o.a.createElement("h2",null,"Birth year: ",e.birth_year)),o.a.createElement("li",null,o.a.createElement("h2",null,"Hair color: ",e.hair_color)),o.a.createElement("li",null,o.a.createElement("h2",null,"Eye color: ",e.eye_color)),o.a.createElement("li",null,o.a.createElement("h2",null,"Height: ",e.height," CM")),t))}}]),t}(a.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.people;return o.a.createElement("div",{className:"grid-container"},e.map((function(e){return o.a.createElement("div",{className:"person-names",key:e.url},o.a.createElement("h3",{className:"char-name"},e.name),o.a.createElement(b,{charInfo:e}))})))}}]),t}(a.Component),E=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={people:[]},n.getPeople=n.getPeople.bind(Object(p.a)(n)),n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"getPeople",value:function(){var e=this;return d.a.get("https://swapi.co/api/people").then((function(t){console.log(t.data.results),e.setState({people:t.data.results.slice(0,6)})}))}},{key:"componentDidMount",value:function(){this.getPeople()}},{key:"render",value:function(){var e=this.state.people;return o.a.createElement("div",{className:"App"},o.a.createElement(v,{people:e}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.97953c0d.chunk.js.map