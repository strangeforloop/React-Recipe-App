(this["webpackJsonpreact-recipe-app"]=this["webpackJsonpreact-recipe-app"]||[]).push([[0],[,function(e,a,t){e.exports={recipe:"recipe_recipe__2Ib66",content:"recipe_content__3RJEr",title:"recipe_title__1x67L",imageContent:"recipe_imageContent__1PBwJ",image:"recipe_image__11OhW",ingredientsList:"recipe_ingredientsList__2cMFn",recipeSource:"recipe_recipeSource__C_K8e"}},,,,,function(e,a,t){e.exports=t(15)},,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(5),s=t.n(c),i=(t(11),t(3),t(2)),l=t(1),o=t.n(l),m=function(e){var a=e.title,t=(e.calories,e.image),r=e.ingredients,c=e.url;return n.a.createElement("div",{className:o.a.recipe},n.a.createElement("div",{className:o.a.content},n.a.createElement("p",{className:o.a.title},a),n.a.createElement("div",{className:o.a.imageContent},n.a.createElement("img",{className:o.a.image,src:t,alt:""})),n.a.createElement("ol",{className:o.a.ingredientsList},r.map((function(e){return n.a.createElement("li",null,e.text)}))),n.a.createElement("a",{href:c,className:o.a.recipeSource,target:"blank"},"Get Cooking Directions")))},u=function(){return n.a.createElement("div",{className:"messageToUser"},n.a.createElement("p",{className:"noSearchMessage"},"Hey! You didn't enter a search. Please enter a search into the search bar."),n.a.createElement("a",{className:"errorImage",href:"https://icons8.com"},n.a.createElement("img",{src:"search.png",alt:"Helping star doodle",width:"600"})))},p=function(){return n.a.createElement("div",{className:"messageToUser"},n.a.createElement("p",{className:"noResultsMessage"},"Sorry, there are no results for your search. Please try another search."),n.a.createElement("a",{className:"errorImage",href:"https://icons8.com"},n.a.createElement("img",{src:"update.png",alt:"Helping star doodle",width:"600"})))},h=(t(13),function(){return n.a.createElement("div",{className:"spinner"})}),g=(t(14),function(){var e=Object(r.useState)([]),a=Object(i.a)(e,2),t=a[0],c=(a[1],Object(r.useState)("")),s=Object(i.a)(c,2),l=s[0],o=s[1],g=Object(r.useState)("chicken"),E=Object(i.a)(g,2),d=E[0],f=E[1],N=Object(r.useState)(!0),_=Object(i.a)(N,2),b=_[0],v=_[1];Object(r.useEffect)((function(){console.log("Effect has been run")}),[d]);return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"header"},n.a.createElement("div",{className:"content"},n.a.createElement("h1",{className:"app-title"},"Recipe Finder"),n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),v(!0),f(l),o("")},className:"search-form"},n.a.createElement("input",{className:"search-bar",type:"input",value:l,onChange:function(e){o(e.target.value)},placeholder:"What are you craving?"}),n.a.createElement("button",{className:"search-button",type:"submit"},"Search")))),b?n.a.createElement(h,null):""===d?n.a.createElement(u,null):0===t.length?n.a.createElement(p,null):n.a.createElement("main",{className:"container"},n.a.createElement("p",{className:"results-message"},'Search results for "',d,'":'),n.a.createElement("div",{className:"recipes"},t.map((function(e){return n.a.createElement(m,{key:e.recipe.url,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients,url:e.recipe.url})})))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.8effe9b1.chunk.js.map