(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"6Gk8":function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),i=a("Wbzz"),r=a("9eSz"),o=a.n(r),s=a("kKAo");t.a=function(){var e,t,a,l,r=Object(i.useStaticQuery)("3062310784"),c=null===(e=r.site.siteMetadata)||void 0===e?void 0:e.author,m=(null===(t=r.site.siteMetadata)||void 0===t||t.social,null==r||null===(a=r.avatar)||void 0===a||null===(l=a.childImageSharp)||void 0===l?void 0:l.fixed);return n.a.createElement("div",{className:"bio"},m&&n.a.createElement(o.a,{fixed:m,alt:(null==c?void 0:c.name)||"",className:"bio-avatar",imgStyle:{borderRadius:"50%"}}),(null==c?void 0:c.name)&&n.a.createElement(s.a,{elevation:"5",style:{padding:"10px",height:"fit-content",marginRight:"18px"}},n.a.createElement("p",null," What's good? My name's ",c.name," and ",(null==c?void 0:c.summary)||null," ")))}},Bl7J:function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),i=a("rY4l");t.a=function(e){var t=e.children;return n.a.createElement("div",null,n.a.createElement(i.a,null),n.a.createElement("div",{className:"global-wrapper"},n.a.createElement("main",null,t),n.a.createElement("footer",{style:{position:"absolute",bottom:0,left:"50%"}},"Made with 💖 | ",(new Date).getFullYear())))}},yYA9:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return c}));var l=a("q1tI"),n=a.n(l),i=a("Wbzz"),r=a("6Gk8"),o=a("Bl7J"),s=a("vrFN");t.default=function(e){var t,a=e.data,l=e.location,c=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",m=a.allMarkdownRemark.nodes;return 0===m.length?n.a.createElement(o.a,{location:l,title:c},n.a.createElement(s.a,{title:"All posts"}),n.a.createElement(r.a,null),n.a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):n.a.createElement(o.a,{location:l,title:c},n.a.createElement(s.a,{title:"All posts"}),n.a.createElement("ol",{style:{listStyle:"none"}},m.map((function(e){var t=e.frontmatter.title||e.fields.slug;return console.log(e.fields),n.a.createElement("li",{key:e.fields.slug},n.a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},n.a.createElement("header",null,n.a.createElement("h2",null,n.a.createElement(i.Link,{to:e.fields.slug,itemProp:"url"},n.a.createElement("span",{itemProp:"headline"},t))),n.a.createElement("small",null,e.frontmatter.date)),n.a.createElement("section",null,n.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))};var c="2239478271"}}]);
//# sourceMappingURL=component---src-pages-thoughts-js-0c14656338d14bfc84a6.js.map