(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"9eSz":function(e,t,a){"use strict";var l=a("TqRt");t.__esModule=!0,t.default=void 0;var n,r=l(a("PJYZ")),i=l(a("VbXa")),o=l(a("8OQS")),c=l(a("pVnL")),d=l(a("q1tI")),u=l(a("17x9")),s=function(e){var t=(0,c.default)({},e),a=t.resolutions,l=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),l&&(t.fluid=l,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=T([].concat(t.fluid))),t.fixed&&(t.fixed=T([].concat(t.fixed))),t},m=function(e){var t=e.media;return!!t&&(g&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,l=f(t||a||[]);return l&&l.src},f=function(e){if(g&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(m);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),E=function(e){var t=s(e),a=p(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,g="undefined"!=typeof window,y=g&&window.IntersectionObserver,_=new WeakMap;function x(e){return e.map((function(e){var t=e.src,a=e.srcSet,l=e.srcSetWebp,n=e.media,r=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},l&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:l,sizes:r}),d.default.createElement("source",{media:n,srcSet:a,sizes:r}))}))}function T(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function v(e){return e.map((function(e){var t=e.src,a=e.media,l=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:l})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,l=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:l})}))}function S(e,t){var a=e.srcSet,l=e.srcSetWebp,n=e.media,r=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?l:a)+'" '+(r?'sizes="'+r+'" ':"")+"/>"}var C=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(_.has(e.target)){var t=_.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),_.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),_.set(e,t)),function(){a.unobserve(e),_.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",l=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',i=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?S(e,!0):"")+S(e)})).join("")+"<img "+d+i+o+a+l+t+r+n+c+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},k=d.default.forwardRef((function(e,t){var a=e.src,l=e.imageVariants,n=e.generateSources,r=e.spreadProps,i=e.ariaHidden,o=d.default.createElement(L,(0,c.default)({ref:t,src:a},r,{ariaHidden:i}));return l.length>1?d.default.createElement("picture",null,n(l),o):o})),L=d.default.forwardRef((function(e,t){var a=e.sizes,l=e.srcSet,n=e.src,r=e.style,i=e.onLoad,u=e.onError,s=e.loading,m=e.draggable,p=e.ariaHidden,f=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,c.default)({"aria-hidden":p,sizes:a,srcSet:l,src:n},f,{onLoad:i,onError:u,ref:t,loading:s,draggable:m,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))}));L.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var F=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=g&&E(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var l=a.isCritical||g&&(b||!a.useIOSupport);return a.state={isVisible:l,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,r.default)(a)),a.handleRef=a.handleRef.bind((0,r.default)(a)),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:E(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=C(e,(function(){var e=E(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=s(e),(a=p(t))&&(h[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=s(this.props),t=e.title,a=e.alt,l=e.className,n=e.style,r=void 0===n?{}:n,i=e.imgStyle,o=void 0===i?{}:i,u=e.placeholderStyle,m=void 0===u?{}:u,p=e.placeholderClassName,h=e.fluid,E=e.fixed,b=e.backgroundColor,g=e.durationFadeIn,y=e.Tag,_=e.itemProp,T=e.loading,S=e.draggable,C=!1===this.state.fadeIn||this.state.imgLoaded,F=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,c.default)({opacity:C?1:0,transition:F?"opacity "+g+"ms":"none"},o),H="boolean"==typeof b?"lightgray":b,R={transitionDelay:g+"ms"},V=(0,c.default)({opacity:this.state.imgLoaded?0:1},F&&R,o,m),z={title:t,alt:this.state.isVisible?"":a,style:V,className:p,itemProp:_};if(h){var N=h,P=f(h);return d.default.createElement(y,{className:(l||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden",maxWidth:P.maxWidth?P.maxWidth+"px":null,maxHeight:P.maxHeight?P.maxHeight+"px":null},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},d.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),H&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:H,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},F&&R)}),P.base64&&d.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:z,imageVariants:N,generateSources:w}),P.tracedSVG&&d.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:z,imageVariants:N,generateSources:v}),this.state.isVisible&&d.default.createElement("picture",null,x(N),d.default.createElement(L,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:_,loading:T,draggable:S})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,c.default)({alt:a,title:t,loading:T},P,{imageVariants:N}))}}))}if(E){var q=E,M=f(E),A=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},r);return"inherit"===r.display&&delete A.display,d.default.createElement(y,{className:(l||"")+" gatsby-image-wrapper",style:A,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},H&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:H,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},F&&R)}),M.base64&&d.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:z,imageVariants:q,generateSources:w}),M.tracedSVG&&d.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:z,imageVariants:q,generateSources:v}),this.state.isVisible&&d.default.createElement("picture",null,x(q),d.default.createElement(L,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:_,loading:T,draggable:S})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,c.default)({alt:a,title:t,loading:T},M,{imageVariants:q}))}}))}return null},t}(d.default.Component);F.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),H=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function R(e){return function(t,a,l){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+l+"`, but their values are both `undefined`.");u.default.checkPropTypes(((n={})[a]=e,n),t,"prop",l)}}F.propTypes={resolutions:O,sizes:H,fixed:R(u.default.oneOfType([O,u.default.arrayOf(O)])),fluid:R(u.default.oneOfType([H,u.default.arrayOf(H)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var V=F;t.default=V},Dtc0:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),r=a("Zttt"),i=a("vOnD"),o=a("vCQb"),c=a("MUpH"),d=a("ibEc"),u=a("5RMe"),s=a("hEAB");function m(){var e=Object(c.a)(["\n      margin: 0 0 0 2.5rem;\n    "]);return m=function(){return e},e}function p(){var e=Object(c.a)(["\n    display: ",";\n    list-style-type: ",";\n    margin: 0;\n    text-align: left;\n  "]);return p=function(){return e},e}var f=i.c.nav.withConfig({displayName:"TableOfContents__Nav",componentId:"sc-1ows7ry-0"})(["margin:3rem 0;"]),h=i.c.ul.withConfig({displayName:"TableOfContents__UnorderedList",componentId:"sc-1ows7ry-1"})(["justify-content:space-around;list-style-type:none;margin:",";padding:0;text-align:center;",";"],(function(e){return e.child?"0 0 2rem":"0"}),d.a.greaterThan("small")(p(),(function(e){return e.child?"block":"flex"}),(function(e){return e.child?"square":"none"}))),E=i.c.li.withConfig({displayName:"TableOfContents__ListItem",componentId:"sc-1ows7ry-2"})(["display:block;"," li &{color:",";display:list-item;",";&:hover{color:",";}}"],h,u.a.fg.darker,d.a.greaterThan("560px")(m()),u.a.fg.dark),b=i.c.a.withConfig({displayName:"TableOfContents__TocLink",componentId:"sc-1ows7ry-3"})(["color:",";display:block;font-size:1.25rem;padding:0.5em 0.7em;text-decoration:none;transition:background-color 0.2s ease-out;&:hover{color:",";background-color:",";}"," "," &{font-size:1rem;}"],u.a.links.default,u.a.links.active,u.a.bg.light,E,E),g=function(e){e.preventDefault(),document.getElementById(e.target.hash.slice(1)).scrollIntoView({behavior:"smooth",inline:"start"})},y=function e(t){var a=t.label,l=t.href,r=t.child;return n.a.createElement(E,{key:a},n.a.createElement(b,{href:l,onClick:g},a),r&&n.a.createElement(h,{child:!0},r.map(e)))},_=function(){return n.a.createElement(f,null,n.a.createElement(h,null,s.map(y)))},x=i.c.h1.withConfig({displayName:"TestSection__Title",componentId:"dyhuph-0"})(["background-color:",";color:#fff;font-size:3rem;padding:1rem 2rem;"],u.a.bg.light),T=function(e){var t=e.id,a=e.title,l=e.children;return n.a.createElement("section",{id:t},n.a.createElement("header",null,n.a.createElement(x,null,a)),l)},v=i.c.button.withConfig({displayName:"BackToTop__GoToTopButton",componentId:"sc-17qm62o-0"})(["background-color:#ffffff33;border:2px solid #ffffff11;border-radius:0.25em;color:#fff;margin:1.5rem 0 3rem;outline:none;padding:0.25em 0.75em;"]),w=function(){return n.a.createElement(v,{type:"button",onClick:function(e){e.preventDefault(),document.documentElement.scrollIntoView({behavior:"smooth",block:"start",inline:"start"})}},"Go To Top")},S=i.c.article.withConfig({displayName:"TestElement__Article",componentId:"boxxba-0"})(["padding:1rem 2rem;"]),C=i.c.h1.withConfig({displayName:"TestElement__Title",componentId:"boxxba-1"})(["border-bottom:1px solid ",";color:#fff;margin-bottom:0.67em;padding-bottom:0.2em;"],u.a.fg.default),I=function(e){var t=e.id,a=e.title,l=e.children;return n.a.createElement(S,{id:t},n.a.createElement("header",null,n.a.createElement(C,null,a)),n.a.createElement("div",null,l),n.a.createElement("footer",null,n.a.createElement(w,null)))},k=function(){return n.a.createElement(I,{id:"text__headings",title:"Headings"},n.a.createElement("h1",null,"Heading 1"),n.a.createElement("h2",null,"Heading 2"),n.a.createElement("h3",null,"Heading 3"),n.a.createElement("h4",null,"Heading 4"),n.a.createElement("h5",null,"Heading 5"),n.a.createElement("h6",null,"Heading 6"))},L=function(){return n.a.createElement(I,{id:"text__paragraphs",title:"Paragraphs"},n.a.createElement("p",null,"A paragraph (from the Greek paragraphos, “to write beside” or “written beside”) is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose."))},F=function(){return n.a.createElement(I,{id:"text__blockquotes",title:"Blockquotes"},n.a.createElement("blockquote",null,n.a.createElement("p",null,"A block quotation (also known as a long quotation or extract) is a quotation in a written document, that is set off from the main text as a paragraph, or block of text."),n.a.createElement("p",null,"It is typically distinguished visually using indentation and a different typeface or smaller size quotation. It may or may not include a citation, usually placed at the bottom."),n.a.createElement("cite",null,n.a.createElement("a",{href:"#!"},"Said no one, ever."))))},O=function(){return n.a.createElement(I,{id:"text__lists",title:"Lists"},n.a.createElement("h2",null,"Definition list"),n.a.createElement("dl",null,n.a.createElement("dt",null,"Definition List Title"),n.a.createElement("dd",null,"This is a definition list division.")),n.a.createElement("h2",null,"Ordered List"),n.a.createElement("ol",null,n.a.createElement("li",null,"List Item 1"),n.a.createElement("li",null,"List Item 2"),n.a.createElement("li",null,"List Item 3")),n.a.createElement("h2",null,"Unordered List"),n.a.createElement("ul",null,n.a.createElement("li",null,"List Item 1"),n.a.createElement("li",null,"List Item 2"),n.a.createElement("li",null,"List Item 3")))},H=function(){return n.a.createElement(I,{id:"text__hr",title:"Horizontal Rule"},n.a.createElement("hr",null))},R=function(){return n.a.createElement(I,{id:"text__tables",title:"Tabular Data"},n.a.createElement("table",null,n.a.createElement("caption",null,"Table Caption"),n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Table Heading 1"),n.a.createElement("th",null,"Table Heading 2"),n.a.createElement("th",null,"Table Heading 3"),n.a.createElement("th",null,"Table Heading 4"),n.a.createElement("th",null,"Table Heading 5"))),n.a.createElement("tfoot",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Table Footer 1"),n.a.createElement("th",null,"Table Footer 2"),n.a.createElement("th",null,"Table Footer 3"),n.a.createElement("th",null,"Table Footer 4"),n.a.createElement("th",null,"Table Footer 5"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Table Cell 1"),n.a.createElement("td",null,"Table Cell 2"),n.a.createElement("td",null,"Table Cell 3"),n.a.createElement("td",null,"Table Cell 4"),n.a.createElement("td",null,"Table Cell 5")),n.a.createElement("tr",null,n.a.createElement("td",null,"Table Cell 1"),n.a.createElement("td",null,"Table Cell 2"),n.a.createElement("td",null,"Table Cell 3"),n.a.createElement("td",null,"Table Cell 4"),n.a.createElement("td",null,"Table Cell 5")),n.a.createElement("tr",null,n.a.createElement("td",null,"Table Cell 1"),n.a.createElement("td",null,"Table Cell 2"),n.a.createElement("td",null,"Table Cell 3"),n.a.createElement("td",null,"Table Cell 4"),n.a.createElement("td",null,"Table Cell 5")),n.a.createElement("tr",null,n.a.createElement("td",null,"Table Cell 1"),n.a.createElement("td",null,"Table Cell 2"),n.a.createElement("td",null,"Table Cell 3"),n.a.createElement("td",null,"Table Cell 4"),n.a.createElement("td",null,"Table Cell 5")))))},V=i.c.pre.withConfig({displayName:"Code__PreCode",componentId:"sc-1aatnp3-0"})(["overflow-x:scroll;"]),z=function(){return n.a.createElement(I,{id:"text__code",title:"Code"},n.a.createElement("p",null,n.a.createElement("strong",null,"Keyboard input:")," ",n.a.createElement("kbd",null,"Cmd")),n.a.createElement("p",null,n.a.createElement("strong",null,"Inline code:")," ",n.a.createElement("code",null,"<div>code</div>")),n.a.createElement("p",null,n.a.createElement("strong",null,"Sample output:")," ",n.a.createElement("samp",null,"This is sample output from a computer program.")),n.a.createElement("h2",null,"Pre-formatted text"),n.a.createElement(V,null,"\nP R E F O R M A T T E D T E X T ! ' # $ % & ' ( ) * +   , - . /\n0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ [ \\ ] ^ _ `\nA B C D E F G H I J K L M N O P Q R S T U V W X Y Z\na b c d e f g h i j k l m n o p q r s t u v w x y z { | } ~\n                "))},N=function(){return n.a.createElement(I,{id:"text__inline",title:"Inline Elements"},n.a.createElement("p",null,n.a.createElement("a",{href:"#!"},"This is a text link"),"."),n.a.createElement("p",null,n.a.createElement("strong",null,"Strong is used to indicate strong importance.")),n.a.createElement("p",null,n.a.createElement("em",null,"This text has added emphasis.")),n.a.createElement("p",null,"The ",n.a.createElement("b",null,"b element")," is stylistically different text from normal text, without any special importance."),n.a.createElement("p",null,"The ",n.a.createElement("i",null,"i element")," is text that is offset from the normal text."),n.a.createElement("p",null,"The ",n.a.createElement("u",null,"u element")," is text with an unarticulated, though explicitly rendered, non-textual annotation."),n.a.createElement("p",null,n.a.createElement("del",null,"This text is deleted")," and ",n.a.createElement("ins",null,"This text is inserted"),"."),n.a.createElement("p",null,n.a.createElement("s",null,"This text has a strikethrough"),"."),n.a.createElement("p",null,"Superscript",n.a.createElement("sup",null,"®"),"."),n.a.createElement("p",null,"Subscript for things like H",n.a.createElement("sub",null,"2"),"O."),n.a.createElement("p",null,n.a.createElement("small",null,"This small text is small for for fine print, etc.")),n.a.createElement("p",null,"Abbreviation: ",n.a.createElement("abbr",{title:"HyperText Markup Language"},"HTML")),n.a.createElement("p",null,n.a.createElement("q",{cite:"https://developer.mozilla.org/en-US/docs/HTML/Element/q"},"This text is a short inline quotation.")),n.a.createElement("p",null,n.a.createElement("cite",null,"This is a citation.")),n.a.createElement("p",null,"The ",n.a.createElement("dfn",null,"dfn element")," indicates a definition."),n.a.createElement("p",null,"The ",n.a.createElement("mark",null,"mark element")," indicates a highlight."),n.a.createElement("p",null,"The ",n.a.createElement("var",null,"variable element"),", such as ",n.a.createElement("var",null,"x")," = ",n.a.createElement("var",null,"y"),"."),n.a.createElement("p",null,"The time element: ",n.a.createElement("time",{dateTime:"2013-04-06T12:32+00:00"},"2 weeks ago")))},P=function(){return n.a.createElement(T,{id:"text",title:"Text Elements"},n.a.createElement(k,null),n.a.createElement(L,null),n.a.createElement(F,null),n.a.createElement(O,null),n.a.createElement(H,null),n.a.createElement(R,null),n.a.createElement(z,null),n.a.createElement(N,null))},q=a("9eSz"),M=a.n(q),A=a("Wbzz"),W=function(){var e=Object(A.useStaticQuery)("48016677");return n.a.createElement(I,{id:"embedded__images",title:"Images"},n.a.createElement("h2",null,"No ",n.a.createElement("code",null,"<figure>")," element"),n.a.createElement(M.a,{fluid:e.cat1.childImageSharp.fluid,alt:"Cat 1"}),n.a.createElement("h2",null,"Wrapped in a ",n.a.createElement("code",null,"<figure>")," element, no ",n.a.createElement("code",null,"<figcaption>")),n.a.createElement("figure",null,n.a.createElement(M.a,{fluid:e.cat2.childImageSharp.fluid,alt:"Cat 2"})),n.a.createElement("h2",null,"Wrapped in a ",n.a.createElement("code",null,"<figure>")," element, with a"," ",n.a.createElement("code",null,"<figcaption>")),n.a.createElement("figure",null,n.a.createElement(M.a,{fluid:e.cat3.childImageSharp.fluid,alt:"Cat 3"}),n.a.createElement("figcaption",null,"Here is a caption for this image.")))},j=function(){return n.a.createElement(I,{id:"embedded__audio",title:"Audio"},n.a.createElement("audio",{controls:""},n.a.createElement("track",{kind:"captions"}),"audio"))},B=function(){return n.a.createElement(I,{id:"embedded__video",title:"Video"},n.a.createElement("video",{controls:""},n.a.createElement("track",{kind:"captions"}),"video"))},D=function(){return n.a.createElement(I,{id:"embedded__canvas",title:"Canvas"},n.a.createElement("canvas",null,"canvas"))},G=function(){return n.a.createElement(I,{id:"embedded__meter",title:"Meter"},n.a.createElement("meter",{value:"2",min:"0",max:"10"},"2 out of 10"))},U=function(){return n.a.createElement(I,{id:"embedded__progress",title:"Progress"},n.a.createElement("progress",null,"progress"))},J=function(){return n.a.createElement(I,{id:"embedded__svg",title:"Inline SVG"},n.a.createElement("svg",{width:"100px",height:"100px"},n.a.createElement("circle",{cx:"100",cy:"100",r:"100",fill:"#1fa3ec"})))},Q=function(){return n.a.createElement(I,{id:"embedded__iframe",title:"IFrames"},n.a.createElement("iframe",{src:"/",height:"300",title:"Index"}))},Z=function(){return n.a.createElement(T,{id:"embedded",title:"Embedded Content"},n.a.createElement(W,null),n.a.createElement(j,null),n.a.createElement(B,null),n.a.createElement(D,null),n.a.createElement(G,null),n.a.createElement(U,null),n.a.createElement(J,null),n.a.createElement(Q,null))},X=i.c.fieldset.withConfig({displayName:"FormElement__Fieldset",componentId:"gme5e7-0"})(["border:1px solid $textColor;"]),K=i.c.legend.withConfig({displayName:"FormElement__Legend",componentId:"gme5e7-1"})(["padding:0.5rem;"]),Y=function(e){var t=e.id,a=e.title,l=e.children;return n.a.createElement(I,{id:t,title:a},n.a.createElement("form",null,n.a.createElement(X,null,n.a.createElement(K,null,a),l)))},$=function(){return n.a.createElement(Y,{id:"forms__input",title:"Input Fields"},n.a.createElement("p",null,n.a.createElement("label",{htmlFor:"input__text"},"Text Input",n.a.createElement("input",{id:"input__text",type:"text",placeholder:"Text Input"}))),n.a.createElement("p",null,n.a.createElement("label",{htmlFor:"input__password"},"Password",n.a.createElement("input",{id:"input__password",type:"password",placeholder:"Type your Password"}))),n.a.createElement("p",null,n.a.createElement("label",{htmlFor:"input__webaddress"},"Web Address",n.a.createElement("input",{id:"input__webaddress",type:"url",placeholder:"https://yoursite.com"}))),n.a.createElement("p",null,n.a.createElement("label",{htmlFor:"input__emailaddress"},"Email Address",n.a.createElement("input",{id:"input__emailaddress",type:"email",placeholder:"name@email.com"}))),n.a.createElement("p",null,n.a.createElement("label",{htmlFor:"input__phone"},"Phone Number",n.a.createElement("input",{id:"input__phone",type:"tel",placeholder:"(999) 999-9999"}))),n.a.createElement("p",null,n.a.createElement("label",{htmlFor:"input__search"},"Search",n.a.createElement("input",{id:"input__search",type:"search",placeholder:"Enter Search Term"}))),n.a.createElement("p",null,n.a.createElement("label",{htmlFor:"input__text2"},"Number Input",n.a.createElement("input",{id:"input__text2",type:"number",placeholder:"Enter a Number"}))),n.a.createElement("p",null,n.a.createElement("label",{htmlFor:"input__text3"},"Error",n.a.createElement("input",{id:"input__text3",type:"text",placeholder:"Text Input"}))),n.a.createElement("p",null,n.a.createElement("label",{htmlFor:"input__text4"},"Valid",n.a.createElement("input",{id:"input__text4",type:"text",placeholder:"Text Input"}))))},ee=function(){return n.a.createElement(Y,{id:"forms__select",title:"Select Menu"},n.a.createElement("p",null,n.a.createElement("label",{htmlFor:"select"},"Select",n.a.createElement("select",{id:"select"},n.a.createElement("optgroup",{label:"Option Group"},n.a.createElement("option",null,"Option One"),n.a.createElement("option",null,"Option Two"),n.a.createElement("option",null,"Option Three"))))))},te=function(){return n.a.createElement(Y,{id:"forms__checkbox",title:"Checkboxes"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("label",{htmlFor:"checkbox1"},n.a.createElement("input",{id:"checkbox1",name:"checkbox",type:"checkbox",defaultChecked:!0})," Choice A")),n.a.createElement("li",null,n.a.createElement("label",{htmlFor:"checkbox2"},n.a.createElement("input",{id:"checkbox2",name:"checkbox",type:"checkbox"})," Choice B")),n.a.createElement("li",null,n.a.createElement("label",{htmlFor:"checkbox3"},n.a.createElement("input",{id:"checkbox3",name:"checkbox",type:"checkbox"})," Choice C"))))},ae=function(){return n.a.createElement(Y,{id:"forms__radio",title:"Radio Button"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("label",{htmlFor:"radio1"},n.a.createElement("input",{id:"radio1",name:"radio",type:"radio",defaultChecked:!0})," Option 1")),n.a.createElement("li",null,n.a.createElement("label",{htmlFor:"radio2"},n.a.createElement("input",{id:"radio2",name:"radio",type:"radio"})," Option 2")),n.a.createElement("li",null,n.a.createElement("label",{htmlFor:"radio3"},n.a.createElement("input",{id:"radio3",name:"radio",type:"radio"})," Option 3"))))},le=function(){return n.a.createElement(Y,{id:"forms__textarea",title:"TextArea"},n.a.createElement("p",null,n.a.createElement("label",{htmlFor:"textarea"},"Textarea",n.a.createElement("textarea",{id:"textarea",rows:"8",cols:"48",placeholder:"Enter your message here"}))))},ne=function(){return n.a.createElement(Y,{id:"forms__html5",title:"HTML5 Inputs"},n.a.createElement("p",null,n.a.createElement("label",{htmlFor:"ic"},"Color input",n.a.createElement("input",{type:"color",id:"ic",defaultValue:"#ff0000"}))),n.a.createElement("p",null,n.a.createElement("label",{htmlFor:"in"},"Number input",n.a.createElement("input",{type:"number",id:"in",min:"0",max:"10",defaultValue:"5"}))),n.a.createElement("p",null,n.a.createElement("label",{htmlFor:"ir"},"Range input",n.a.createElement("input",{type:"range",id:"ir",defaultValue:"10"}))),n.a.createElement("p",null,n.a.createElement("label",{htmlFor:"idd"},"Date input",n.a.createElement("input",{type:"date",id:"idd",defaultValue:"1970-01-01"}))),n.a.createElement("p",null,n.a.createElement("label",{htmlFor:"idm"},"Month input",n.a.createElement("input",{type:"month",id:"idm",defaultValue:"1970-01"}))),n.a.createElement("p",null,n.a.createElement("label",{htmlFor:"idw"},"Week input",n.a.createElement("input",{type:"week",id:"idw",defaultValue:"1970-W01"}))),n.a.createElement("p",null,n.a.createElement("label",{htmlFor:"idt"},"Datetime input",n.a.createElement("input",{type:"datetime",id:"idt",defaultValue:"1970-01-01T00:00:00Z"}))),n.a.createElement("p",null,n.a.createElement("label",{htmlFor:"idtl"},"Datetime-local input",n.a.createElement("input",{type:"datetime-local",id:"idtl",defaultValue:"1970-01-01T00:00"}))))},re=function(){return n.a.createElement(Y,{id:"forms__action",title:"Action Buttons"},n.a.createElement("p",null,n.a.createElement("input",{type:"submit",value:"<input type=submit>"}),n.a.createElement("input",{type:"button",value:"<input type=button>"}),n.a.createElement("input",{type:"reset",value:"<input type=reset>"}),n.a.createElement("input",{type:"submit",value:"<input disabled>",disabled:!0})),n.a.createElement("p",null,n.a.createElement("button",{type:"submit"},"<button type=submit>"),n.a.createElement("button",{type:"button"},"<button type=button>"),n.a.createElement("button",{type:"reset"},"<button type=reset>"),n.a.createElement("button",{type:"button",disabled:!0},"<button disabled>")))},ie=function(){return n.a.createElement(T,{id:"forms",title:"Form Elements"},n.a.createElement($,null),n.a.createElement(ee,null),n.a.createElement(te,null),n.a.createElement(ae,null),n.a.createElement(le,null),n.a.createElement(ne,null),n.a.createElement(re,null))},oe=i.c.h1.withConfig({displayName:"TestElements__PageHeadline",componentId:"sc-1jtmcbc-0"})(["color:#fff;"]),ce=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("header",{role:"banner"},n.a.createElement(oe,null,"Content Test Page"),n.a.createElement("p",null,"This is a test page filled with common HTML elements wrapped in React components… but rather than be used to build CSS styles, these elements are just fodder for demonstrational purposes.")),n.a.createElement(_,null),n.a.createElement("main",{role:"main"},n.a.createElement(P,null),n.a.createElement(Z,null),n.a.createElement(ie,null)),n.a.createElement("footer",{role:"contentinfo"},n.a.createElement("p",null,"Modified by ",n.a.createElement(o.a,{to:"https://github.com/mikedpad"},"Michael Daniel Padilla"),"."),n.a.createElement("p",null,"Forked from"," ",n.a.createElement(o.a,{to:"https://github.com/cbracco/html5-test-page"},"HTML5 Test Page"),".")))};t.default=function(){return n.a.createElement(r.a,null,n.a.createElement(ce,null))}},hEAB:function(e){e.exports=JSON.parse('[{"href":"#text","label":"Text Elements","child":[{"href":"#text__headings","label":"Headings"},{"href":"#text__paragraphs","label":"Paragraphs"},{"href":"#text__blockquotes","label":"Blockquotes"},{"href":"#text__lists","label":"Lists"},{"href":"#text__hr","label":"Horizontal Rule"},{"href":"#text__tables","label":"Tabular data"},{"href":"#text__code","label":"Code"},{"href":"#text__inline","label":"Inline elements"}]},{"href":"#embedded","label":"Embedded Content","child":[{"href":"#embedded__images","label":"Images"},{"href":"#embedded__audio","label":"Audio"},{"href":"#embedded__video","label":"Video"},{"href":"#embedded__canvas","label":"Canvas"},{"href":"#embedded__meter","label":"Meter"},{"href":"#embedded__progress","label":"Progress"},{"href":"#embedded__svg","label":"Inline SVG"},{"href":"#embedded__iframe","label":"IFrames"}]},{"href":"#forms","label":"Form Elements","child":[{"href":"#forms__input","label":"Input Fields"},{"href":"#forms__select","label":"Select Menus"},{"href":"#forms__checkbox","label":"Checkboxes"},{"href":"#forms__radio","label":"Radio Buttons"},{"href":"#forms__textareas","label":"TextArea"},{"href":"#forms__html5","label":"HTML5 Inputs"},{"href":"#forms__action","label":"Action Buttons"}]}]')}}]);
//# sourceMappingURL=component---src-pages-index-jsx-e1dc763f0a6f829fd240.js.map