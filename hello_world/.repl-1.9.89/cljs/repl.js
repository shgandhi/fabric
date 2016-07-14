// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__6815){
var map__6840 = p__6815;
var map__6840__$1 = ((((!((map__6840 == null)))?((((map__6840.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6840.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6840):map__6840);
var m = map__6840__$1;
var n = cljs.core.get.call(null,map__6840__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__6840__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__6842_6864 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__6843_6865 = null;
var count__6844_6866 = (0);
var i__6845_6867 = (0);
while(true){
if((i__6845_6867 < count__6844_6866)){
var f_6868 = cljs.core._nth.call(null,chunk__6843_6865,i__6845_6867);
cljs.core.println.call(null,"  ",f_6868);

var G__6869 = seq__6842_6864;
var G__6870 = chunk__6843_6865;
var G__6871 = count__6844_6866;
var G__6872 = (i__6845_6867 + (1));
seq__6842_6864 = G__6869;
chunk__6843_6865 = G__6870;
count__6844_6866 = G__6871;
i__6845_6867 = G__6872;
continue;
} else {
var temp__4657__auto___6873 = cljs.core.seq.call(null,seq__6842_6864);
if(temp__4657__auto___6873){
var seq__6842_6874__$1 = temp__4657__auto___6873;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6842_6874__$1)){
var c__3360__auto___6875 = cljs.core.chunk_first.call(null,seq__6842_6874__$1);
var G__6876 = cljs.core.chunk_rest.call(null,seq__6842_6874__$1);
var G__6877 = c__3360__auto___6875;
var G__6878 = cljs.core.count.call(null,c__3360__auto___6875);
var G__6879 = (0);
seq__6842_6864 = G__6876;
chunk__6843_6865 = G__6877;
count__6844_6866 = G__6878;
i__6845_6867 = G__6879;
continue;
} else {
var f_6880 = cljs.core.first.call(null,seq__6842_6874__$1);
cljs.core.println.call(null,"  ",f_6880);

var G__6881 = cljs.core.next.call(null,seq__6842_6874__$1);
var G__6882 = null;
var G__6883 = (0);
var G__6884 = (0);
seq__6842_6864 = G__6881;
chunk__6843_6865 = G__6882;
count__6844_6866 = G__6883;
i__6845_6867 = G__6884;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_6885 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__2977__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__2977__auto__)){
return or__2977__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_6885);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_6885)))?cljs.core.second.call(null,arglists_6885):arglists_6885));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__6846_6886 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__6847_6887 = null;
var count__6848_6888 = (0);
var i__6849_6889 = (0);
while(true){
if((i__6849_6889 < count__6848_6888)){
var vec__6850_6890 = cljs.core._nth.call(null,chunk__6847_6887,i__6849_6889);
var name_6891 = cljs.core.nth.call(null,vec__6850_6890,(0),null);
var map__6853_6892 = cljs.core.nth.call(null,vec__6850_6890,(1),null);
var map__6853_6893__$1 = ((((!((map__6853_6892 == null)))?((((map__6853_6892.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6853_6892.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6853_6892):map__6853_6892);
var doc_6894 = cljs.core.get.call(null,map__6853_6893__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_6895 = cljs.core.get.call(null,map__6853_6893__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_6891);

cljs.core.println.call(null," ",arglists_6895);

if(cljs.core.truth_(doc_6894)){
cljs.core.println.call(null," ",doc_6894);
} else {
}

var G__6896 = seq__6846_6886;
var G__6897 = chunk__6847_6887;
var G__6898 = count__6848_6888;
var G__6899 = (i__6849_6889 + (1));
seq__6846_6886 = G__6896;
chunk__6847_6887 = G__6897;
count__6848_6888 = G__6898;
i__6849_6889 = G__6899;
continue;
} else {
var temp__4657__auto___6900 = cljs.core.seq.call(null,seq__6846_6886);
if(temp__4657__auto___6900){
var seq__6846_6901__$1 = temp__4657__auto___6900;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6846_6901__$1)){
var c__3360__auto___6902 = cljs.core.chunk_first.call(null,seq__6846_6901__$1);
var G__6903 = cljs.core.chunk_rest.call(null,seq__6846_6901__$1);
var G__6904 = c__3360__auto___6902;
var G__6905 = cljs.core.count.call(null,c__3360__auto___6902);
var G__6906 = (0);
seq__6846_6886 = G__6903;
chunk__6847_6887 = G__6904;
count__6848_6888 = G__6905;
i__6849_6889 = G__6906;
continue;
} else {
var vec__6855_6907 = cljs.core.first.call(null,seq__6846_6901__$1);
var name_6908 = cljs.core.nth.call(null,vec__6855_6907,(0),null);
var map__6858_6909 = cljs.core.nth.call(null,vec__6855_6907,(1),null);
var map__6858_6910__$1 = ((((!((map__6858_6909 == null)))?((((map__6858_6909.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6858_6909.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6858_6909):map__6858_6909);
var doc_6911 = cljs.core.get.call(null,map__6858_6910__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_6912 = cljs.core.get.call(null,map__6858_6910__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_6908);

cljs.core.println.call(null," ",arglists_6912);

if(cljs.core.truth_(doc_6911)){
cljs.core.println.call(null," ",doc_6911);
} else {
}

var G__6913 = cljs.core.next.call(null,seq__6846_6901__$1);
var G__6914 = null;
var G__6915 = (0);
var G__6916 = (0);
seq__6846_6886 = G__6913;
chunk__6847_6887 = G__6914;
count__6848_6888 = G__6915;
i__6849_6889 = G__6916;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__6860 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__6861 = null;
var count__6862 = (0);
var i__6863 = (0);
while(true){
if((i__6863 < count__6862)){
var role = cljs.core._nth.call(null,chunk__6861,i__6863);
var temp__4657__auto___6917__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___6917__$1)){
var spec_6918 = temp__4657__auto___6917__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_6918));
} else {
}

var G__6919 = seq__6860;
var G__6920 = chunk__6861;
var G__6921 = count__6862;
var G__6922 = (i__6863 + (1));
seq__6860 = G__6919;
chunk__6861 = G__6920;
count__6862 = G__6921;
i__6863 = G__6922;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__6860);
if(temp__4657__auto____$1){
var seq__6860__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6860__$1)){
var c__3360__auto__ = cljs.core.chunk_first.call(null,seq__6860__$1);
var G__6923 = cljs.core.chunk_rest.call(null,seq__6860__$1);
var G__6924 = c__3360__auto__;
var G__6925 = cljs.core.count.call(null,c__3360__auto__);
var G__6926 = (0);
seq__6860 = G__6923;
chunk__6861 = G__6924;
count__6862 = G__6925;
i__6863 = G__6926;
continue;
} else {
var role = cljs.core.first.call(null,seq__6860__$1);
var temp__4657__auto___6927__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___6927__$2)){
var spec_6928 = temp__4657__auto___6927__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_6928));
} else {
}

var G__6929 = cljs.core.next.call(null,seq__6860__$1);
var G__6930 = null;
var G__6931 = (0);
var G__6932 = (0);
seq__6860 = G__6929;
chunk__6861 = G__6930;
count__6862 = G__6931;
i__6863 = G__6932;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
