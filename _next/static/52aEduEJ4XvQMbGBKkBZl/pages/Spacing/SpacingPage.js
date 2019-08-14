(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{Cqgx:function(e,t,n){"use strict";n.r(t);var r=n("TPw6"),a=n.n(r),o=n("+Ls6"),i=n("ERkP"),l=n.n(i),s=n("j/s1"),c=n("R5dR"),u=n("GsAr"),p=Object(s.e)(o.Box).withConfig({displayName:"SpacingPage__BlueBox",componentId:"sc-1e1qrru-0"})(function(e){var t=e.theme;return{backgroundColor:t.colors.primary,display:"inline-block",height:t.spacing.large,width:t.spacing.large}}),f=Object(s.e)(o.Text).withConfig({displayName:"SpacingPage__StyledText",componentId:"sc-1e1qrru-1"})(["padding:0;margin:0;"]);t.default=function(){var e=Object(i.useContext)(s.a).spacing;return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.H0,null,"Spacing"),l.a.createElement(o.Text,null,"Spacing can be used directly on certain properties that expect a size value, like"," ",l.a.createElement(c.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin")," ","and"," ",l.a.createElement(c.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding"),"."),l.a.createElement(u.a,null,'<>\n  <Button marginRight="medium">Button</Button>\n  <Button>Button</Button>\n</>'),l.a.createElement(o.Text,null,"You can also use spacing directly from the theme to style other components, for example:"),l.a.createElement(u.a,null,"function Example() {\n  const StyledBox = styled(Box)(({ theme }) => ({\n    backgroundColor: theme.colors.primary,\n    height: theme.spacing.large,\n    width: theme.spacing.large,\n  }));\n\n  return <StyledBox />;\n}"),l.a.createElement(o.H2,null,"Available Spacing"),l.a.createElement(o.Flex,{justifyContent:"space-around"},a()(e).reverse().map(function(t){return l.a.createElement(o.Flex,{alignItems:"center",key:t,flexDirection:"column",paddingBottom:"xxxLarge"},l.a.createElement(f,null,t),l.a.createElement(p,{marginTop:"medium",style:{width:e[t],height:e[t]}}))})))}},KeDb:function(e,t,n){"use strict";var r=n("lpv4"),a=r(n("h7sq")),o=r(n("tS02")),i=r(n("/XES")),l=r(n("ztBH")),s=r(n("Fayl")),c=n("5Tpg"),u=n("lpv4");t.__esModule=!0,t.default=void 0;var p,f=u(n("JeHL")),h=n("EfWO"),d=c(n("ERkP")),g=(u(n("aWzz")),u(n("7xIC"))),m=(n("IBMh"),n("kMDi"));function v(e){return e&&"object"===typeof e?(0,m.formatWithValidation)(e):e}var y=new f.default,E=window.IntersectionObserver;function w(){return p||(E?p=new E(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var x=function(e){function t(){var e;return(0,a.default)(this,t),(e=(0,i.default)(this,(0,l.default)(t).apply(this,arguments))).cleanUpListeners=function(){},e.formatUrls=function(e){var t=null,n=null,r=null;return function(a,o){if(r&&a===t&&o===n)return r;var i=e(a,o);return t=a,n=o,r=i,i}}(function(e,t){return{href:v(e),as:t?v(t):t}}),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,a=n.target;if("A"!==r||!(a&&"_self"!==a||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var o=e.formatUrls(e.props.href,e.props.as),i=o.href,l=o.as;if(function(e){var t=(0,h.parse)(e,!1,!0),n=(0,h.parse)((0,m.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var s=window.location.pathname;i=(0,h.resolve)(s,i),l=l?(0,h.resolve)(s,l):i,t.preventDefault();var c=e.props.scroll;null==c&&(c=l.indexOf("#")<0),g.default[e.props.replace?"replace":"push"](i,l,{shallow:e.props.shallow}).then(function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})}}},e}return(0,s.default)(t,e),(0,o.default)(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.props.prefetch&&E&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var n=w();return n?(n.observe(e),y.set(e,t),function(){n.unobserve(e),y.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.props.prefetch){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,h.resolve)(e,t);g.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,a=n.as;"string"===typeof t&&(t=d.default.createElement("a",null,t));var o=d.Children.only(t),i={ref:function(t){return e.handleRef(t)},onMouseEnter:function(t){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),e.prefetch()},onClick:function(t){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=a||r),d.default.cloneElement(o,i)}}]),t}(d.Component);x.propTypes=void 0,x.defaultProps={prefetch:!0};var k=x;t.default=k},R5dR:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n("+Ls6"),a=n("jvFD"),o=n.n(a),i=n("ERkP"),l=n.n(i);function s(){return""+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")}var c=function(e){var t=e.as,n=e.children,a=e.href;return l.a.createElement(o.a,{href:a,as:s(t)},"string"===typeof n?l.a.createElement(r.Link,null,n):n)}},jvFD:function(e,t,n){e.exports=n("KeDb")},tt6I:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Spacing/SpacingPage",function(){var e=n("Cqgx");return{page:e.default||e}}])}},[["tt6I",1,0]]]);