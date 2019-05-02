
//Expand category "MORE FILTERS" mode
$('.more-filters__category--expander').click(function(ev){
  let thisCategory = $(ev.target).parent().parent();
  if($(ev.target).hasClass('more-filters__button--closed')){
    
    thisCategory.addClass('filter__category--expanded');
    $(ev.target).html("⎯").removeClass('more-filters__button--closed').addClass('more-filters__button--opened');
}
  else {
      thisCategory.removeClass('filter__category--expanded');
      $(ev.target).html("+").removeClass('more-filters__button--opened').addClass('more-filters__button--closed');
  }
})

//Expand category
$(".filter__category--button").click(function(ev){
  console.log("Expanding category: ",$(ev.target).text());
  if($(ev.target).parent().hasClass("filter__category--active")){
  deactivateFilterCategory();
}
else {
  deactivateFilterCategory();
    $(ev.target).parent().toggleClass("filter__category--active");
}

})

//deactivate filter category
function deactivateFilterCategory(){
    $(".filter__category--active").removeClass('filter__category--active');
}

//select filter
$('.filter').click(function(ev){
  selectFilter(ev.target)
})

function selectFilter(filter){
  let alreadySelected
  if(filter.parentElement.dataset.selectedfilters){
    alreadySelected = filter.parentElement.dataset.selectedfilters.split(",");
  }
  else{
  alreadySelected = [];
  }
    if(!$(filter).hasClass("filter--selected")){
      alreadySelected.push($(filter).text());
      $(filter).toggleClass("filter--selected");
      }
    else {
      alreadySelected.splice(alreadySelected.indexOf($(filter).text()));
      $(filter).toggleClass("filter--selected");
    }
      $(filter).parent().attr("data-selectedfilters", alreadySelected)
      console.log("Current selected filters in this Cat.: ", alreadySelected)
}



