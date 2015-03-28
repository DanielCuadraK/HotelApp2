//Envío de datos al servidor
var server = {
    url: 'http://carlos.igitsoft.com/apps/test.php',
    sendData: function(nom,mail,tel,img){
        $.mobile.loading( 'show' );
        $.ajax({
            method: "POST",
            url: server.url,
            data: { nom: nom, mail: mail, tel: tel }
        }).done(function( msg ) {
            if(msg == 1)
                transfer.imgUpload(img);
        });
    },
    //envia al servidor los datos, y posteriormente se guarda en el historial
    sendReserva: function(th,ha,pr,di){
        $.mobile.loading('show');
        $.ajax({
            method: "POST",
            url: server.url,
            data: {th: th, ha: ha, pr: pr, di: di}
        }).done(function(msg) {
            if(msg == 1) {
                almacenamiento.guardarHistorial(th,ha,pr,di);
                //almacenamiento.borarReserva();
            }
        });
    }
};