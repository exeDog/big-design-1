(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{GGUH:function(e,t,a){"use strict";a.r(t);var r=a("+Ls6"),i=a("ERkP"),n=a.n(i),l=a("GsAr"),o=a("lIm4"),m=a("nFRM"),d=function(){return n.a.createElement(m.a,null,n.a.createElement(m.a.Prop,{name:"gridAreas",types:"string"},"Defines a grid template by referencing the names of the grid areas which are specified with the grid-area property of a grid item. Same as the ",n.a.createElement(o.a,{highlight:!1},"grid-template-areas")," CSS property."),n.a.createElement(m.a.Prop,{name:"gridAutoColumns",types:"string"},"Specifies the size of any auto-generated column grid tracks. Same as the"," ",n.a.createElement(o.a,{highlight:!1},"grid-auto-columns")," CSS property."),n.a.createElement(m.a.Prop,{name:"gridAutoFlow",types:["row","column","dense","row dense","column dense","inherit","initial","unset"]},"Controls how auto placement of grid items work. Same as the ",n.a.createElement(o.a,{highlight:!1},"grid-auto-flow")," CSS property."),n.a.createElement(m.a.Prop,{name:"gridAutoRows",types:"string"},"Specifies the size of any auto-generated row grid tracks. Same as the"," ",n.a.createElement(o.a,{highlight:!1},"grid-auto-rows")," CSS property."),n.a.createElement(m.a.Prop,{name:"gridColumns",types:"string"},"Defines the columns of the grid with a space-separated list of values. Same as the"," ",n.a.createElement(o.a,{highlight:!1},"grid-template-columns")," CSS property."),n.a.createElement(m.a.Prop,{name:"gridGap",types:"string"},"Controls the spacing between grid items. Same as the ",n.a.createElement(o.a,{highlight:!1},"grid-gap")," CSS property."),n.a.createElement(m.a.Prop,{name:"gridRows",types:"string"},"Defines the rows of the grid with a space-separated list of values. Same as the"," ",n.a.createElement(o.a,{highlight:!1},"grid-template-rows")," CSS property."),n.a.createElement(m.a.Prop,{name:"gridTemplate",types:"string"},"Shorthand for ",n.a.createElement(o.a,{highlight:!1},"grid-template-columns"),","," ",n.a.createElement(o.a,{highlight:!1},"grid-template-rows"),", and ",n.a.createElement(o.a,{highlight:!1},"grid-template-areas"),". Same as the ",n.a.createElement(o.a,{highlight:!1},"grid-template")," CSS property."))},s=function(){return n.a.createElement(m.a,null,n.a.createElement(m.a.Prop,{name:"gridArea",types:"string"},"Gives a grid item and area defined via ",n.a.createElement(o.a,{highlight:!1},"grid-template-areas"),". Same as the"," ",n.a.createElement(o.a,{highlight:!1},"grid-area")," CSS property."),n.a.createElement(m.a.Prop,{name:"gridColumn",types:"string"},"Shorthand for ",n.a.createElement(o.a,{highlight:!1},"grid-column-start")," and ",n.a.createElement(o.a,{highlight:!1},"grid-column-end"),". Same as the ",n.a.createElement(o.a,{highlight:!1},"grid-column")," CSS property."),n.a.createElement(m.a.Prop,{name:"gridColumnEnd",types:"string"},"Determines a grid item's location within the grid by referring to specific grid lines. Same as the"," ",n.a.createElement(o.a,{highlight:!1},"grid-column-end")," CSS property."),n.a.createElement(m.a.Prop,{name:"gridColumnStart",types:"string"},"Determines a grid item's location within the grid by referring to specific grid lines. Same as the"," ",n.a.createElement(o.a,{highlight:!1},"grid-column-start")," CSS property."),n.a.createElement(m.a.Prop,{name:"gridRow",types:"string"},"Shorthand for ",n.a.createElement(o.a,{highlight:!1},"grid-row-start")," and ",n.a.createElement(o.a,{highlight:!1},"grid-row-end"),". Same as the ",n.a.createElement(o.a,{highlight:!1},"grid-row")," CSS property."),n.a.createElement(m.a.Prop,{name:"gridRowEnd",types:"string"},"Determines a grid item's location within the grid by referring to specific grid lines. Same as the"," ",n.a.createElement(o.a,{highlight:!1},"grid-row-end")," CSS property."),n.a.createElement(m.a.Prop,{name:"gridRowStart",types:"string"},"Determines a grid item's location within the grid by referring to specific grid lines. Same as the"," ",n.a.createElement(o.a,{highlight:!1},"grid-row-start")," CSS property."))},p=function(e){var t=e.children;return n.a.createElement(r.Box,{backgroundColor:"secondary20",border:"box",padding:"small",style:{height:"100%"}},t)};t.default=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(r.H0,null,"Grid"),n.a.createElement(r.Text,null,"The Grid component is useful for creating intrinsicly responsive layouts."," ",n.a.createElement(r.Link,{href:"https://bigcommerce.design/responsive",target:"_blank"},"Responsive Design Guidelines"),"."),n.a.createElement(l.a,{scope:{ExampleBox:p}},"<Grid>\n  <Grid.Item>\n    <ExampleBox>Item 1</ExampleBox>\n  </Grid.Item>\n  <Grid.Item>\n    <ExampleBox>Item 2</ExampleBox>\n  </Grid.Item>\n  <Grid.Item>\n    <ExampleBox>Item 3</ExampleBox>\n  </Grid.Item>\n  <Grid.Item>\n    <ExampleBox>Item 4</ExampleBox>\n  </Grid.Item>\n</Grid>"),n.a.createElement(r.H1,null,"API"),n.a.createElement(r.H2,null,"Grid"),n.a.createElement(d,null),n.a.createElement(r.H2,null,"Grid.Item"),n.a.createElement(s,null),n.a.createElement(r.H1,null,"Examples"),n.a.createElement(r.Text,null,"Grid allows you to create custom layouts using combinations of ",n.a.createElement(o.a,null,"gridTemplate")," and ",n.a.createElement(o.a,null,"gridArea")," ","props."),n.a.createElement(l.a,{scope:{ExampleBox:p}},'function Example() {\n  const template = `\n    "head head" 80px\n    "nav  main" 200px\n    "foot  foot" 50px\n    / 1fr 5fr;\n  `;\n\n  return (\n    <Grid gridTemplate={template}>\n      <Grid.Item gridArea="head">\n        <ExampleBox>Header</ExampleBox>\n      </Grid.Item>\n      <Grid.Item gridArea="nav">\n        <ExampleBox>Sidebar</ExampleBox>\n      </Grid.Item>\n      <Grid.Item gridArea="main">\n        <ExampleBox>Content</ExampleBox>\n      </Grid.Item>\n      <Grid.Item gridArea="foot">\n        <ExampleBox>Footer</ExampleBox>\n      </Grid.Item>\n    </Grid>\n  );\n}'),n.a.createElement(r.Text,null,"You can use the ",n.a.createElement(o.a,null,"gridColumns")," prop to create columned layouts."),n.a.createElement(l.a,{scope:{ExampleBox:p}},'<Grid gridColumns="repeat(3, 1fr)">\n  <Grid.Item>\n    <ExampleBox>\n      Reprehenderit ullamco et elit eu duis non reprehenderit eiusmod pariatur ea deserunt irure. Reprehenderit et\n      incididunt sit aute sint proident eu eiusmod pariatur Lorem nulla labore irure nisi. Adipisicing do duis\n      occaecat ipsum dolor ea. Qui consectetur sint eu nulla duis et commodo anim commodo. Ullamco consectetur\n      elit ullamco aliquip do id consectetur anim laborum.\n    </ExampleBox>\n  </Grid.Item>\n\n  <Grid.Item>\n    <ExampleBox>\n      In sit dolore culpa reprehenderit tempor laborum. Sit anim voluptate pariatur irure amet mollit. Est mollit\n      ad pariatur esse eu reprehenderit ut veniam. Aliquip anim mollit aliquip quis officia minim esse laboris\n      proident fugiat cillum. Eiusmod culpa eu ea eiusmod nostrud.\n    </ExampleBox>\n  </Grid.Item>\n\n  <Grid.Item>\n    <ExampleBox>\n      Ipsum adipisicing pariatur magna quis incididunt amet pariatur. Aliqua voluptate consequat ut elit ea dolore\n      officia reprehenderit exercitation dolore eiusmod cupidatat quis. Ullamco ipsum do deserunt sunt ad deserunt\n      ut. Elit non velit dolore ad est eu.\n    </ExampleBox>\n  </Grid.Item>\n</Grid>'))}},"Gte+":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Grid/GridPage",function(){var e=a("GGUH");return{page:e.default||e}}])}},[["Gte+",1,0]]]);