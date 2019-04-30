
//Expand category in mobile mode
$('.more-filters__category--expander').click(function(ev){
  let thisCategory = $(ev.target).parent().parent();
  if(thisCategory.find(".filter__category--filters").css("visibility")==="hidden"){
    thisCategory.find(".filter__category--filters").css("visibility","visible");
    $(ev.target).html("⎯").css("padding-top","4px");
    
  }
  else {
      thisCategory.find(".filter__category--filters").css("visibility","hidden");
      $(ev.target).html("+").css("padding-top","10px");
  }
})


$('.filter').click(function(ev){
  selectFilter(ev.target)
})

function selectFilter(filter){
  if(filter.parentElement.dataset.selectedfilters){
    let allreadySelected = filter.parentElement.dataset.selectedfilters.split(",");
  }
  else{
    let allreadySelected = [];
    if(!$(filter).hasClass("filter--selected")){
      console.log(allreadySelected)
      allreadySelected.push($(filter).text());
      $(filter).toggleClass("filter--selected");
      }
    else {
      allreadySelected.splice(allreadySelected.indexOf($(filter).text()));
      $(filter).toggleClass("filter--selected");
    }
      $(filter).parent().attr("data-selectedfilters", allreadySelected)
    
    
  }

  
  
}

