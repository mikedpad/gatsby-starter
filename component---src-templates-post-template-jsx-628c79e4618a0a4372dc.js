(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{202:function(e,t,n){"use strict";n.r(t),n.d(t,"postQuery",function(){return d});var a=n(0),o=n.n(a),i=n(206),r=n(211),l=n(214),c=i.b.article.withConfig({displayName:"PostTemplate__Article",componentId:"sc-1kfs4f0-0"})(["margin:0;"]),s=i.b.h1.withConfig({displayName:"PostTemplate__Title",componentId:"sc-1kfs4f0-1"})(["font-family:",";font-size:1.75rem;margin-bottom:0.5em;"],r.a),m=i.b.div.withConfig({displayName:"PostTemplate__DateTime",componentId:"sc-1kfs4f0-2"})([""]),u=i.b.section.withConfig({displayName:"PostTemplate__Body",componentId:"sc-1kfs4f0-3"})(["font-family:",";margin:2rem 0;"],r.b);t.default=function(e){var t=e.data.markdownRemark,n=t.id,a=t.frontmatter,i=a.title,r=a.date,d=a.dateFormat,f=t.html;return o.a.createElement(l.a,null,o.a.createElement(c,{"data-post-id":n},o.a.createElement("header",null,o.a.createElement(s,null,i),o.a.createElement(m,null,o.a.createElement("time",{dateTime:r},d))),o.a.createElement(u,{dangerouslySetInnerHTML:{__html:f}})))};var d="2461101789"},207:function(e,t,n){"use strict";n(42);var a=n(105),o=n.n(a),i=n(0),r=n.n(i),l=n(5),c=n.n(l),s=n(41),m=n.n(s);n(209),r.a.createContext({});c.a.object,c.a.string.isRequired,c.a.func,c.a.func;var u=function(e){var t=e.children,n=e.to,a=o()(e,["children","to"]);return/^\/(?!\/)/.test(n)?r.a.createElement(m.a,Object.assign({to:n,onClick:function(e){e.persist();var t=e.target.pathname;console.log("To: "+t+" | Current: "+document.location.pathname),t!==document.location.pathname?e.preventDefault():e.stopPropagation()}},a),t):r.a.createElement("a",Object.assign({href:n,rel:"noopener noreferrer",target:"_blank"},a),t)};t.a=u;u.propTypes={to:c.a.string.isRequired}},208:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return i});var a="#242a31",o="#afafb1",i={normal:"#455a72",active:"#698eb9"}},209:function(e,t,n){var a;e.exports=(a=n(213))&&a.default||a},210:function(e,t,n){"use strict";var a=n(207);n.d(t,"a",function(){return a.a})},211:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return o});var a="Lora, 'Times New Roman', Times, serif",o="'Source Sans Pro', Helvetica, Arial, sans- serif"},212:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Starter"}}}}},213:function(e,t,n){"use strict";n.r(t);n(42);var a=n(0),o=n.n(a),i=n(5),r=n.n(i),l=n(69),c=function(e){var t=e.location,n=e.pageResources;return n?o.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};c.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=c},214:function(e,t,n){"use strict";var a=n(216),o=n.n(a),i=n(212),r=n(0),l=n.n(r),c=n(217),s=n.n(c),m=n(206),u=n(215),d=n(207),f=n(210),p=n(208),g=m.b.ul.withConfig({displayName:"Navigation__UnorderedList",componentId:"sc-10g8xm2-0"})(["list-style-type:none;margin:0;padding:0;"]),b=m.b.li.withConfig({displayName:"Navigation__ListItem",componentId:"sc-10g8xm2-1"})(["display:inline-block;margin-left:0.75rem;&:first-child{margin-left:0;}"]),v=Object(m.b)(f.a).withConfig({displayName:"Navigation__NavLink",componentId:"sc-10g8xm2-2"})(["background-color:inherit;color:",";font-size:1.25rem;font-weight:300;padding:8px 10px;text-decoration:none;transition:all 0.2s ease-out;&:hover{background-color:#ffffff33;color:#fff;}"],p.c.normal),h=function(){return l.a.createElement(g,null,l.a.createElement(b,null,l.a.createElement(v,{to:"/"},"Home")),l.a.createElement(b,null,l.a.createElement(v,{to:"/blog"},"Blog")))},y=n(211);function _(){var e=o()(["\n  :root {\n    background-color: ",";\n    color: ",";\n    font-family: ",";\n    text-rendering: optimizeLegibility;\n  }\n"]);return _=function(){return e},e}var w=Object(m.a)(_(),p.a,p.b,y.a),E=m.b.header.withConfig({displayName:"Layout__Header",componentId:"sc-1kgvniv-0"})(["background-color:",";margin-bottom:1.45rem;"],Object(u.c)(.05,p.a)),k=m.b.main.withConfig({displayName:"Layout__Main",componentId:"sc-1kgvniv-1"})(["overflow:auto;padding:0;"]),x=m.b.div.withConfig({displayName:"Layout__Wrapper",componentId:"sc-1kgvniv-2"})(["margin:0 auto;padding:1.5rem 1.25rem;",""],Object(u.b)({prop:"max-width",fromSize:"600px",toSize:"960px"},"640px","1200px")),N=m.b.div.withConfig({displayName:"Layout__FlexWrap",componentId:"sc-1kgvniv-3"})(["align-items:center;display:flex;flex-flow:row nowrap;justify-content:space-between;"]),C=m.b.h1.withConfig({displayName:"Layout__Title",componentId:"sc-1kgvniv-4"})(["margin:0;"]),I=Object(m.b)(d.a).withConfig({displayName:"Layout__TitleLink",componentId:"sc-1kgvniv-5"})(["color:",";text-decoration:none;transition:color 0.2s ease-out;&:hover{color:#fff;}"],p.b),T=function(e){var t=e.children,n=i.data.site.siteMetadata.title;return l.a.createElement(l.a.Fragment,null,l.a.createElement(w,null),l.a.createElement(s.a,null,l.a.createElement("title",null,n)),l.a.createElement(E,null,l.a.createElement(x,null,l.a.createElement(N,null,l.a.createElement(C,null,l.a.createElement(I,{to:"/"},n)),l.a.createElement("nav",null,l.a.createElement(h,null))))),l.a.createElement(k,null,l.a.createElement(x,null,t)))};n.d(t,"a",function(){return T})}}]);
//# sourceMappingURL=component---src-templates-post-template-jsx-628c79e4618a0a4372dc.js.map