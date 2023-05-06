var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

    $(document).ready(function(){
        $("#bEnviar").click(function(){
            var nombre = $("#itNombre").val();
            var celular = $("#itCelular").val();
            var correo = $("#itMail").val();
            var pais = $("#itPais").val();
            var ciudad = $("#itCiudad").val();
            var consulta = $("#itConsulta").val();

            if(nombre == ""){
                $("#mensaje1").fadeIn();
                return false;
            }else{
                $("#mensaje1").fadeOut();
                if(celular == ""){
                    $("#mensaje2").fadeIn();
                    return false;
                }else{
                    $("#mensaje2").fadeOut();
                    if(correo == "" || !expr.test(correo)){
                        $("#mensaje3").fadeIn();
                        return false;
                    }else{
                        $("#mensaje3").fadeOut();
                        if(pais == ""){
                            $("#mensaje4").fadeIn();
                            return false;
                        }else{
                            $("#mensaje4").fadeOut();
                            if(ciudad == ""){
                                $("#mensaje5").fadeIn();
                                return false;
                            }else{
                                $("#mensaje5").fadeOut();
                                if(consulta == ""){
                                    $("#mensaje6").fadeIn();
                                    return false;
                                }else{
                                    $("#mensaje6").fadeOut();  
                                }                          
                            }
                        }
                    }
                }
            }    
        })
    });
