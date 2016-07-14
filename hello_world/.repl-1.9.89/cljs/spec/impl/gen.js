// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__3207__auto__,writer__3208__auto__,opt__3209__auto__){
return cljs.core._write.call(null,writer__3208__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__3511__auto__ = [];
var len__3508__auto___5741 = arguments.length;
var i__3509__auto___5742 = (0);
while(true){
if((i__3509__auto___5742 < len__3508__auto___5741)){
args__3511__auto__.push((arguments[i__3509__auto___5742]));

var G__5743 = (i__3509__auto___5742 + (1));
i__3509__auto___5742 = G__5743;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq5740){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5740));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__3511__auto__ = [];
var len__3508__auto___5745 = arguments.length;
var i__3509__auto___5746 = (0);
while(true){
if((i__3509__auto___5746 < len__3508__auto___5745)){
args__3511__auto__.push((arguments[i__3509__auto___5746]));

var G__5747 = (i__3509__auto___5746 + (1));
i__3509__auto___5746 = G__5747;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq5744){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5744));
});

var g_QMARK__5748 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_5749 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__5748){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__5748))
,null));
var mkg_5750 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__5748,g_5749){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__5748,g_5749))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__5748,g_5749,mkg_5750){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__5748).call(null,x);
});})(g_QMARK__5748,g_5749,mkg_5750))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__5748,g_5749,mkg_5750){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_5750).call(null,gfn);
});})(g_QMARK__5748,g_5749,mkg_5750))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__5748,g_5749,mkg_5750){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_5749).call(null,generator);
});})(g_QMARK__5748,g_5749,mkg_5750))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__5749__auto___5768 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__5749__auto___5768){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__3511__auto__ = [];
var len__3508__auto___5769 = arguments.length;
var i__3509__auto___5770 = (0);
while(true){
if((i__3509__auto___5770 < len__3508__auto___5769)){
args__3511__auto__.push((arguments[i__3509__auto___5770]));

var G__5771 = (i__3509__auto___5770 + (1));
i__3509__auto___5770 = G__5771;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___5768))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___5768){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___5768),args);
});})(g__5749__auto___5768))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__5749__auto___5768){
return (function (seq5751){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5751));
});})(g__5749__auto___5768))
;


var g__5749__auto___5772 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__5749__auto___5772){
return (function cljs$spec$impl$gen$list(var_args){
var args__3511__auto__ = [];
var len__3508__auto___5773 = arguments.length;
var i__3509__auto___5774 = (0);
while(true){
if((i__3509__auto___5774 < len__3508__auto___5773)){
args__3511__auto__.push((arguments[i__3509__auto___5774]));

var G__5775 = (i__3509__auto___5774 + (1));
i__3509__auto___5774 = G__5775;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___5772))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___5772){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___5772),args);
});})(g__5749__auto___5772))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__5749__auto___5772){
return (function (seq5752){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5752));
});})(g__5749__auto___5772))
;


var g__5749__auto___5776 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__5749__auto___5776){
return (function cljs$spec$impl$gen$map(var_args){
var args__3511__auto__ = [];
var len__3508__auto___5777 = arguments.length;
var i__3509__auto___5778 = (0);
while(true){
if((i__3509__auto___5778 < len__3508__auto___5777)){
args__3511__auto__.push((arguments[i__3509__auto___5778]));

var G__5779 = (i__3509__auto___5778 + (1));
i__3509__auto___5778 = G__5779;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___5776))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___5776){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___5776),args);
});})(g__5749__auto___5776))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__5749__auto___5776){
return (function (seq5753){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5753));
});})(g__5749__auto___5776))
;


var g__5749__auto___5780 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__5749__auto___5780){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__3511__auto__ = [];
var len__3508__auto___5781 = arguments.length;
var i__3509__auto___5782 = (0);
while(true){
if((i__3509__auto___5782 < len__3508__auto___5781)){
args__3511__auto__.push((arguments[i__3509__auto___5782]));

var G__5783 = (i__3509__auto___5782 + (1));
i__3509__auto___5782 = G__5783;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___5780))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___5780){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___5780),args);
});})(g__5749__auto___5780))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__5749__auto___5780){
return (function (seq5754){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5754));
});})(g__5749__auto___5780))
;


var g__5749__auto___5784 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__5749__auto___5784){
return (function cljs$spec$impl$gen$set(var_args){
var args__3511__auto__ = [];
var len__3508__auto___5785 = arguments.length;
var i__3509__auto___5786 = (0);
while(true){
if((i__3509__auto___5786 < len__3508__auto___5785)){
args__3511__auto__.push((arguments[i__3509__auto___5786]));

var G__5787 = (i__3509__auto___5786 + (1));
i__3509__auto___5786 = G__5787;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___5784))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___5784){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___5784),args);
});})(g__5749__auto___5784))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__5749__auto___5784){
return (function (seq5755){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5755));
});})(g__5749__auto___5784))
;


var g__5749__auto___5788 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__5749__auto___5788){
return (function cljs$spec$impl$gen$vector(var_args){
var args__3511__auto__ = [];
var len__3508__auto___5789 = arguments.length;
var i__3509__auto___5790 = (0);
while(true){
if((i__3509__auto___5790 < len__3508__auto___5789)){
args__3511__auto__.push((arguments[i__3509__auto___5790]));

var G__5791 = (i__3509__auto___5790 + (1));
i__3509__auto___5790 = G__5791;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___5788))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___5788){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___5788),args);
});})(g__5749__auto___5788))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__5749__auto___5788){
return (function (seq5756){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5756));
});})(g__5749__auto___5788))
;


var g__5749__auto___5792 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__5749__auto___5792){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__3511__auto__ = [];
var len__3508__auto___5793 = arguments.length;
var i__3509__auto___5794 = (0);
while(true){
if((i__3509__auto___5794 < len__3508__auto___5793)){
args__3511__auto__.push((arguments[i__3509__auto___5794]));

var G__5795 = (i__3509__auto___5794 + (1));
i__3509__auto___5794 = G__5795;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___5792))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___5792){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___5792),args);
});})(g__5749__auto___5792))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__5749__auto___5792){
return (function (seq5757){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5757));
});})(g__5749__auto___5792))
;


var g__5749__auto___5796 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__5749__auto___5796){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__3511__auto__ = [];
var len__3508__auto___5797 = arguments.length;
var i__3509__auto___5798 = (0);
while(true){
if((i__3509__auto___5798 < len__3508__auto___5797)){
args__3511__auto__.push((arguments[i__3509__auto___5798]));

var G__5799 = (i__3509__auto___5798 + (1));
i__3509__auto___5798 = G__5799;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___5796))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___5796){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___5796),args);
});})(g__5749__auto___5796))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__5749__auto___5796){
return (function (seq5758){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5758));
});})(g__5749__auto___5796))
;


var g__5749__auto___5800 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__5749__auto___5800){
return (function cljs$spec$impl$gen$elements(var_args){
var args__3511__auto__ = [];
var len__3508__auto___5801 = arguments.length;
var i__3509__auto___5802 = (0);
while(true){
if((i__3509__auto___5802 < len__3508__auto___5801)){
args__3511__auto__.push((arguments[i__3509__auto___5802]));

var G__5803 = (i__3509__auto___5802 + (1));
i__3509__auto___5802 = G__5803;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___5800))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___5800){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___5800),args);
});})(g__5749__auto___5800))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__5749__auto___5800){
return (function (seq5759){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5759));
});})(g__5749__auto___5800))
;


var g__5749__auto___5804 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__5749__auto___5804){
return (function cljs$spec$impl$gen$bind(var_args){
var args__3511__auto__ = [];
var len__3508__auto___5805 = arguments.length;
var i__3509__auto___5806 = (0);
while(true){
if((i__3509__auto___5806 < len__3508__auto___5805)){
args__3511__auto__.push((arguments[i__3509__auto___5806]));

var G__5807 = (i__3509__auto___5806 + (1));
i__3509__auto___5806 = G__5807;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___5804))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___5804){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___5804),args);
});})(g__5749__auto___5804))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__5749__auto___5804){
return (function (seq5760){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5760));
});})(g__5749__auto___5804))
;


var g__5749__auto___5808 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__5749__auto___5808){
return (function cljs$spec$impl$gen$choose(var_args){
var args__3511__auto__ = [];
var len__3508__auto___5809 = arguments.length;
var i__3509__auto___5810 = (0);
while(true){
if((i__3509__auto___5810 < len__3508__auto___5809)){
args__3511__auto__.push((arguments[i__3509__auto___5810]));

var G__5811 = (i__3509__auto___5810 + (1));
i__3509__auto___5810 = G__5811;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___5808))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___5808){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___5808),args);
});})(g__5749__auto___5808))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__5749__auto___5808){
return (function (seq5761){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5761));
});})(g__5749__auto___5808))
;


var g__5749__auto___5812 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__5749__auto___5812){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__3511__auto__ = [];
var len__3508__auto___5813 = arguments.length;
var i__3509__auto___5814 = (0);
while(true){
if((i__3509__auto___5814 < len__3508__auto___5813)){
args__3511__auto__.push((arguments[i__3509__auto___5814]));

var G__5815 = (i__3509__auto___5814 + (1));
i__3509__auto___5814 = G__5815;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___5812))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___5812){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___5812),args);
});})(g__5749__auto___5812))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__5749__auto___5812){
return (function (seq5762){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5762));
});})(g__5749__auto___5812))
;


var g__5749__auto___5816 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__5749__auto___5816){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__3511__auto__ = [];
var len__3508__auto___5817 = arguments.length;
var i__3509__auto___5818 = (0);
while(true){
if((i__3509__auto___5818 < len__3508__auto___5817)){
args__3511__auto__.push((arguments[i__3509__auto___5818]));

var G__5819 = (i__3509__auto___5818 + (1));
i__3509__auto___5818 = G__5819;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___5816))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___5816){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___5816),args);
});})(g__5749__auto___5816))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__5749__auto___5816){
return (function (seq5763){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5763));
});})(g__5749__auto___5816))
;


var g__5749__auto___5820 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__5749__auto___5820){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__3511__auto__ = [];
var len__3508__auto___5821 = arguments.length;
var i__3509__auto___5822 = (0);
while(true){
if((i__3509__auto___5822 < len__3508__auto___5821)){
args__3511__auto__.push((arguments[i__3509__auto___5822]));

var G__5823 = (i__3509__auto___5822 + (1));
i__3509__auto___5822 = G__5823;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___5820))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___5820){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___5820),args);
});})(g__5749__auto___5820))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__5749__auto___5820){
return (function (seq5764){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5764));
});})(g__5749__auto___5820))
;


var g__5749__auto___5824 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__5749__auto___5824){
return (function cljs$spec$impl$gen$sample(var_args){
var args__3511__auto__ = [];
var len__3508__auto___5825 = arguments.length;
var i__3509__auto___5826 = (0);
while(true){
if((i__3509__auto___5826 < len__3508__auto___5825)){
args__3511__auto__.push((arguments[i__3509__auto___5826]));

var G__5827 = (i__3509__auto___5826 + (1));
i__3509__auto___5826 = G__5827;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___5824))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___5824){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___5824),args);
});})(g__5749__auto___5824))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__5749__auto___5824){
return (function (seq5765){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5765));
});})(g__5749__auto___5824))
;


var g__5749__auto___5828 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__5749__auto___5828){
return (function cljs$spec$impl$gen$return(var_args){
var args__3511__auto__ = [];
var len__3508__auto___5829 = arguments.length;
var i__3509__auto___5830 = (0);
while(true){
if((i__3509__auto___5830 < len__3508__auto___5829)){
args__3511__auto__.push((arguments[i__3509__auto___5830]));

var G__5831 = (i__3509__auto___5830 + (1));
i__3509__auto___5830 = G__5831;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___5828))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___5828){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___5828),args);
});})(g__5749__auto___5828))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__5749__auto___5828){
return (function (seq5766){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5766));
});})(g__5749__auto___5828))
;


var g__5749__auto___5832 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__5749__auto___5832){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__3511__auto__ = [];
var len__3508__auto___5833 = arguments.length;
var i__3509__auto___5834 = (0);
while(true){
if((i__3509__auto___5834 < len__3508__auto___5833)){
args__3511__auto__.push((arguments[i__3509__auto___5834]));

var G__5835 = (i__3509__auto___5834 + (1));
i__3509__auto___5834 = G__5835;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5749__auto___5832))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5749__auto___5832){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5749__auto___5832),args);
});})(g__5749__auto___5832))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__5749__auto___5832){
return (function (seq5767){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5767));
});})(g__5749__auto___5832))
;

var g__5754__auto___5857 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__5754__auto___5857){
return (function cljs$spec$impl$gen$any(var_args){
var args__3511__auto__ = [];
var len__3508__auto___5858 = arguments.length;
var i__3509__auto___5859 = (0);
while(true){
if((i__3509__auto___5859 < len__3508__auto___5858)){
args__3511__auto__.push((arguments[i__3509__auto___5859]));

var G__5860 = (i__3509__auto___5859 + (1));
i__3509__auto___5859 = G__5860;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___5857))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___5857){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___5857);
});})(g__5754__auto___5857))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__5754__auto___5857){
return (function (seq5836){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5836));
});})(g__5754__auto___5857))
;


var g__5754__auto___5861 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__5754__auto___5861){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__3511__auto__ = [];
var len__3508__auto___5862 = arguments.length;
var i__3509__auto___5863 = (0);
while(true){
if((i__3509__auto___5863 < len__3508__auto___5862)){
args__3511__auto__.push((arguments[i__3509__auto___5863]));

var G__5864 = (i__3509__auto___5863 + (1));
i__3509__auto___5863 = G__5864;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___5861))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___5861){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___5861);
});})(g__5754__auto___5861))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__5754__auto___5861){
return (function (seq5837){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5837));
});})(g__5754__auto___5861))
;


var g__5754__auto___5865 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__5754__auto___5865){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__3511__auto__ = [];
var len__3508__auto___5866 = arguments.length;
var i__3509__auto___5867 = (0);
while(true){
if((i__3509__auto___5867 < len__3508__auto___5866)){
args__3511__auto__.push((arguments[i__3509__auto___5867]));

var G__5868 = (i__3509__auto___5867 + (1));
i__3509__auto___5867 = G__5868;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___5865))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___5865){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___5865);
});})(g__5754__auto___5865))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__5754__auto___5865){
return (function (seq5838){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5838));
});})(g__5754__auto___5865))
;


var g__5754__auto___5869 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__5754__auto___5869){
return (function cljs$spec$impl$gen$char(var_args){
var args__3511__auto__ = [];
var len__3508__auto___5870 = arguments.length;
var i__3509__auto___5871 = (0);
while(true){
if((i__3509__auto___5871 < len__3508__auto___5870)){
args__3511__auto__.push((arguments[i__3509__auto___5871]));

var G__5872 = (i__3509__auto___5871 + (1));
i__3509__auto___5871 = G__5872;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___5869))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___5869){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___5869);
});})(g__5754__auto___5869))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__5754__auto___5869){
return (function (seq5839){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5839));
});})(g__5754__auto___5869))
;


var g__5754__auto___5873 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__5754__auto___5873){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__3511__auto__ = [];
var len__3508__auto___5874 = arguments.length;
var i__3509__auto___5875 = (0);
while(true){
if((i__3509__auto___5875 < len__3508__auto___5874)){
args__3511__auto__.push((arguments[i__3509__auto___5875]));

var G__5876 = (i__3509__auto___5875 + (1));
i__3509__auto___5875 = G__5876;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___5873))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___5873){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___5873);
});})(g__5754__auto___5873))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__5754__auto___5873){
return (function (seq5840){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5840));
});})(g__5754__auto___5873))
;


var g__5754__auto___5877 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__5754__auto___5877){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__3511__auto__ = [];
var len__3508__auto___5878 = arguments.length;
var i__3509__auto___5879 = (0);
while(true){
if((i__3509__auto___5879 < len__3508__auto___5878)){
args__3511__auto__.push((arguments[i__3509__auto___5879]));

var G__5880 = (i__3509__auto___5879 + (1));
i__3509__auto___5879 = G__5880;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___5877))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___5877){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___5877);
});})(g__5754__auto___5877))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__5754__auto___5877){
return (function (seq5841){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5841));
});})(g__5754__auto___5877))
;


var g__5754__auto___5881 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__5754__auto___5881){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__3511__auto__ = [];
var len__3508__auto___5882 = arguments.length;
var i__3509__auto___5883 = (0);
while(true){
if((i__3509__auto___5883 < len__3508__auto___5882)){
args__3511__auto__.push((arguments[i__3509__auto___5883]));

var G__5884 = (i__3509__auto___5883 + (1));
i__3509__auto___5883 = G__5884;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___5881))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___5881){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___5881);
});})(g__5754__auto___5881))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__5754__auto___5881){
return (function (seq5842){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5842));
});})(g__5754__auto___5881))
;


var g__5754__auto___5885 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__5754__auto___5885){
return (function cljs$spec$impl$gen$double(var_args){
var args__3511__auto__ = [];
var len__3508__auto___5886 = arguments.length;
var i__3509__auto___5887 = (0);
while(true){
if((i__3509__auto___5887 < len__3508__auto___5886)){
args__3511__auto__.push((arguments[i__3509__auto___5887]));

var G__5888 = (i__3509__auto___5887 + (1));
i__3509__auto___5887 = G__5888;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___5885))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___5885){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___5885);
});})(g__5754__auto___5885))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__5754__auto___5885){
return (function (seq5843){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5843));
});})(g__5754__auto___5885))
;


var g__5754__auto___5889 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__5754__auto___5889){
return (function cljs$spec$impl$gen$int(var_args){
var args__3511__auto__ = [];
var len__3508__auto___5890 = arguments.length;
var i__3509__auto___5891 = (0);
while(true){
if((i__3509__auto___5891 < len__3508__auto___5890)){
args__3511__auto__.push((arguments[i__3509__auto___5891]));

var G__5892 = (i__3509__auto___5891 + (1));
i__3509__auto___5891 = G__5892;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___5889))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___5889){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___5889);
});})(g__5754__auto___5889))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__5754__auto___5889){
return (function (seq5844){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5844));
});})(g__5754__auto___5889))
;


var g__5754__auto___5893 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__5754__auto___5893){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__3511__auto__ = [];
var len__3508__auto___5894 = arguments.length;
var i__3509__auto___5895 = (0);
while(true){
if((i__3509__auto___5895 < len__3508__auto___5894)){
args__3511__auto__.push((arguments[i__3509__auto___5895]));

var G__5896 = (i__3509__auto___5895 + (1));
i__3509__auto___5895 = G__5896;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___5893))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___5893){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___5893);
});})(g__5754__auto___5893))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__5754__auto___5893){
return (function (seq5845){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5845));
});})(g__5754__auto___5893))
;


var g__5754__auto___5897 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__5754__auto___5897){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__3511__auto__ = [];
var len__3508__auto___5898 = arguments.length;
var i__3509__auto___5899 = (0);
while(true){
if((i__3509__auto___5899 < len__3508__auto___5898)){
args__3511__auto__.push((arguments[i__3509__auto___5899]));

var G__5900 = (i__3509__auto___5899 + (1));
i__3509__auto___5899 = G__5900;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___5897))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___5897){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___5897);
});})(g__5754__auto___5897))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__5754__auto___5897){
return (function (seq5846){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5846));
});})(g__5754__auto___5897))
;


var g__5754__auto___5901 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__5754__auto___5901){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__3511__auto__ = [];
var len__3508__auto___5902 = arguments.length;
var i__3509__auto___5903 = (0);
while(true){
if((i__3509__auto___5903 < len__3508__auto___5902)){
args__3511__auto__.push((arguments[i__3509__auto___5903]));

var G__5904 = (i__3509__auto___5903 + (1));
i__3509__auto___5903 = G__5904;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___5901))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___5901){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___5901);
});})(g__5754__auto___5901))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__5754__auto___5901){
return (function (seq5847){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5847));
});})(g__5754__auto___5901))
;


var g__5754__auto___5905 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__5754__auto___5905){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__3511__auto__ = [];
var len__3508__auto___5906 = arguments.length;
var i__3509__auto___5907 = (0);
while(true){
if((i__3509__auto___5907 < len__3508__auto___5906)){
args__3511__auto__.push((arguments[i__3509__auto___5907]));

var G__5908 = (i__3509__auto___5907 + (1));
i__3509__auto___5907 = G__5908;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___5905))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___5905){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___5905);
});})(g__5754__auto___5905))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__5754__auto___5905){
return (function (seq5848){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5848));
});})(g__5754__auto___5905))
;


var g__5754__auto___5909 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__5754__auto___5909){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__3511__auto__ = [];
var len__3508__auto___5910 = arguments.length;
var i__3509__auto___5911 = (0);
while(true){
if((i__3509__auto___5911 < len__3508__auto___5910)){
args__3511__auto__.push((arguments[i__3509__auto___5911]));

var G__5912 = (i__3509__auto___5911 + (1));
i__3509__auto___5911 = G__5912;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___5909))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___5909){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___5909);
});})(g__5754__auto___5909))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__5754__auto___5909){
return (function (seq5849){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5849));
});})(g__5754__auto___5909))
;


var g__5754__auto___5913 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__5754__auto___5913){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__3511__auto__ = [];
var len__3508__auto___5914 = arguments.length;
var i__3509__auto___5915 = (0);
while(true){
if((i__3509__auto___5915 < len__3508__auto___5914)){
args__3511__auto__.push((arguments[i__3509__auto___5915]));

var G__5916 = (i__3509__auto___5915 + (1));
i__3509__auto___5915 = G__5916;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___5913))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___5913){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___5913);
});})(g__5754__auto___5913))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__5754__auto___5913){
return (function (seq5850){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5850));
});})(g__5754__auto___5913))
;


var g__5754__auto___5917 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__5754__auto___5917){
return (function cljs$spec$impl$gen$string(var_args){
var args__3511__auto__ = [];
var len__3508__auto___5918 = arguments.length;
var i__3509__auto___5919 = (0);
while(true){
if((i__3509__auto___5919 < len__3508__auto___5918)){
args__3511__auto__.push((arguments[i__3509__auto___5919]));

var G__5920 = (i__3509__auto___5919 + (1));
i__3509__auto___5919 = G__5920;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___5917))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___5917){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___5917);
});})(g__5754__auto___5917))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__5754__auto___5917){
return (function (seq5851){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5851));
});})(g__5754__auto___5917))
;


var g__5754__auto___5921 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__5754__auto___5921){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__3511__auto__ = [];
var len__3508__auto___5922 = arguments.length;
var i__3509__auto___5923 = (0);
while(true){
if((i__3509__auto___5923 < len__3508__auto___5922)){
args__3511__auto__.push((arguments[i__3509__auto___5923]));

var G__5924 = (i__3509__auto___5923 + (1));
i__3509__auto___5923 = G__5924;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___5921))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___5921){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___5921);
});})(g__5754__auto___5921))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__5754__auto___5921){
return (function (seq5852){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5852));
});})(g__5754__auto___5921))
;


var g__5754__auto___5925 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__5754__auto___5925){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__3511__auto__ = [];
var len__3508__auto___5926 = arguments.length;
var i__3509__auto___5927 = (0);
while(true){
if((i__3509__auto___5927 < len__3508__auto___5926)){
args__3511__auto__.push((arguments[i__3509__auto___5927]));

var G__5928 = (i__3509__auto___5927 + (1));
i__3509__auto___5927 = G__5928;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___5925))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___5925){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___5925);
});})(g__5754__auto___5925))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__5754__auto___5925){
return (function (seq5853){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5853));
});})(g__5754__auto___5925))
;


var g__5754__auto___5929 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__5754__auto___5929){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__3511__auto__ = [];
var len__3508__auto___5930 = arguments.length;
var i__3509__auto___5931 = (0);
while(true){
if((i__3509__auto___5931 < len__3508__auto___5930)){
args__3511__auto__.push((arguments[i__3509__auto___5931]));

var G__5932 = (i__3509__auto___5931 + (1));
i__3509__auto___5931 = G__5932;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___5929))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___5929){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___5929);
});})(g__5754__auto___5929))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__5754__auto___5929){
return (function (seq5854){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5854));
});})(g__5754__auto___5929))
;


var g__5754__auto___5933 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__5754__auto___5933){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__3511__auto__ = [];
var len__3508__auto___5934 = arguments.length;
var i__3509__auto___5935 = (0);
while(true){
if((i__3509__auto___5935 < len__3508__auto___5934)){
args__3511__auto__.push((arguments[i__3509__auto___5935]));

var G__5936 = (i__3509__auto___5935 + (1));
i__3509__auto___5935 = G__5936;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___5933))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___5933){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___5933);
});})(g__5754__auto___5933))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__5754__auto___5933){
return (function (seq5855){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5855));
});})(g__5754__auto___5933))
;


var g__5754__auto___5937 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__5754__auto___5937){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__3511__auto__ = [];
var len__3508__auto___5938 = arguments.length;
var i__3509__auto___5939 = (0);
while(true){
if((i__3509__auto___5939 < len__3508__auto___5938)){
args__3511__auto__.push((arguments[i__3509__auto___5939]));

var G__5940 = (i__3509__auto___5939 + (1));
i__3509__auto___5939 = G__5940;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});})(g__5754__auto___5937))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5754__auto___5937){
return (function (args){
return cljs.core.deref.call(null,g__5754__auto___5937);
});})(g__5754__auto___5937))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__5754__auto___5937){
return (function (seq5856){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5856));
});})(g__5754__auto___5937))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__3511__auto__ = [];
var len__3508__auto___5943 = arguments.length;
var i__3509__auto___5944 = (0);
while(true){
if((i__3509__auto___5944 < len__3508__auto___5943)){
args__3511__auto__.push((arguments[i__3509__auto___5944]));

var G__5945 = (i__3509__auto___5944 + (1));
i__3509__auto___5944 = G__5945;
continue;
} else {
}
break;
}

var argseq__3512__auto__ = ((((0) < args__3511__auto__.length))?(new cljs.core.IndexedSeq(args__3511__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__3512__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__5941_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__5941_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq5942){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5942));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__5946_SHARP_){
return (new Date(p1__5946_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});
