(window.webpackJsonpmylove=window.webpackJsonpmylove||[]).push([[16],{417:function(t,e,i){"use strict";i.r(e),function(t,n){i.d(e,"default",function(){return d});i(418);var a=i(420),o=i.n(a),c=(i(253),i(254)),l=i.n(c),r=(i(274),i(276)),s=i.n(r),m=i(15),u=i(16),g=i(18),h=i(17),p=i(19),f=(i(428),i(21)),y=[{icon:"https://img02.hua.com/m/category/Classification/m_category_hot_Lover.png",text:"\u9001\u604b\u4eba\u9c9c\u82b1"},{icon:"https://img02.hua.com/m/category/Classification/m_category_hot_Elder.png",text:"\u9001\u957f\u8f88\u9c9c\u82b1"},{icon:"https://img02.hua.com/m/category/Classification/m_category_hot_Birthday.png",text:"\u751f\u65e5\u9c9c\u82b1"},{icon:"https://img02.hua.com/m/category/Classification/m_category_hot_Boxedflowers.png",text:"\u793c\u76d2\u9c9c\u82b1"},{icon:"https://img02.hua.com/m/category/Classification/m_category_hot_PPF.png",text:"\u6c38\u751f\u82b1"},{icon:"https://img02.hua.com/m/category/Classification/m_category_hot_Cake.png",text:"\u86cb\u7cd5"},{icon:"https://img02.hua.com/m/category/Classification/m_category_hot_Cake_ganso.png",text:"\u5143\u7956\u86cb\u7cd5"},{icon:"https://img02.hua.com/m/category/Classification/m_category_hot_Goldfoilflower.png",text:"\u91d1\u7b94\u82b1"},{icon:"https://img02.hua.com/m/category/Classification/m_category_hot_Jewelry.png",text:"\u9996\u9970"},{icon:"https://img02.hua.com/m/category/Classification/m_category_hot_Chocolate_qiaoluo.png",text:"\u5de7\u514b\u529b"},{icon:"https://img02.hua.com/m/category/Classification/m_category_hot_CreativeGifts.png",text:"\u521b\u610f\u793c\u54c1"},{icon:"https://img02.hua.com/m/category/Classification/m_category_hot_Groupbuy.png",text:"\u4f01\u4e1a\u56e2\u8d2d"}],d=function(t){function e(){var t,i;Object(m.a)(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(i=Object(g.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(a)))).state={value:"\u9c9c\u82b1",initialPage:"t2"},i.onChange=function(t){i.setState({value:t})},i.clear=function(){i.setState({value:""})},i.handleClick=function(){i.manualFocusInst.focus()},i.submit=function(t){f.a.push("/search?searchvalue=".concat(t))},i}return Object(p.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this;return n.createElement("div",{className:"indexview"},n.createElement("div",{style:{position:"relative"}},n.createElement("div",{style:{width:"10%",background:"#fff"},onClick:function(){return f.a.go(-1)}},n.createElement("i",{className:"iconfont icon-zuojiantou7",style:{fontSize:"40px"}})),n.createElement(s.a,{style:{width:"84%",position:"absolute",right:0,top:0},value:this.state.value,placeholder:"\u8bf7\u8f93\u5165\u5173\u952e\u8bcd",onSubmit:function(e){return t.submit(e)},onClear:function(t){return console.log(t,"onClear")},onFocus:function(){return console.log("onFocus")},onBlur:function(){return console.log("onBlur")},onCancel:function(){return console.log("onCancel")},showCancelButton:!0,onChange:this.onChange})),n.createElement("div",{style:{height:700}},n.createElement(l.a,null),n.createElement(o.a,{ref:"tabsdom",onChange:function(e){t.setState({initialPage:e.key})},tabs:[{title:"1 Tab",key:"t1"},{title:"2 Tab",key:"t2"},{title:"3 Tab",key:"t3"}],initialPage:"t2",animated:!0,useOnPan:!0,tabBarPosition:"left",tabDirection:"vertical"},["t1"==this.state.initialPage&&n.createElement("div",{onClick:function(){return f.a.push("/findmore")},key:"t1",style:{backgroundColor:"#fff",overflow:"hidden"}},n.createElement("div",{style:{margin:"10px",height:"100%"}},n.createElement("img",{style:{width:"100%"},src:"https://img02.hua.com/m/category/Classification/hot.png",alt:""}),n.createElement("div",{style:{boxShadow:"3px 4px 12px #333333",borderRadius:"5px",marginTop:"10px",display:"flex",flexWrap:"wrap"}},y.map(function(t,e){return n.createElement("div",{key:e,style:{fontSize:"12px",width:"33%",display:"flex",flexDirection:"column",alignItems:"center"}},n.createElement("img",{style:{width:"50%",margin:"10px 0",borderRadius:"50%"},src:t.icon}),n.createElement("p",{style:{lineHeight:"20px"}},t.text))})))),"t2"==this.state.initialPage&&n.createElement("div",{onClick:function(){return f.a.push("/findmore")},key:"t2",style:{backgroundColor:"#fff",overflow:"hidden"}},n.createElement("div",{style:{margin:"10px",height:"100%"}},n.createElement("img",{style:{width:"100%"},src:"https://img02.hua.com/m/category/Classification/hot.png",alt:""}),n.createElement("div",{style:{boxShadow:"3px 4px 12px #333333",borderRadius:"5px",marginTop:"10px",display:"flex",flexWrap:"wrap"}},y.map(function(t,e){return n.createElement("div",{key:e,style:{fontSize:"12px",width:"33%",display:"flex",flexDirection:"column",alignItems:"center"}},n.createElement("img",{style:{width:"50%",margin:"10px 0",borderRadius:"50%"},src:t.icon}),n.createElement("p",{style:{lineHeight:"20px"}},t.text))})))),"t3"==this.state.initialPage&&n.createElement("div",{onClick:function(){return f.a.push("/findmore")},key:"t3",style:{backgroundColor:"#fff",overflow:"hidden"}},n.createElement("div",{style:{margin:"10px",height:"100%"}},n.createElement("img",{style:{width:"100%"},src:"https://img02.hua.com/m/category/Classification/hot.png",alt:""}),n.createElement("div",{style:{boxShadow:"3px 4px 12px #333333",borderRadius:"5px",marginTop:"10px",display:"flex",flexWrap:"wrap"}},y.map(function(t,e){return n.createElement("div",{key:e,style:{fontSize:"12px",width:"33%",display:"flex",flexDirection:"column",alignItems:"center"}},n.createElement("img",{style:{width:"50%",margin:"10px 0",borderRadius:"50%"},src:t.icon}),n.createElement("p",{style:{lineHeight:"20px"}},t.text))}))))]),n.createElement(l.a,null)))}}]),e}(t)}.call(this,i(0).Component,i(0))},428:function(t,e,i){}}]);
//# sourceMappingURL=16.ed869805.chunk.js.map