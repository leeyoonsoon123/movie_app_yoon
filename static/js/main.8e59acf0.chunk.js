(this.webpackJsonpmovie_app_yoon=this.webpackJsonpmovie_app_yoon||[]).push([[0],{31:function(e,t){},33:function(e,t,a){e.exports=a(65)},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(28),c=a.n(r),s=a(9),i=a(1),l=a(15),u=a.n(l),m=a(29),p=a(10),v=a(11),d=a(13),f=a(12),h=a(30),y=a.n(h),E=a(31),b=a.n(E),g=(a(56),function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return o.a.createElement("section",{className:"container"},t?o.a.createElement("div",{className:"loader"},o.a.createElement("span",{className:"loader__text"},"Loading...")):o.a.createElement("div",{className:"movies"},a.map((function(e){return o.a.createElement(b.a,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(o.a.Component));a(57);var _=function(e){return console.log(e),o.a.createElement("div",{className:"about__container"},o.a.createElement("span",null,"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"),o.a.createElement("span",null,"\u2212 George Orwell, 1984"))},j=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?o.a.createElement("span",null,e.state.title):null}}]),a}(o.a.Component);a(58);var w=function(){return o.a.createElement("div",{className:"nav"},o.a.createElement(s.b,{to:"/"},"Home"),o.a.createElement(s.b,{to:"/about"},"About"))};a(64);var O=function(){return o.a.createElement(s.a,null,o.a.createElement(w,null),o.a.createElement(i.a,{path:"/",exact:!0,component:g}),o.a.createElement(i.a,{path:"/about",component:_}),o.a.createElement(i.a,{path:"/movie/:id",component:j}))};c.a.render(o.a.createElement(O,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.8e59acf0.chunk.js.map