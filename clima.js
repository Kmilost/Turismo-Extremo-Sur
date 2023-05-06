$(document).ready(function () {
    const diasSemana = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
    $.get(
      "https://api.weatherbit.io/v2.0/current/daily?city_id=3874787&lang=es&key=c36c73cf54f34982b3c4903e1fdaf151",
      function (data) {
        $.each(data.data, function (i, item) {
          var fecha = new Date();
          var mes = fecha.getMonth() + 1;
          var dia = fecha.getDate();
          var fechaTexto = `${mes}/${dia}`;
          var diaActual = diasSemana[fecha.getDay()];
          $(".clima-hoy").append(
            "<h2> Hoy " +
              diaActual +
              " " +
              fechaTexto +
              "</h2><img src='icons/" +
              item.weather.icon +
              ".png'><h3>" +
              item.weather.description +
              "</h3><h3>" +
              Math.round(item.temp) +
              "°C</h3>"
          );
        });
      }
    );
    $.get(
      "https://api.weatherbit.io/v2.0/forecast/daily?city_id=3874787&lang=es&days=10&key=c36c73cf54f34982b3c4903e1fdaf151",
      function (data) {
        $.each(data.data, function (i, item) {
          if (i == 0) {
            $(".clima-hoy").append(
              "<p> Min: " +
                Math.round(item.min_temp) +
                "°C Max: " +
                Math.round(item.max_temp) +
                "°C</p>"
            );
          } else {
            var fecha = new Date(item.datetime + "T00:00:00-04:00");
            var mes = fecha.getMonth() + 1;
            var dia = fecha.getDate();
            var fechaTexto = `${mes}/${dia}`;
            var diaActual = diasSemana[fecha.getDay()];
            $(".lista-clima").append(
              "<div class='dia'> <h2>" +
                diaActual +
                " " +
                fechaTexto +
                "</h2><img src='icons/" +
                item.weather.icon +
                ".png'><h3>" +
                item.weather.description +
                "</h3>" +
                "</h2><p> Min: " +
                Math.round(item.min_temp) +
                "°C Max: " +
                Math.round(item.max_temp) +
                "°C </p></div>"
            );
          }
        });
      }
    );
  });
  
