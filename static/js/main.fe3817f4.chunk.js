(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(2),s=n.n(c),l=n(3),i=n(4),r=n(7),d=n(6),u=(n(13),n(5)),g=n.n(u),m=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=["Jam"],p=function(e){Object(r.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={selectedGoods:b},e.selectGood=function(t,n){t.target.classList.toggle("active"),e.setState((function(t){var a=t.selectedGoods,o=a.indexOf(n.textContent);return-1!==o?a.splice(o,1):a.push(n.textContent),e.validateClearSelectionState(),{selectedGoods:a}}))},e.clearSelection=function(t){e.setState({selectedGoods:[]}),t.target.style.visibility="hidden"},e}return Object(i.a)(n,[{key:"getSelectedGoodsList",value:function(){var e=this.state.selectedGoods,t=e.length;if(1===t)return"".concat(e[0]," is selected");if(t>1){var n=e.slice(0,-1).join(", ");return"".concat(n," and ").concat(e[t-1]," are selected")}return"No goods selected"}},{key:"validateClearSelectionState",value:function(){document.querySelector("#clear-button").style.visibility=this.state.selectedGoods.length>0?"visible":"hidden"}},{key:"render",value:function(){var e=this,t=this.state.selectedGoods,n=this.getSelectedGoodsList();return o.a.createElement("div",{className:"container centered"},o.a.createElement("h1",{className:"container__title"},n),o.a.createElement("button",{type:"button",id:"clear-button",className:"btn btn-outline-danger container__clear-button",onClick:this.clearSelection},"X"),o.a.createElement("ul",{className:"list-group list-group-flush"},m.map((function(n,a){return o.a.createElement("div",{key:"div-".concat(a)},o.a.createElement("li",{className:"list-group-item list-group-item--padded"},n,o.a.createElement("button",{type:"button",className:g()("btn btn-outline-warning list-group-item__button",{active:t.includes(n)}),"data-bs-toggle":"button",onClick:function(t){e.selectGood(t,t.target.previousSibling)}},t.includes(n)?"Remove":"Add")))}))))}}]),n}(o.a.Component);s.a.render(o.a.createElement(p,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.fe3817f4.chunk.js.map