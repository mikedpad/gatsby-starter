(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{205:function(e,t,n){"use strict";n.r(t);n(42);var a=n(232),r=n(0),i=n.n(r),o=n(215),l=n(5),c=n.n(l),s=n(211),d=function(e){var t=e.id,n=e.fields.path,a=e.frontmatter,r=a.title,o=a.date,l=a.dateFormat;return i.a.createElement("article",{key:t,"data-post-id":t},i.a.createElement("time",{dateTime:o},l),i.a.createElement(s.a,{to:n},i.a.createElement("h1",null,r)))},u=d;d.propTypes={id:c.a.string.isRequired,fields:c.a.shape({path:c.a.string.isRequired}).isRequired,frontmatter:c.a.shape({title:c.a.string.isRequired,date:c.a.string.isRequired,dateFormat:c.a.string}).isRequired};t.default=function(){var e=a.data.allMarkdownRemark.edges;return i.a.createElement(o.a,{title:": Blog"},e.map(function(e){var t=e.node;return i.a.createElement(u,Object.assign({key:t.id},t))}))}},207:function(e,t,n){"use strict";n(42);var a=n(105),r=n.n(a),i=n(0),o=n.n(i),l=n(5),c=n.n(l),s=n(209),d=function(e){var t=e.children,n=e.to,a=r()(e,["children","to"]);return/^\/(?!\/)/.test(n)?o.a.createElement(s.a,Object.assign({to:n,onClick:function(e){e.persist();var t=e.target.pathname,n=document.location.pathname;if(console.log("To: "+t+" | Current: "+n),t===n)return e.stopPropagation(),void Object(s.b)(t,{replace:!0});Object(s.b)(t)}},a),t):o.a.createElement("a",Object.assign({href:n,rel:"noopener noreferrer",target:"_blank"},a),t)};t.a=d,d.propTypes={to:c.a.string.isRequired}},208:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r}),n.d(t,"c",function(){return i});var a="#242a31",r="#afafb1",i={normal:"#455a72",active:"#698eb9"}},209:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(5),o=n.n(i),l=n(41),c=n.n(l);n.d(t,"a",function(){return c.a}),n.d(t,"b",function(){return l.navigate});n(210),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},210:function(e,t,n){var a;e.exports=(a=n(214))&&a.default||a},211:function(e,t,n){"use strict";var a=n(207);n.d(t,"a",function(){return a.a})},212:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r});var a="Lora, 'Times New Roman', Times, serif",r="'Source Sans Pro', Helvetica, Arial, sans- serif"},213:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Starter"}}}}},214:function(e,t,n){"use strict";n.r(t);n(42);var a=n(0),r=n.n(a),i=n(5),o=n.n(i),l=n(69),c=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},215:function(e,t,n){"use strict";var a=n(217),r=n.n(a),i=n(213),o=n(0),l=n.n(o),c=n(5),s=n.n(c),d=n(218),u=n.n(d),m=n(206),f=n(216),p=n(207),g=(n(209),n(211)),b=n(208),v=m.b.ul.withConfig({displayName:"Navigation__UnorderedList",componentId:"sc-10g8xm2-0"})(["list-style-type:none;margin:0;padding:0;"]),h=m.b.li.withConfig({displayName:"Navigation__ListItem",componentId:"sc-10g8xm2-1"})(["display:inline-block;margin-left:0.75rem;&:first-child{margin-left:0;}"]),w=Object(m.b)(g.a).withConfig({displayName:"Navigation__NavLink",componentId:"sc-10g8xm2-2"})(["background-color:inherit;color:",";font-size:1.25rem;font-weight:300;padding:8px 10px;text-decoration:none;transition:all 0.2s ease-out;&:hover{background-color:#ffffff33;color:#fff;}"],b.c.normal),k=function(){return l.a.createElement(v,null,l.a.createElement(h,null,l.a.createElement(w,{to:"/"},"Home")),l.a.createElement(h,null,l.a.createElement(w,{to:"/blog"},"Blog")))},y=n(212);function E(){var e=r()(["\n  :root {\n    background-color: ",";\n    color: ",";\n    font-family: ",";\n    text-rendering: optimizeLegibility;\n  }\n"]);return E=function(){return e},e}var x=Object(m.a)(E(),b.a,b.b,y.a),_=m.b.header.withConfig({displayName:"Layout__Header",componentId:"sc-1kgvniv-0"})(["background-color:",";margin-bottom:1.45rem;"],Object(f.c)(.05,b.a)),N=m.b.main.withConfig({displayName:"Layout__Main",componentId:"sc-1kgvniv-1"})(["overflow:auto;padding:0;"]),R=m.b.div.withConfig({displayName:"Layout__Wrapper",componentId:"sc-1kgvniv-2"})(["margin:0 auto;padding:1.5rem 1.25rem;",""],Object(f.b)({prop:"max-width",fromSize:"600px",toSize:"960px"},"640px","1200px")),j=m.b.div.withConfig({displayName:"Layout__FlexWrap",componentId:"sc-1kgvniv-3"})(["align-items:center;display:flex;flex-flow:row nowrap;justify-content:space-between;"]),T=m.b.h1.withConfig({displayName:"Layout__Title",componentId:"sc-1kgvniv-4"})(["margin:0;"]),L=Object(m.b)(p.a).withConfig({displayName:"Layout__TitleLink",componentId:"sc-1kgvniv-5"})(["color:",";text-decoration:none;transition:color 0.2s ease-out;&:hover{color:#fff;}"],b.b),C=function(e){var t=e.title,n=e.children,a=i.data.site.siteMetadata.title;return l.a.createElement(l.a.Fragment,null,l.a.createElement(x,null),l.a.createElement(u.a,null,l.a.createElement("title",null,""+a+(t||""))),l.a.createElement(_,null,l.a.createElement(R,null,l.a.createElement(j,null,l.a.createElement(T,null,l.a.createElement(L,{to:"/"},a)),l.a.createElement("nav",null,l.a.createElement(k,null))))),l.a.createElement(N,null,l.a.createElement(R,null,n)))},O=C;C.propTypes={title:s.a.string},C.defaultProps={title:null},n.d(t,"a",function(){return O})},232:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{id:"fa414f6c-ee4a-5fc4-a1e6-c618212418e8",fields:{path:"/blog/parsed-markdown-makes-things-easy"},frontmatter:{title:"Parsed Markdown Makes Things Easy",date:"2019-06-05T05:07:16-0700",dateFormat:"Jun 5, 2019"}}},{node:{id:"ab35b9d7-46ce-54d5-b565-a736f70831d8",fields:{path:"/blog/salsa-dancing-for-newbies"},frontmatter:{title:"Salsa Dancing For Newbies",date:"2019-03-14T02:45:36-0700",dateFormat:"Mar 14, 2019"}}},{node:{id:"c88597d6-3db3-581d-85ff-8315e0eab5cd",fields:{path:"/blog/mind-needs-books-like-sword-needs-whetstone"},frontmatter:{title:"A Mind Needs Books Like A Sword Needs A Whetstone",date:"2018-12-09T01:42:06-0700",dateFormat:"Dec 9, 2018"}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-blog-js-7a76dde497b950ae65f4.js.map