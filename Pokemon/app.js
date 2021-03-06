$(document).ready(function() {
  console.log('page loaded');
  getAllPokemon();

  function getAllPokemon() {
    $.ajax({
        type: "GET",
        url: "http://52.25.225.137:8080/pokemon/data/poke?sorted=true",
        dataType: "json"
      })

      .done(function(data, status) {
        buildDOM(data);
      })

      .fail(function(xhr, status, error) {
        console.log('ERROR! Something went wrong!');
      });
  }

  function buildDOM(data) {
    //thead
    var $table = $('<table>');
    $("body").append($table);
    var $thead = $('<thead>');
    $table.append($thead);
    var $tr = $('<tr>');

    $thead.append($tr);
    var $th = $('<th>');
    $thead.text('Contents');
    $tr.append($th);
    //tbody
    var $tbody = $('<tbody>');
    $table.append($tbody);

    $('#content').append($table);

    for (var i = 0; i < data.length; i++) {
      var $tr2 = $('<tr>');
      $tbody.append($tr2);

      var $td = $('<td>');
      var $td2 = $('<td>');
      var $td3 = $('<td>');

      var deleteButton = $('<button>');

      $td2.attr("id", data[i].pokeId);
      $tr2.append($td);
      $tr2.append($td2);

      $tr2.append($td3);
      $td3.append(deleteButton);
      deleteButton.text('Delete');

      deleteButton.click(function(e) {
        e.preventDefault();

        $.ajax({
            type: "DELETE",
            url: "http://52.25.225.137:8080/pokemon/data/poke/" + $td2.attr('id'),
            dataType: "json"

          })
          .done(function(data, status) {
            $('#content').empty();
            getAllPokemon();
          })

          .fail(function(xhr, status, error) {
            console.log('ERROR! Something went wrong!');
          });
      });

      $td.text(data[i].pokeId);
      $td2.text(data[i].name);

      $td2.click(function() {
        $('#content').empty();
        var pok = $(this).attr('id');

        var myReq = $.ajax({
          type: "GET",
          url: "http://52.25.225.137:8080/pokemon/data/poke/" + pok,
          dataType: "json"
        });

        myReq.done(function(data, status) {
          showPok(data);
        });

        myReq.fail(function(xhr, status, error) {
          console.log('ERROR! Something went wrong!');
        });


        function showPok(pokeman) {
          var $ul = $('<ul>');
          $("#content").append($ul);

          var name = $('<li>');
          name.text(pokeman.name);
          $ul.append(name);

          var species = $('<ul>');
          pokeman.types.forEach(function(pokes) {
            var eachType = $('<li>');

            species.append(pokes.name);
            $("body").append(species);
            species.append(eachType);
            $ul.append(species);
          })

          var height = $('<li>');
          height.text(pokeman.height);
          $ul.append(height);

          var weight = $('<li>');
          weight.text(pokeman.weight);
          $ul.append(weight);

          var description = $('<li>');
          description.text(pokeman.description);
          $ul.append(description);

          var img = $('<img>');
          img.attr('src', pokeman.img)
          $ul.append(img);

          var button1 = $('<button>');
          button1.text('Return');
          button1.click(function() {
            $('#content').empty();
            buildDOM(data);
          })
          $ul.append(button1);
        };
      });
    };
  };
  $('#sub').click(function(e) {
    e.preventDefault();
    var newPoke = {
      pokeId: $('input[name="pokedex_id"]').val(),
      name: $('input[name="name"]').val(),
      height: $('input[name="ht"]').val(),
      weight: $('input[name="wt"]').val(),
      img: $('input[name="img"]').val(),
      description: $('input[name="description"]').val()
    };
    var myReq = $.ajax({
      type: "POST",
      url: "http://52.25.225.137:8080/pokemon/data/poke",
      dataType: "json",
      contentType: 'application/json',
      data: JSON.stringify(newPoke)
    });

    myReq.done(function(data, status) {
      $('#content').empty();
      getAllPokemon();
    });

    myReq.fail(function(xhr, status, error) {
      console.log('ERROR! Something went wrong!');
    });
  });
});
