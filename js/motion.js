// build time:Thu Sep 12 2019 12:46:56 GMT+0800 (GMT+08:00)
$(document).ready(function(){NexT.motion={};NexT.motion.integrator={queue:[],cursor:-1,add:function(i){this.queue.push(i);return this},next:function(){this.cursor++;var i=this.queue[this.cursor];$.isFunction(i)&&i(NexT.motion.integrator)},bootstrap:function(){this.next()}};NexT.motion.middleWares={logo:function(i){var t=[];var o=$(".brand");var n=$(".custom-logo-image");var e=$(".site-title");var s=$(".site-subtitle");var r=$(".logo-line-before i");var a=$(".logo-line-after i");o.length>0&&t.push({e:o,p:{opacity:1},o:{duration:200}});function u(i){i=Array.isArray(i)?i:[i];return i.every(function(i){return i.length>0})}function c(i,t){return{e:$(i),p:{translateX:t},o:{duration:500,sequenceQueue:false}}}function l(){t.push({e:n,p:{opacity:1,top:0},o:{duration:200}})}NexT.utils.isMist()&&u([r,a])&&t.push(c(r,"100%"),c(a,"-100%"));NexT.utils.isMuse()&&u(n)&&l();u(e)&&t.push({e:e,p:{opacity:1,top:0},o:{duration:200}});u(s)&&t.push({e:s,p:{opacity:1,top:0},o:{duration:200}});(NexT.utils.isPisces()||NexT.utils.isGemini())&&u(n)&&l();if(CONFIG.motion.async){i.next()}if(t.length>0){t[t.length-1].o.complete=function(){i.next()};$.Velocity.RunSequence(t)}else{i.next()}},menu:function(i){if(CONFIG.motion.async){i.next()}$(".menu-item").velocity("transition.slideDownIn",{display:null,duration:200,complete:function(){i.next()}})},postList:function(i){var t=$(".post-block, .pagination, .comments");var o=CONFIG.motion.transition.post_block;var n=$(".post-header");var e=CONFIG.motion.transition.post_header;var s=$(".post-body");var r=CONFIG.motion.transition.post_body;var a=$(".collection-title, .archive-year");var u=CONFIG.motion.transition.coll_header;var c=$(".sidebar-inner");var l=CONFIG.motion.transition.sidebar;var p=t.length>0;function d(){var p=window.postMotionOptions||{stagger:100,drag:true};p.complete=function(){if(CONFIG.motion.transition.sidebar&&(NexT.utils.isPisces()||NexT.utils.isGemini())){c.css({transform:"initial"})}i.next()};if(CONFIG.motion.transition.post_block){t.velocity("transition."+o,p)}if(CONFIG.motion.transition.post_header){n.velocity("transition."+e,p)}if(CONFIG.motion.transition.post_body){s.velocity("transition."+r,p)}if(CONFIG.motion.transition.coll_header){a.velocity("transition."+u,p)}if(CONFIG.motion.transition.sidebar&&(NexT.utils.isPisces()||NexT.utils.isGemini())){c.velocity("transition."+l,p)}}p?d():i.next();if(CONFIG.motion.async){i.next()}},sidebar:function(i){if(CONFIG.sidebar.display==="always"){NexT.utils.displaySidebar()}i.next()}}});
//rebuild by neat 