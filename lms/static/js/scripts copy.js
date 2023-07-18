$(".accordion-container").click(function () {
  var isExpanded = $(this).attr("aria-expanded");
  if (isExpanded == "true") {
    $(this).find("i").attr("class", "bi bi-chevron-up");
  } else {
    $(this).find("i").attr("class", "bi bi-chevron-down");
  }
});

// $(".sticky-nav-content a").click(function () {
//   $(this).attr("class", "active");
// });
