(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{205:function(e,t,a){"use strict";a.r(t);a(42);var n=a(232),r=a(0),i=a.n(r),o=a(214),l=a(5),c=a.n(l),s=a(218),d=function(e){var t=e.id,a=e.fields.path,n=e.frontmatter,r=n.title,o=n.date,l=n.dateFormat;return i.a.createElement("article",{key:t,"data-post-id":t},i.a.createElement("time",{dateTime:o},l),i.a.createElement(s.a,{to:a},i.a.createElement("h1",null,r)))},u=d;d.propTypes={id:c.a.string.isRequired,fields:c.a.shape({path:c.a.string.isRequired}).isRequired,frontmatter:c.a.shape({title:c.a.string.isRequired,date:c.a.string.isRequired,dateFormat:c.a.string}).isRequired};t.default=function(){var e=n.data.allMarkdownRemark.edges;return i.a.createElement(o.a,null,e.map(function(e){var t=e.node;return i.a.createElement(u,Object.assign({key:t.id},t))}))}},207:function(e,t,a){"use strict";a(42);var n=a(105),r=a.n(n),i=a(0),o=a.n(i),l=a(5),c=a.n(l),s=a(208),d=function(e){var t=e.children,a=e.to,n=r()(e,["children","to"]);return/^\/(?!\/)/.test(a)?o.a.createElement(s.a,Object.assign({to:a,onClick:function(e){e.persist();var t=e.target.pathname;console.log("To: "+t+" | Current: "+e.view.location.pathname),t!==document.location.pathname?e.preventDefault():e.stopPropagation()}},n),t):o.a.createElement("a",Object.assign({href:a,rel:"noopener noreferrer",target:"_blank"},n),t)};t.a=d,d.propTypes={to:c.a.string.isRequired}},208:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(5),o=a.n(i),l=a(41),c=a.n(l);a.d(t,"a",function(){return c.a});a(209),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},209:function(e,t,a){var n;e.exports=(n=a(213))&&n.default||n},210:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r}),a.d(t,"c",function(){return i});var n="#242a31",r="#afafb1",i={normal:"#455a72",active:"#698eb9"}},211:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return r});var n="Lora, 'Times New Roman', Times, serif",r="'Source Sans Pro', Helvetica, Arial, sans- serif"},212:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Starter"}}}}},213:function(e,t,a){"use strict";a.r(t);a(42);var n=a(0),r=a.n(n),i=a(5),o=a.n(i),l=a(69),c=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},214:function(e,t,a){"use strict";var n=a(216),r=a.n(n),i=a(212),o=a(0),l=a.n(o),c=a(217),s=a.n(c),d=a(206),u=a(215),m=a(207),f=a(208),p=d.b.ul.withConfig({displayName:"Navigation__UnorderedList",componentId:"sc-10g8xm2-0"})(["list-style-type:none;margin:0;padding:0;"]),g=d.b.li.withConfig({displayName:"Navigation__ListItem",componentId:"sc-10g8xm2-1"})(["display:inline-block;margin-left:0.75rem;&:first-child{margin-left:0;}"]),b=function(){return l.a.createElement(p,null,l.a.createElement(g,null,l.a.createElement(f.a,{to:"/"},"Home")),l.a.createElement(g,null,l.a.createElement(f.a,{to:"/blog"},"Blog")))},v=a(211),h=a(210);function w(){var e=r()(["\n  :root {\n    background-color: ",";\n    color: ",";\n    font-family: ",";\n    text-rendering: optimizeLegibility;\n  }\n"]);return w=function(){return e},e}var y=Object(d.a)(w(),h.a,h.b,v.a),k=d.b.header.withConfig({displayName:"Layout__Header",componentId:"sc-1kgvniv-0"})(["background-color:",";margin-bottom:1.45rem;"],Object(u.c)(.05,h.a)),E=d.b.main.withConfig({displayName:"Layout__Main",componentId:"sc-1kgvniv-1"})(["overflow:auto;padding:0;"]),_=d.b.div.withConfig({displayName:"Layout__Wrapper",componentId:"sc-1kgvniv-2"})(["margin:0 auto;padding:1.5rem 1.25rem;",""],Object(u.b)({prop:"max-width",fromSize:"600px",toSize:"960px"},"640px","1200px")),x=d.b.div.withConfig({displayName:"Layout__FlexWrap",componentId:"sc-1kgvniv-3"})(["align-items:center;display:flex;flex-flow:row nowrap;justify-content:space-between;"]),R=d.b.h1.withConfig({displayName:"Layout__Title",componentId:"sc-1kgvniv-4"})(["margin:0;"]),N=Object(d.b)(m.a).withConfig({displayName:"Layout__TitleLink",componentId:"sc-1kgvniv-5"})(["color:",";text-decoration:none;transition:color 0.2s ease-out;&:hover{color:#fff;}"],h.b),T=function(e){var t=e.children,a=i.data.site.siteMetadata.title;return l.a.createElement(l.a.Fragment,null,l.a.createElement(y,null),l.a.createElement(s.a,null,l.a.createElement("title",null,a)),l.a.createElement(k,null,l.a.createElement(_,null,l.a.createElement(x,null,l.a.createElement(R,null,l.a.createElement(N,{to:"/"},a)),l.a.createElement("nav",null,l.a.createElement(b,null))))),l.a.createElement(E,null,l.a.createElement(_,null,t)))};a.d(t,"a",function(){return T})},218:function(e,t,a){"use strict";var n=a(207);a.d(t,"a",function(){return n.a})},232:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{id:"fa414f6c-ee4a-5fc4-a1e6-c618212418e8",fields:{path:"/blog/parsed-markdown-makes-things-easy"},frontmatter:{title:"Parsed Markdown Makes Things Easy",date:"2019-06-05T05:07:16-0700",dateFormat:"Jun 5, 2019"}}},{node:{id:"ab35b9d7-46ce-54d5-b565-a736f70831d8",fields:{path:"/blog/salsa-dancing-for-newbies"},frontmatter:{title:"Salsa Dancing For Newbies",date:"2019-03-14T02:45:36-0700",dateFormat:"Mar 14, 2019"}}},{node:{id:"c88597d6-3db3-581d-85ff-8315e0eab5cd",fields:{path:"/blog/mind-needs-books-like-sword-needs-whetstone"},frontmatter:{title:"A Mind Needs Books Like A Sword Needs A Whetstone",date:"2018-12-09T01:42:06-0700",dateFormat:"Dec 9, 2018"}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-blog-js-27e69e72fcfdd6038674.js.map