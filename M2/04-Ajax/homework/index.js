//GET all
$("#boton").click(function () {
  $.get("http://localhost:5000/amigos", function (data) {
    console.log(data);
    data.forEach((e) => {
      $(`<li>
          ${e.name}
        </li>`).appendTo($("#lista"));
    });
  });
});

$("#search").click(function () {
  let id = $("#input").val();
  $.get(`http://localhost:5000/amigos/${id}`, function (data) {
    $("#amigo").text(`${data.name}`);
  });
});

//DELETE

$("#delete").click(function () {
  let id = $("#inputDelete").val();
  $.ajax({
    url: ` http://localhost:5000/amigos/${id} `,
    method: "DELETE",
    success: function (data) {
      console.log(data);
      $("#success").text(`Tu amigo ${data[id].name} fue eliminado con exito`);
    },
  });
});

// $.ajax({
// url: '/script.cgi',
// type: 'DELETE',
// success: function(result) {
// }
// });
