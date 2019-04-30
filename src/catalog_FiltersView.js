
//Expand category "MORE FILTERS" mode
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

//Expand category
$(".filter__category--button").click(function(ev){
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








//select filter
$('.filter').click(function(ev){
  selectFilter(ev.target)
})

function selectFilter(filter){
  let allreadySelected
  if(filter.parentElement.dataset.selectedfilters){
    allreadySelected = filter.parentElement.dataset.selectedfilters.split(",");
  }
  else{
  allreadySelected = [];
  }
    if(!$(filter).hasClass("filter--selected")){
      allreadySelected.push($(filter).text());
      $(filter).toggleClass("filter--selected");
      }
    else {
      allreadySelected.splice(allreadySelected.indexOf($(filter).text()));
      $(filter).toggleClass("filter--selected");
    }
      $(filter).parent().attr("data-selectedfilters", allreadySelected)
      console.log("Current selected filters in this Cat.: ", allreadySelected)
}



