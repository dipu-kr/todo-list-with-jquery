$(".add-btn").click(function () {
  var value = $(".input").val();
  if (value === "") {
    alert("Please Enter something!");
  } else {
    $(".input").val("");
    $("ul").append(
      "<li>" + value + '<span><i class="fa-solid fa-trash-can"></i></span>'
    );
  }
});

$("ul").on("click", "span", function () {
  $(this).parent().remove();
});
