(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{205:function(e,t,n){"use strict";n.r(t);n(42);var a=n(0),r=n.n(a),i=n(214),o=n(5),l=n.n(o),c=n(210),s=function(e){var t=e.id,n=e.fields.path,a=e.frontmatter,i=a.title,o=a.date,l=a.dateFormat;return r.a.createElement("article",{key:t,"data-post-id":t},r.a.createElement("time",{dateTime:o},l),r.a.createElement(c.a,{to:n},r.a.createElement("h1",null,i)))},u=s;s.propTypes={id:l.a.string.isRequired,fields:l.a.shape({path:l.a.string.isRequired}).isRequired,frontmatter:l.a.shape({title:l.a.string.isRequired,date:l.a.string.isRequired,dateFormat:l.a.string}).isRequired},n.d(t,"blogQuery",function(){return d});t.default=function(e){var t=e.data.allMarkdownRemark.edges;return r.a.createElement(i.a,null,t.map(function(e){var t=e.node;return r.a.createElement(u,Object.assign({key:t.id},t))}))};var d="160600761"},207:function(e,t,n){"use strict";n(42);var a=n(105),r=n.n(a),i=n(0),o=n.n(i),l=n(5),c=n.n(l),s=n(41),u=n.n(s);n(209),o.a.createContext({});c.a.object,c.a.string.isRequired,c.a.func,c.a.func;var d=function(e){var t=e.children,n=e.to,a=r()(e,["children","to"]);return/^\/(?!\/)/.test(n)?o.a.createElement(u.a,Object.assign({to:n,onClick:function(e){var t=e.target.pathname;if(t===document.location.pathname)return e.stopPropagation(),void Object(s.navigate)(t,{replace:!0});e.preventDefault(),Object(s.navigate)(t)}},a),t):o.a.createElement("a",Object.assign({href:n,rel:"noopener noreferrer",target:"_blank"},a),t)};t.a=d;d.propTypes={to:c.a.string.isRequired}},208:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r}),n.d(t,"c",function(){return i});var a="#242a31",r="#afafb1",i={normal:"#455a72",active:"#698eb9"}},209:function(e,t,n){var a;e.exports=(a=n(213))&&a.default||a},210:function(e,t,n){"use strict";var a=n(207);n.d(t,"a",function(){return a.a})},211:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r});var a="Lora, 'Times New Roman', Times, serif",r="'Source Sans Pro', Helvetica, Arial, sans- serif"},212:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Starter"}}}}},213:function(e,t,n){"use strict";n.r(t);n(42);var a=n(0),r=n.n(a),i=n(5),o=n.n(i),l=n(69),c=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},214:function(e,t,n){"use strict";var a=n(216),r=n.n(a),i=n(212),o=n(0),l=n.n(o),c=n(217),s=n.n(c),u=n(206),d=n(215),m=n(207),f=n(210),p=n(208),g=u.b.ul.withConfig({displayName:"Navigation__UnorderedList",componentId:"sc-10g8xm2-0"})(["list-style-type:none;margin:0;padding:0;"]),v=u.b.li.withConfig({displayName:"Navigation__ListItem",componentId:"sc-10g8xm2-1"})(["display:inline-block;margin-left:0.75rem;&:first-child{margin-left:0;}"]),b=Object(u.b)(f.a).withConfig({displayName:"Navigation__NavLink",componentId:"sc-10g8xm2-2"})(["background-color:inherit;color:",";font-size:1.25rem;font-weight:300;padding:8px 10px;text-decoration:none;transition:all 0.2s ease-out;&:hover{background-color:#ffffff33;color:#fff;}"],p.c.normal),h=function(){return l.a.createElement(g,null,l.a.createElement(v,null,l.a.createElement(b,{to:"/"},"Home")),l.a.createElement(v,null,l.a.createElement(b,{to:"/blog"},"Blog")))},y=n(211);function E(){var e=r()(["\n  :root {\n    background-color: ",";\n    color: ",";\n    font-family: ",";\n    text-rendering: optimizeLegibility;\n  }\n"]);return E=function(){return e},e}var w=Object(u.a)(E(),p.a,p.b,y.a),k=u.b.header.withConfig({displayName:"Layout__Header",componentId:"sc-1kgvniv-0"})(["background-color:",";margin-bottom:1.45rem;"],Object(d.c)(.05,p.a)),x=u.b.main.withConfig({displayName:"Layout__Main",componentId:"sc-1kgvniv-1"})(["overflow:auto;padding:0;"]),_=u.b.div.withConfig({displayName:"Layout__Wrapper",componentId:"sc-1kgvniv-2"})(["margin:0 auto;padding:1.5rem 1.25rem;",""],Object(d.b)({prop:"max-width",fromSize:"600px",toSize:"960px"},"640px","1200px")),j=u.b.div.withConfig({displayName:"Layout__FlexWrap",componentId:"sc-1kgvniv-3"})(["align-items:center;display:flex;flex-flow:row nowrap;justify-content:space-between;"]),N=u.b.h1.withConfig({displayName:"Layout__Title",componentId:"sc-1kgvniv-4"})(["margin:0;"]),R=Object(u.b)(m.a).withConfig({displayName:"Layout__TitleLink",componentId:"sc-1kgvniv-5"})(["color:",";text-decoration:none;transition:color 0.2s ease-out;&:hover{color:#fff;}"],p.b),L=function(e){var t=e.children,n=i.data.site.siteMetadata.title;return l.a.createElement(l.a.Fragment,null,l.a.createElement(w,null),l.a.createElement(s.a,null,l.a.createElement("title",null,n)),l.a.createElement(k,null,l.a.createElement(_,null,l.a.createElement(j,null,l.a.createElement(N,null,l.a.createElement(R,{to:"/"},n)),l.a.createElement("nav",null,l.a.createElement(h,null))))),l.a.createElement(x,null,l.a.createElement(_,null,t)))};n.d(t,"a",function(){return L})}}]);
//# sourceMappingURL=component---src-pages-blog-js-385c7c3836165e985c09.js.map