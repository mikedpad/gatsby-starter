(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{204:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(214),i=a(206),o=a(215),c=a(208),A=a(231),d=i.b.nav.withConfig({displayName:"TableOfContents__Nav",componentId:"sc-1ows7ry-0"})(["margin:3rem 0;"]),s=i.b.ul.withConfig({displayName:"TableOfContents__UnorderedList",componentId:"sc-1ows7ry-1"})(["justify-content:space-around;list-style-type:none;margin:",";padding:0;text-align:center;@media only screen and (min-width:560px){display:",";list-style-type:",";margin:0;text-align:left;}"],function(e){return e.child?"0 0 2rem":"0"},function(e){return e.child?"block":"flex"},function(e){return e.child?"square":"none"}),u=i.b.li.withConfig({displayName:"TableOfContents__ListItem",componentId:"sc-1ows7ry-2"})(["display:block;"," li &{color:",";display:list-item;@media only screen and (min-width:560px){margin:0 0 0 2.5rem;}&:hover{color:",";}}"],s,Object(o.a)(.4,c.b),Object(o.a)(.2,c.b)),m=i.b.a.withConfig({displayName:"TableOfContents__TocLink",componentId:"sc-1ows7ry-3"})(["color:",";display:block;font-size:1.25rem;padding:0.5em 0.7em;text-decoration:none;transition:background-color 0.2s ease-out;&:hover{color:",";background-color:",";}"," "," &{font-size:1rem;}"],c.c.normal,c.c.active,Object(o.c)(.05,c.a),u,u),p=function(e){e.preventDefault(),document.getElementById(e.target.hash.slice(1)).scrollIntoView({behavior:"smooth",inline:"start"})},f=function e(t){var a=t.label,l=t.href,r=t.child;return n.a.createElement(u,{key:a},n.a.createElement(m,{href:l,onClick:p},a),r&&n.a.createElement(s,{child:!0},r.map(e)))},E=function(){return n.a.createElement(d,null,n.a.createElement(s,null,A.map(f)))},h=a(5),g=a.n(h),b=i.b.h1.withConfig({displayName:"TestSection__Title",componentId:"dyhuph-0"})(["background-color:",";color:#fff;font-size:3rem;padding:1rem 2rem;"],Object(o.c)(.05,c.a)),y=function(e){var t=e.id,a=e.title,l=e.children;return n.a.createElement("section",{id:t},n.a.createElement("header",null,n.a.createElement(b,null,a)),l)},x=y;y.propTypes={id:g.a.string.isRequired,title:g.a.string.isRequired};var _=function(){var e=i.b.button.withConfig({displayName:"BackToTop__GoToTopButton",componentId:"sc-17qm62o-0"})(["background-color:#ffffff33;border:2px solid #ffffff11;border-radius:0.25em;color:#fff;margin:1.5rem 0 3rem;outline:none;padding:0.25em 0.75em;"]);return n.a.createElement(e,{type:"button",onClick:function(e){e.preventDefault(),document.documentElement.scrollIntoView({behavior:"smooth",block:"start",inline:"start"})}},"Go To Top")},w=i.b.article.withConfig({displayName:"TestElement__Article",componentId:"boxxba-0"})(["padding:1rem 2rem;"]),T=i.b.h1.withConfig({displayName:"TestElement__Title",componentId:"boxxba-1"})(["border-bottom:1px solid ",";color:#fff;margin-bottom:0.67em;padding-bottom:0.2em;"],c.b),v=function(e){var t=e.id,a=e.title,l=e.children;return n.a.createElement(w,{id:t},n.a.createElement("header",null,n.a.createElement(T,null,a)),n.a.createElement("div",null,l),n.a.createElement("footer",null,n.a.createElement(_,null)))},B=v;v.propTypes={id:g.a.string.isRequired,title:g.a.string.isRequired};var C=function(){return n.a.createElement(B,{id:"text__headings",title:"Headings"},n.a.createElement("h1",null,"Heading 1"),n.a.createElement("h2",null,"Heading 2"),n.a.createElement("h3",null,"Heading 3"),n.a.createElement("h4",null,"Heading 4"),n.a.createElement("h5",null,"Heading 5"),n.a.createElement("h6",null,"Heading 6"))},I=function(){return n.a.createElement(B,{id:"text__paragraphs",title:"Paragraphs"},n.a.createElement("p",null,"A paragraph (from the Greek paragraphos, “to write beside” or “written beside”) is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose."))},j=function(){return n.a.createElement(B,{id:"text__blockquotes",title:"Blockquotes"},n.a.createElement("blockquote",null,n.a.createElement("p",null,"A block quotation (also known as a long quotation or extract) is a quotation in a written document, that is set off from the main text as a paragraph, or block of text."),n.a.createElement("p",null,"It is typically distinguished visually using indentation and a different typeface or smaller size quotation. It may or may not include a citation, usually placed at the bottom."),n.a.createElement("cite",null,n.a.createElement("a",{href:"#!"},"Said no one, ever."))))},S=function(){return n.a.createElement(B,{id:"text__lists",title:"Lists"},n.a.createElement("h3",null,"Definition list"),n.a.createElement("dl",null,n.a.createElement("dt",null,"Definition List Title"),n.a.createElement("dd",null,"This is a definition list division.")),n.a.createElement("h3",null,"Ordered List"),n.a.createElement("ol",null,n.a.createElement("li",null,"List Item 1"),n.a.createElement("li",null,"List Item 2"),n.a.createElement("li",null,"List Item 3")),n.a.createElement("h3",null,"Unordered List"),n.a.createElement("ul",null,n.a.createElement("li",null,"List Item 1"),n.a.createElement("li",null,"List Item 2"),n.a.createElement("li",null,"List Item 3")))},N=function(){return n.a.createElement(B,{id:"text__hr",title:"Horizontal Rule"},n.a.createElement("hr",null))},Q=function(){return n.a.createElement(B,{id:"text__tables",title:"Tabular Data"},n.a.createElement("table",null,n.a.createElement("caption",null,"Table Caption"),n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Table Heading 1"),n.a.createElement("th",null,"Table Heading 2"),n.a.createElement("th",null,"Table Heading 3"),n.a.createElement("th",null,"Table Heading 4"),n.a.createElement("th",null,"Table Heading 5"))),n.a.createElement("tfoot",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Table Footer 1"),n.a.createElement("th",null,"Table Footer 2"),n.a.createElement("th",null,"Table Footer 3"),n.a.createElement("th",null,"Table Footer 4"),n.a.createElement("th",null,"Table Footer 5"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Table Cell 1"),n.a.createElement("td",null,"Table Cell 2"),n.a.createElement("td",null,"Table Cell 3"),n.a.createElement("td",null,"Table Cell 4"),n.a.createElement("td",null,"Table Cell 5")),n.a.createElement("tr",null,n.a.createElement("td",null,"Table Cell 1"),n.a.createElement("td",null,"Table Cell 2"),n.a.createElement("td",null,"Table Cell 3"),n.a.createElement("td",null,"Table Cell 4"),n.a.createElement("td",null,"Table Cell 5")),n.a.createElement("tr",null,n.a.createElement("td",null,"Table Cell 1"),n.a.createElement("td",null,"Table Cell 2"),n.a.createElement("td",null,"Table Cell 3"),n.a.createElement("td",null,"Table Cell 4"),n.a.createElement("td",null,"Table Cell 5")),n.a.createElement("tr",null,n.a.createElement("td",null,"Table Cell 1"),n.a.createElement("td",null,"Table Cell 2"),n.a.createElement("td",null,"Table Cell 3"),n.a.createElement("td",null,"Table Cell 4"),n.a.createElement("td",null,"Table Cell 5")))))},R=i.b.pre.withConfig({displayName:"Code__PreCode",componentId:"sc-1aatnp3-0"})(["overflow-x:scroll;"]),k=function(){return n.a.createElement(B,{id:"text__code",title:"Code"},n.a.createElement("p",null,n.a.createElement("strong",null,"Keyboard input:")," ",n.a.createElement("kbd",null,"Cmd")),n.a.createElement("p",null,n.a.createElement("strong",null,"Inline code:")," ",n.a.createElement("code",null,"<div>code</div>")),n.a.createElement("p",null,n.a.createElement("strong",null,"Sample output:")," ",n.a.createElement("samp",null,"This is sample output from a computer program.")),n.a.createElement("h2",null,"Pre-formatted text"),n.a.createElement(R,null,"\nP R E F O R M A T T E D T E X T ! ' # $ % & ' ( ) * +   , - . /\n0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ [ \\ ] ^ _ `\nA B C D E F G H I J K L M N O P Q R S T U V W X Y Z\na b c d e f g h i j k l m n o p q r s t u v w x y z { | } ~\n                "))},L=function(){return n.a.createElement(B,{id:"text__inline",title:"Inline Elements"},n.a.createElement("p",null,n.a.createElement("a",{href:"#!"},"This is a text link"),"."),n.a.createElement("p",null,n.a.createElement("strong",null,"Strong is used to indicate strong importance.")),n.a.createElement("p",null,n.a.createElement("em",null,"This text has added emphasis.")),n.a.createElement("p",null,"The ",n.a.createElement("b",null,"b element")," is stylistically different text from normal text, without any special importance."),n.a.createElement("p",null,"The ",n.a.createElement("i",null,"i element")," is text that is offset from the normal text."),n.a.createElement("p",null,"The ",n.a.createElement("u",null,"u element")," is text with an unarticulated, though explicitly rendered, non-textual annotation."),n.a.createElement("p",null,n.a.createElement("del",null,"This text is deleted")," and ",n.a.createElement("ins",null,"This text is inserted"),"."),n.a.createElement("p",null,n.a.createElement("s",null,"This text has a strikethrough"),"."),n.a.createElement("p",null,"Superscript",n.a.createElement("sup",null,"®"),"."),n.a.createElement("p",null,"Subscript for things like H",n.a.createElement("sub",null,"2"),"O."),n.a.createElement("p",null,n.a.createElement("small",null,"This small text is small for for fine print, etc.")),n.a.createElement("p",null,"Abbreviation: ",n.a.createElement("abbr",{title:"HyperText Markup Language"},"HTML")),n.a.createElement("p",null,n.a.createElement("q",{cite:"https://developer.mozilla.org/en-US/docs/HTML/Element/q"},"This text is a short inline quotation.")),n.a.createElement("p",null,n.a.createElement("cite",null,"This is a citation.")),n.a.createElement("p",null,"The ",n.a.createElement("dfn",null,"dfn element")," indicates a definition."),n.a.createElement("p",null,"The ",n.a.createElement("mark",null,"mark element")," indicates a highlight."),n.a.createElement("p",null,"The ",n.a.createElement("var",null,"variable element"),", such as ",n.a.createElement("var",null,"x")," = ",n.a.createElement("var",null,"y"),"."),n.a.createElement("p",null,"The time element: ",n.a.createElement("time",{dateTime:"2013-04-06T12:32+00:00"},"2 weeks ago")))},F=function(){return n.a.createElement(x,{id:"text",title:"Text Elements"},n.a.createElement(C,null),n.a.createElement(I,null),n.a.createElement(j,null),n.a.createElement(S,null),n.a.createElement(N,null),n.a.createElement(Q,null),n.a.createElement(k,null),n.a.createElement(L,null))},Y=a(232),O=a(233),D=a.n(O),M=function(){var e=Y.data;return n.a.createElement(B,{id:"embedded__images",title:"Images"},n.a.createElement("h3",null,"No ",n.a.createElement("code",null,"<figure>")," element"),n.a.createElement(D.a,{fluid:e.cat1.childImageSharp.fluid,alt:"Cat 1"}),n.a.createElement("h3",null,"Wrapped in a ",n.a.createElement("code",null,"<figure>")," element, no ",n.a.createElement("code",null,"<figcaption>")),n.a.createElement("figure",null,n.a.createElement(D.a,{fluid:e.cat2.childImageSharp.fluid,alt:"Cat 2"})),n.a.createElement("h3",null,"Wrapped in a ",n.a.createElement("code",null,"<figure>")," element, with a"," ",n.a.createElement("code",null,"<figcaption>")),n.a.createElement("figure",null,n.a.createElement(D.a,{fluid:e.cat3.childImageSharp.fluid,alt:"Cat 3"}),n.a.createElement("figcaption",null,"Here is a caption for this image.")))},P=function(){return n.a.createElement(B,{id:"embedded__audio",title:"Audio"},n.a.createElement("audio",{controls:""},n.a.createElement("track",{kind:"captions"}),"audio"))},H=function(){return n.a.createElement(B,{id:"embedded__video",title:"Video"},n.a.createElement("video",{controls:""},n.a.createElement("track",{kind:"captions"}),"video"))},z=function(){return n.a.createElement(B,{id:"embedded__canvas",title:"Canvas"},n.a.createElement("canvas",null,"canvas"))},G=function(){return n.a.createElement(B,{id:"embedded__meter",title:"Meter"},n.a.createElement("meter",{value:"2",min:"0",max:"10"},"2 out of 10"))},V=function(){return n.a.createElement(B,{id:"embedded__progress",title:"Progress"},n.a.createElement("progress",null,"progress"))},q=function(){return n.a.createElement(B,{id:"embedded__svg",title:"Inline SVG"},n.a.createElement("svg",{width:"100px",height:"100px"},n.a.createElement("circle",{cx:"100",cy:"100",r:"100",fill:"#1fa3ec"})))},W=function(){return n.a.createElement(B,{id:"embedded__iframe",title:"IFrames"},n.a.createElement("iframe",{src:"/",height:"300",title:"Index"}))},U=function(){return n.a.createElement(x,{id:"embedded",title:"Embedded Content"},n.a.createElement(M,null),n.a.createElement(P,null),n.a.createElement(H,null),n.a.createElement(z,null),n.a.createElement(G,null),n.a.createElement(V,null),n.a.createElement(q,null),n.a.createElement(W,null))},X=i.b.fieldset.withConfig({displayName:"FormElement__Fieldset",componentId:"gme5e7-0"})(["border:1px solid $textColor;"]),J=i.b.legend.withConfig({displayName:"FormElement__Legend",componentId:"gme5e7-1"})(["padding:0.5rem;"]),Z=function(e){var t=e.id,a=e.title,l=e.children;return n.a.createElement(B,{id:t,title:a},n.a.createElement("form",null,n.a.createElement(X,null,n.a.createElement(J,null,a),l)))},K=Z;Z.propTypes={id:g.a.string.isRequired,title:g.a.string.isRequired};var $=function(){return n.a.createElement(K,{id:"forms__input",title:"Input Fields"},n.a.createElement("p",null,n.a.createElement("label",{htmlFor:"input__text"},"Text Input",n.a.createElement("input",{id:"input__text",type:"text",placeholder:"Text Input"}))),n.a.createElement("p",null,n.a.createElement("label",{htmlFor:"input__password"},"Password",n.a.createElement("input",{id:"input__password",type:"password",placeholder:"Type your Password"}))),n.a.createElement("p",null,n.a.createElement("label",{htmlFor:"input__webaddress"},"Web Address",n.a.createElement("input",{id:"input__webaddress",type:"url",placeholder:"https://yoursite.com"}))),n.a.createElement("p",null,n.a.createElement("label",{htmlFor:"input__emailaddress"},"Email Address",n.a.createElement("input",{id:"input__emailaddress",type:"email",placeholder:"name@email.com"}))),n.a.createElement("p",null,n.a.createElement("label",{htmlFor:"input__phone"},"Phone Number",n.a.createElement("input",{id:"input__phone",type:"tel",placeholder:"(999) 999-9999"}))),n.a.createElement("p",null,n.a.createElement("label",{htmlFor:"input__search"},"Search",n.a.createElement("input",{id:"input__search",type:"search",placeholder:"Enter Search Term"}))),n.a.createElement("p",null,n.a.createElement("label",{htmlFor:"input__text2"},"Number Input",n.a.createElement("input",{id:"input__text2",type:"number",placeholder:"Enter a Number"}))),n.a.createElement("p",null,n.a.createElement("label",{htmlFor:"input__text3"},"Error",n.a.createElement("input",{id:"input__text3",type:"text",placeholder:"Text Input"}))),n.a.createElement("p",null,n.a.createElement("label",{htmlFor:"input__text4"},"Valid",n.a.createElement("input",{id:"input__text4",type:"text",placeholder:"Text Input"}))))},ee=function(){return n.a.createElement(K,{id:"forms__select",title:"Select Menu"},n.a.createElement("p",null,n.a.createElement("label",{htmlFor:"select"},"Select",n.a.createElement("select",{id:"select"},n.a.createElement("optgroup",{label:"Option Group"},n.a.createElement("option",null,"Option One"),n.a.createElement("option",null,"Option Two"),n.a.createElement("option",null,"Option Three"))))))},te=function(){return n.a.createElement(K,{id:"forms__checkbox",title:"Checkboxes"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("label",{htmlFor:"checkbox1"},n.a.createElement("input",{id:"checkbox1",name:"checkbox",type:"checkbox",defaultChecked:!0})," Choice A")),n.a.createElement("li",null,n.a.createElement("label",{htmlFor:"checkbox2"},n.a.createElement("input",{id:"checkbox2",name:"checkbox",type:"checkbox"})," Choice B")),n.a.createElement("li",null,n.a.createElement("label",{htmlFor:"checkbox3"},n.a.createElement("input",{id:"checkbox3",name:"checkbox",type:"checkbox"})," Choice C"))))},ae=function(){return n.a.createElement(K,{id:"forms__radio",title:"Radio Button"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("label",{htmlFor:"radio1"},n.a.createElement("input",{id:"radio1",name:"radio",type:"radio",defaultChecked:!0})," Option 1")),n.a.createElement("li",null,n.a.createElement("label",{htmlFor:"radio2"},n.a.createElement("input",{id:"radio2",name:"radio",type:"radio"})," Option 2")),n.a.createElement("li",null,n.a.createElement("label",{htmlFor:"radio3"},n.a.createElement("input",{id:"radio3",name:"radio",type:"radio"})," Option 3"))))},le=function(){return n.a.createElement(K,{id:"forms__textarea",title:"TextArea"},n.a.createElement("p",null,n.a.createElement("label",{htmlFor:"textarea"},"Textarea",n.a.createElement("textarea",{id:"textarea",rows:"8",cols:"48",placeholder:"Enter your message here"}))))},ne=function(){return n.a.createElement(K,{id:"forms__html5",title:"HTML5 Inputs"},n.a.createElement("p",null,n.a.createElement("label",{htmlFor:"ic"},"Color input",n.a.createElement("input",{type:"color",id:"ic",defaultValue:"#ff0000"}))),n.a.createElement("p",null,n.a.createElement("label",{htmlFor:"in"},"Number input",n.a.createElement("input",{type:"number",id:"in",min:"0",max:"10",defaultValue:"5"}))),n.a.createElement("p",null,n.a.createElement("label",{htmlFor:"ir"},"Range input",n.a.createElement("input",{type:"range",id:"ir",defaultValue:"10"}))),n.a.createElement("p",null,n.a.createElement("label",{htmlFor:"idd"},"Date input",n.a.createElement("input",{type:"date",id:"idd",defaultValue:"1970-01-01"}))),n.a.createElement("p",null,n.a.createElement("label",{htmlFor:"idm"},"Month input",n.a.createElement("input",{type:"month",id:"idm",defaultValue:"1970-01"}))),n.a.createElement("p",null,n.a.createElement("label",{htmlFor:"idw"},"Week input",n.a.createElement("input",{type:"week",id:"idw",defaultValue:"1970-W01"}))),n.a.createElement("p",null,n.a.createElement("label",{htmlFor:"idt"},"Datetime input",n.a.createElement("input",{type:"datetime",id:"idt",defaultValue:"1970-01-01T00:00:00Z"}))),n.a.createElement("p",null,n.a.createElement("label",{htmlFor:"idtl"},"Datetime-local input",n.a.createElement("input",{type:"datetime-local",id:"idtl",defaultValue:"1970-01-01T00:00"}))))},re=function(){return n.a.createElement(K,{id:"forms__action",title:"Action Buttons"},n.a.createElement("p",null,n.a.createElement("input",{type:"submit",value:"<input type=submit>"}),n.a.createElement("input",{type:"button",value:"<input type=button>"}),n.a.createElement("input",{type:"reset",value:"<input type=reset>"}),n.a.createElement("input",{type:"submit",value:"<input disabled>",disabled:!0})),n.a.createElement("p",null,n.a.createElement("button",{type:"submit"},"<button type=submit>"),n.a.createElement("button",{type:"button"},"<button type=button>"),n.a.createElement("button",{type:"reset"},"<button type=reset>"),n.a.createElement("button",{type:"button",disabled:!0},"<button disabled>")))},ie=function(){return n.a.createElement(x,{id:"forms",title:"Form Elements"},n.a.createElement($,null),n.a.createElement(ee,null),n.a.createElement(te,null),n.a.createElement(ae,null),n.a.createElement(le,null),n.a.createElement(ne,null),n.a.createElement(re,null))},oe=a(210),ce=i.b.h1.withConfig({displayName:"TestElements__PageHeadline",componentId:"sc-1jtmcbc-0"})(["color:#fff;"]),Ae=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("header",{role:"banner"},n.a.createElement(ce,null,"Content Test Page"),n.a.createElement("p",null,"This is a test page filled with common HTML elements wrapped in React components… but rather than be used to build CSS styles, these elements are just fodder for demonstrational purposes.")),n.a.createElement(E,null),n.a.createElement("main",{role:"main"},n.a.createElement(F,null),n.a.createElement(U,null),n.a.createElement(ie,null)),n.a.createElement("footer",{role:"contentinfo"},n.a.createElement("p",null,"Modified by ",n.a.createElement(oe.a,{to:"https://github.com/mikedpad"},"Michael Daniel Padilla"),"."),n.a.createElement("p",null,"Forked from"," ",n.a.createElement(oe.a,{to:"https://github.com/cbracco/html5-test-page"},"HTML5 Test Page"),".")))};t.default=function(){return n.a.createElement(r.a,null,n.a.createElement(Ae,null))}},207:function(e,t,a){"use strict";a(42);var l=a(105),n=a.n(l),r=a(0),i=a.n(r),o=a(5),c=a.n(o),A=a(41),d=a.n(A);a(209),i.a.createContext({});c.a.object,c.a.string.isRequired,c.a.func,c.a.func;var s=function(e){var t=e.children,a=e.to,l=n()(e,["children","to"]);return/^\/(?!\/)/.test(a)?i.a.createElement(d.a,Object.assign({to:a,onClick:function(e){var t=e.target.pathname;if(t===document.location.pathname)return e.stopPropagation(),void Object(A.navigate)(t,{replace:!0});e.preventDefault(),Object(A.navigate)(t)}},l),t):i.a.createElement("a",Object.assign({href:a,rel:"noopener noreferrer",target:"_blank"},l),t)};t.a=s;s.propTypes={to:c.a.string.isRequired}},208:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return n}),a.d(t,"c",function(){return r});var l="#242a31",n="#afafb1",r={normal:"#455a72",active:"#698eb9"}},209:function(e,t,a){var l;e.exports=(l=a(213))&&l.default||l},210:function(e,t,a){"use strict";var l=a(207);a.d(t,"a",function(){return l.a})},211:function(e,t,a){"use strict";a.d(t,"b",function(){return l}),a.d(t,"a",function(){return n});var l="Lora, 'Times New Roman', Times, serif",n="'Source Sans Pro', Helvetica, Arial, sans- serif"},212:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Starter"}}}}},213:function(e,t,a){"use strict";a.r(t);a(42);var l=a(0),n=a.n(l),r=a(5),i=a.n(r),o=a(69),c=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},214:function(e,t,a){"use strict";var l=a(216),n=a.n(l),r=a(212),i=a(0),o=a.n(i),c=a(217),A=a.n(c),d=a(206),s=a(215),u=a(207),m=a(210),p=a(208),f=d.b.ul.withConfig({displayName:"Navigation__UnorderedList",componentId:"sc-10g8xm2-0"})(["list-style-type:none;margin:0;padding:0;"]),E=d.b.li.withConfig({displayName:"Navigation__ListItem",componentId:"sc-10g8xm2-1"})(["display:inline-block;margin-left:0.75rem;&:first-child{margin-left:0;}"]),h=Object(d.b)(m.a).withConfig({displayName:"Navigation__NavLink",componentId:"sc-10g8xm2-2"})(["background-color:inherit;color:",";font-size:1.25rem;font-weight:300;padding:8px 10px;text-decoration:none;transition:all 0.2s ease-out;&:hover{background-color:#ffffff33;color:#fff;}"],p.c.normal),g=function(){return o.a.createElement(f,null,o.a.createElement(E,null,o.a.createElement(h,{to:"/"},"Home")),o.a.createElement(E,null,o.a.createElement(h,{to:"/blog"},"Blog")))},b=a(211);function y(){var e=n()(["\n  :root {\n    background-color: ",";\n    color: ",";\n    font-family: ",";\n    text-rendering: optimizeLegibility;\n  }\n"]);return y=function(){return e},e}var x=Object(d.a)(y(),p.a,p.b,b.a),_=d.b.header.withConfig({displayName:"Layout__Header",componentId:"sc-1kgvniv-0"})(["background-color:",";margin-bottom:1.45rem;"],Object(s.c)(.05,p.a)),w=d.b.main.withConfig({displayName:"Layout__Main",componentId:"sc-1kgvniv-1"})(["overflow:auto;padding:0;"]),T=d.b.div.withConfig({displayName:"Layout__Wrapper",componentId:"sc-1kgvniv-2"})(["margin:0 auto;padding:1.5rem 1.25rem;",""],Object(s.b)({prop:"max-width",fromSize:"600px",toSize:"960px"},"640px","1200px")),v=d.b.div.withConfig({displayName:"Layout__FlexWrap",componentId:"sc-1kgvniv-3"})(["align-items:center;display:flex;flex-flow:row nowrap;justify-content:space-between;"]),B=d.b.h1.withConfig({displayName:"Layout__Title",componentId:"sc-1kgvniv-4"})(["margin:0;"]),C=Object(d.b)(u.a).withConfig({displayName:"Layout__TitleLink",componentId:"sc-1kgvniv-5"})(["color:",";text-decoration:none;transition:color 0.2s ease-out;&:hover{color:#fff;}"],p.b),I=function(e){var t=e.children,a=r.data.site.siteMetadata.title;return o.a.createElement(o.a.Fragment,null,o.a.createElement(x,null),o.a.createElement(A.a,null,o.a.createElement("title",null,a)),o.a.createElement(_,null,o.a.createElement(T,null,o.a.createElement(v,null,o.a.createElement(B,null,o.a.createElement(C,{to:"/"},a)),o.a.createElement("nav",null,o.a.createElement(g,null))))),o.a.createElement(w,null,o.a.createElement(T,null,t)))};a.d(t,"a",function(){return I})},231:function(e){e.exports=[{href:"#text",label:"Text Elements",child:[{href:"#text__headings",label:"Headings"},{href:"#text__paragraphs",label:"Paragraphs"},{href:"#text__blockquotes",label:"Blockquotes"},{href:"#text__lists",label:"Lists"},{href:"#text__hr",label:"Horizontal Rule"},{href:"#text__tables",label:"Tabular data"},{href:"#text__code",label:"Code"},{href:"#text__inline",label:"Inline elements"}]},{href:"#embedded",label:"Embedded Content",child:[{href:"#embedded__images",label:"Images"},{href:"#embedded__audio",label:"Audio"},{href:"#embedded__video",label:"Video"},{href:"#embedded__canvas",label:"Canvas"},{href:"#embedded__meter",label:"Meter"},{href:"#embedded__progress",label:"Progress"},{href:"#embedded__svg",label:"Inline SVG"},{href:"#embedded__iframe",label:"IFrames"}]},{href:"#forms",label:"Form Elements",child:[{href:"#forms__input",label:"Input Fields"},{href:"#forms__select",label:"Select Menus"},{href:"#forms__checkbox",label:"Checkboxes"},{href:"#forms__radio",label:"Radio Buttons"},{href:"#forms__textareas",label:"TextArea"},{href:"#forms__html5",label:"HTML5 Inputs"},{href:"#forms__action",label:"Action Buttons"}]}]},232:function(e){e.exports={data:{cat1:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQDAgX/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAAcsqJBxWjTqMvH1BL//EABoQAAMBAQEBAAAAAAAAAAAAAAECAxEAMTL/2gAIAQEAAQUCrrcDtD7JyeM8CSUqjFUDNV1+f//EABcRAQADAAAAAAAAAAAAAAAAAAEAEBP/2gAIAQMBAT8BGaX/AP/EABYRAAMAAAAAAAAAAAAAAAAAAAAQEf/aAAgBAgEBPwEj/8QAHBAAAwACAwEAAAAAAAAAAAAAAAERECECEiJh/9oACAEBAAY/AvlInrDp2drKc5o9vH//xAAcEAEAAwACAwAAAAAAAAAAAAABABExIUFRYXH/2gAIAQEAAT8ht0WHpESqPMTe+YLUvsIzroPkF6uX1xsFWoGQAAn/2gAMAwEAAgADAAAAEJ8Xf//EABgRAQADAQAAAAAAAAAAAAAAAAEAEBFh/9oACAEDAQE/ECHUnBf/xAAWEQEBAQAAAAAAAAAAAAAAAAABEBH/2gAIAQIBAT8QTIZ//8QAHRABAQEAAgIDAAAAAAAAAAAAAREAITFRgWFx0f/aAAgBAQABPxBd/svZnH7mkc4OTNzFVah3iANsoi+T1jaUQh7fOTVQtXA1yEHZLgSWgcE+jGoABA3/2Q==",aspectRatio:1,src:"/gatsby-starter/static/f280d4983d50c493b0911d27448f4eb4/117c1/cat1.jpg",srcSet:"/gatsby-starter/static/f280d4983d50c493b0911d27448f4eb4/91231/cat1.jpg 240w,\n/gatsby-starter/static/f280d4983d50c493b0911d27448f4eb4/86f3d/cat1.jpg 480w,\n/gatsby-starter/static/f280d4983d50c493b0911d27448f4eb4/117c1/cat1.jpg 960w,\n/gatsby-starter/static/f280d4983d50c493b0911d27448f4eb4/7b6fe/cat1.jpg 1280w",sizes:"(max-width: 960px) 100vw, 960px"}}},cat2:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAMEBQL/xAAWAQEBAQAAAAAAAAAAAAAAAAADAQL/2gAMAwEAAhADEAAAAZad3iy4mKWdAC2qLn//xAAcEAABBAMBAAAAAAAAAAAAAAACAAEEEgMRISP/2gAIAQEAAQUCyN5hYiWfgx+lV1IfYRX7d1//xAAZEQACAwEAAAAAAAAAAAAAAAAAAhARIUH/2gAIAQMBAT8BXFKOR//EABkRAAIDAQAAAAAAAAAAAAAAAAACEBEhQf/aAAgBAgEBPwFtYs7H/8QAGRAAAwADAAAAAAAAAAAAAAAAAAEQEXGB/9oACAEBAAY/AmJTZyIzP//EABsQAAMAAgMAAAAAAAAAAAAAAAABEVFhITGR/9oACAEBAAE/Ib+holkHmsjmwaB9iXY5ZDQj/9oADAMBAAIAAwAAABBwxz7/xAAWEQEBAQAAAAAAAAAAAAAAAAARABD/2gAIAQMBAT8Qay3/AP/EABcRAAMBAAAAAAAAAAAAAAAAAAABERD/2gAIAQIBAT8QdQI1/8QAHxABAAIBAwUAAAAAAAAAAAAAAQARMUFhcSFRkdHw/9oACAEBAAE/EEIdKrwYbOqFtqBtGytSn9zgiRdy98QYyiuBFVcStWwa65n0Puf/2Q==",aspectRatio:1,src:"/gatsby-starter/static/ed50f3eb8f4b8f328935ff75d6d70ae4/e112a/cat2.jpg",srcSet:"/gatsby-starter/static/ed50f3eb8f4b8f328935ff75d6d70ae4/91231/cat2.jpg 240w,\n/gatsby-starter/static/ed50f3eb8f4b8f328935ff75d6d70ae4/86f3d/cat2.jpg 480w,\n/gatsby-starter/static/ed50f3eb8f4b8f328935ff75d6d70ae4/e112a/cat2.jpg 512w",sizes:"(max-width: 512px) 100vw, 512px"}}},cat3:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAeABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB41TEMKU5wjIX/8QAGhAAAgMBAQAAAAAAAAAAAAAAAAECAxIRMv/aAAgBAQABBQKtJz6tFXu9LRVJJ3vpocSXnJ//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAWEQADAAAAAAAAAAAAAAAAAAAAEBH/2gAIAQIBAT8BdP/EABoQAAIDAQEAAAAAAAAAAAAAAAEQABEhUTH/2gAIAQEABj8C2UX6r5LWGoBxf//EABkQAQEBAQEBAAAAAAAAAAAAAAEAESExQf/aAAgBAQABPyFhjTIBae7e3cFo2fMjyd9v3yI4SODGREwMfTMX/9oADAMBAAIAAwAAABBTJXz/xAAXEQEBAQEAAAAAAAAAAAAAAAABABAR/9oACAEDAQE/EMRuX//EABYRAQEBAAAAAAAAAAAAAAAAAAEQQf/aAAgBAgEBPxAgmR//xAAeEAEAAgIDAAMAAAAAAAAAAAABABEhMUFRYXGhsf/aAAgBAQABPxAy6j9wtEWXFwAWaYdl03dbqpSmwVyo99hAnkbPYUmNJaFJ+QmocZzDCbQG3uLvK5XlWLN5Pif/2Q==",aspectRatio:.6666666666666666,src:"/gatsby-starter/static/ac8d15282d8d0e842ffaebf1279ee46e/86f3d/cat3.jpg",srcSet:"/gatsby-starter/static/ac8d15282d8d0e842ffaebf1279ee46e/91231/cat3.jpg 240w,\n/gatsby-starter/static/ac8d15282d8d0e842ffaebf1279ee46e/86f3d/cat3.jpg 480w",sizes:"(max-width: 480px) 100vw, 480px"}}}}}},233:function(e,t,a){"use strict";var l=a(10);t.__esModule=!0,t.default=void 0;var n,r=l(a(8)),i=l(a(43)),o=l(a(105)),c=l(a(107)),A=l(a(0)),d=l(a(5)),s=function(e){var t=(0,c.default)({},e),a=t.resolutions,l=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),l&&(t.fluid=l,delete t.sizes),n&&(t.loading="eager"),t},u=Object.create({}),m=function(e){var t=s(e),a=t.fluid?t.fluid.src:t.fixed.src;return u[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,f="undefined"!=typeof window,E=f&&window.IntersectionObserver,h=new WeakMap;var g=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),h.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),h.set(e,t)),function(){a.unobserve(e),h.delete(e)}},b=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",l=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",c=e.height?'height="'+e.height+'" ':"",A=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+l+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+o+c+a+n+t+i+r+A+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=A.default.forwardRef(function(e,t){var a=e.sizes,l=e.srcSet,n=e.src,r=e.style,i=e.onLoad,d=e.onError,s=e.loading,u=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return A.default.createElement("img",(0,c.default)({sizes:a,srcSet:l,src:n},u,{onLoad:i,onError:d,ref:t,loading:s,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))});y.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var x=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=f&&m(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!p&&E&&!t.critical&&!a.seenBefore;var l=t.critical||f&&(p||!a.useIOSupport);return a.state={isVisible:l,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=A.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)((0,i.default)(a))),a.handleRef=a.handleRef.bind((0,i.default)((0,i.default)(a))),a}(0,r.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=g(e,function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=s(e),a=t.fluid?t.fluid.src:t.fixed.src,u[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=s(this.props),t=e.title,a=e.alt,l=e.className,n=e.style,r=void 0===n?{}:n,i=e.imgStyle,o=void 0===i?{}:i,d=e.placeholderStyle,u=void 0===d?{}:d,m=e.placeholderClassName,p=e.fluid,f=e.fixed,E=e.backgroundColor,h=e.durationFadeIn,g=e.Tag,x=e.itemProp,_=e.loading,w=!1===this.state.fadeIn||this.state.imgLoaded,T=!0===this.state.fadeIn&&!this.state.imgCached,v=(0,c.default)({opacity:w?1:0,transition:T?"opacity "+h+"ms":"none"},o),B="boolean"==typeof E?"lightgray":E,C={transitionDelay:h+"ms"},I=(0,c.default)({opacity:this.state.imgLoaded?0:1},T&&C,o,u),j={title:t,alt:this.state.isVisible?"":a,style:I,className:m};if(p){var S=p;return A.default.createElement(g,{className:(l||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(S.srcSet)},A.default.createElement(g,{style:{width:"100%",paddingBottom:100/S.aspectRatio+"%"}}),B&&A.default.createElement(g,{title:t,style:(0,c.default)({backgroundColor:B,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},T&&C)}),S.base64&&A.default.createElement(y,(0,c.default)({src:S.base64},j)),S.tracedSVG&&A.default.createElement(y,(0,c.default)({src:S.tracedSVG},j)),this.state.isVisible&&A.default.createElement("picture",null,S.srcSetWebp&&A.default.createElement("source",{type:"image/webp",srcSet:S.srcSetWebp,sizes:S.sizes}),A.default.createElement(y,{alt:a,title:t,sizes:S.sizes,src:S.src,crossOrigin:this.props.crossOrigin,srcSet:S.srcSet,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x,loading:_})),this.addNoScript&&A.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,c.default)({alt:a,title:t,loading:_},S))}}))}if(f){var N=f,Q=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:N.width,height:N.height},r);return"inherit"===r.display&&delete Q.display,A.default.createElement(g,{className:(l||"")+" gatsby-image-wrapper",style:Q,ref:this.handleRef,key:"fixed-"+JSON.stringify(N.srcSet)},B&&A.default.createElement(g,{title:t,style:(0,c.default)({backgroundColor:B,width:N.width,opacity:this.state.imgLoaded?0:1,height:N.height},T&&C)}),N.base64&&A.default.createElement(y,(0,c.default)({src:N.base64},j)),N.tracedSVG&&A.default.createElement(y,(0,c.default)({src:N.tracedSVG},j)),this.state.isVisible&&A.default.createElement("picture",null,N.srcSetWebp&&A.default.createElement("source",{type:"image/webp",srcSet:N.srcSetWebp,sizes:N.sizes}),A.default.createElement(y,{alt:a,title:t,width:N.width,height:N.height,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x,loading:_})),this.addNoScript&&A.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,c.default)({alt:a,title:t,loading:_},N))}}))}return null},t}(A.default.Component);x.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var _=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),w=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});x.propTypes={resolutions:_,sizes:w,fixed:_,fluid:w,fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"])};var T=x;t.default=T}}]);
//# sourceMappingURL=component---src-pages-index-js-701e237dfed37702056d.js.map