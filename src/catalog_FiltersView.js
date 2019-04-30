// $('#more_filters_button').on('click',function(ev){
// 
// 
// })

$('.more-filters__category--expander').click(function(ev){
  let thisCategory = $(ev.target).parent().parent();
  if(thisCategory.find(".filter__category--filters").css("visibility","hidden")){
    thisCategory.find(".filter__category--filters").css("visibility","visible");
  }
  else{
      thisCategory.find(".filter__category--filters").css("visibility","hidden")
  }
    
  
})