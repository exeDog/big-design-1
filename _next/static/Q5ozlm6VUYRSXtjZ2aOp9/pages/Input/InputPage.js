(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"/+1d":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Input/InputPage",function(){var e=t("JUCr");return{page:e.default||e}}])},JUCr:function(e,n,t){"use strict";t.r(n);var a=t("+Ls6"),r=t("ERkP"),l=t.n(r),o=t("GsAr"),i=t("lIm4"),s=t("nFRM"),c=t("R5dR"),u=function(){return l.a.createElement(s.a,null,l.a.createElement(s.a.Prop,{name:"description",types:"ReactChild"},"Append a description to the input field."),l.a.createElement(s.a.Prop,{name:"error",types:"ReactChild"},"Displays an error message for the field. Error message will be passed to the ",l.a.createElement(i.a,null,"Form.Group")," for display purposes."),l.a.createElement(s.a.Prop,{name:"iconLeft",types:l.a.createElement(c.a,{href:"/Icons/IconsPage",as:"/icons"},"Icon")},"Pass in an"," ",l.a.createElement(c.a,{href:"/Icons/IconsPage",as:"/icons"},"Icon")," ","component to display to the left of the text."),l.a.createElement(s.a.Prop,{name:"iconRight",types:l.a.createElement(c.a,{href:"/Icons/IconsPage",as:"/icons"},"Icon")},"Pass in an"," ",l.a.createElement(c.a,{href:"/Icons/IconsPage",as:"/icons"},"Icon")," ","component to display to the right of the text."),l.a.createElement(s.a.Prop,{name:"label",types:"ReactChild"},"Label element for inputs. Component with auto generate ",l.a.createElement(i.a,null,"id"),"'s for the accessibility API."))},p=function(){return l.a.createElement(a.Text,null,"Supports all native ",l.a.createElement(i.a,null,"<p />")," element attributes.")},f=function(){return l.a.createElement(a.Text,null,"See"," ",l.a.createElement(c.a,{href:"/Form/FormPage",as:"/form#error"},"Forms.Error"),".")},m=function(){return l.a.createElement(a.Text,null,"See"," ",l.a.createElement(c.a,{href:"/Form/FormPage",as:"/form#label"},"Forms.Label"),".")};n.default=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(a.H0,null,"Input"),l.a.createElement(a.Text,null,"Inputs are stylized form controls with the ability of controling validation."," ",l.a.createElement(a.Link,{href:"https://bigcommerce.design/components/fields",target:"_blank"},"Form Fields Design Guidelines"),"."),l.a.createElement(o.a,null,'function Example() {\n  const [value, setValue] = React.useState(\'\');\n\n  const handleChange = event => setValue(event.target.value);\n\n  return (\n    <Form.Group>\n      <Input\n        label="Label"\n        description="Description for the input."\n        placeholder="Placeholder"\n        type="text"\n        value={value}\n        onChange={handleChange}\n      />\n    </Form.Group>\n  );\n}'),l.a.createElement(a.H1,null,"API"),l.a.createElement(a.H2,null,"Input"),l.a.createElement(a.Text,null,"Supports all native ",l.a.createElement(i.a,null,"<input />")," element attributes."),l.a.createElement(u,null),l.a.createElement(a.H2,null,"Input.Description"),l.a.createElement(p,null),l.a.createElement(a.H2,null,"Input.Error"),l.a.createElement(f,null),l.a.createElement(a.H2,null,"Input.Label"),l.a.createElement(m,null),l.a.createElement(a.H1,null,"Error State"),l.a.createElement(a.Text,null,"Inputs allow you to pass in an ",l.a.createElement(i.a,{primary:!0},"error")," message that will control the styles of an input. The logic on the input can be controlled with the ",l.a.createElement(i.a,{primary:!0},"onChange")," prop."),l.a.createElement(o.a,null,'<Form>\n  <Form.Group>\n    <Input\n      label="Email Address"\n      description="Provide a valid email address."\n      value="example@"\n      error="Email address must contain a domain name."\n      onChange={() => null}\n    />\n  </Form.Group>\n</Form>'),l.a.createElement(a.H1,null,"Icons"),l.a.createElement(a.Text,null,"Inputs can also contain icons via the ",l.a.createElement(i.a,null,"iconLeft")," & ",l.a.createElement(i.a,null,"iconRight")," props."),l.a.createElement(o.a,null,'<Form>\n  <Form.Group>\n    <Input label="Example" placeholder="Example" iconLeft={<CheckCircleIcon color="success" />} />\n    <Input label="Example" placeholder="Example" iconRight={<CheckCircleIcon color="success" />} />\n  </Form.Group>\n</Form>'))}},KeDb:function(e,n,t){"use strict";var a=t("lpv4"),r=a(t("h7sq")),l=a(t("tS02")),o=a(t("/XES")),i=a(t("ztBH")),s=a(t("Fayl")),c=t("5Tpg"),u=t("lpv4");n.__esModule=!0,n.default=void 0;var p,f=u(t("JeHL")),m=t("EfWO"),h=c(t("ERkP")),d=(u(t("aWzz")),u(t("7xIC"))),E=(t("IBMh"),t("kMDi"));function v(e){return e&&"object"===typeof e?(0,E.formatWithValidation)(e):e}var g=new f.default,I=window.IntersectionObserver;function y(){return p||(I?p=new I(function(e){e.forEach(function(e){if(g.has(e.target)){var n=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(e.target),g.delete(e.target),n())}})},{rootMargin:"200px"}):void 0)}var b=function(e){function n(){var e;return(0,r.default)(this,n),(e=(0,o.default)(this,(0,i.default)(n).apply(this,arguments))).cleanUpListeners=function(){},e.formatUrls=function(e){var n=null,t=null,a=null;return function(r,l){if(a&&r===n&&l===t)return a;var o=e(r,l);return n=r,t=l,a=o,o}}(function(e,n){return{href:v(e),as:n?v(n):n}}),e.linkClicked=function(n){var t=n.currentTarget,a=t.nodeName,r=t.target;if("A"!==a||!(r&&"_self"!==r||n.metaKey||n.ctrlKey||n.shiftKey||n.nativeEvent&&2===n.nativeEvent.which)){var l=e.formatUrls(e.props.href,e.props.as),o=l.href,i=l.as;if(function(e){var n=(0,m.parse)(e,!1,!0),t=(0,m.parse)((0,E.getLocationOrigin)(),!1,!0);return!n.host||n.protocol===t.protocol&&n.host===t.host}(o)){var s=window.location.pathname;o=(0,m.resolve)(s,o),i=i?(0,m.resolve)(s,i):o,n.preventDefault();var c=e.props.scroll;null==c&&(c=i.indexOf("#")<0),d.default[e.props.replace?"replace":"push"](o,i,{shallow:e.props.shallow}).then(function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})}}},e}return(0,s.default)(n,e),(0,l.default)(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var n=this;this.props.prefetch&&I&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,n){var t=y();return t?(t.observe(e),g.set(e,n),function(){t.unobserve(e),g.delete(e)}):function(){}}(e,function(){n.prefetch()}))}},{key:"prefetch",value:function(){if(this.props.prefetch){var e=window.location.pathname,n=this.formatUrls(this.props.href,this.props.as).href,t=(0,m.resolve)(e,n);d.default.prefetch(t)}}},{key:"render",value:function(){var e=this,n=this.props.children,t=this.formatUrls(this.props.href,this.props.as),a=t.href,r=t.as;"string"===typeof n&&(n=h.default.createElement("a",null,n));var l=h.Children.only(n),o={ref:function(n){return e.handleRef(n)},onMouseEnter:function(n){l.props&&"function"===typeof l.props.onMouseEnter&&l.props.onMouseEnter(n),e.prefetch()},onClick:function(n){l.props&&"function"===typeof l.props.onClick&&l.props.onClick(n),n.defaultPrevented||e.linkClicked(n)}};return!this.props.passHref&&("a"!==l.type||"href"in l.props)||(o.href=r||a),h.default.cloneElement(l,o)}}]),n}(h.Component);b.propTypes=void 0,b.defaultProps={prefetch:!0};var w=b;n.default=w},R5dR:function(e,n,t){"use strict";t.d(n,"a",function(){return c});var a=t("+Ls6"),r=t("jvFD"),l=t.n(r),o=t("ERkP"),i=t.n(o);function s(){return"/big-design"+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")}var c=function(e){var n=e.as,t=e.children,r=e.href;return i.a.createElement(l.a,{href:r,as:s(n)},"string"===typeof t?i.a.createElement(a.Link,null,t):t)}},jvFD:function(e,n,t){e.exports=t("KeDb")}},[["/+1d",1,0]]]);