webpackJsonp([1],{0:function(l,n,u){l.exports=u("cDNt")},cDNt:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=u("/oeL"),e=function(){return function(){}}(),o=function(){return function(){}}(),r=u("bm2B"),i=u("qbdv"),s=u("CPp0"),c=u("AP4T"),a=u("HAwn"),_=(u("ce4+"),function(){function l(l,n){this.http=l,this.db=n,this.notes=[],this.NoteInterface=[],this.colors=["white","red","green","blue","orange"]}return l.prototype.getNotes=function(){return this.db.list("notes").valueChanges().catch(function(l){return c.a.throw("Sorry, but server is not available")})},l.prototype.getNumberOfNotes=function(){return this.db.list("notes").snapshotChanges()},l.prototype.addNote=function(l){this.db.list("notes").snapshotChanges().subscribe();var n=this.db.list("notes").push(l);n.set({name:l.name,descr:l.descr,color:l.color,id:n.key})},l.prototype.changeNoteColor=function(l,n){l.color=n,this.db.list("notes").snapshotChanges().subscribe(),this.db.list("notes").set(l.id,l)},l.prototype.removeNote=function(l){this.db.list("notes").snapshotChanges().subscribe(),this.db.list("notes").remove(l.id)},l.prototype.removeAllNotes=function(){this.db.list("notes").snapshotChanges().subscribe(),this.db.list("notes").remove()},l.ctorParameters=function(){return[{type:s.d},{type:a.a}]},l}()),d=function(){function l(l){this.notesService=l,this.notes=[],this.color="white"}return l.prototype.ngOnInit=function(){this.form=new r.g({noteTitle:new r.e(null,[r.q.required]),noteDescr:new r.e(null,[r.q.required])})},l.prototype.addNote=function(l,n){var u={name:l.value,descr:n.value,color:this.color};this.notesService.addNote(u)},l.prototype.chooseColor=function(l){this.color=l},l.prototype.removeAllNotes=function(){this.notesService.removeAllNotes()},l.prototype.checkBtnValid=function(l){return l},l.ctorParameters=function(){return[{type:_}]},l}(),p=[[".control-btns[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap}textarea[_ngcontent-%COMP%]{resize:vertical}.chip[_ngcontent-%COMP%]{margin-right:24px}a[_ngcontent-%COMP%]:hover{text-decoration:underline}"]],f=t._14({encapsulation:0,styles:p,data:{}});function g(l){return t._36(0,[(l()(),t._17(0,0,null,null,1,"label",[["for","noteTitle"]],null,null,null,null,null)),(l()(),t._35(-1,null,["Your Title"]))],null,null)}function h(l){return t._36(0,[(l()(),t._17(0,0,null,null,1,"label",[["for","noteDescr"]],null,null,null,null,null)),(l()(),t._35(-1,null,["Your Description"]))],null,null)}function m(l){return t._36(0,[(l()(),t._17(0,0,null,null,87,"div",[["class","row"]],null,null,null,null,null)),(l()(),t._35(-1,null,["\n  "])),(l()(),t._17(2,0,null,null,54,"form",[["class","col s12 m6"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0;"submit"===n&&(e=!1!==t._30(l,4).onSubmit(u)&&e);"reset"===n&&(e=!1!==t._30(l,4).onReset()&&e);return e},null,null)),t._15(3,16384,null,0,r.s,[],null,null),t._15(4,540672,null,0,r.h,[[8,null],[8,null]],{form:[0,"form"]},null),t._32(2048,null,r.b,null,[r.h]),t._15(6,16384,null,0,r.n,[r.b],null,null),(l()(),t._35(-1,null,["\n    "])),(l()(),t._17(8,0,null,null,16,"div",[["class","row"]],null,null,null,null,null)),(l()(),t._35(-1,null,["\n      "])),(l()(),t._17(10,0,null,null,13,"div",[["class","input-field col s6"]],null,null,null,null,null)),(l()(),t._35(-1,null,["\n        "])),(l()(),t._17(12,0,null,null,7,"input",[["data-length","10"],["formControlName","noteTitle"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;"input"===n&&(e=!1!==t._30(l,13)._handleInput(u.target.value)&&e);"blur"===n&&(e=!1!==t._30(l,13).onTouched()&&e);"compositionstart"===n&&(e=!1!==t._30(l,13)._compositionStart()&&e);"compositionend"===n&&(e=!1!==t._30(l,13)._compositionEnd(u.target.value)&&e);return e},null,null)),t._15(13,16384,null,0,r.c,[t.N,t.n,[2,r.a]],null,null),t._15(14,16384,null,0,r.p,[],{required:[0,"required"]},null),t._32(1024,null,r.j,function(l){return[l]},[r.p]),t._32(1024,null,r.k,function(l){return[l]},[r.c]),t._15(17,671744,null,0,r.f,[[3,r.b],[2,r.j],[8,null],[2,r.k]],{name:[0,"name"]},null),t._32(2048,null,r.l,null,[r.f]),t._15(19,16384,null,0,r.m,[r.l],null,null),(l()(),t._35(-1,null,["\n        "])),(l()(),t._11(16777216,null,null,1,null,g)),t._15(22,16384,null,0,i.j,[t.Z,t.W],{ngIf:[0,"ngIf"]},null),(l()(),t._35(-1,null,["\n      "])),(l()(),t._35(-1,null,["\n    "])),(l()(),t._35(-1,null,["\n    "])),(l()(),t._17(26,0,null,null,16,"div",[["class","row"]],null,null,null,null,null)),(l()(),t._35(-1,null,["\n      "])),(l()(),t._17(28,0,null,null,13,"div",[["class","input-field col s12"]],null,null,null,null,null)),(l()(),t._35(-1,null,["\n        "])),(l()(),t._17(30,0,null,null,7,"textarea",[["class","materialize-textarea"],["data-length","120"],["formControlName","noteDescr"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;"input"===n&&(e=!1!==t._30(l,31)._handleInput(u.target.value)&&e);"blur"===n&&(e=!1!==t._30(l,31).onTouched()&&e);"compositionstart"===n&&(e=!1!==t._30(l,31)._compositionStart()&&e);"compositionend"===n&&(e=!1!==t._30(l,31)._compositionEnd(u.target.value)&&e);return e},null,null)),t._15(31,16384,null,0,r.c,[t.N,t.n,[2,r.a]],null,null),t._15(32,16384,null,0,r.p,[],{required:[0,"required"]},null),t._32(1024,null,r.j,function(l){return[l]},[r.p]),t._32(1024,null,r.k,function(l){return[l]},[r.c]),t._15(35,671744,null,0,r.f,[[3,r.b],[2,r.j],[8,null],[2,r.k]],{name:[0,"name"]},null),t._32(2048,null,r.l,null,[r.f]),t._15(37,16384,null,0,r.m,[r.l],null,null),(l()(),t._35(-1,null,["\n        "])),(l()(),t._11(16777216,null,null,1,null,h)),t._15(40,16384,null,0,i.j,[t.Z,t.W],{ngIf:[0,"ngIf"]},null),(l()(),t._35(-1,null,["\n      "])),(l()(),t._35(-1,null,["\n    "])),(l()(),t._35(-1,null,["\n    "])),(l()(),t._17(44,0,null,null,11,"div",[["class","control-btns"]],null,null,null,null,null)),(l()(),t._35(-1,null,["\n      "])),(l()(),t._17(46,0,null,null,3,"button",[["class","waves-effect waves-light btn"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,u){var t=!0,e=l.component;"click"===n&&(e.addNote(e.form.get("noteTitle"),e.form.get("noteDescr")),t=!1!==e.form.reset()&&t);return t},null,null)),t._15(47,278528,null,0,i.h,[t.y,t.z,t.n,t.M],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t._31(48,{pulse:0}),(l()(),t._35(-1,null,["Send"])),(l()(),t._35(-1,null,["\n      "])),(l()(),t._17(51,0,null,null,3,"a",[["class","waves-effect waves-light btn"]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;"click"===n&&(t=!1!==e.removeAllNotes()&&t);return t},null,null)),(l()(),t._17(52,0,null,null,1,"i",[["class","material-icons right"]],null,null,null,null,null)),(l()(),t._35(-1,null,["close"])),(l()(),t._35(-1,null,["Delete All"])),(l()(),t._35(-1,null,["\n    "])),(l()(),t._35(-1,null,["\n  "])),(l()(),t._35(-1,null,["\n    "])),(l()(),t._17(58,0,null,null,28,"div",[["class","col s12 m6"]],null,null,null,null,null)),(l()(),t._35(-1,null,["\n      "])),(l()(),t._17(60,0,null,null,25,"div",[["class","card grey darken-2"]],null,null,null,null,null)),(l()(),t._35(-1,null,["\n        "])),(l()(),t._17(62,0,null,null,9,"div",[["class","card-content white-text"]],null,null,null,null,null)),(l()(),t._35(-1,null,["\n          "])),(l()(),t._17(64,0,null,null,3,"span",[["class","card-title"]],null,null,null,null,null)),(l()(),t._35(-1,null,["Hi! Welcome to "])),(l()(),t._17(66,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t._35(-1,null,["AngNotes"])),(l()(),t._35(-1,null,["\n          "])),(l()(),t._17(69,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t._35(-1,null,["I am Alexander Komarevych and this is my first Angular App. App will be push your Notes to Firebase Database and save them.\n            If you have any questions please contact me :)\n          "])),(l()(),t._35(-1,null,["\n        "])),(l()(),t._35(-1,null,["\n        "])),(l()(),t._17(73,0,null,null,11,"div",[["class","card-action"]],null,null,null,null,null)),(l()(),t._35(-1,null,["\n          "])),(l()(),t._17(75,0,null,null,3,"div",[["class","chip"]],null,null,null,null,null)),(l()(),t._35(-1,null,["\n            "])),(l()(),t._17(77,0,null,null,0,"img",[["alt","Contact Person"],["src","https://avatars3.githubusercontent.com/u/18403084?s=40&v=4"]],null,null,null,null,null)),(l()(),t._35(-1,null,[" Alexander Komarevych\n          "])),(l()(),t._35(-1,null,["\n          "])),(l()(),t._17(80,0,null,null,1,"a",[["class","grey-text text-lighten-5"],["href","https://github.com/Aqhefull"],["target","_blank"]],null,null,null,null,null)),(l()(),t._35(-1,null,["Github"])),(l()(),t._17(82,0,null,null,1,"a",[["class","blue-text text-lighten-1"],["href","https://twitter.com/lucky_koma"],["target","_blank"]],null,null,null,null,null)),(l()(),t._35(-1,null,["Twitter"])),(l()(),t._35(-1,null,["\n        "])),(l()(),t._35(-1,null,["\n      "])),(l()(),t._35(-1,null,["\n    "])),(l()(),t._35(-1,null,["\n"])),(l()(),t._35(-1,null,["\n\n"]))],function(l,n){var u=n.component;l(n,4,0,u.form);l(n,14,0,"");l(n,17,0,"noteTitle"),l(n,22,0,!u.form.get("noteTitle").valid);l(n,32,0,"");l(n,35,0,"noteDescr"),l(n,40,0,!u.form.get("noteDescr").valid);l(n,47,0,"waves-effect waves-light btn",l(n,48,0,u.checkBtnValid(u.form.valid)))},function(l,n){var u=n.component;l(n,2,0,t._30(n,6).ngClassUntouched,t._30(n,6).ngClassTouched,t._30(n,6).ngClassPristine,t._30(n,6).ngClassDirty,t._30(n,6).ngClassValid,t._30(n,6).ngClassInvalid,t._30(n,6).ngClassPending),l(n,12,0,t._30(n,14).required?"":null,t._30(n,19).ngClassUntouched,t._30(n,19).ngClassTouched,t._30(n,19).ngClassPristine,t._30(n,19).ngClassDirty,t._30(n,19).ngClassValid,t._30(n,19).ngClassInvalid,t._30(n,19).ngClassPending),l(n,30,0,t._30(n,32).required?"":null,t._30(n,37).ngClassUntouched,t._30(n,37).ngClassTouched,t._30(n,37).ngClassPristine,t._30(n,37).ngClassDirty,t._30(n,37).ngClassValid,t._30(n,37).ngClassInvalid,t._30(n,37).ngClassPending),l(n,46,0,!u.form.valid)})}t._12("app-note-form",d,function(l){return t._36(0,[(l()(),t._17(0,0,null,null,1,"app-note-form",[],null,null,null,m,f)),t._15(1,114688,null,0,d,[_],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]);var b=function(){function l(){this.isHovered=!1}return l.prototype.onMouseEnter=function(){this.isHovered=!0},l.prototype.onMouseLeave=function(){this.isHovered=!1},l}(),v=function(){function l(l){this.notesService=l}return l.prototype.ngOnInit=function(){},l.prototype.setColor=function(l){return this.note.color=l,console.log(this.note),this.notesService.changeNoteColor(this.note,this.note.color)},l.prototype.removeNote=function(){return this.notesService.removeNote(this.note)},l.ctorParameters=function(){return[{type:_}]},l}(),y=function(){function l(l){this.noteService=l,this.colors=this.noteService.colors,this.defaultColor="red",this.choosingColor=new t.p}return l.prototype.ngOnInit=function(){},l.prototype.chooseColor=function(l){this.defaultColor=l,this.choosingColor.emit(this.defaultColor)},l.ctorParameters=function(){return[{type:_}]},l}(),C=[['.color_editor__color[_ngcontent-%COMP%]{display:inline-block;width:25px;height:25px;border-radius:50%;border:2px solid rgba(0,0,0,.3);cursor:pointer;margin:0 5px;position:relative}.chosen[_ngcontent-%COMP%]:after{content:"";position:absolute;top:25%;left:25%;width:50%;height:50%;border-radius:50%;background-color:rgba(84,110,122,.5);border:2px solid rgba(84,110,122,.5)}']],k=t._14({encapsulation:0,styles:C,data:{}});function x(l){return t._36(0,[(l()(),t._17(0,0,null,null,1,"div",[],[[8,"className",0],[2,"chosen",null]],[[null,"click"]],function(l,n,u){var t=!0,e=l.component;"click"===n&&(t=!1!==e.chooseColor(l.context.$implicit)&&t);return t},null,null)),(l()(),t._35(-1,null,["\n"]))],null,function(l,n){var u=n.component;l(n,0,0,t._20(1,"color_editor__color ",n.context.$implicit,""),u.defaultColor===n.context.$implicit)})}function w(l){return t._36(0,[(l()(),t._11(16777216,null,null,1,null,x)),t._15(1,802816,null,0,i.i,[t.Z,t.W,t.y],{ngForOf:[0,"ngForOf"]},null),(l()(),t._35(-1,null,["\n"]))],function(l,n){l(n,1,0,n.component.colors)},null)}t._12("app-color-editor",y,function(l){return t._36(0,[(l()(),t._17(0,0,null,null,1,"app-color-editor",[],null,null,null,w,k)),t._15(1,114688,null,0,y,[_],null,null)],function(l,n){l(n,1,0)},null)},{defaultColor:"defaultColor"},{choosingColor:"choosingColor"},[]);var P=[[".card[_ngcontent-%COMP%]{-webkit-transition:all .3s;transition:all .3s}.note-hovered[_ngcontent-%COMP%]{z-index:99999;cursor:pointer;background-color:#684cda!important}.card-action[_ngcontent-%COMP%]{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.card-action[_ngcontent-%COMP%], .note-color-picker[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex}.note-color-hovered[_ngcontent-%COMP%]{-webkit-transform:scale(1.5);transform:scale(1.5);-webkit-transition:all .3s;transition:all .3s}.card[_ngcontent-%COMP%]   .card-action[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.note-hovered[_ngcontent-%COMP%]{-webkit-transform:scale(1.05);transform:scale(1.05);-webkit-transition:all .3s;transition:all .3s}.green[_ngcontent-%COMP%]{background-color:#43a047!important}.red[_ngcontent-%COMP%]{background-color:#e53935!important}.blue[_ngcontent-%COMP%]{background-color:#1e88e5!important}.orange[_ngcontent-%COMP%]{background-color:#fb8c00!important}"]],O=t._14({encapsulation:0,styles:P,data:{}});function M(l){return t._36(0,[(l()(),t._17(0,0,[["cardBody",1]],null,23,"div",[["appHoverNote",""]],[[8,"className",0],[2,"note-hovered",null]],[[null,"mouseenter"],[null,"mouseleave"]],function(l,n,u){var e=!0;"mouseenter"===n&&(e=!1!==t._30(l,1).onMouseEnter()&&e);"mouseleave"===n&&(e=!1!==t._30(l,1).onMouseLeave()&&e);return e},null,null)),t._15(1,16384,null,0,b,[],null,null),(l()(),t._35(-1,null,["\n  "])),(l()(),t._17(3,0,null,null,7,"div",[["class","card-content white-text"]],null,null,null,null,null)),(l()(),t._35(-1,null,["\n    "])),(l()(),t._17(5,0,null,null,1,"span",[["class","card-title"]],null,null,null,null,null)),(l()(),t._35(6,null,["",""])),(l()(),t._35(-1,null,["\n    "])),(l()(),t._17(8,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t._35(9,null,["",""])),(l()(),t._35(-1,null,["\n  "])),(l()(),t._35(-1,null,["\n  "])),(l()(),t._17(12,0,null,null,10,"div",[["class","card-action"]],null,null,null,null,null)),(l()(),t._35(-1,null,["\n    "])),(l()(),t._17(14,0,null,null,4,"a",[["class","waves-effect waves-light btn"]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;"click"===n&&(t=!1!==e.removeNote()&&t);return t},null,null)),(l()(),t._35(-1,null,["\n      "])),(l()(),t._17(16,0,null,null,1,"i",[["class","medium material-icons"]],null,null,null,null,null)),(l()(),t._35(-1,null,["delete"])),(l()(),t._35(-1,null,["\n    "])),(l()(),t._35(-1,null,["\n    "])),(l()(),t._17(20,0,null,null,1,"app-color-editor",[],null,[[null,"choosingColor"]],function(l,n,u){var t=!0,e=l.component;"choosingColor"===n&&(t=!1!==e.setColor(u)&&t);return t},w,k)),t._15(21,114688,null,0,y,[_],{defaultColor:[0,"defaultColor"]},{choosingColor:"choosingColor"}),(l()(),t._35(-1,null,["\n  "])),(l()(),t._35(-1,null,["\n"]))],function(l,n){l(n,21,0,n.component.note.color)},function(l,n){var u=n.component;l(n,0,0,t._20(1,"card blue-grey darken-1 ",u.note.color,""),t._30(n,1).isHovered),l(n,6,0,u.note.name),l(n,9,0,u.note.descr)})}t._12("app-note",v,function(l){return t._36(0,[(l()(),t._17(0,0,null,null,1,"app-note",[],null,null,null,M,O)),t._15(1,114688,null,0,v,[_],null,null)],function(l,n){l(n,1,0)},null)},{note:"note",i:"i"},{},[]);var N=function(){function l(l){this.notesService=l,this.notes=[]}return l.prototype.ngOnInit=function(){this.getNotes()},l.prototype.getNotes=function(){var l=this;this.notesService.getNotes().subscribe(function(n){return l.notes=n,l.notes},function(n){l.error=n})},l.prototype.superRemoveNote=function(l){this.getNotes()},l.ctorParameters=function(){return[{type:_}]},l}(),j=[[""]],A=t._14({encapsulation:0,styles:j,data:{}});function I(l){return t._36(0,[(l()(),t._17(0,0,null,null,1,"div",[["class","card-panel red darken-2 white-text"]],null,null,null,null,null)),(l()(),t._35(1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.component.error)})}function q(l){return t._36(0,[(l()(),t._17(0,0,null,null,1,"app-note",[["class","col s12 m6"]],null,null,null,M,O)),t._15(1,114688,null,0,v,[_],{note:[0,"note"],i:[1,"i"]},null)],function(l,n){l(n,1,0,n.context.$implicit,n.context.index)},null)}function D(l){return t._36(0,[(l()(),t._17(0,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),t._35(-1,null,["\n  "])),(l()(),t._11(16777216,null,null,1,null,I)),t._15(3,16384,null,0,i.j,[t.Z,t.W],{ngIf:[0,"ngIf"]},null),(l()(),t._35(-1,null,["\n  "])),(l()(),t._11(16777216,null,null,1,null,q)),t._15(6,802816,null,0,i.i,[t.Z,t.W,t.y],{ngForOf:[0,"ngForOf"]},null),(l()(),t._35(-1,null,["\n"])),(l()(),t._35(-1,null,["\n\n\n"]))],function(l,n){var u=n.component;l(n,3,0,u.error),l(n,6,0,u.notes)},null)}t._12("app-note-list",N,function(l){return t._36(0,[(l()(),t._17(0,0,null,null,1,"app-note-list",[],null,null,null,D,A)),t._15(1,114688,null,0,N,[_],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]);var S=function(){function l(){}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}(),T=[[".container[_ngcontent-%COMP%]{margin-top:20px}"]],L=t._14({encapsulation:0,styles:T,data:{}});function F(l){return t._36(0,[(l()(),t._17(0,0,null,null,7,"div",[["class","container"]],null,null,null,null,null)),(l()(),t._35(-1,null,["\n   "])),(l()(),t._17(2,0,null,null,1,"app-note-form",[],null,null,null,m,f)),t._15(3,114688,null,0,d,[_],null,null),(l()(),t._35(-1,null,["\n    "])),(l()(),t._17(5,0,null,null,1,"app-note-list",[],null,null,null,D,A)),t._15(6,114688,null,0,N,[_],null,null),(l()(),t._35(-1,null,["\n"]))],function(l,n){l(n,3,0),l(n,6,0)},null)}var z=t._12("app-note-page",S,function(l){return t._36(0,[(l()(),t._17(0,0,null,null,1,"app-note-page",[],null,null,null,F,L)),t._15(1,114688,null,0,S,[],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),H=u("BkNc"),W=[["nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;text-transform:uppercase;font-weight:700}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{padding:0 5px 0 0}"]],B=t._14({encapsulation:0,styles:W,data:{}});function E(l){return t._36(0,[(l()(),t._17(0,0,null,null,26,"div",[["class","navbar-fixed"]],null,null,null,null,null)),(l()(),t._35(-1,null,["\n"])),(l()(),t._17(2,0,null,null,23,"nav",[],null,null,null,null,null)),(l()(),t._35(-1,null,["\n  "])),(l()(),t._17(4,0,null,null,20,"div",[["class","nav-wrapper light-blue darken-4"]],null,null,null,null,null)),(l()(),t._35(-1,null,["\n    "])),(l()(),t._17(6,0,null,null,1,"a",[["class","brand-logo center"],["href","#!"]],null,null,null,null,null)),(l()(),t._35(-1,null,["AngNotes"])),(l()(),t._35(-1,null,["\n    "])),(l()(),t._17(9,0,null,null,14,"ul",[["class","left hide-on-med-and-down"]],null,null,null,null,null)),(l()(),t._35(-1,null,["\n      "])),(l()(),t._17(11,0,null,null,11,"li",[["routerLinkActive","active"]],null,null,null,null,null)),t._15(12,1720320,null,2,H.l,[H.k,t.n,t.N,t.i],{routerLinkActiveOptions:[0,"routerLinkActiveOptions"],routerLinkActive:[1,"routerLinkActive"]},null),t._33(603979776,1,{links:1}),t._33(603979776,2,{linksWithHrefs:1}),t._31(15,{exact:0}),(l()(),t._35(-1,null,["\n        "])),(l()(),t._17(17,0,null,null,4,"a",[["routerLink","/"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;"click"===n&&(e=!1!==t._30(l,18).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e);return e},null,null)),t._15(18,671744,[[2,4]],0,H.m,[H.k,H.a,i.g],{routerLink:[0,"routerLink"]},null),(l()(),t._17(19,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(l()(),t._35(-1,null,["chat_bubble_outline"])),(l()(),t._35(-1,null,["Notes"])),(l()(),t._35(-1,null,["\n      "])),(l()(),t._35(-1,null,["\n    "])),(l()(),t._35(-1,null,["\n  "])),(l()(),t._35(-1,null,["\n"])),(l()(),t._35(-1,null,["\n"])),(l()(),t._35(-1,null,["\n"])),(l()(),t._17(28,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t._15(29,212992,null,0,H.o,[H.b,t.Z,t.k,[8,null],t.i],null,null),(l()(),t._35(-1,null,["\n"]))],function(l,n){l(n,12,0,l(n,15,0,!0),"active");l(n,18,0,"/"),l(n,29,0)},function(l,n){l(n,17,0,t._30(n,18).target,t._30(n,18).href)})}var K=t._12("app-root",o,function(l){return t._36(0,[(l()(),t._17(0,0,null,null,1,"app-root",[],null,null,null,E,B)),t._15(1,49152,null,0,o,[],null,null)],null,null)},{},{},[]),U=u("fc+i"),V=u("13je"),Z=function(){return function(){}}(),Y=t._13(e,[o],function(l){return t._28([t._29(512,t.k,t._9,[[8,[z,K]],[3,t.k],t.E]),t._29(5120,t.A,t._27,[[3,t.A]]),t._29(4608,i.l,i.k,[t.A]),t._29(5120,t.c,t._18,[]),t._29(5120,t.y,t._24,[]),t._29(5120,t.z,t._25,[]),t._29(4608,U.b,U.s,[i.c]),t._29(6144,t.Q,null,[U.b]),t._29(4608,U.e,U.f,[]),t._29(5120,U.c,function(l,n,u,t){return[new U.k(l),new U.o(n),new U.n(u,t)]},[i.c,i.c,i.c,U.e]),t._29(4608,U.d,U.d,[U.c,t.G]),t._29(135680,U.m,U.m,[i.c]),t._29(4608,U.l,U.l,[U.d,U.m]),t._29(6144,t.O,null,[U.l]),t._29(6144,U.p,null,[U.m]),t._29(4608,t.X,t.X,[t.G]),t._29(4608,U.g,U.g,[i.c]),t._29(4608,U.i,U.i,[i.c]),t._29(4608,r.t,r.t,[]),t._29(4608,r.d,r.d,[]),t._29(4608,s.c,s.c,[]),t._29(4608,s.g,s.b,[]),t._29(5120,s.i,s.j,[]),t._29(4608,s.h,s.h,[s.c,s.g,s.i]),t._29(4608,s.f,s.a,[]),t._29(5120,s.d,s.k,[s.h,s.f]),t._29(5120,H.a,H.x,[H.k]),t._29(4608,H.d,H.d,[]),t._29(6144,H.f,null,[H.d]),t._29(135680,H.p,H.p,[H.k,t.D,t.j,t.w,H.f]),t._29(4608,H.e,H.e,[]),t._29(5120,H.h,H.A,[H.y]),t._29(5120,t.b,function(l){return[l]},[H.h]),t._29(5120,V.b,V.f,[V.c,V.d]),t._29(5120,a.a,a.c,[V.b]),t._29(4608,_,_,[s.d,a.a]),t._29(512,i.b,i.b,[]),t._29(1024,t.o,U.q,[]),t._29(1024,t.F,function(){return[H.t()]},[]),t._29(512,H.y,H.y,[t.w]),t._29(1024,t.d,function(l,n,u){return[U.r(l,n),H.z(u)]},[[2,U.h],[2,t.F],H.y]),t._29(512,t.e,t.e,[[2,t.d]]),t._29(131584,t._16,t._16,[t.G,t._10,t.w,t.o,t.k,t.e]),t._29(2048,t.g,null,[t._16]),t._29(512,t.f,t.f,[t.g]),t._29(512,U.a,U.a,[[3,U.a]]),t._29(512,r.r,r.r,[]),t._29(512,r.i,r.i,[]),t._29(512,r.o,r.o,[]),t._29(512,s.e,s.e,[]),t._29(1024,H.s,H.v,[[3,H.k]]),t._29(512,H.r,H.c,[]),t._29(512,H.b,H.b,[]),t._29(256,H.g,{},[]),t._29(1024,i.g,H.u,[i.n,[2,i.a],H.g]),t._29(512,i.f,i.f,[i.g]),t._29(512,t.j,t.j,[]),t._29(512,t.D,t.U,[t.j,[2,t.V]]),t._29(1024,H.i,function(){return[[{path:"",component:S}]]},[]),t._29(1024,H.k,H.w,[t.g,H.r,H.b,i.f,t.w,t.D,t.j,H.i,H.g,[2,H.q],[2,H.j]]),t._29(512,H.n,H.n,[[2,H.s],[2,H.k]]),t._29(512,Z,Z,[]),t._29(512,V.a,V.a,[]),t._29(512,a.b,a.b,[]),t._29(512,e,e,[]),t._29(256,V.c,{apiKey:"AIzaSyBlAsp0srb4Yfn2-hkIUrPzOd_lEMWJMrM",authDomain:"angnotes-c0989.firebaseapp.com",databaseURL:"https://angnotes-c0989.firebaseio.com",projectId:"angnotes-c0989",storageBucket:"angnotes-c0989.appspot.com",messagingSenderId:"585086595649"},[]),t._29(256,V.d,void 0,[])])});Object(t._3)(),Object(U.j)().bootstrapModuleFactory(Y).catch(function(l){return console.log(l)})},gFIY:function(l,n){function u(l){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+l+"'.")})}u.keys=function(){return[]},u.resolve=u,l.exports=u,u.id="gFIY"}},[0]);