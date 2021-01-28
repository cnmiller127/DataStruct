(this["webpackJsonpdata-struct"]=this["webpackJsonpdata-struct"]||[]).push([[0],{15:function(e,t,n){},36:function(e,t,n){},40:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(2),r=n(18),l=n.n(r),s=(n(36),n(5)),c=n(12),o=n(6);n(15);var h=function(){var e=Object(i.useState)([0,0]),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(i.useLayoutEffect)((function(){function e(){a([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n},d=function(e){var t,n,r,l,c=Object(i.useRef)(null),d=h(),f=Object(o.a)(d,2),u=f[0],j=f[1],b=function(a){u>=768?(t=u/300,n=j/50,r=u/40,l=u/40):(t=0,n=j/50,r=u/15,l=u/15),a.fillStyle="#000000";for(var i=0;i<e.data.length;i++)a.beginPath(),a.rect(t+i*r,n,r,l),a.stroke(),a.font=u>=768?"2.5vh Arial":"2vh Arial",a.textAlign="center",a.textBaseline="middle",a.fillText(e.data[i],t+.5*r+i*r,n+.5*l),a.font=u>=768?"2vh Arial":"1.5vh Arial",a.fillText(i,t+.5*r+i*r,n+1.3*l)};return Object(i.useEffect)((function(){var e=c.current,t=e.getContext("2d");u>996&j<996||u>=768&j>=768?(e.height=window.innerHeight,e.width=2*window.innerWidth):u<996&j>996?(e.height=.08*window.innerHeight,e.width=2*window.innerWidth):u<540&&(e.height=.25*window.innerHeight,e.width=3*window.innerWidth),b(t)}),[b,u,j]),Object(a.jsx)("canvas",Object(s.a)({className:"canvas",ref:c},e))},f=n(55),u=n(56),j=n(57),b=n(58),p=function(){for(var e=[],t=0;t<10;t++)e.push(Math.floor(20*Math.random()));var n=Object(i.useState)("push"),r=Object(o.a)(n,2),l=r[0],h=r[1],p=Object(i.useState)(e),g=Object(o.a)(p,2),v=g[0],O=g[1],m=Object(i.useState)(" "),x=Object(o.a)(m,2),y=x[0],w=x[1],N=Object(i.useState)({index:null,value:null}),k=Object(o.a)(N,2),T=k[0],C=k[1],E=function(e){e.preventDefault(),e.target.value?w(e.target.value):w(" ")};return Object(i.useEffect)((function(){console.log("arr: ",v),console.log("insformData",T)}),[v,y,,T,l]),Object(a.jsxs)("div",{className:"pt-2 p-1 px-md-5 py-md-3",children:[Object(a.jsx)("div",{className:"row no-gutters justify-content-center p-3",children:Object(a.jsx)("h1",{className:"hdr",children:"ARRAYS"})}),Object(a.jsx)(d,{data:v}),Object(a.jsx)(f.a,{color:"success",className:"btn",onClick:function(e){e.preventDefault(),h("push")},children:" Push"}),Object(a.jsx)(f.a,{color:"warning",className:"btn",onClick:function(e){e.preventDefault(),h("pop")},children:" Pop"}),Object(a.jsx)(f.a,{color:"info",className:"btn",onClick:function(e){e.preventDefault(),h("insert")},children:" Insert"}),Object(a.jsx)(f.a,{color:"danger",className:"btn",onClick:function(e){e.preventDefault(),h("delete")},children:" Delete"}),Object(a.jsx)(f.a,{color:"secondary",className:"btn",onClick:function(e){e.preventDefault(),h("shift")},children:" Shift"}),Object(a.jsx)(f.a,{color:"primary",className:"btn",onClick:function(e){e.preventDefault(),h("unshift")},children:" Unshift"}),"push"===l&&Object(a.jsxs)(u.a,{className:"form",children:[Object(a.jsx)(j.a,{children:"Value to push: "}),Object(a.jsx)(b.a,{className:"input",onChange:E,value:y,type:"number"}),Object(a.jsx)(f.a,{className:"btn enterBtn",color:"dark",onClick:function(e){e.preventDefault(),O([].concat(Object(c.a)(v),[y])),w("")},children:"ENTER"})]}),"pop"===l&&Object(a.jsxs)("div",{children:[Object(a.jsx)(j.a,{className:"btnLabel m-1",children:"Press Enter to pop: "}),Object(a.jsx)(f.a,{className:"btn enterBtn m-1",color:"dark",onClick:function(e){e.preventDefault();var t=v;t.pop(),O(Object(c.a)(t)),w("")},children:"ENTER"})]}),"insert"===l&&Object(a.jsx)("div",{children:Object(a.jsxs)(u.a,{className:"form",children:[Object(a.jsx)(j.a,{className:"btnLabel",children:"Index to Insert: "}),Object(a.jsx)(b.a,{onChange:function(e){e.preventDefault(),e.target.value?C(Object(s.a)(Object(s.a)({},T),{},{index:e.target.value})):C(Object(s.a)(Object(s.a)({},T),{},{index:" "}))},value:y.index,type:"number"}),Object(a.jsx)(j.a,{children:"Value to Insert: "}),Object(a.jsx)(b.a,{className:"input",onChange:function(e){e.preventDefault(),e.target.value?C(Object(s.a)(Object(s.a)({},T),{},{value:e.target.value})):C(Object(s.a)(Object(s.a)({},T),{},{value:" "}))},value:y.value,type:"number"}),Object(a.jsx)(f.a,{className:"btn enterBtn",color:"dark",onClick:function(e){if(e.preventDefault(),T.index<v.length&&T.value){console.log("INSHANDLER");var t=v;t.splice(T.index,0,T.value),console.log(t),O(Object(c.a)(t)),w("")}},children:"ENTER"})]})}),"delete"===l&&Object(a.jsx)("div",{children:Object(a.jsxs)(u.a,{className:"form",children:[Object(a.jsx)(j.a,{className:"btnLabel",children:"Index to Delete: "}),Object(a.jsx)(b.a,{className:"input",onChange:E,value:y,type:"number"}),Object(a.jsx)(f.a,{className:"btn enterBtn",color:"dark",onClick:function(e){if(e.preventDefault(),y>=0&&y<v.length){var t=v;t.splice(y,1),O(Object(c.a)(t)),w("")}},children:"ENTER"})]})}),"shift"===l&&Object(a.jsxs)("div",{className:"justify-content-center",children:[Object(a.jsx)(j.a,{className:"btnLabel m-1 ",children:"Press Enter to shift: "}),Object(a.jsx)(f.a,{className:"btn enterBtn m-1",color:"dark",onClick:function(e){if(e.preventDefault(),y>=0&&y<v.length){var t=v;t.shift(),O(Object(c.a)(t)),w("")}},children:"ENTER"})]}),"unshift"===l&&Object(a.jsx)("div",{children:Object(a.jsxs)(u.a,{className:"form",children:[Object(a.jsx)(j.a,{className:"btnLabel",children:"Value to prepend: "}),Object(a.jsx)(b.a,{className:"input",onChange:E,value:y,type:"number"}),Object(a.jsx)(f.a,{className:"btn enterBtn",color:"dark",onClick:function(e){e.preventDefault();var t=v;t.unshift(y),O(Object(c.a)(t)),w("")},children:"ENTER"})]})}),Object(a.jsxs)("div",{className:"row no-gutters",children:[Object(a.jsx)("p",{children:"Arrays are objects in Javascript. Often when they are outside of local functions they are stored in the heap, but this can vary depending on the JavaScript engine implementation. Arrays are a linear arrangement of indices that contain data. They are capable of storing primitive data types, other objects (including arrays), and combinations of both in JavaScript. In a lower level language like C, they can only store one primitive data type and are a fixed size. If arrays are statically allocated, they are stored in the stack memory and the size must be known at compile time. If the size needs to be specified during run-time, the array must be manually dynamically allocated in the heap using the malloc() function, and must be released once it is obsolete by the program using the free() function."}),Object(a.jsxs)("ol",{children:[" ",Object(a.jsx)("strong",{children:"List of Array Functions "}),Object(a.jsx)("li",{children:"Push- inserts new entry after last index of array"}),Object(a.jsx)("li",{children:"Pop - removes and returns last entry in the array"}),Object(a.jsx)("li",{children:"Insert -  inserts new entry at a specified index in the array"}),Object(a.jsx)("li",{children:"Delete - deletes an entry at a specified index in the array"}),Object(a.jsx)("li",{children:"Shift - deletes and returns the first entry (0th index in JS & C) of the array"}),Object(a.jsx)("li",{children:"Unshift - inserts new entry at the beginning of the array "})]}),Object(a.jsx)("p",{children:"Functions that deal with the end of the array like push and pop are executed in consant time O(1). However, functions that deal with the beginning of the array like shift and unshift take linear time O(n) because all of the data needs to be shifted within the array. Insert and delete (splice in JS) can take O(1) to O(n) time depending on their location in the array, the latter time  being closer to the beginning of the array due to shifting."})]})]})},g=function(e){var t,n,r,l,c,d=Object(i.useRef)(null),f=h(),u=Object(o.a)(f,2),j=u[0],b=u[1],p=["red","deepskyblue","lime","mediumpurple","yellow","salmon","white","white"],g=function(a){j>=768&&b>=998?(t=j/2,n=b/15,r=j/5,l=j/10,c=j/50):j>=768?(t=j/2,n=b/20,r=j/10,l=j/20,c=j/75):(t=.6*j,n=b/20,r=j/4,l=j/6,c=j/28);var i=l,s=r,o=c;a.fillStyle="#000000";var h=e.data.root,d=1;!function e(t,n,r){var l,c,h;if(l=s,c=i,h=o,d>=5&&(h/=2),a.beginPath(),a.arc(n,r,h,0*Math.PI,2*Math.PI),a.fillStyle=p[d-1],a.fill(),a.stroke(),a.font=d<5?j>=768&&b>=998?"1.5vh Impact":j>=768?"2.5vh Impact":"1.5vh Impact":j>=768&&b>=998?"1.1vh Impact":j>=768?"2vh Impact":"1.2vh Impact",a.textAlign="center",a.textBaseline="middle",a.fillStyle="black",a.fillText(t.val,n,r),t.left){var f=-c/(l=s/d),u=-f*n+r,g=Math.pow(f,2)+1,v=-2*(n+f*r-f*u),O=n*n+r*r+u*u-h*h-2*u*r,m=(-v-Math.sqrt(v*v-4*g*O))/(2*g),x=(-v+Math.sqrt(Math.pow(v,2)-4*g*O))/(2*g);if(d>=4){O=n*n+r*r+u*u-o*o-2*u*r;var y=n*n+r*r+u*u-h*h/4-2*u*r;x=(-v+Math.sqrt(Math.pow(v,2)-4*g*y))/(2*g)}var w=m,N=f*m+u,k=x-l,T=f*(x-l)+u;a.beginPath(),a.moveTo(w,N),a.lineTo(k,T),a.stroke(),d++,e(t.left,n-l,r+c)}if(t.right){var C=c/(l=s/d),E=-C*n+r,S=Math.pow(C,2)+1,I=-2*(n+C*r-C*E),D=n*n+r*r+E*E-h*h-2*E*r,R=(-I-Math.sqrt(I*I-4*S*D))/(2*S),L=(-I+Math.sqrt(Math.pow(I,2)-4*S*D))/(2*S);if(d>=4){D=n*n+r*r+E*E-o*o-2*E*r;var A=n*n+r*r+E*E-h*h/4-2*E*r;R=(-I+Math.sqrt(Math.pow(I,2)-4*S*A))/(2*S)}var B=L,q=C*L+E,M=R+l,P=C*(R+l)+E;a.beginPath(),a.moveTo(B,q),a.lineTo(M,P),a.stroke(),d++,e(t.right,n+l,r+c)}d--}(h,t,n)};return Object(i.useEffect)((function(){var e=d.current,t=e.getContext("2d");j>996&b<996?(e.height=window.innerHeight,e.width=window.innerWidth):(j<996&b>996||j<540)&&(e.height=window.innerHeight,e.width=2*window.innerWidth),g(t)}),[g,j,b]),Object(a.jsx)("canvas",Object(s.a)({className:"canvas",ref:d},e))};function v(e){this.val=e||null,this.freq=e?this.freq=1:0,this.left=null,this.right=null}function O(){this.tree={},this.tree.root=new v,this.tree.count=0,this.tree.leftCount=0,this.tree.rightCount=0}function m(e,t){return e&&e.left&&(t++,function e(n){n.left&&(t++,e(n.left)),n.right&&(t++,e(n.right))}(e.left)),t}function x(e,t){return e&&e.right&&(t++,function e(n){n.left&&(t++,e(n.left)),n.right&&(t++,e(n.right))}(e.right)),t}O.prototype.insert=function(e){var t=this;this.tree.count++;var n=function e(n,a,i){console.log("INSERT: ",a),n.val?a>n.val?(t.tree.rightCount++,n.right&&n.left?e(n.right,a,n):function(e,t,n,a){var i=new v(t);if(e.right)if(t>e.right.val){var r=e.right;r.right=i,r.left=e,e.right=null,n?n.val>e.val?n.left=r:n.right=r:a.root=r}else i.left=e,i.right=e.right,e.right=null,n?n.val>e.val?n.left=i:n.right=i:a.root=i;else e.right=i}(n,a,i,t.tree)):a<n.val&&(t.tree.leftCount++,n.right&&n.left?e(n.left,a,n):function(e,t,n,a){var i=new v(t);if(e.left)if(t<e.left.val){var r=e.left;r.left=i,r.right=e,e.left=null,n?n.val>e.val?n.left=r:n.right=r:a.root=r}else i.right=e,i.left=e.left,e.left=null,n?n.val>e.val?n.left=i:n.right=i:a.root=i;else e.left=i}(n,a,i,t.tree)):n.val=a,console.log("after rIns: ",t.tree)};function a(e,t){var a=e,i=a.val,r=function(e){if(e&&e.right){for(var t=e.right,n=e;t.left;)n=t,t=t.left;return{parent:n,leaf:t}}}(e);return r.leaf!==e&&(r.leaf.right?r.parent.left=r.leaf.right:r.parent.left=null,r.leaf.left=a.left,r.leaf.right=a.right,a.right=null,a.left=null),console.log("Node.leafAfter",r.leaf),t&&(console.log("arRight prev bfr",String(t.right.val),String(t.left.val)),t.val>r.leaf.val?t.left=r.leaf:t.right=r.leaf,console.log("arRight prev aftr",String(t.right.val),String(t.left.val))),n(r.leaf,i,t),r.leaf}function i(e,t){var a=e,i=a.val,r=function(e){if(e&&e.left){for(var t=e,n=e.left;n.right;)t=n,n=n.right;return{parent:t,leaf:n}}}(e);return r.leaf!==e&&(r.leaf.left?r.parent.right=r.leaf.left:r.parent.right=null,r.leaf.right=a.right,r.leaf.left=a.left,a.right=null,a.left=null,a=null),console.log("Node.leafAfter",r.leaf),t&&(console.log("arRight prev bfr",String(t.right.val),String(t.left.val)),t.val>r.leaf.val?t.left=r.leaf:t.right=r.leaf,console.log("arRight prev aftr",String(t.right.val),String(t.left.val))),n(r.leaf,i,t),r.leaf}n(this.tree.root,e,null),console.log("TREE preBal: ",this),function e(n,r,l){var s,c;n.val,c=0,x(n,s=0)>m(n,c)+1&&(console.log("LEFTCOUNT: ",m(n,c)),console.log("RIGHTCOUNT: ",x(n,s)),console.log("RC ROOT: ",n),l?a(n,l):t.tree.root=a(n,l),n=t.tree.root,t.tree.rightCount--),m(n,c)>x(n,s)+1&&(console.log("LEFTCOUNT: ",m(n,c)),console.log("RIGHTCOUNT: ",x(n,s)),console.log("LC ROOT: ",n),l?i(n,l):t.tree.root=i(n,l),n=t.tree.root,t.tree.leftCount--),n.left&&e(n.left,r,n),n.right&&e(n.right,r,n)}(this.tree.root,e,null),console.log("TREE: aftrBal ",this)};function y(e){this.val=e||null,this.freq=e?this.freq=1:0,this.left=null,this.right=null}function w(){this.tree={},this.tree.root=new y,this.tree.count=0,this.tree.leftCount=0,this.tree.rightCount=0}w.prototype.insert=function(e){var t=this;this.tree.count++;var n=function e(n,a,i){if(console.log("INSERT: ",a),n.val){if(a>n.val)if(t.tree.rightCount++,n.right)e(n.right,a,n);else{var r=new y(a);n.right=r}else if(a<n.val)if(t.tree.leftCount++,n.left)e(n.left,a,n);else{var l=new y(a);n.left=l}}else n.val=a;console.log("after rIns: ",t.tree)},a=function(e,a){var i=e,r=i.val,l=function(e){if(e&&e.right){for(var t=e.right,n=e;t.left;)n=t,t=t.left;return{parent:n,leaf:t}}}(e);return l.parent!==e?(l.leaf.right?l.parent.left=l.leaf.right:l.parent.left=null,l.leaf.left=i.left,l.leaf.right=i.right):l.leaf.left=i.left,i.right=null,i.left=null,console.log("Node.leafAfter",l.leaf),a?(console.log("arRight prev bfr",String(a.right.val),String(a.left.val)),a.val>l.leaf.val?a.left=l.leaf:a.right=l.leaf,console.log("arRight prev aftr",String(a.right.val),String(a.left.val))):t.tree.root=l.leaf,n(l.leaf,r),l.leaf},i=function(e,a){var i=e,r=i.val,l=function(e){if(e&&e.left){for(var t=e,n=e.left;n.right;)t=n,n=n.right;return{parent:t,leaf:n}}}(e);return l.parent!==i?(l.leaf.left?l.parent.right=l.leaf.left:l.parent.right=null,l.leaf.right=i.right,l.leaf.left=i.left):l.leaf.right=i.right,i.right=null,i.left=null,i=null,console.log("Node.leafAfter",l.leaf),a?(console.log("arRight prev bfr",String(a.right.val),String(a.left.val)),a.val>l.leaf.val?a.left=l.leaf:a.right=l.leaf,console.log("arRight prev aftr",String(a.right.val),String(a.left.val))):t.tree.root=l.leaf,n(l.leaf,r),l.leaf};function r(e,t){return e&&e.left&&(t++,function e(n){n.left&&(t++,e(n.left)),n.right&&(t++,e(n.right))}(e.left)),t}function l(e,t){return e&&e.right&&(t++,function e(n){n.left&&(t++,e(n.left)),n.right&&(t++,e(n.right))}(e.right)),t}n(this.tree.root,e),console.log("TREE preBal: ",this),function e(n,s,c){var o,h;n.val,h=0,l(n,o=0)>r(n,h)+1?(console.log("LEFTCOUNT: ",r(n,h)),console.log("RIGHTCOUNT: ",l(n,o)),console.log("RC ROOT: ",n),c?n=a(n,c):(t.tree.root=a(n,c),n=t.tree.root),t.tree.rightCount--):r(n,h)>l(n,o)+1&&(console.log("LEFTCOUNT: ",r(n,h)),console.log("RIGHTCOUNT: ",l(n,o)),console.log("LC ROOT: ",n),c?n=i(n,c):(t.tree.root=i(n,c),n=t.tree.root),t.tree.leftCount--),n.left&&e(n.left,s,n),n.right&&e(n.right,s,n)}(this.tree.root,e,null),console.log("TREE: aftrBal ",this)};var N=new w;N.insert(5),N.insert(1),N.insert(8);var k=function(){var e=Object(i.useState)("insert"),t=Object(o.a)(e,2),n=t[0],r=t[1],l=Object(i.useState)(N.tree),c=Object(o.a)(l,2),h=c[0],d=c[1],p=Object(i.useState)(" "),v=Object(o.a)(p,2),O=v[0],m=v[1],x=function(e){e.preventDefault(),O?(m(""),N.insert(Number(O)),d(Object(s.a)({},N.tree))):m("Invalid Entry")};return Object(i.useEffect)((function(){console.log("insformData",O)})),Object(i.useEffect)((function(){console.log("insformData",O)}),[h,O,n]),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"row no-gutters justify-content-center p-md-3",children:Object(a.jsx)("h1",{className:"hdr",children:"TREES"})}),Object(a.jsx)("div",{className:"row no-gutters justify-content-center p-3",children:Object(a.jsx)("img",{className:" rounded img-fluid img-hdr",src:"https://arbordayblog.org/wp-content/uploads/2018/06/oak-tree-sunset-iStock-477164218.jpg",width:"300",height:"200"})}),Object(a.jsxs)("div",{className:"row no-gutters p-2 pt-md-3 px-md-5",children:[Object(a.jsxs)("p",{children:["The binary balanced tree consists of a hierarchy of nodes that store data. Every tree has a root node at the top of the structure. ",Object(a.jsx)("strong",{children:"In the visualizer below, "}),"the tree is operating on the condition that every parent node has 2 or less children and the parent's value is greater than its left child but less than its right child, hence the name: balanced binary tree. The tree stays balanced by keeping track of how many nodes are present on each side of the tree and its sub-trees. A sub-tree may start at any node in the tree other than the root, and includes every descendent below it. The purpose of this balancing act is to keep as many nodes in the tree in the binary structure of having a parent and two children as possible. This allows us to recursively iterate through the tree in O(log n) time, which is faster than O(n) linear time, which would occur if the nodes were ordered in a unary structure (i.e arrays)."]}),Object(a.jsxs)("p",{children:["Notice for each level (K) of the tree, the number of nodes increases from the level above it by a factor of two. Total Nodes(N) = 2",Object(a.jsx)("sup",{children:"0"})," + 2",Object(a.jsx)("sup",{children:"1"})," + 2",Object(a.jsx)("sup",{children:"2"})," + 2",Object(a.jsx)("sup",{children:"3"}),"... + 2",Object(a.jsx)("sup",{children:"K"}),". This simplifies to Total Nodes(N) = 2",Object(a.jsx)("sup",{children:"K"})," + 1, where K = 0  at the root node and increases by 1 every level down the tree."]}),Object(a.jsx)("p",{children:"This tree was created in Javascript by creating an object (node) that has a value property, and two other properties that point to its left and right children. Objects are created in the heap memory in Javascript which means they are called by reference. If using C/C++, memory needs to be manually dynamicaly allocated in the heap. Nodes would be created in the heap that point to their children. When accessing information from the tree, a pointer to the address of the root node must be used."})]}),"insert"===n&&Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"row no-gutters px-5 justify-content-center",children:Object(a.jsx)(f.a,{color:"info",className:"btn",onClick:function(e){e.preventDefault(),r("insert")},children:" Insert"})}),Object(a.jsx)("div",{className:"row no-gutters px-5 justify-content-center",children:Object(a.jsxs)(u.a,{className:"form",onSubmit:x,children:[Object(a.jsx)(j.a,{children:"Value to Insert: "}),Object(a.jsx)(b.a,{className:"input",onChange:function(e){e.preventDefault(),e.target.value?m(e.target.value):m("")},value:O,type:"number"}),Object(a.jsx)(f.a,{className:"btn",onClick:x,children:"Enter"})]})}),Object(a.jsx)("div",{children:Object(a.jsx)(g,{data:h})})]})]})},T=function(e){var t,n,r,l,c=Object(i.useRef)(null),d=h(),f=Object(o.a)(d,2),u=f[0],j=f[1],b=function(a){u>=768?(t=u/50,n=j/50,r=u/8,l=u/50):(t=u/20,n=j/50,r=u/8,l=u/16),a.fillStyle="#000000";for(var i=e.data.length-1;i>=0;i--){var s=e.data.length-1-i;a.beginPath(),a.rect(t,n+s*l,r,l),a.stroke(),a.font=u>=768?"2.5vh Arial":"2vh Arial",a.textAlign="center",a.textBaseline="middle",a.fillText(e.data[i],t+.5*r,n+.5*l+s*l),a.font=u>=768?"2vh Arial":"1.5vh Arial",a.fillText(i,.5*t,n+.5*l+s*l)}};return Object(i.useEffect)((function(){var e=c.current,t=e.getContext("2d");e.width=.3*window.innerWidth,e.height=window.innerHeight,b(t)}),[b,u,j]),Object(a.jsx)("canvas",Object(s.a)({className:"canvas stkCanvas",ref:c},e))},C=function(){for(var e=[],t=0;t<10;t++)e.push(Math.floor(20*Math.random()));var n=Object(i.useState)("push"),r=Object(o.a)(n,2),l=r[0],s=r[1],h=Object(i.useState)(e),d=Object(o.a)(h,2),p=d[0],g=d[1],v=Object(i.useState)(" "),O=Object(o.a)(v,2),m=O[0],x=O[1],y=Object(i.useState)({index:null,value:null}),w=Object(o.a)(y,2),N=w[0];w[1];return Object(i.useEffect)((function(){console.log("arr: ",p),console.log("insformData",N)}),[p,m,,N,l]),Object(a.jsxs)("div",{className:"px-2 py-3",children:[Object(a.jsx)("div",{className:"row no-gutters justify-content-center p-3",children:Object(a.jsx)("h1",{className:"hdr",children:"STACKS"})}),Object(a.jsx)("div",{className:"row no-gutters justify-content-center",children:Object(a.jsx)("img",{className:"rounded img-hdr img-fluid",src:"https://images.crateandbarrel.com/is/image/Crate/LoganStackingDinnerPlateWhiteS8SHF15"})}),Object(a.jsxs)("div",{className:"row no-gutters justify-content-center",children:[Object(a.jsx)("p",{className:"pt-2 px-1 pt-md-3 px-md-5",children:"The Stack operates on the Last In First Out (LIFO) principle. This is analagous to a stack of dishes where the last plate put on the top of the stack is the first plate to be used later. They are useful for converting infix expressions to postfix, backtracking algorithms, and many other functions."}),Object(a.jsx)("p",{className:"p-1 px-md-5",children:"The push and pop methods are typically O(1) in Javascript. Worst case occurs when size boundaries are encountered and the array needs to be copied to different sized array to accomodate for change which is O(n) time. In C, both functions are O(1) time if implementing the stack using a fixed size array. Worst case can be O(n) if dynamically allocating memory and run out of space. If using a linked list, the list should be flipped so the start is the top of the stack to make push and pop O(1) time rather than traversing to the end of the list which is O(n) time.  "})]}),Object(a.jsxs)("div",{className:"row no-gutters",children:[Object(a.jsx)("div",{className:"col-md-4"}),Object(a.jsxs)("div",{className:" col-6 col-md-3 justify-content-md-end",children:[Object(a.jsx)(f.a,{color:"success",className:"btn float-md-right",onClick:function(e){e.preventDefault(),s("push")},children:" Push"}),Object(a.jsx)(f.a,{color:"warning",className:"btn float-md-right",onClick:function(e){e.preventDefault(),s("pop")},children:" Pop"}),"push"===l&&Object(a.jsxs)(u.a,{className:"form float-md-right",children:[Object(a.jsx)(j.a,{children:"Value to push: "}),Object(a.jsx)(b.a,{className:"input",onChange:function(e){e.preventDefault(),e.target.value?x(e.target.value):x(" ")},value:m,type:"number"}),Object(a.jsx)(f.a,{className:"btn enterBtn stkComp",color:"dark",onClick:function(e){e.preventDefault(),g([].concat(Object(c.a)(p),[m])),x("")},children:"ENTER"})]}),"pop"===l&&Object(a.jsxs)("div",{className:"float-md-right d-block",children:[Object(a.jsx)(j.a,{className:"btnLabel m-1 d-block",children:"Press Enter to pop: "}),Object(a.jsx)(f.a,{className:"btn enterBtn m-1 d-block float-right",color:"dark",onClick:function(e){e.preventDefault();var t=p;t.pop(),g(Object(c.a)(t)),x("")},children:"ENTER"})]})]}),Object(a.jsx)("div",{className:"col-6 col-md-2 justify-content-md-start",children:Object(a.jsx)(T,{data:p})}),Object(a.jsx)("div",{className:"col-md-3"})]})]})},E=function(e){var t,n,r,l,c=Object(i.useRef)(null),d=h(),f=Object(o.a)(d,2),u=f[0],j=f[1],b=function(a){u>=540&&j>998?(t=u/75,n=j/50,r=u/20,l=u/10):u>=768?(t=u/20,n=j/50,r=u/25,l=u/15):(t=0,n=j/50,r=u/12.5,l=u/15),a.fillStyle="#000000";for(var i=e.data.length-1;i>=0;i--){var s=e.data.length-1-i;a.beginPath(),a.rect(t+s*r,n,r,l),a.stroke(),a.font=u>=768?"2.5vh Arial":"2vh Arial",a.textAlign="center",a.textBaseline="middle",a.fillText(e.data[i],t+.5*r+s*r,n+.5*l),a.font=u>=768?"1.2vh Arial":"1vh Arial",i===e.data.length-1?a.fillText("FIRST",t+.5*r+s*r,n+1.3*l):0===i&&a.fillText("LAST",t+.5*r+s*r,n+1.3*l)}};return Object(i.useEffect)((function(){var e=c.current,t=e.getContext("2d");u>996&j<996||u>=768&j>=768?(e.height=window.innerHeight,e.width=2*window.innerWidth):u<996&j>996?(e.height=.08*window.innerHeight,e.width=2*window.innerWidth):u<540&&(e.height=.25*window.innerHeight,e.width=3*window.innerWidth),b(t)}),[b,u,j]),Object(a.jsx)("canvas",Object(s.a)({className:"canvas",ref:c},e))},S=function(){for(var e=[],t=0;t<10;t++)e.push(Math.floor(20*Math.random()));var n=Object(i.useState)("enQ"),r=Object(o.a)(n,2),l=r[0],s=r[1],h=Object(i.useState)(e),d=Object(o.a)(h,2),p=d[0],g=d[1],v=Object(i.useState)(" "),O=Object(o.a)(v,2),m=O[0],x=O[1],y=Object(i.useState)({index:null,value:null}),w=Object(o.a)(y,2),N=w[0];w[1];return Object(i.useEffect)((function(){console.log("arr: ",p),console.log("insformData",N)}),[p,m,,N,l]),Object(a.jsxs)("div",{className:"px-2 py-3",children:[Object(a.jsx)("div",{className:"row no-gutters justify-content-center p-3",children:Object(a.jsx)("h1",{className:"hdr",children:"Queue"})}),Object(a.jsx)("div",{className:"row no-gutters justify-content-center",children:Object(a.jsx)("img",{className:"rounded img-hdr img-fluid",src:"https://img.freepik.com/free-vector/people-line-waiting-pay_23-2148206445.jpg?size=626&ext=jpg"})}),Object(a.jsxs)("div",{className:"row no-gutters justify-content-center",children:[Object(a.jsx)("p",{className:"pt-2 px-1 pt-md-3 px-md-5",children:"The Queue operates on the First In First Out (FIFO) principle. Queues may be implemented using linked lists or arrays. Queues have two functions, enqueue and dequeue. Enqueue adds data to the back while dequeue removes and returns the data at the front of the structure. There are also other ways to implement the queue such as the circular queue."}),Object(a.jsx)("p",{className:"p-1 px-md-5",children:"  "})]}),Object(a.jsx)(f.a,{color:"success",className:"btn",onClick:function(e){e.preventDefault(),s("enQ")},children:"Enqueue"}),Object(a.jsx)(f.a,{color:"warning",className:"btn",onClick:function(e){e.preventDefault(),s("dQ")},children:"Dequeue"}),Object(a.jsxs)("div",{className:"row no-gutters",children:["enQ"===l&&Object(a.jsxs)(u.a,{className:"form",children:[Object(a.jsx)(j.a,{children:"Value to enqueue: "}),Object(a.jsx)(b.a,{className:"input",onChange:function(e){e.preventDefault(),e.target.value?x(e.target.value):x(" ")},value:m,type:"number"}),Object(a.jsx)(f.a,{className:"btn enterBtn",color:"dark",onClick:function(e){e.preventDefault();var t=p;t.unshift(m),g(Object(c.a)(t)),x("")},children:"ENTER"})]}),"dQ"===l&&Object(a.jsxs)("div",{className:"",children:[Object(a.jsx)(j.a,{className:"btnLabel",children:"Press Enter to dequeue: "}),Object(a.jsx)(f.a,{className:"btn enterBtn",color:"dark",onClick:function(e){e.preventDefault();var t=p;t.pop(),g(Object(c.a)(t)),x("")},children:"ENTER"})]}),Object(a.jsx)("div",{className:"row no-gutters justify-content-center p-md-3",children:Object(a.jsx)(E,{data:p})})]})]})};function I(e){this.val=e,this.next=null}function D(){this.list={},this.list.front=null,this.list.rear=null,this.list.length=0}D.prototype.prepend=function(e){var t=new I(e);this.list.front?(t.next=this.list.front,this.list.front=t,console.log("p2",this.list)):(this.list.front=t,this.list.rear=t,console.log("p1",this.list)),this.list.length++},D.prototype.append=function(e){var t=new I(e);console.log("q ap",t),this.list.front?(this.list.rear.next=t,this.list.rear=t,console.log("ap2",this.list)):(this.list.front=t,this.list.rear=t,console.log("ap1",this.list)),this.list.length++},D.prototype.delF=function(e){if(this.list.front){this.list.front;this.list.front.next?(this.list.front=this.list.front.next,this.list.length--):(this.list.front=null,this.list.length--)}},D.prototype.insert=function(e,t){var n=this.list.front,a=0;if(0===e)this.prepend(t);else if(e===this.list.length)this.append(t);else for(;n.next;){if(a===e-1){var i=new I(t);i.next=n.next,n.next=i,this.list.length++;break}n=n.next,a++}},D.prototype.delete=function(e){var t=this.list.front,n=0;for(0===e&&(this.list.front=this.list.front.next,this.delF());t.next;){if(n===this.list.length-2)return t.next=null,void this.list.length--;if(n===e-1){var a=t.next;return t.next=a.next,a.next=null,void this.list.length--}t=t.next,n++}},D.prototype.update=function(e,t){var n=this.list.front,a=0;for(console.log("IN THE WORKS UPDATE");n;){if(a===e)return void(n.val=t);n=n.next,a++}};for(var R=function(e){var t,n,r,l,c,d,f=Object(i.useRef)(null),u=h(),j=Object(o.a)(u,2),b=j[0],p=j[1],g=20*Math.PI/180,v=function(a){b>=768&&p>998?(t=b/300,n=p/50,r=b/25,l=b/30,c=b/50,d=12):b>=768?(t=b/300,n=p/50,r=b/40,l=b/40,c=b/50,d=12):b<768&&b>540?(t=b/150,n=p/50,r=b/35,l=b/25,c=b/30,d=123):(t=0,n=p/50,r=b/15,l=b/15,c=b/30,d=5),a.fillStyle="#000000";var i=e.data.front;console.log(e.data);for(var s=0;i;)a.beginPath(),a.rect(t+s*r+s*c,n,r,l),a.rect(t+s*r+s*c,n+l,r,l),a.stroke(),i.next&&(a.beginPath(),a.moveTo(t+r+s*(r+c),n+1.5*l),a.lineTo(t+r+s*(r+c)+c,n+1.5*l),a.moveTo(t+r+s*(r+c)+c,n+1.5*l),a.lineTo(t+r+s*(r+c)+c-d*Math.cos(g),n+1.5*l+d*Math.sin(g)),a.moveTo(t+r+s*(r+c)+c,n+1.5*l),a.lineTo(t+r+s*(r+c)+c-d*Math.cos(g),n+1.5*l-d*Math.sin(g)),a.stroke()),a.font=b>=998?"2vh Arial":"1.5vh Arial",a.textAlign="center",a.textBaseline="middle",a.fillText(i.val,t+.5*r+s*r+s*c,n+.5*l),a.font=b>=998?"1.2vh Arial":"1vh Arial",0===s?a.fillText("Front",t+.5*r+s*r+s*c,n+1.3*l):a.fillText("*",t+.5*r+s*r+s*c,n+1.3*l),a.fillText(s,t+.5*r+s*r+s*c,n+2.3*l),i=i.next,s++};return Object(i.useEffect)((function(){var e=f.current,t=e.getContext("2d");b>996&&p<996?(e.height=.2*window.innerHeight,e.width=2*window.innerWidth):b>996&&p>996?(e.height=.1*window.innerHeight,e.width=2*window.innerWidth):b<996&&p>996?(e.height=.08*window.innerHeight,e.width=2*window.innerWidth):b<540&&(e.height=.25*window.innerHeight,e.width=3*window.innerWidth),v(t)}),[v,b,p]),Object(a.jsx)("canvas",Object(s.a)({className:"canvas",ref:f},e))},L=new D,A=0;A<10;A++)L.prepend(Math.floor(20*Math.random()));var B=function(e){var t=Object(i.useState)("prepend"),n=Object(o.a)(t,2),r=n[0],l=n[1],c=Object(i.useState)(L.list),h=Object(o.a)(c,2),d=h[0],p=h[1],g=Object(i.useState)(""),v=Object(o.a)(g,2),O=v[0],m=v[1],x=Object(i.useState)({index:"",value:""}),y=Object(o.a)(x,2),w=y[0],N=y[1],k=function(e){e.preventDefault(),e.target.value?m(e.target.value):m("")},T=function(e){e.preventDefault(),O?(L.prepend(O),p(Object(s.a)({},L.list)),m("")):m("Invalid Entry")},C=function(e){e.preventDefault(),e.target.value?N(Object(s.a)(Object(s.a)({},w),{},{index:Number(e.target.value)})):N(Object(s.a)(Object(s.a)({},w),{},{index:" "}))},E=function(e){e.preventDefault(),e.target.value?N(Object(s.a)(Object(s.a)({},w),{},{value:Number(e.target.value)})):N(Object(s.a)(Object(s.a)({},w),{},{value:" "}))},S=function(e){e.preventDefault(),w.index>=0&&w.index<=d.length?(L.insert(w.index,w.value),p(Object(s.a)({},L.list)),N({index:"",value:""})):N(Object(s.a)(Object(s.a)({},w),{},{index:"Invalid Entry",value:""}))},I=function(e){e.preventDefault(),O&&(O>=0&&O<d.length?(L.delete(O),p(Object(s.a)({},L.list)),m("")):m("INV!"))},D=function(e){e.preventDefault(),w.index>=0&&w.index<d.length?(console.log(Number(w.index)),L.update(w.index,w.value),p(Object(s.a)({},L.list)),N({index:"",value:""})):N(Object(s.a)(Object(s.a)({},w),{},{index:"Invalid Entry",value:""}))};return Object(i.useEffect)((function(){console.log("list: ",d),console.log("insformData",w)}),[d,O,,w,r]),Object(a.jsxs)("div",{className:"pt-2 p-1 px-md-5 py-md-3",children:[Object(a.jsx)("div",{className:"row no-gutters justify-content-center p-3",children:Object(a.jsx)("h1",{className:"hdr",children:"LINKED LISTS"})}),Object(a.jsx)(R,{data:d}),Object(a.jsx)(f.a,{color:"success",className:"btn",onClick:function(e){e.preventDefault(),l("prepend")},children:"Prepend"}),Object(a.jsx)(f.a,{color:"primary",className:"btn",onClick:function(e){e.preventDefault(),l("delF")},children:" Delete First Node"}),Object(a.jsx)(f.a,{color:"info",className:"btn",onClick:function(e){e.preventDefault(),l("insert")},children:" Insert"}),Object(a.jsx)(f.a,{color:"danger",className:"btn",onClick:function(e){e.preventDefault(),l("delete")},children:" Delete"}),Object(a.jsx)(f.a,{color:"secondary",className:"btn",onClick:function(e){e.preventDefault(),l("append")},children:"Append"}),Object(a.jsx)(f.a,{color:"success",className:"btn",onClick:function(e){e.preventDefault(),l("update")},children:" Update"}),"prepend"===r&&Object(a.jsxs)(u.a,{className:"form",onSubmit:T,children:[Object(a.jsx)(j.a,{children:"Value to prepend: "}),Object(a.jsx)(b.a,{className:"input",onChange:k,value:O,type:"number"}),Object(a.jsx)(f.a,{className:"btn enterBtn",color:"dark",onClick:T,children:"ENTER"})]}),"delF"===r&&Object(a.jsxs)("div",{children:[Object(a.jsx)(j.a,{className:"btnLabel m-1",children:"Press Enter to delete first node: "}),Object(a.jsx)(f.a,{className:"btn enterBtn m-1",color:"dark",onClick:function(e){e.preventDefault(),L.delF(),p(Object(s.a)({},L.list)),m("")},children:"ENTER"})]}),"insert"===r&&Object(a.jsx)("div",{children:Object(a.jsxs)(u.a,{className:"form",onSubmit:S,children:[Object(a.jsx)(j.a,{className:"btnLabel",children:"Index to Insert: "}),Object(a.jsx)(b.a,{onChange:C,value:w.index,type:"number"}),Object(a.jsx)(j.a,{children:"Value to Insert: "}),Object(a.jsx)(b.a,{className:"input",onChange:E,value:w.value,type:"number"}),Object(a.jsx)(f.a,{className:"btn enterBtn",color:"dark",onClick:S,children:"ENTER"})]})}),"delete"===r&&Object(a.jsx)("div",{children:Object(a.jsxs)(u.a,{className:"form",onSubmit:I,children:[Object(a.jsx)(j.a,{className:"btnLabel",children:"Index to Delete: "}),Object(a.jsx)(b.a,{className:"input",onChange:k,value:O,type:"number"}),Object(a.jsx)(f.a,{className:"btn enterBtn",color:"dark",onClick:I,children:"ENTER"})]})}),"append"===r&&Object(a.jsxs)("div",{className:"justify-content-center",children:[Object(a.jsx)(j.a,{className:"btnLabel m-1 ",children:"Press Enter to append: "}),Object(a.jsx)(b.a,{className:"input",onChange:k,value:O,type:"number"}),Object(a.jsx)(f.a,{className:"btn enterBtn m-1",color:"dark",onClick:function(e){e.preventDefault(),O?(L.append(O),p(Object(s.a)({},L.list)),m("")):m("Invalid Entry")},children:"ENTER"})]}),"update"===r&&Object(a.jsx)("div",{children:Object(a.jsxs)(u.a,{className:"form",onSubmit:D,children:[Object(a.jsx)(j.a,{className:"btnLabel",children:"Index to Update: "}),Object(a.jsx)(b.a,{onChange:C,value:w.index,type:"number"}),Object(a.jsx)(j.a,{children:"Updated value: "}),Object(a.jsx)(b.a,{className:"input",onChange:E,value:w.value,type:"number"}),Object(a.jsx)(f.a,{className:"btn enterBtn",color:"dark",onClick:D,children:"ENTER"})]})}),Object(a.jsxs)("div",{className:"row no-gutters",children:[Object(a.jsx)("p",{children:"Linked Lists are linear data structures where nodes are joined together with pointers. They can be singly or doubly linked. In a singly linked list, nodes only have pointers to the next node while doubly linked lists have pointers to both the previous and next node. Singly linked lists use less memory because each node has just one pointer, but doubly linked lists allow for bi-directional traversal which is more efficient for accessing data towards the end of the list. In both lists, accessing the first node is O(1) time, but in a singly linked list, accessing data towards the end of this list is roughly O(n) time due to traversing from the first node. In a doubly linked list, pointers can be placed at the front and end of the list, so it is O(1) time to access the first and last nodes. It is also possible to link the rear of the list to the front to create a circular linked list. This can be implemented on singly and doubly linked lists. Circular lists can be implemented without any pointers to null which means less edge cases. It can be difficult to know which part of the list is being referenced with the circular implementation."}),Object(a.jsx)("p",{children:"Linked lists and arrays are both linear data structures but they have certain pros and cons. In lower level languages like C, Linked lists are dynamic so memory can be allocated in run time to create a list of any size  (unless heap is full). They can also store non-primitive data types. Linked lists require more memory than arrays because of the extra space required for two pointers in each node. Arrays are of a fixed size, and store primitive data types only, but they do provide O(1) random access when extracting data at a specified index. Linked lists require sequential access meaning the list needs to be traversed until the node is found with the correct data (worst case O(n)). Linked lists are more efficient at insert and delete operations because all of the data does not need to be shifted, and removed nodes are freed from memory."}),Object(a.jsxs)("ol",{children:[" ",Object(a.jsx)("strong",{children:"List of Linked List Operations "}),Object(a.jsx)("li",{children:"Prepend- inserts new node at beginning of list"}),Object(a.jsx)("li",{children:"Append - insert new node at end of list"}),Object(a.jsx)("li",{children:"Insert -  inserts new node at a specified node in the list"}),Object(a.jsx)("li",{children:"Delete - deletes a node at a specified node in the list"}),Object(a.jsx)("li",{children:"Update - data is updated in a specified node"}),Object(a.jsx)("li",{children:"Search - locates a specified piece of data and returns it"})]})]})]})},q=n(10),M=(n(39),n(59)),P=n(60),H=n(61),F=n(62),W=n(66),U=n(63),z=n(64),J=n(65),Q=(n(40),function(e){var t=Object(i.useState)(!0),n=Object(o.a)(t,2),r=n[0],l=n[1];return Object(a.jsx)("div",{children:Object(a.jsxs)(M.a,{id:"navBar",light:!0,children:[Object(a.jsx)(P.a,{href:"/data-struct/#/tree",className:"mr-auto",id:"brand",children:"DS VISUALIZATION TOOL"}),Object(a.jsx)(H.a,{id:"tools",children:"\ud83d\udee0\ufe0f"}),Object(a.jsx)(F.a,{id:"navToggler",onClick:function(){return l(!r)},className:"mr-2"}),Object(a.jsx)(W.a,{isOpen:!r,navbar:!0,children:Object(a.jsxs)(U.a,{navbar:!0,children:[Object(a.jsx)(z.a,{children:Object(a.jsx)(J.a,{className:"navLink",href:"/data-struct/#/array",children:"Arrays"})}),Object(a.jsx)(z.a,{children:Object(a.jsx)(J.a,{className:"navLink",href:"/data-struct/#/linkedList",children:"Linked Lists"})}),Object(a.jsx)(z.a,{children:Object(a.jsx)(J.a,{className:"navLink",href:"/data-struct/#/stack",children:"Stacks"})}),Object(a.jsx)(z.a,{children:Object(a.jsx)(J.a,{className:"navLink",href:"/data-struct/#/queue",children:"Queues"})}),Object(a.jsx)(z.a,{children:Object(a.jsx)(J.a,{className:"navLink",href:"/data-struct/#/tree",children:"Balanced Binary Trees"})})]})})]})})});var V=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(Q,{className:"navComp"}),Object(a.jsxs)(q.c,{children:[Object(a.jsx)(q.a,{exact:!0,path:"/",component:k}),Object(a.jsx)(q.a,{exact:!0,path:"/array",component:p}),Object(a.jsx)(q.a,{exact:!0,path:"/linkedList",component:B}),Object(a.jsx)(q.a,{exact:!0,path:"/queue",component:S}),Object(a.jsx)(q.a,{exact:!0,path:"/tree",component:k}),Object(a.jsx)(q.a,{exact:!0,path:"/stack",component:C})]})]})},K=n(23);l.a.render(Object(a.jsx)(K.a,{basename:"/",children:Object(a.jsx)(V,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.2b167268.chunk.js.map