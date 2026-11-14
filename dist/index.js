"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var i=s(function(g,u){
var y=require('@stdlib/stats-strided-variancetk/dist').ndarray,f=require('@stdlib/math-base-special-sqrt/dist');function k(e,r,t,a,o){return f(y(e,r,t,a,o))}u.exports=k
});var v=s(function(h,n){
var p=require('@stdlib/strided-base-stride2offset/dist'),x=i();function l(e,r,t,a){return x(e,r,t,a,p(e,a))}n.exports=l
});var c=s(function(j,d){
var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=v(),O=i();m(q,"ndarray",O);d.exports=q
});var R=c();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
