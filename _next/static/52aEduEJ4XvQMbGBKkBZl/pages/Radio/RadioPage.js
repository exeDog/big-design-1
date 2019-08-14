(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{p79H:function(e,n,a){"use strict";a.r(n);var t=a("+Ls6"),o=a("ERkP"),l=a.n(o),r=a("GsAr"),d=a("lIm4"),c=a("nFRM"),i=function(){return l.a.createElement(c.a,null,l.a.createElement(c.a.Prop,{name:"label",types:"ReactChild",required:!0},"Label to display next to a ",l.a.createElement(d.a,null,"Radio")," component."))};n.default=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(t.H0,null,"Radio"),l.a.createElement(t.Text,null,"Radios are single-selectable form control groups."," ",l.a.createElement(t.Link,{href:"https://bigcommerce.design/fields",target:"_blank"},"Form Fields Design Guidelines"),"."),l.a.createElement(r.a,null,'function Example() {\n  const [selected, setSelected] = React.useState(\'\');\n\n  const handleChange = event => setSelected(event.target.value);\n\n  return (\n    <Form>\n      <Form.Group>\n        <Radio label="On" checked={selected === \'on\'} value="on" onChange={handleChange} />\n        <Radio label="Off" checked={selected === \'off\'} value="off" onChange={handleChange} />\n      </Form.Group>\n    </Form>\n  );\n}'),l.a.createElement(t.H1,null,"API"),l.a.createElement(t.H2,null,"Radio"),l.a.createElement(t.Text,null,"Supports all native ",l.a.createElement(d.a,null,"<input />")," element attributes."),l.a.createElement(i,null),l.a.createElement(t.H1,null,"Grouping"),l.a.createElement(t.Text,null,"In order to group radio controls, use the ",l.a.createElement(d.a,null,"Form.Fieldset")," component to separate the controls."),l.a.createElement(r.a,null,'function Example() {\n  const [firstRadio, setFirstRadio] = React.useState(\'\');\n  const [secondRadio, setSecondRadio] = React.useState(\'\');\n\n  const handleFirstChange = event => setFirstRadio(event.target.value);\n  const handleSecondChange = event => setSecondRadio(event.target.value);\n\n  return (\n    <Form>\n      <Form.Fieldset legend="First Group">\n        <Form.Group>\n          <Radio label="On" checked={firstRadio === \'on\'} value="on" onChange={handleFirstChange} />\n          <Radio label="Off" checked={firstRadio === \'off\'} value="off" onChange={handleFirstChange} />\n        </Form.Group>\n      </Form.Fieldset>\n      <Form.Fieldset legend="Second Group">\n        <Form.Group>\n          <Radio label="On" checked={secondRadio === \'on\'} value="on" onChange={handleSecondChange} />\n          <Radio label="Off" checked={secondRadio === \'off\'} value="off" onChange={handleSecondChange} />\n        </Form.Group>\n      </Form.Fieldset>\n    </Form>\n  );\n}'))}},qvLE:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Radio/RadioPage",function(){var e=a("p79H");return{page:e.default||e}}])}},[["qvLE",1,0]]]);