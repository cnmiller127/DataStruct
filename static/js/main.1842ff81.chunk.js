(this["webpackJsonpdata-struct"]=this["webpackJsonpdata-struct"]||[]).push([[0],{15:function(e,t,a){},36:function(e,t,a){},40:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(1),l=a(17),i=a.n(l),c=(a(36),a(10)),s=a(14),o=a(7);a(15);var h=function(){var e=Object(r.useState)([0,0]),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(r.useLayoutEffect)((function(){function e(){n([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),a},f=function(e){var t,a,l,i,s=Object(r.useRef)(null),f=h(),u=Object(o.a)(f,2),j=u[0],g=u[1],d=function(n){j>=768?(t=j/50,a=g/50,l=j/20,i=j/20):(t=j/50,a=g/50,l=j/12,i=j/12),n.fillStyle="#000000";for(var r=0;r<e.data.length;r++)n.beginPath(),n.rect(t+r*l,a,l,i),n.stroke(),n.font=j>=768?"4vh Arial":"3vh Arial",n.textAlign="center",n.textBaseline="middle",n.fillText(e.data[r],t+.5*l+r*l,a+.5*i),n.font="2vh Arial",n.fillText(r,t+.5*l+r*l,a+1.3*i)};return Object(r.useEffect)((function(){var e=s.current,t=e.getContext("2d");e.width=window.innerWidth,e.height=.2*window.innerHeight,d(t)}),[d]),Object(n.jsx)("canvas",Object(c.a)({className:"canvas",ref:s},e))},u=a(55),j=a(56),g=a(57),d=a(58),b=function(){for(var e=[],t=0;t<10;t++)e.push(Math.floor(20*Math.random()));var a=Object(r.useState)("push"),l=Object(o.a)(a,2),i=l[0],h=l[1],b=Object(r.useState)(e),v=Object(o.a)(b,2),O=v[0],p=v[1],x=Object(r.useState)(" "),m=Object(o.a)(x,2),N=m[0],w=m[1],C=Object(r.useState)({index:null,value:null}),k=Object(o.a)(C,2),T=k[0],S=k[1],y=function(e){e.preventDefault(),h("push")},I=function(e){e.preventDefault(),h("insert")},E=function(e){e.preventDefault(),h("delete")},D=function(e){e.preventDefault(),e.target.value?w(e.target.value):w(" ")},R=function(e){e.preventDefault();var t=O;t.pop(),p(Object(s.a)(t))};return Object(r.useEffect)((function(){console.log("arr: ",O),console.log("insformData",T)}),[O,N,,T,i]),"push"===i?Object(n.jsxs)("div",{children:[Object(n.jsx)(f,{data:O}),Object(n.jsx)(u.a,{color:"success",className:"btn",onClick:y,children:" Push"}),Object(n.jsx)(u.a,{color:"warning",className:"btn",onClick:R,children:" Pop"}),Object(n.jsx)(u.a,{color:"info",className:"btn",onClick:I,children:" Insert"}),Object(n.jsx)(u.a,{color:"danger",className:"btn",onClick:E,children:" Delete"}),Object(n.jsxs)(j.a,{className:"form",children:[Object(n.jsx)(g.a,{children:"Value to push: "}),Object(n.jsx)(d.a,{className:"input",onChange:D,value:N}),Object(n.jsx)(u.a,{className:"btn",onClick:function(e){e.preventDefault(),p([].concat(Object(s.a)(O),[N]))},children:"Enter"})]})]}):"insert"===i?Object(n.jsxs)("div",{children:[Object(n.jsx)(f,{data:O}),Object(n.jsx)(u.a,{color:"success",className:"btn",onClick:y,children:" Push"}),Object(n.jsx)(u.a,{color:"warning",className:"btn",onClick:R,children:" Pop"}),Object(n.jsx)(u.a,{color:"info",className:"btn",onClick:I,children:" Insert"}),Object(n.jsx)(u.a,{color:"danger",className:"btn",onClick:E,children:" Delete"}),Object(n.jsxs)(j.a,{className:"form",children:[Object(n.jsx)(g.a,{children:"Index to Insert: "}),Object(n.jsx)(d.a,{onChange:function(e){e.preventDefault(),e.target.value?S(Object(c.a)(Object(c.a)({},T),{},{index:parseInt(e.target.value)})):S(Object(c.a)(Object(c.a)({},T),{},{index:" "}))},value:N.index}),Object(n.jsx)(g.a,{children:"Value to Insert: "}),Object(n.jsx)(d.a,{className:"input",onChange:function(e){e.preventDefault(),e.target.value?S(Object(c.a)(Object(c.a)({},T),{},{value:parseInt(e.target.value)})):S(Object(c.a)(Object(c.a)({},T),{},{value:" "}))},value:N.value}),Object(n.jsx)(u.a,{className:"btn",onClick:function(e){if(e.preventDefault(),T.index<O.length&&T.value){console.log("INSHANDLER");var t=O;t.splice(T.index,0,T.value),console.log(t),p(Object(s.a)(t))}},children:"Enter"})]})]}):"delete"===i?Object(n.jsxs)("div",{children:[Object(n.jsx)(f,{data:O}),Object(n.jsx)(u.a,{color:"success",className:"btn",onClick:y,children:" Push"}),Object(n.jsx)(u.a,{color:"warning",className:"btn",onClick:R,children:" Pop"}),Object(n.jsx)(u.a,{color:"info",className:"btn",onClick:I,children:" Insert"}),Object(n.jsx)(u.a,{color:"danger",className:"btn",onClick:E,children:" Delete"}),Object(n.jsxs)(j.a,{className:"form",children:[Object(n.jsx)(g.a,{children:"Index to Delete: "}),Object(n.jsx)(d.a,{className:"input",onChange:D,value:N}),Object(n.jsx)(u.a,{className:"btn",onClick:function(e){if(e.preventDefault(),N>=0&&N<O.length){var t=O;t.splice(N,1),p(Object(s.a)(t))}},children:"Enter"})]})]}):void 0},v=function(e){var t,a,l,i,s,f=Object(r.useRef)(null),u=h(),j=Object(o.a)(u,2),g=j[0],d=j[1],b=function(n){g>=768?(t=g/2,a=d/15,l=g/10,i=g/25,s=g/75):g>=768?(t=g/2,a=d/20,l=g/15,i=g/30,s=g/75):(t=g/2,a=d/30,l=g/5,i=g/5,s=g/35);var r=i,c=l;n.fillStyle="#000000";var o=e.data.root,h=1;!function e(t,a,l){var i,o;if(0,i=c/h,o=r,n.beginPath(),n.arc(a,l,s,0*Math.PI,2*Math.PI),n.stroke(),n.font=g>=768?"3vh Arial":"2vh Arial",n.textAlign="center",n.textBaseline="middle",n.fillText(t.val,a,l),t.left){var f=-o/i,u=-f*a+l,j=Math.pow(f,2)+1,d=-2*(a+f*l-f*u),b=a*a+l*l+u*u-s*s-2*u*l,v=(-d-Math.sqrt(d*d-4*j*b))/(2*j),O=(-d+Math.sqrt(Math.pow(d,2)-4*j*b))/(2*j),p=v,x=f*v+u,m=O-i,N=f*(O-i)+u;n.beginPath(),n.moveTo(p,x),n.lineTo(m,N),n.stroke(),h++,e(t.left,a-i,l+o)}if(t.right){var w=o/i,C=-w*a+l,k=Math.pow(w,2)+1,T=-2*(a+w*l-w*C),S=a*a+l*l+C*C-s*s-2*C*l,y=(-T-Math.sqrt(T*T-4*k*S))/(2*k),I=(-T+Math.sqrt(Math.pow(T,2)-4*k*S))/(2*k),E=I,D=w*I+C,R=y+i,A=w*(y+i)+C;n.beginPath(),n.arc(a,l,s,0*Math.PI,2*Math.PI),n.stroke(),n.font=g>=768?"3vh Arial":"2vh Arial",n.textAlign="center",n.textBaseline="middle",n.fillText(t.val,a,l),n.beginPath(),n.moveTo(E,D),n.lineTo(R,A),n.stroke(),h++,e(t.right,a+i,l+o)}h--}(o,t,a)};return Object(r.useEffect)((function(){var e=f.current,t=e.getContext("2d");e.width=window.innerWidth,e.height=2*window.innerHeight,b(t)}),[b]),Object(n.jsx)("canvas",Object(c.a)({ref:f},e))};function O(e){this.val=e||null,this.freq=e?this.freq=1:0,this.left=null,this.right=null}function p(){this.tree={},this.tree.root=new O,this.tree.count=0,this.tree.leftCount=0,this.tree.rightCount=0}function x(e,t){return e&&e.left&&(t++,function e(a){a.left&&(t++,e(a.left)),a.right&&(t++,e(a.right))}(e.left)),t}function m(e,t){return e&&e.right&&(t++,function e(a){a.left&&(t++,e(a.left)),a.right&&(t++,e(a.right))}(e.right)),t}p.prototype.insert=function(e){var t=this;this.tree.count++;var a=function e(a,n,r){console.log("INSERT: ",n),a.val?n>a.val?(t.tree.rightCount++,a.right&&a.left?e(a.right,n,a):function(e,t,a,n){var r=new O(t);if(e.right)if(t>e.right.val){var l=e.right;l.right=r,l.left=e,e.right=null,a?a.val>e.val?a.left=l:a.right=l:n.root=l}else r.left=e,r.right=e.right,e.right=null,a?a.val>e.val?a.left=r:a.right=r:n.root=r;else e.right=r}(a,n,r,t.tree)):n<a.val&&(t.tree.leftCount++,a.right&&a.left?e(a.left,n,a):function(e,t,a,n){var r=new O(t);if(e.left)if(t<e.left.val){var l=e.left;l.left=r,l.right=e,e.left=null,a?a.val>e.val?a.left=l:a.right=l:n.root=l}else r.right=e,r.left=e.left,e.left=null,a?a.val>e.val?a.left=r:a.right=r:n.root=r;else e.left=r}(a,n,r,t.tree)):a.val=n,console.log("after rIns: ",t.tree)};function n(e,t){var n=e,r=n.val,l=function(e){if(e&&e.right){for(var t=e.right,a=e;t.left;)a=t,t=t.left;return{parent:a,leaf:t}}}(e);return l.leaf!==e&&(l.leaf.right?l.parent.left=l.leaf.right:l.parent.left=null,l.leaf.left=n.left,l.leaf.right=n.right,n.right=null,n.left=null),console.log("Node.leafAfter",l.leaf),t&&(console.log("arRight prev bfr",String(t.right.val),String(t.left.val)),t.val>l.leaf.val?t.left=l.leaf:t.right=l.leaf,console.log("arRight prev aftr",String(t.right.val),String(t.left.val))),a(l.leaf,r,t),l.leaf}function r(e,t){var n=e,r=n.val,l=function(e){if(e&&e.left){for(var t=e,a=e.left;a.right;)t=a,a=a.right;return{parent:t,leaf:a}}}(e);return l.leaf!==e&&(l.leaf.left?l.parent.right=l.leaf.left:l.parent.right=null,l.leaf.right=n.right,l.leaf.left=n.left,n.right=null,n.left=null,n=null),console.log("Node.leafAfter",l.leaf),t&&(console.log("arRight prev bfr",String(t.right.val),String(t.left.val)),t.val>l.leaf.val?t.left=l.leaf:t.right=l.leaf,console.log("arRight prev aftr",String(t.right.val),String(t.left.val))),a(l.leaf,r,t),l.leaf}a(this.tree.root,e,null),console.log("TREE preBal: ",this),function e(a,l,i){var c,s;a.val,s=0,m(a,c=0)>x(a,s)+1&&(console.log("LEFTCOUNT: ",x(a,s)),console.log("RIGHTCOUNT: ",m(a,c)),console.log("RC ROOT: ",a),i?n(a,i):t.tree.root=n(a,i),a=t.tree.root,t.tree.rightCount--),x(a,s)>m(a,c)+1&&(console.log("LEFTCOUNT: ",x(a,s)),console.log("RIGHTCOUNT: ",m(a,c)),console.log("LC ROOT: ",a),i?r(a,i):t.tree.root=r(a,i),a=t.tree.root,t.tree.leftCount--),a.left&&e(a.left,l,a),a.right&&e(a.right,l,a)}(this.tree.root,e,null),console.log("TREE: aftrBal ",this)};function N(e){this.val=e||null,this.freq=e?this.freq=1:0,this.left=null,this.right=null}function w(){this.tree={},this.tree.root=new N,this.tree.count=0,this.tree.leftCount=0,this.tree.rightCount=0}w.prototype.insert=function(e){var t=this;this.tree.count++;var a=function e(a,n,r){if(console.log("INSERT: ",n),a.val){if(n>a.val)if(t.tree.rightCount++,a.right)e(a.right,n,a);else{var l=new N(n);a.right=l}else if(n<a.val)if(t.tree.leftCount++,a.left)e(a.left,n,a);else{var i=new N(n);a.left=i}}else a.val=n;console.log("after rIns: ",t.tree)},n=function(e,n){var r=e,l=r.val,i=function(e){if(e&&e.right){for(var t=e.right,a=e;t.left;)a=t,t=t.left;return{parent:a,leaf:t}}}(e);return i.parent!==e?(i.leaf.right?i.parent.left=i.leaf.right:i.parent.left=null,i.leaf.left=r.left,i.leaf.right=r.right):i.leaf.left=r.left,r.right=null,r.left=null,console.log("Node.leafAfter",i.leaf),n?(console.log("arRight prev bfr",String(n.right.val),String(n.left.val)),n.val>i.leaf.val?n.left=i.leaf:n.right=i.leaf,console.log("arRight prev aftr",String(n.right.val),String(n.left.val))):t.tree.root=i.leaf,a(i.leaf,l),i.leaf},r=function(e,n){var r=e,l=r.val,i=function(e){if(e&&e.left){for(var t=e,a=e.left;a.right;)t=a,a=a.right;return{parent:t,leaf:a}}}(e);return i.parent!==r?(i.leaf.left?i.parent.right=i.leaf.left:i.parent.right=null,i.leaf.right=r.right,i.leaf.left=r.left):i.leaf.right=r.right,r.right=null,r.left=null,r=null,console.log("Node.leafAfter",i.leaf),n?(console.log("arRight prev bfr",String(n.right.val),String(n.left.val)),n.val>i.leaf.val?n.left=i.leaf:n.right=i.leaf,console.log("arRight prev aftr",String(n.right.val),String(n.left.val))):t.tree.root=i.leaf,a(i.leaf,l),i.leaf};function l(e,t){return e&&e.left&&(t++,function e(a){a.left&&(t++,e(a.left)),a.right&&(t++,e(a.right))}(e.left)),t}function i(e,t){return e&&e.right&&(t++,function e(a){a.left&&(t++,e(a.left)),a.right&&(t++,e(a.right))}(e.right)),t}a(this.tree.root,e),console.log("TREE preBal: ",this),function e(a,c,s){var o,h;a.val,h=0,i(a,o=0)>l(a,h)+1?(console.log("LEFTCOUNT: ",l(a,h)),console.log("RIGHTCOUNT: ",i(a,o)),console.log("RC ROOT: ",a),s?a=n(a,s):(t.tree.root=n(a,s),a=t.tree.root),t.tree.rightCount--):l(a,h)>i(a,o)+1&&(console.log("LEFTCOUNT: ",l(a,h)),console.log("RIGHTCOUNT: ",i(a,o)),console.log("LC ROOT: ",a),s?a=r(a,s):(t.tree.root=r(a,s),a=t.tree.root),t.tree.leftCount--),a.left&&e(a.left,c,a),a.right&&e(a.right,c,a)}(this.tree.root,e,null),console.log("TREE: aftrBal ",this)};var C=new w;C.insert(20),C.insert(10),C.insert(30);var k=function(){var e=Object(r.useState)("insert"),t=Object(o.a)(e,2),a=t[0],l=t[1],i=Object(r.useState)(C.tree),s=Object(o.a)(i,2),h=s[0],f=s[1],b=Object(r.useState)(" "),O=Object(o.a)(b,2),p=O[0],x=O[1];if(Object(r.useEffect)((function(){console.log("insformData",p)})),Object(r.useEffect)((function(){console.log("insformData",p)}),[h,p,a]),"insert"===a)return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"row no-gutters justify-content-center p-3",children:Object(n.jsx)("img",{src:"https://arbordayblog.org/wp-content/uploads/2018/06/oak-tree-sunset-iStock-477164218.jpg",width:"300",height:"200"})}),Object(n.jsxs)("div",{className:"row no-gutters pt-3 px-5",children:[Object(n.jsx)("p",{children:"The binary balanced tree consists of a hierarchy of nodes that store data. Every tree has a root node at the top of the structure. In this example, the tree is operating on the condition that every parent node has 2 or less children and the parent's value is greater than its left child but less than its right child, hence the name, balanced binary tree. The tree stays balanced by keeping track of how many nodes are present on each side of the tree its sub-tree. A sub-tree may start at any node in the tree other than the root, and includes every descendent below it. The purpose of this balancing act is to keep as many nodes in the tree in the binary structure of having a parent and two children as possible. This allows us to recursively iterate through the tree in O(log n) time, which is faster than O(n) linnear time, which would occur if the nodes were ordered in a unary structure (i.e arrays)."}),Object(n.jsxs)("p",{children:["Notice for each level of the tree, the number of nodes increases from the level above it by a factor of two. Total Nodes(N) = 2",Object(n.jsx)("sup",{children:"0"})," + 2",Object(n.jsx)("sup",{children:"1"})," + 2",Object(n.jsx)("sup",{children:"2"})," + 2",Object(n.jsx)("sup",{children:"3"}),"... + 2",Object(n.jsx)("sup",{children:"K"}),". This simplifies to Total Nodes(N) = 2",Object(n.jsx)("sup",{children:"K"})," + 1, where K = 0  at the root node and increases by 1 every level down the tree."]})]}),Object(n.jsx)("div",{className:"row no-gutters px-5",children:Object(n.jsx)(u.a,{color:"info",className:"btn",onClick:function(e){e.preventDefault(),l("insert")},children:" Insert"})}),Object(n.jsx)("div",{className:"row no-gutters px-5",children:Object(n.jsxs)(j.a,{className:"form",children:[Object(n.jsx)(g.a,{children:"Value to Insert: "}),Object(n.jsx)(d.a,{className:"input",onChange:function(e){e.preventDefault(),parseInt(e.target.value)&&x(parseInt(e.target.value))}}),Object(n.jsx)(u.a,{className:"btn",onClick:function(e){e.preventDefault(),p&&(C.insert(p),console.log("direct src: ",C),f(Object(c.a)({},C.tree)))},children:"Enter"})]})}),Object(n.jsx)("div",{className:"row no-gutters",children:Object(n.jsx)(v,{data:h})})]})},T=function(e){var t,a,l,i,s=Object(r.useRef)(null),f=h(),u=Object(o.a)(f,2),j=u[0],g=u[1],d=function(n){j>=768?(t=j/50,a=g/50,l=j/30,i=j/30):(t=j/50,a=g/50,l=j/12,i=j/12),n.fillStyle="#000000";for(var r=e.data.length-1;r>=0;r--){var c=e.data.length-1-r;n.beginPath(),n.rect(t,a+c*i,l,i),n.stroke(),n.font=j>=768?"3vh Arial":"2vh Arial",n.textAlign="center",n.textBaseline="middle",n.fillText(e.data[r],t+.5*l,a+.5*i+c*i),n.font="2vh Arial",n.fillText(r,.5*t,a+.5*i+c*l)}};return Object(r.useEffect)((function(){var e=s.current,t=e.getContext("2d");e.width=.3*window.innerWidth,e.height=window.innerHeight,d(t)}),[d]),Object(n.jsx)("canvas",Object(c.a)({className:"canvas stkCanvas",ref:s},e))},S=function(){for(var e=[],t=0;t<10;t++)e.push(Math.floor(20*Math.random()));var a=Object(r.useState)("push"),l=Object(o.a)(a,2),i=l[0],c=l[1],h=Object(r.useState)(e),f=Object(o.a)(h,2),b=f[0],v=f[1],O=Object(r.useState)(" "),p=Object(o.a)(O,2),x=p[0],m=p[1],N=Object(r.useState)({index:null,value:null}),w=Object(o.a)(N,2),C=w[0];w[1];if(Object(r.useEffect)((function(){console.log("arr: ",b),console.log("insformData",C)}),[b,x,,C,i]),"push"===i)return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"row no-gutters",children:[Object(n.jsxs)("div",{className:"col-3",children:[Object(n.jsx)(u.a,{color:"success",className:"btn",onClick:function(e){e.preventDefault(),c("push")},children:" Push"}),Object(n.jsx)(u.a,{color:"warning",className:"btn",onClick:function(e){e.preventDefault();var t=b;t.pop(),v(Object(s.a)(t))},children:" Pop"}),Object(n.jsxs)(j.a,{className:"form",children:[Object(n.jsx)(g.a,{children:"Value to push: "}),Object(n.jsx)(d.a,{className:"input",onChange:function(e){e.preventDefault(),e.target.value?m(e.target.value):m(" ")},value:x}),Object(n.jsx)(u.a,{className:"btn",onClick:function(e){e.preventDefault(),v([].concat(Object(s.a)(b),[x]))},children:"Enter"})]})]}),Object(n.jsx)("div",{className:"col-1",children:Object(n.jsx)(T,{data:b})}),Object(n.jsxs)("div",{className:"col-8",children:[Object(n.jsx)("img",{className:"pt-3 pr-3 dish",src:"https://images.crateandbarrel.com/is/image/Crate/LoganStackingDinnerPlateWhiteS8SHF15",height:"200",width:"200"}),Object(n.jsx)("p",{className:"pt-3",children:"The Stack operates on the Last In First Out (LIFO) principle. This is analagous to a stack of dishes where the last plate put on the top of the stack is the first plate to be used later. They are useful for converting infix expressions to postfix, backtracking algorithms, and many other functions."}),Object(n.jsx)("p",{className:"",children:"The push and pop methods are typically O(1) in Javascript. Worst case occurs when size boundaries are encountered and the array needs to be copied to different sized array to accomodate for change which is O(n) time. In C, both functions are O(1) time if implementing the stack using an array. If using a linked list, the list should be flipped so the start is the top of the stack to make it O(1) time rather than traversing to the end of the list which is O(n) time.  "})]})]})})},y=a(9),I=(a(39),a(59)),E=a(60),D=a(61),R=a(62),A=a(66),P=a(63),L=a(64),M=a(65),B=(a(40),function(e){var t=Object(r.useState)(!0),a=Object(o.a)(t,2),l=a[0],i=a[1];return Object(n.jsx)("div",{children:Object(n.jsxs)(I.a,{id:"navBar",light:!0,children:[Object(n.jsx)(E.a,{href:"/data-struct/#/tree",className:"mr-auto",id:"brand",children:"DS VISUALIZATION TOOL"}),Object(n.jsx)(D.a,{id:"tools",children:"\ud83d\udee0\ufe0f"}),Object(n.jsx)(R.a,{id:"navToggler",onClick:function(){return i(!l)},className:"mr-2"}),Object(n.jsx)(A.a,{isOpen:!l,navbar:!0,children:Object(n.jsxs)(P.a,{navbar:!0,children:[Object(n.jsx)(L.a,{children:Object(n.jsx)(M.a,{className:"navLink",href:"/data-struct/#/array",children:"Array"})}),Object(n.jsx)(L.a,{children:Object(n.jsx)(M.a,{className:"navLink",href:"/data-struct/#/stack",children:"Stack"})}),Object(n.jsx)(L.a,{children:Object(n.jsx)(M.a,{className:"navLink",href:"/data-struct/#/tree",children:"Balanced Binary Tree"})})]})})]})})});var H=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(B,{}),Object(n.jsxs)(y.c,{children:[Object(n.jsx)(y.a,{exact:!0,path:"/",component:k}),Object(n.jsx)(y.a,{exact:!0,path:"/array",component:b}),Object(n.jsx)(y.a,{exact:!0,path:"/tree",component:k}),Object(n.jsx)(y.a,{exact:!0,path:"/stack",component:S})]})]})},U=a(23);i.a.render(Object(n.jsx)(U.a,{basename:"/",children:Object(n.jsx)(H,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.1842ff81.chunk.js.map