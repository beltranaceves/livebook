import{a as Mt}from"./chunk-GCWB44UQ.js";import{a as vt}from"./chunk-ZIY7VF5V.js";import{m as At}from"./chunk-NQ4DUWMN.js";import"./chunk-XHGORZV2.js";import{Ea as Nt,Ia as Tt,J as _t,O as mt,S as kt,T as gt,U as Et,V as bt,W as xt,X as Rt,Y as Ot,Z as F,h as f,ha as $,j as G}from"./chunk-ZOEWSKT6.js";import"./chunk-UEXLG4I5.js";import"./chunk-SISR4MA5.js";import"./chunk-24JW6VB3.js";import"./chunk-MGYUK2XN.js";var St=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Ht(t){return typeof t=="string"&&St.test(t)}var wt=Ht;var M=[];for(let t=0;t<256;++t)M.push((t+256).toString(16).slice(1));function It(t,e=0){return M[t[e+0]]+M[t[e+1]]+M[t[e+2]]+M[t[e+3]]+"-"+M[t[e+4]]+M[t[e+5]]+"-"+M[t[e+6]]+M[t[e+7]]+"-"+M[t[e+8]]+M[t[e+9]]+"-"+M[t[e+10]]+M[t[e+11]]+M[t[e+12]]+M[t[e+13]]+M[t[e+14]]+M[t[e+15]]}function zt(t){if(!wt(t))throw TypeError("Invalid UUID");let e,r=new Uint8Array(16);return r[0]=(e=parseInt(t.slice(0,8),16))>>>24,r[1]=e>>>16&255,r[2]=e>>>8&255,r[3]=e&255,r[4]=(e=parseInt(t.slice(9,13),16))>>>8,r[5]=e&255,r[6]=(e=parseInt(t.slice(14,18),16))>>>8,r[7]=e&255,r[8]=(e=parseInt(t.slice(19,23),16))>>>8,r[9]=e&255,r[10]=(e=parseInt(t.slice(24,36),16))/1099511627776&255,r[11]=e/4294967296&255,r[12]=e>>>24&255,r[13]=e>>>16&255,r[14]=e>>>8&255,r[15]=e&255,r}var Dt=zt;function Kt(t){t=unescape(encodeURIComponent(t));let e=[];for(let r=0;r<t.length;++r)e.push(t.charCodeAt(r));return e}var Vt="6ba7b810-9dad-11d1-80b4-00c04fd430c8",Gt="6ba7b811-9dad-11d1-80b4-00c04fd430c8";function nt(t,e,r){function u(c,_,p,o){var h;if(typeof c=="string"&&(c=Kt(c)),typeof _=="string"&&(_=Dt(_)),((h=_)===null||h===void 0?void 0:h.length)!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let k=new Uint8Array(16+c.length);if(k.set(_),k.set(c,_.length),k=r(k),k[6]=k[6]&15|e,k[8]=k[8]&63|128,p){o=o||0;for(let g=0;g<16;++g)p[o+g]=k[g];return p}return It(k)}try{u.name=t}catch(c){}return u.DNS=Vt,u.URL=Gt,u}function Xt(t,e,r,u){switch(t){case 0:return e&r^~e&u;case 1:return e^r^u;case 2:return e&r^e&u^r&u;case 3:return e^r^u}}function st(t,e){return t<<e|t>>>32-e}function Qt(t){let e=[1518500249,1859775393,2400959708,3395469782],r=[1732584193,4023233417,2562383102,271733878,3285377520];if(typeof t=="string"){let p=unescape(encodeURIComponent(t));t=[];for(let o=0;o<p.length;++o)t.push(p.charCodeAt(o))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);let u=t.length/4+2,c=Math.ceil(u/16),_=new Array(c);for(let p=0;p<c;++p){let o=new Uint32Array(16);for(let h=0;h<16;++h)o[h]=t[p*64+h*4]<<24|t[p*64+h*4+1]<<16|t[p*64+h*4+2]<<8|t[p*64+h*4+3];_[p]=o}_[c-1][14]=(t.length-1)*8/Math.pow(2,32),_[c-1][14]=Math.floor(_[c-1][14]),_[c-1][15]=(t.length-1)*8&4294967295;for(let p=0;p<c;++p){let o=new Uint32Array(80);for(let y=0;y<16;++y)o[y]=_[p][y];for(let y=16;y<80;++y)o[y]=st(o[y-3]^o[y-8]^o[y-14]^o[y-16],1);let h=r[0],k=r[1],g=r[2],E=r[3],b=r[4];for(let y=0;y<80;++y){let x=Math.floor(y/20),O=st(h,5)+Xt(x,k,g,E)+b+e[x]+o[y]>>>0;b=E,E=g,g=st(k,30)>>>0,k=h,h=O}r[0]=r[0]+h>>>0,r[1]=r[1]+k>>>0,r[2]=r[2]+g>>>0,r[3]=r[3]+E>>>0,r[4]=r[4]+b>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,r[0]&255,r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,r[1]&255,r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,r[2]&255,r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,r[3]&255,r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,r[4]&255]}var Lt=Qt;var jt=nt("v5",80,Lt),ot=jt;var lt=function(){var t=f(function(I,i,n,l){for(n=n||{},l=I.length;l--;n[I[l]]=i);return n},"o"),e=[6,8,10,20,22,24,26,27,28],r=[1,10],u=[1,11],c=[1,12],_=[1,13],p=[1,14],o=[1,15],h=[1,21],k=[1,22],g=[1,23],E=[1,24],b=[1,25],y=[6,8,10,13,15,18,19,20,22,24,26,27,28,41,42,43,44,45],x=[1,34],O=[27,28,46,47],Y=[41,42,43,44,45],Z=[17,34],W=[1,54],v=[1,53],S=[17,34,36,38],N={trace:f(function(){},"trace"),yy:{},symbols_:{error:2,start:3,ER_DIAGRAM:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,entityName:11,relSpec:12,":":13,role:14,BLOCK_START:15,attributes:16,BLOCK_STOP:17,SQS:18,SQE:19,title:20,title_value:21,acc_title:22,acc_title_value:23,acc_descr:24,acc_descr_value:25,acc_descr_multiline_value:26,ALPHANUM:27,ENTITY_NAME:28,attribute:29,attributeType:30,attributeName:31,attributeKeyTypeList:32,attributeComment:33,ATTRIBUTE_WORD:34,attributeKeyType:35,COMMA:36,ATTRIBUTE_KEY:37,COMMENT:38,cardinality:39,relType:40,ZERO_OR_ONE:41,ZERO_OR_MORE:42,ONE_OR_MORE:43,ONLY_ONE:44,MD_PARENT:45,NON_IDENTIFYING:46,IDENTIFYING:47,WORD:48,$accept:0,$end:1},terminals_:{2:"error",4:"ER_DIAGRAM",6:"EOF",8:"SPACE",10:"NEWLINE",13:":",15:"BLOCK_START",17:"BLOCK_STOP",18:"SQS",19:"SQE",20:"title",21:"title_value",22:"acc_title",23:"acc_title_value",24:"acc_descr",25:"acc_descr_value",26:"acc_descr_multiline_value",27:"ALPHANUM",28:"ENTITY_NAME",34:"ATTRIBUTE_WORD",36:"COMMA",37:"ATTRIBUTE_KEY",38:"COMMENT",41:"ZERO_OR_ONE",42:"ZERO_OR_MORE",43:"ONE_OR_MORE",44:"ONLY_ONE",45:"MD_PARENT",46:"NON_IDENTIFYING",47:"IDENTIFYING",48:"WORD"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,5],[9,4],[9,3],[9,1],[9,7],[9,6],[9,4],[9,2],[9,2],[9,2],[9,1],[11,1],[11,1],[16,1],[16,2],[29,2],[29,3],[29,3],[29,4],[30,1],[31,1],[32,1],[32,3],[35,1],[33,1],[12,3],[39,1],[39,1],[39,1],[39,1],[39,1],[40,1],[40,1],[14,1],[14,1],[14,1]],performAction:f(function(i,n,l,d,m,a,X){var s=a.length-1;switch(m){case 1:break;case 2:this.$=[];break;case 3:a[s-1].push(a[s]),this.$=a[s-1];break;case 4:case 5:this.$=a[s];break;case 6:case 7:this.$=[];break;case 8:d.addEntity(a[s-4]),d.addEntity(a[s-2]),d.addRelationship(a[s-4],a[s],a[s-2],a[s-3]);break;case 9:d.addEntity(a[s-3]),d.addAttributes(a[s-3],a[s-1]);break;case 10:d.addEntity(a[s-2]);break;case 11:d.addEntity(a[s]);break;case 12:d.addEntity(a[s-6],a[s-4]),d.addAttributes(a[s-6],a[s-1]);break;case 13:d.addEntity(a[s-5],a[s-3]);break;case 14:d.addEntity(a[s-3],a[s-1]);break;case 15:case 16:this.$=a[s].trim(),d.setAccTitle(this.$);break;case 17:case 18:this.$=a[s].trim(),d.setAccDescription(this.$);break;case 19:case 43:this.$=a[s];break;case 20:case 41:case 42:this.$=a[s].replace(/"/g,"");break;case 21:case 29:this.$=[a[s]];break;case 22:a[s].push(a[s-1]),this.$=a[s];break;case 23:this.$={attributeType:a[s-1],attributeName:a[s]};break;case 24:this.$={attributeType:a[s-2],attributeName:a[s-1],attributeKeyTypeList:a[s]};break;case 25:this.$={attributeType:a[s-2],attributeName:a[s-1],attributeComment:a[s]};break;case 26:this.$={attributeType:a[s-3],attributeName:a[s-2],attributeKeyTypeList:a[s-1],attributeComment:a[s]};break;case 27:case 28:case 31:this.$=a[s];break;case 30:a[s-2].push(a[s]),this.$=a[s-2];break;case 32:this.$=a[s].replace(/"/g,"");break;case 33:this.$={cardA:a[s],relType:a[s-1],cardB:a[s-2]};break;case 34:this.$=d.Cardinality.ZERO_OR_ONE;break;case 35:this.$=d.Cardinality.ZERO_OR_MORE;break;case 36:this.$=d.Cardinality.ONE_OR_MORE;break;case 37:this.$=d.Cardinality.ONLY_ONE;break;case 38:this.$=d.Cardinality.MD_PARENT;break;case 39:this.$=d.Identification.NON_IDENTIFYING;break;case 40:this.$=d.Identification.IDENTIFYING;break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:9,20:r,22:u,24:c,26:_,27:p,28:o},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:16,11:9,20:r,22:u,24:c,26:_,27:p,28:o},t(e,[2,5]),t(e,[2,6]),t(e,[2,11],{12:17,39:20,15:[1,18],18:[1,19],41:h,42:k,43:g,44:E,45:b}),{21:[1,26]},{23:[1,27]},{25:[1,28]},t(e,[2,18]),t(y,[2,19]),t(y,[2,20]),t(e,[2,4]),{11:29,27:p,28:o},{16:30,17:[1,31],29:32,30:33,34:x},{11:35,27:p,28:o},{40:36,46:[1,37],47:[1,38]},t(O,[2,34]),t(O,[2,35]),t(O,[2,36]),t(O,[2,37]),t(O,[2,38]),t(e,[2,15]),t(e,[2,16]),t(e,[2,17]),{13:[1,39]},{17:[1,40]},t(e,[2,10]),{16:41,17:[2,21],29:32,30:33,34:x},{31:42,34:[1,43]},{34:[2,27]},{19:[1,44]},{39:45,41:h,42:k,43:g,44:E,45:b},t(Y,[2,39]),t(Y,[2,40]),{14:46,27:[1,49],28:[1,48],48:[1,47]},t(e,[2,9]),{17:[2,22]},t(Z,[2,23],{32:50,33:51,35:52,37:W,38:v}),t([17,34,37,38],[2,28]),t(e,[2,14],{15:[1,55]}),t([27,28],[2,33]),t(e,[2,8]),t(e,[2,41]),t(e,[2,42]),t(e,[2,43]),t(Z,[2,24],{33:56,36:[1,57],38:v}),t(Z,[2,25]),t(S,[2,29]),t(Z,[2,32]),t(S,[2,31]),{16:58,17:[1,59],29:32,30:33,34:x},t(Z,[2,26]),{35:60,37:W},{17:[1,61]},t(e,[2,13]),t(S,[2,30]),t(e,[2,12])],defaultActions:{34:[2,27],41:[2,22]},parseError:f(function(i,n){if(n.recoverable)this.trace(i);else{var l=new Error(i);throw l.hash=n,l}},"parseError"),parse:f(function(i){var n=this,l=[0],d=[],m=[null],a=[],X=this.table,s="",j=0,dt=0,ft=0,Zt=2,ut=1,Ft=a.slice.call(arguments,1),A=Object.create(this.lexer),H={yy:{}};for(var tt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,tt)&&(H.yy[tt]=this.yy[tt]);A.setInput(i,H.yy),H.yy.lexer=A,H.yy.parser=this,typeof A.yylloc=="undefined"&&(A.yylloc={});var et=A.yylloc;a.push(et);var Wt=A.options&&A.options.ranges;typeof H.yy.parseError=="function"?this.parseError=H.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function Ut(D){l.length=l.length-2*D,m.length=m.length-D,a.length=a.length-D}f(Ut,"popStack");function pt(){var D;return D=d.pop()||A.lex()||ut,typeof D!="number"&&(D instanceof Array&&(d=D,D=d.pop()),D=n.symbols_[D]||D),D}f(pt,"lex");for(var w,rt,z,B,ge,at,V={},q,U,yt,J;;){if(z=l[l.length-1],this.defaultActions[z]?B=this.defaultActions[z]:((w===null||typeof w=="undefined")&&(w=pt()),B=X[z]&&X[z][w]),typeof B=="undefined"||!B.length||!B[0]){var it="";J=[];for(q in X[z])this.terminals_[q]&&q>Zt&&J.push("'"+this.terminals_[q]+"'");A.showPosition?it="Parse error on line "+(j+1)+`:
`+A.showPosition()+`
Expecting `+J.join(", ")+", got '"+(this.terminals_[w]||w)+"'":it="Parse error on line "+(j+1)+": Unexpected "+(w==ut?"end of input":"'"+(this.terminals_[w]||w)+"'"),this.parseError(it,{text:A.match,token:this.terminals_[w]||w,line:A.yylineno,loc:et,expected:J})}if(B[0]instanceof Array&&B.length>1)throw new Error("Parse Error: multiple actions possible at state: "+z+", token: "+w);switch(B[0]){case 1:l.push(w),m.push(A.yytext),a.push(A.yylloc),l.push(B[1]),w=null,rt?(w=rt,rt=null):(dt=A.yyleng,s=A.yytext,j=A.yylineno,et=A.yylloc,ft>0&&ft--);break;case 2:if(U=this.productions_[B[1]][1],V.$=m[m.length-U],V._$={first_line:a[a.length-(U||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(U||1)].first_column,last_column:a[a.length-1].last_column},Wt&&(V._$.range=[a[a.length-(U||1)].range[0],a[a.length-1].range[1]]),at=this.performAction.apply(V,[s,dt,j,H.yy,B[1],m,a].concat(Ft)),typeof at!="undefined")return at;U&&(l=l.slice(0,-1*U*2),m=m.slice(0,-1*U),a=a.slice(0,-1*U)),l.push(this.productions_[B[1]][0]),m.push(V.$),a.push(V._$),yt=X[l[l.length-2]][l[l.length-1]],l.push(yt);break;case 3:return!0}}return!0},"parse")},T=function(){var I={EOF:1,parseError:f(function(n,l){if(this.yy.parser)this.yy.parser.parseError(n,l);else throw new Error(n)},"parseError"),setInput:f(function(i,n){return this.yy=n||this.yy||{},this._input=i,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:f(function(){var i=this._input[0];this.yytext+=i,this.yyleng++,this.offset++,this.match+=i,this.matched+=i;var n=i.match(/(?:\r\n?|\n).*/g);return n?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),i},"input"),unput:f(function(i){var n=i.length,l=i.split(/(?:\r\n?|\n)/g);this._input=i+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-n),this.offset-=n;var d=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),l.length-1&&(this.yylineno-=l.length-1);var m=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:l?(l.length===d.length?this.yylloc.first_column:0)+d[d.length-l.length].length-l[0].length:this.yylloc.first_column-n},this.options.ranges&&(this.yylloc.range=[m[0],m[0]+this.yyleng-n]),this.yyleng=this.yytext.length,this},"unput"),more:f(function(){return this._more=!0,this},"more"),reject:f(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:f(function(i){this.unput(this.match.slice(i))},"less"),pastInput:f(function(){var i=this.matched.substr(0,this.matched.length-this.match.length);return(i.length>20?"...":"")+i.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:f(function(){var i=this.match;return i.length<20&&(i+=this._input.substr(0,20-i.length)),(i.substr(0,20)+(i.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:f(function(){var i=this.pastInput(),n=new Array(i.length+1).join("-");return i+this.upcomingInput()+`
`+n+"^"},"showPosition"),test_match:f(function(i,n){var l,d,m;if(this.options.backtrack_lexer&&(m={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(m.yylloc.range=this.yylloc.range.slice(0))),d=i[0].match(/(?:\r\n?|\n).*/g),d&&(this.yylineno+=d.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:d?d[d.length-1].length-d[d.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+i[0].length},this.yytext+=i[0],this.match+=i[0],this.matches=i,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(i[0].length),this.matched+=i[0],l=this.performAction.call(this,this.yy,this,n,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),l)return l;if(this._backtrack){for(var a in m)this[a]=m[a];return!1}return!1},"test_match"),next:f(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var i,n,l,d;this._more||(this.yytext="",this.match="");for(var m=this._currentRules(),a=0;a<m.length;a++)if(l=this._input.match(this.rules[m[a]]),l&&(!n||l[0].length>n[0].length)){if(n=l,d=a,this.options.backtrack_lexer){if(i=this.test_match(l,m[a]),i!==!1)return i;if(this._backtrack){n=!1;continue}else return!1}else if(!this.options.flex)break}return n?(i=this.test_match(n,m[d]),i!==!1?i:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:f(function(){var n=this.next();return n||this.lex()},"lex"),begin:f(function(n){this.conditionStack.push(n)},"begin"),popState:f(function(){var n=this.conditionStack.length-1;return n>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:f(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:f(function(n){return n=this.conditionStack.length-1-Math.abs(n||0),n>=0?this.conditionStack[n]:"INITIAL"},"topState"),pushState:f(function(n){this.begin(n)},"pushState"),stateStackSize:f(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:f(function(n,l,d,m){var a=m;switch(d){case 0:return this.begin("acc_title"),22;break;case 1:return this.popState(),"acc_title_value";break;case 2:return this.begin("acc_descr"),24;break;case 3:return this.popState(),"acc_descr_value";break;case 4:this.begin("acc_descr_multiline");break;case 5:this.popState();break;case 6:return"acc_descr_multiline_value";case 7:return 10;case 8:break;case 9:return 8;case 10:return 28;case 11:return 48;case 12:return 4;case 13:return this.begin("block"),15;break;case 14:return 36;case 15:break;case 16:return 37;case 17:return 34;case 18:return 34;case 19:return 38;case 20:break;case 21:return this.popState(),17;break;case 22:return l.yytext[0];case 23:return 18;case 24:return 19;case 25:return 41;case 26:return 43;case 27:return 43;case 28:return 43;case 29:return 41;case 30:return 41;case 31:return 42;case 32:return 42;case 33:return 42;case 34:return 42;case 35:return 42;case 36:return 43;case 37:return 42;case 38:return 43;case 39:return 44;case 40:return 44;case 41:return 44;case 42:return 44;case 43:return 41;case 44:return 42;case 45:return 43;case 46:return 45;case 47:return 46;case 48:return 47;case 49:return 47;case 50:return 46;case 51:return 46;case 52:return 46;case 53:return 27;case 54:return l.yytext[0];case 55:return 6}},"anonymous"),rules:[/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:[\s]+)/i,/^(?:"[^"%\r\n\v\b\\]+")/i,/^(?:"[^"]*")/i,/^(?:erDiagram\b)/i,/^(?:\{)/i,/^(?:,)/i,/^(?:\s+)/i,/^(?:\b((?:PK)|(?:FK)|(?:UK))\b)/i,/^(?:(.*?)[~](.*?)*[~])/i,/^(?:[\*A-Za-z_][A-Za-z0-9\-_\[\]\(\)]*)/i,/^(?:"[^"]*")/i,/^(?:[\n]+)/i,/^(?:\})/i,/^(?:.)/i,/^(?:\[)/i,/^(?:\])/i,/^(?:one or zero\b)/i,/^(?:one or more\b)/i,/^(?:one or many\b)/i,/^(?:1\+)/i,/^(?:\|o\b)/i,/^(?:zero or one\b)/i,/^(?:zero or more\b)/i,/^(?:zero or many\b)/i,/^(?:0\+)/i,/^(?:\}o\b)/i,/^(?:many\(0\))/i,/^(?:many\(1\))/i,/^(?:many\b)/i,/^(?:\}\|)/i,/^(?:one\b)/i,/^(?:only one\b)/i,/^(?:1\b)/i,/^(?:\|\|)/i,/^(?:o\|)/i,/^(?:o\{)/i,/^(?:\|\{)/i,/^(?:\s*u\b)/i,/^(?:\.\.)/i,/^(?:--)/i,/^(?:to\b)/i,/^(?:optionally to\b)/i,/^(?:\.-)/i,/^(?:-\.)/i,/^(?:[A-Za-z_][A-Za-z0-9\-_]*)/i,/^(?:.)/i,/^(?:$)/i],conditions:{acc_descr_multiline:{rules:[5,6],inclusive:!1},acc_descr:{rules:[3],inclusive:!1},acc_title:{rules:[1],inclusive:!1},block:{rules:[14,15,16,17,18,19,20,21,22],inclusive:!1},INITIAL:{rules:[0,2,4,7,8,9,10,11,12,13,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55],inclusive:!0}}};return I}();N.lexer=T;function L(){this.yy={}}return f(L,"Parser"),L.prototype=N,N.Parser=L,new L}();lt.parser=lt;var qt=lt,K=new Map,ht=[],Jt={ZERO_OR_ONE:"ZERO_OR_ONE",ZERO_OR_MORE:"ZERO_OR_MORE",ONE_OR_MORE:"ONE_OR_MORE",ONLY_ONE:"ONLY_ONE",MD_PARENT:"MD_PARENT"},$t={NON_IDENTIFYING:"NON_IDENTIFYING",IDENTIFYING:"IDENTIFYING"},Ct=f(function(t,e=void 0){return K.has(t)?!K.get(t).alias&&e&&(K.get(t).alias=e,G.info(`Add alias '${e}' to entity '${t}'`)):(K.set(t,{attributes:[],alias:e}),G.info("Added new entity :",t)),K.get(t)},"addEntity"),te=f(()=>K,"getEntities"),ee=f(function(t,e){let r=Ct(t),u;for(u=e.length-1;u>=0;u--)r.attributes.push(e[u]),G.debug("Added attribute ",e[u].attributeName)},"addAttributes"),re=f(function(t,e,r,u){let c={entityA:t,roleA:e,entityB:r,relSpec:u};ht.push(c),G.debug("Added new relationship :",c)},"addRelationship"),ae=f(()=>ht,"getRelationships"),ie=f(function(){K=new Map,ht=[],kt()},"clear"),ne={Cardinality:Jt,Identification:$t,getConfig:f(()=>F().er,"getConfig"),addEntity:Ct,addAttributes:ee,getEntities:te,addRelationship:re,getRelationships:ae,clear:ie,setAccTitle:gt,getAccTitle:Et,setAccDescription:bt,getAccDescription:xt,setDiagramTitle:Rt,getDiagramTitle:Ot},C={ONLY_ONE_START:"ONLY_ONE_START",ONLY_ONE_END:"ONLY_ONE_END",ZERO_OR_ONE_START:"ZERO_OR_ONE_START",ZERO_OR_ONE_END:"ZERO_OR_ONE_END",ONE_OR_MORE_START:"ONE_OR_MORE_START",ONE_OR_MORE_END:"ONE_OR_MORE_END",ZERO_OR_MORE_START:"ZERO_OR_MORE_START",ZERO_OR_MORE_END:"ZERO_OR_MORE_END",MD_PARENT_END:"MD_PARENT_END",MD_PARENT_START:"MD_PARENT_START"},se=f(function(t,e){let r;t.append("defs").append("marker").attr("id",C.MD_PARENT_START).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",C.MD_PARENT_END).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",C.ONLY_ONE_START).attr("refX",0).attr("refY",9).attr("markerWidth",18).attr("markerHeight",18).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M9,0 L9,18 M15,0 L15,18"),t.append("defs").append("marker").attr("id",C.ONLY_ONE_END).attr("refX",18).attr("refY",9).attr("markerWidth",18).attr("markerHeight",18).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M3,0 L3,18 M9,0 L9,18"),r=t.append("defs").append("marker").attr("id",C.ZERO_OR_ONE_START).attr("refX",0).attr("refY",9).attr("markerWidth",30).attr("markerHeight",18).attr("orient","auto"),r.append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",21).attr("cy",9).attr("r",6),r.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M9,0 L9,18"),r=t.append("defs").append("marker").attr("id",C.ZERO_OR_ONE_END).attr("refX",30).attr("refY",9).attr("markerWidth",30).attr("markerHeight",18).attr("orient","auto"),r.append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",9).attr("cy",9).attr("r",6),r.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M21,0 L21,18"),t.append("defs").append("marker").attr("id",C.ONE_OR_MORE_START).attr("refX",18).attr("refY",18).attr("markerWidth",45).attr("markerHeight",36).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"),t.append("defs").append("marker").attr("id",C.ONE_OR_MORE_END).attr("refX",27).attr("refY",18).attr("markerWidth",45).attr("markerHeight",36).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18"),r=t.append("defs").append("marker").attr("id",C.ZERO_OR_MORE_START).attr("refX",18).attr("refY",18).attr("markerWidth",57).attr("markerHeight",36).attr("orient","auto"),r.append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",48).attr("cy",18).attr("r",6),r.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M0,18 Q18,0 36,18 Q18,36 0,18"),r=t.append("defs").append("marker").attr("id",C.ZERO_OR_MORE_END).attr("refX",39).attr("refY",18).attr("markerWidth",57).attr("markerHeight",36).attr("orient","auto"),r.append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",9).attr("cy",18).attr("r",6),r.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M21,18 Q39,0 57,18 Q39,36 21,18")},"insertMarkers"),P={ERMarkers:C,insertMarkers:se},oe=/[^\dA-Za-z](\W)*/g,R={},Q=new Map,le=f(function(t){let e=Object.keys(t);for(let r of e)R[r]=t[r]},"setConf"),ce=f((t,e,r)=>{let u=R.entityPadding/3,c=R.entityPadding/3,_=R.fontSize*.85,p=e.node().getBBox(),o=[],h=!1,k=!1,g=0,E=0,b=0,y=0,x=p.height+u*2,O=1;r.forEach(v=>{v.attributeKeyTypeList!==void 0&&v.attributeKeyTypeList.length>0&&(h=!0),v.attributeComment!==void 0&&(k=!0)}),r.forEach(v=>{let S=`${e.node().id}-attr-${O}`,N=0,T=_t(v.attributeType),L=t.append("text").classed("er entityLabel",!0).attr("id",`${S}-type`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",F().fontFamily).style("font-size",_+"px").text(T),I=t.append("text").classed("er entityLabel",!0).attr("id",`${S}-name`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",F().fontFamily).style("font-size",_+"px").text(v.attributeName),i={};i.tn=L,i.nn=I;let n=L.node().getBBox(),l=I.node().getBBox();if(g=Math.max(g,n.width),E=Math.max(E,l.width),N=Math.max(n.height,l.height),h){let d=v.attributeKeyTypeList!==void 0?v.attributeKeyTypeList.join(","):"",m=t.append("text").classed("er entityLabel",!0).attr("id",`${S}-key`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",F().fontFamily).style("font-size",_+"px").text(d);i.kn=m;let a=m.node().getBBox();b=Math.max(b,a.width),N=Math.max(N,a.height)}if(k){let d=t.append("text").classed("er entityLabel",!0).attr("id",`${S}-comment`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",F().fontFamily).style("font-size",_+"px").text(v.attributeComment||"");i.cn=d;let m=d.node().getBBox();y=Math.max(y,m.width),N=Math.max(N,m.height)}i.height=N,o.push(i),x+=N+u*2,O+=1});let Y=4;h&&(Y+=2),k&&(Y+=2);let Z=g+E+b+y,W={width:Math.max(R.minEntityWidth,Math.max(p.width+R.entityPadding*2,Z+c*Y)),height:r.length>0?x:Math.max(R.minEntityHeight,p.height+R.entityPadding*2)};if(r.length>0){let v=Math.max(0,(W.width-Z-c*Y)/(Y/2));e.attr("transform","translate("+W.width/2+","+(u+p.height/2)+")");let S=p.height+u*2,N="attributeBoxOdd";o.forEach(T=>{let L=S+u+T.height/2;T.tn.attr("transform","translate("+c+","+L+")");let I=t.insert("rect","#"+T.tn.node().id).classed(`er ${N}`,!0).attr("x",0).attr("y",S).attr("width",g+c*2+v).attr("height",T.height+u*2),i=parseFloat(I.attr("x"))+parseFloat(I.attr("width"));T.nn.attr("transform","translate("+(i+c)+","+L+")");let n=t.insert("rect","#"+T.nn.node().id).classed(`er ${N}`,!0).attr("x",i).attr("y",S).attr("width",E+c*2+v).attr("height",T.height+u*2),l=parseFloat(n.attr("x"))+parseFloat(n.attr("width"));if(h){T.kn.attr("transform","translate("+(l+c)+","+L+")");let d=t.insert("rect","#"+T.kn.node().id).classed(`er ${N}`,!0).attr("x",l).attr("y",S).attr("width",b+c*2+v).attr("height",T.height+u*2);l=parseFloat(d.attr("x"))+parseFloat(d.attr("width"))}k&&(T.cn.attr("transform","translate("+(l+c)+","+L+")"),t.insert("rect","#"+T.cn.node().id).classed(`er ${N}`,"true").attr("x",l).attr("y",S).attr("width",y+c*2+v).attr("height",T.height+u*2)),S+=T.height+u*2,N=N==="attributeBoxOdd"?"attributeBoxEven":"attributeBoxOdd"})}else W.height=Math.max(R.minEntityHeight,x),e.attr("transform","translate("+W.width/2+","+W.height/2+")");return W},"drawAttributes"),he=f(function(t,e,r){let u=[...e.keys()],c;return u.forEach(function(_){var x;let p=Yt(_,"entity");Q.set(_,p);let o=t.append("g").attr("id",p);c=c===void 0?p:c;let h="text-"+p,k=o.append("text").classed("er entityLabel",!0).attr("id",h).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","middle").style("font-family",F().fontFamily).style("font-size",R.fontSize+"px").text((x=e.get(_).alias)!=null?x:_),{width:g,height:E}=ce(o,k,e.get(_).attributes),y=o.insert("rect","#"+h).classed("er entityBox",!0).attr("x",0).attr("y",0).attr("width",g).attr("height",E).node().getBBox();r.setNode(p,{width:y.width,height:y.height,shape:"rect",id:p})}),c},"drawEntities"),de=f(function(t,e){e.nodes().forEach(function(r){r!==void 0&&e.node(r)!==void 0&&t.select("#"+r).attr("transform","translate("+(e.node(r).x-e.node(r).width/2)+","+(e.node(r).y-e.node(r).height/2)+" )")})},"adjustEntities"),Pt=f(function(t){return(t.entityA+t.roleA+t.entityB).replace(/\s/g,"")},"getEdgeName"),fe=f(function(t,e){return t.forEach(function(r){e.setEdge(Q.get(r.entityA),Q.get(r.entityB),{relationship:r},Pt(r))}),t},"addRelationships"),Bt=0,ue=f(function(t,e,r,u,c){Bt++;let _=r.edge(Q.get(e.entityA),Q.get(e.entityB),Pt(e)),p=Nt().x(function(O){return O.x}).y(function(O){return O.y}).curve(Tt),o=t.insert("path","#"+u).classed("er relationshipLine",!0).attr("d",p(_.points)).style("stroke",R.stroke).style("fill","none");e.relSpec.relType===c.db.Identification.NON_IDENTIFYING&&o.attr("stroke-dasharray","8,8");let h="";switch(R.arrowMarkerAbsolute&&(h=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,h=h.replace(/\(/g,"\\("),h=h.replace(/\)/g,"\\)")),e.relSpec.cardA){case c.db.Cardinality.ZERO_OR_ONE:o.attr("marker-end","url("+h+"#"+P.ERMarkers.ZERO_OR_ONE_END+")");break;case c.db.Cardinality.ZERO_OR_MORE:o.attr("marker-end","url("+h+"#"+P.ERMarkers.ZERO_OR_MORE_END+")");break;case c.db.Cardinality.ONE_OR_MORE:o.attr("marker-end","url("+h+"#"+P.ERMarkers.ONE_OR_MORE_END+")");break;case c.db.Cardinality.ONLY_ONE:o.attr("marker-end","url("+h+"#"+P.ERMarkers.ONLY_ONE_END+")");break;case c.db.Cardinality.MD_PARENT:o.attr("marker-end","url("+h+"#"+P.ERMarkers.MD_PARENT_END+")");break}switch(e.relSpec.cardB){case c.db.Cardinality.ZERO_OR_ONE:o.attr("marker-start","url("+h+"#"+P.ERMarkers.ZERO_OR_ONE_START+")");break;case c.db.Cardinality.ZERO_OR_MORE:o.attr("marker-start","url("+h+"#"+P.ERMarkers.ZERO_OR_MORE_START+")");break;case c.db.Cardinality.ONE_OR_MORE:o.attr("marker-start","url("+h+"#"+P.ERMarkers.ONE_OR_MORE_START+")");break;case c.db.Cardinality.ONLY_ONE:o.attr("marker-start","url("+h+"#"+P.ERMarkers.ONLY_ONE_START+")");break;case c.db.Cardinality.MD_PARENT:o.attr("marker-start","url("+h+"#"+P.ERMarkers.MD_PARENT_START+")");break}let k=o.node().getTotalLength(),g=o.node().getPointAtLength(k*.5),E="rel"+Bt,b=e.roleA.split(/<br ?\/>/g),y=t.append("text").classed("er relationshipLabel",!0).attr("id",E).attr("x",g.x).attr("y",g.y).style("text-anchor","middle").style("dominant-baseline","middle").style("font-family",F().fontFamily).style("font-size",R.fontSize+"px");if(b.length==1)y.text(e.roleA);else{let O=-(b.length-1)*.5;b.forEach((Y,Z)=>{y.append("tspan").attr("x",g.x).attr("dy",`${Z===0?O:1}em`).text(Y)})}let x=y.node().getBBox();t.insert("rect","#"+E).classed("er relationshipLabelBox",!0).attr("x",g.x-x.width/2).attr("y",g.y-x.height/2).attr("width",x.width).attr("height",x.height)},"drawRelationshipFromLayout"),pe=f(function(t,e,r,u){R=F().er,G.info("Drawing ER diagram");let c=F().securityLevel,_;c==="sandbox"&&(_=$("#i"+e));let o=(c==="sandbox"?$(_.nodes()[0].contentDocument.body):$("body")).select(`[id='${e}']`);P.insertMarkers(o,R);let h;h=new vt({multigraph:!0,directed:!0,compound:!1}).setGraph({rankdir:R.layoutDirection,marginx:20,marginy:20,nodesep:100,edgesep:100,ranksep:100}).setDefaultEdgeLabel(function(){return{}});let k=he(o,u.db.getEntities(),h),g=fe(u.db.getRelationships(),h);Mt(h),de(o,h),g.forEach(function(O){ue(o,O,h,k,u)});let E=R.diagramPadding;At.insertTitle(o,"entityTitleText",R.titleTopMargin,u.db.getDiagramTitle());let b=o.node().getBBox(),y=b.width+E*2,x=b.height+E*2;mt(o,x,y,R.useMaxWidth),o.attr("viewBox",`${b.x-E} ${b.y-E} ${y} ${x}`)},"draw"),ye="28e9f9db-3c8d-5aa5-9faf-44286ae5937c";function Yt(t="",e=""){let r=t.replace(oe,"");return`${ct(e)}${ct(r)}${ot(t,ye)}`}f(Yt,"generateId");function ct(t=""){return t.length>0?`${t}-`:""}f(ct,"strWithHyphen");var _e={setConf:le,draw:pe},me=f(t=>`
  .entityBox {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
  }

  .attributeBoxOdd {
    fill: ${t.attributeBackgroundColorOdd};
    stroke: ${t.nodeBorder};
  }

  .attributeBoxEven {
    fill:  ${t.attributeBackgroundColorEven};
    stroke: ${t.nodeBorder};
  }

  .relationshipLabelBox {
    fill: ${t.tertiaryColor};
    opacity: 0.7;
    background-color: ${t.tertiaryColor};
      rect {
        opacity: 0.5;
      }
  }

    .relationshipLine {
      stroke: ${t.lineColor};
    }

  .entityTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor};
  }    
  #MD_PARENT_START {
    fill: #f5f5f5 !important;
    stroke: ${t.lineColor} !important;
    stroke-width: 1;
  }
  #MD_PARENT_END {
    fill: #f5f5f5 !important;
    stroke: ${t.lineColor} !important;
    stroke-width: 1;
  }
  
`,"getStyles"),ke=me,We={parser:qt,db:ne,renderer:_e,styles:ke};export{We as diagram};
