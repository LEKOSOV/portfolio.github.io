var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

;(function($){var obj={el:null,links:null,opts:null};$.fn.navbarScroll=function(opts){obj.el=$(this);obj.links=obj.el.find('a[href^="#"]');obj.opts=$.extend({fixedClass:'fixed',contentClass:'scrollto',activeClass:'active',whenFixedNavbar:'auto',onlyLastActive:false,beforeSpace:0,afterSpace:0,uniqueSpaces:{},speed:1000,inViewport:function(){return true;},outViewport:function(){return true;},},opts);for(var key in obj.opts.uniqueSpaces){if(typeof obj.opts.uniqueSpaces[key].beforeSpace!=='number')obj.opts.uniqueSpaces[key].beforeSpace=0;if(typeof obj.opts.uniqueSpaces[key].afterSpace!=='number')obj.opts.uniqueSpaces[key].afterSpace=0;if(typeof obj.opts.uniqueSpaces[key].offsetScroll!=='function')obj.opts.uniqueSpaces[key].offsetScroll=function(){return 0};}init();apply();}
function init(){if(obj.opts.whenFixedNavbar==='auto')obj.opts.whenFixedNavbar=obj.el.outerHeight();obj.links.click(function(e){e.preventDefault();var id=$(this).attr('href');var key=id.replace('#','');var scrollTo=$(id).offset().top;if(key in obj.opts.uniqueSpaces)scrollTo+=obj.opts.uniqueSpaces[key].offsetScroll();$('html, body').animate({scrollTop:scrollTo},obj.opts.speed);});var id=null;$(window).scroll(function(){window.clearTimeout(id);id=setTimeout(apply,100);});}function apply(){var scrollTop=$(window).scrollTop();var lastLink=null;if(scrollTop>obj.opts.whenFixedNavbar){obj.el.addClass(obj.opts.fixedClass);if('updateFixedClass'in $.fn.navbarScroll)$.fn.navbarScroll.updateFixedClass('added');}else{obj.el.removeClass(obj.opts.fixedClass);if('updateFixedClass'in $.fn.navbarScroll)$.fn.navbarScroll.updateFixedClass('remove');}$('.'+obj.opts.contentClass).each(function(){var self=$(this);var offsetTop=self.offset().top;var offsetBottom=offsetTop+self.outerHeight();var id=self.attr('id');var link=obj.el.find('a[href="#'+id+'"]');if(id in obj.opts.uniqueSpaces){offsetTop+=obj.opts.uniqueSpaces[id].beforeSpace;offsetBottom+=obj.opts.uniqueSpaces[id].afterSpace;}else{offsetTop+=obj.opts.beforeSpace;offsetBottom+=obj.opts.afterSpace;}if(scrollTop>=offsetTop&&scrollTop<=offsetBottom){if(obj.opts.inViewport(link,self))link.addClass(obj.opts.activeClass);}else{if(obj.opts.outViewport(link,self))link.removeClass(obj.opts.activeClass);}});if(obj.opts.onlyLastActive){try{obj.links.each(function(){if($(this).is('.'+obj.opts.activeClass))lastLink=$(this);}).removeClass(obj.opts.activeClass);lastLink.addClass(obj.opts.activeClass);}catch(e){}}}})(jQuery);

}
/*
     FILE ARCHIVED ON 19:47:50 Jan 05, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:16:59 Oct 13, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 90.175
  exclusion.robots: 0.261
  exclusion.robots.policy: 0.252
  RedisCDXSource: 0.803
  esindex: 0.013
  LoadShardBlock: 55.852 (3)
  PetaboxLoader3.datanode: 64.845 (4)
  CDXLines.iter: 29.032 (3)
  load_resource: 71.531
  PetaboxLoader3.resolve: 35.702
*/