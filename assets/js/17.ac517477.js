"use strict";(self["webpackChunkcinephile"]=self["webpackChunkcinephile"]||[]).push([[17],{3124:function(t,e,n){n.d(e,{Z:function(){return y}});var i=n(3396),o=n(7139);const s={class:"container"},a={key:0,class:"main__content"},c={class:"title"},l={class:"main__content-list"},r={key:1,class:"main__popular center"},m=(0,i._)("div",{class:"main__popular-spinner"},null,-1),g=[m];function h(t,e,n,m,h,u){const d=(0,i.up)("ContentItem");return(0,i.wg)(),(0,i.iD)("div",s,[h.list.length?((0,i.wg)(),(0,i.iD)("div",a,[(0,i._)("h2",c,(0,o.zw)("movie"==n.content?"Все фильмы":"Все сериалы"),1),(0,i._)("div",l,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(h.list,(e=>((0,i.wg)(),(0,i.j4)(d,{key:e.id,movie:e,getImagesPath:t.getImagesPath,content:n.content},null,8,["movie","getImagesPath","content"])))),128))])])):(0,i.kq)("",!0),h.loading?((0,i.wg)(),(0,i.iD)("div",r,g)):(0,i.kq)("",!0)])}const u=["src"],d={class:"main__content-title"};function v(t,e,n,s,a,c){const l=(0,i.up)("router-link");return(0,i.wg)(),(0,i.j4)(l,{to:n.content+"/"+n.movie.id,class:"main__content-item"},{default:(0,i.w5)((()=>[(0,i._)("img",{src:n.getImagesPath+n.movie.backdrop_path,alt:"",loading:"lazy",class:"main__content-img"},null,8,u),(0,i._)("h2",d,(0,o.zw)(c.info),1)])),_:1},8,["to"])}var p={props:["movie","getImagesPath","content"],computed:{info(){return"movie"==this.content?this.movie.title:this.movie.name}}},_=n(89);const w=(0,_.Z)(p,[["render",v]]);var f=w,k=n(65),C={props:{content:String},components:{ContentItem:f},data(){return{page:1,loading:!1,list:[]}},methods:{async getContent(){if(!this.loading){this.loading=!0;let t="movie"==this.content?"movies/getMovies":"serials/getSerials";await this.$store.dispatch(`${t}`,this.page);let e="movie"==this.content?"movies/getAllMovies":"serials/getAllserials";const n=this.$store.getters[`${e}`],i=[...n];this.list.push(...i),this.loading=!1,this.page++}}},computed:{...(0,k.Se)("movies",["getAllMovies","getImagesPath"])},mounted(){window.addEventListener("scroll",(()=>{window.scrollY+window.innerHeight>=document.body.scrollHeight&&this.getContent()})),this.getContent()}};const I=(0,_.Z)(C,[["render",h]]);var y=I},1017:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var i=n(3396);const o={class:"main"};function s(t,e,n,s,a,c){const l=(0,i.up)("ContentList");return(0,i.wg)(),(0,i.iD)("main",o,[(0,i.Wm)(l,{content:"movie"})])}var a=n(3124),c={components:{ContentList:a.Z}},l=n(89);const r=(0,l.Z)(c,[["render",s]]);var m=r}}]);