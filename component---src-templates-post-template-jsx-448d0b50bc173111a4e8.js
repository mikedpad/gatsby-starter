(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{202:function(e,t,n){"use strict";n.r(t),n.d(t,"postQuery",function(){return d});var a=n(0),i=n.n(a),r=n(206),o=n(211),l=n(214),c=r.b.article.withConfig({displayName:"PostTemplate__Article",componentId:"sc-1kfs4f0-0"})(["margin:0;"]),s=r.b.h1.withConfig({displayName:"PostTemplate__Title",componentId:"sc-1kfs4f0-1"})(["font-family:",";font-size:1.75rem;margin-bottom:0.5em;"],o.a),m=r.b.div.withConfig({displayName:"PostTemplate__DateTime",componentId:"sc-1kfs4f0-2"})([""]),u=r.b.section.withConfig({displayName:"PostTemplate__Body",componentId:"sc-1kfs4f0-3"})(["font-family:",";margin:2rem 0;"],o.b);t.default=function(e){var t=e.data.markdownRemark,n=t.id,a=t.frontmatter,r=a.title,o=a.date,d=a.dateFormat,f=t.html;return i.a.createElement(l.a,null,i.a.createElement(c,{"data-post-id":n},i.a.createElement("header",null,i.a.createElement(s,null,r),i.a.createElement(m,null,i.a.createElement("time",{dateTime:o},d))),i.a.createElement(u,{dangerouslySetInnerHTML:{__html:f}})))};var d="2461101789"},207:function(e,t,n){"use strict";n(42);var a=n(105),i=n.n(a),r=n(0),o=n.n(r),l=n(5),c=n.n(l),s=n(208),m=function(e){var t=e.children,n=e.to,a=i()(e,["children","to"]);return/^\/(?!\/)/.test(n)?o.a.createElement(s.a,Object.assign({to:n,onClick:function(e){e.persist();var t=e.target.pathname;console.log("To: "+t+" | Current: "+e.view.location.pathname),t!==document.location.pathname?e.preventDefault():e.stopPropagation()}},a),t):o.a.createElement("a",Object.assign({href:n,rel:"noopener noreferrer",target:"_blank"},a),t)};t.a=m,m.propTypes={to:c.a.string.isRequired}},208:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(5),o=n.n(r),l=n(41),c=n.n(l);n.d(t,"a",function(){return c.a});n(209),i.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},209:function(e,t,n){var a;e.exports=(a=n(213))&&a.default||a},210:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i}),n.d(t,"c",function(){return r});var a="#242a31",i="#afafb1",r={normal:"#455a72",active:"#698eb9"}},211:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return i});var a="Lora, 'Times New Roman', Times, serif",i="'Source Sans Pro', Helvetica, Arial, sans- serif"},212:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Starter"}}}}},213:function(e,t,n){"use strict";n.r(t);n(42);var a=n(0),i=n.n(a),r=n(5),o=n.n(r),l=n(69),c=function(e){var t=e.location,n=e.pageResources;return n?i.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},214:function(e,t,n){"use strict";var a=n(216),i=n.n(a),r=n(212),o=n(0),l=n.n(o),c=n(217),s=n.n(c),m=n(206),u=n(215),d=n(207),f=n(208),p=m.b.ul.withConfig({displayName:"Navigation__UnorderedList",componentId:"sc-10g8xm2-0"})(["list-style-type:none;margin:0;padding:0;"]),g=m.b.li.withConfig({displayName:"Navigation__ListItem",componentId:"sc-10g8xm2-1"})(["display:inline-block;margin-left:0.75rem;&:first-child{margin-left:0;}"]),b=function(){return l.a.createElement(p,null,l.a.createElement(g,null,l.a.createElement(f.a,{to:"/"},"Home")),l.a.createElement(g,null,l.a.createElement(f.a,{to:"/blog"},"Blog")))},v=n(211),y=n(210);function h(){var e=i()(["\n  :root {\n    background-color: ",";\n    color: ",";\n    font-family: ",";\n    text-rendering: optimizeLegibility;\n  }\n"]);return h=function(){return e},e}var E=Object(m.a)(h(),y.a,y.b,v.a),w=m.b.header.withConfig({displayName:"Layout__Header",componentId:"sc-1kgvniv-0"})(["background-color:",";margin-bottom:1.45rem;"],Object(u.c)(.05,y.a)),_=m.b.main.withConfig({displayName:"Layout__Main",componentId:"sc-1kgvniv-1"})(["overflow:auto;padding:0;"]),k=m.b.div.withConfig({displayName:"Layout__Wrapper",componentId:"sc-1kgvniv-2"})(["margin:0 auto;padding:1.5rem 1.25rem;",""],Object(u.b)({prop:"max-width",fromSize:"600px",toSize:"960px"},"640px","1200px")),x=m.b.div.withConfig({displayName:"Layout__FlexWrap",componentId:"sc-1kgvniv-3"})(["align-items:center;display:flex;flex-flow:row nowrap;justify-content:space-between;"]),C=m.b.h1.withConfig({displayName:"Layout__Title",componentId:"sc-1kgvniv-4"})(["margin:0;"]),N=Object(m.b)(d.a).withConfig({displayName:"Layout__TitleLink",componentId:"sc-1kgvniv-5"})(["color:",";text-decoration:none;transition:color 0.2s ease-out;&:hover{color:#fff;}"],y.b),T=function(e){var t=e.children,n=r.data.site.siteMetadata.title;return l.a.createElement(l.a.Fragment,null,l.a.createElement(E,null),l.a.createElement(s.a,null,l.a.createElement("title",null,n)),l.a.createElement(w,null,l.a.createElement(k,null,l.a.createElement(x,null,l.a.createElement(C,null,l.a.createElement(N,{to:"/"},n)),l.a.createElement("nav",null,l.a.createElement(b,null))))),l.a.createElement(_,null,l.a.createElement(k,null,t)))};n.d(t,"a",function(){return T})}}]);
//# sourceMappingURL=component---src-templates-post-template-jsx-448d0b50bc173111a4e8.js.map