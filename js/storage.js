//Almacenamiento
var almacenamiento = {
    createReg: function(nom, id){
        window.localStorage.setItem('name',nom);
        window.localStorage.setItem('uuid',id);
    },
    isRegistered: function(){
        if(window.localStorage.getItem('uuid') != undefined && window.localStorage.getItem('uuid') != '')
            return true;
        else
            return false;
    },
    db: window.openDatabase("hotelApp", "1.0", "HotelApp", 200000),
    reservar: function(th,ha,pr,di){
        function populateDB(tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS reservas (id, th, ha, pr, di)');
        tx.executeSql('INSERT INTO reservas (th, ha, pr, di) VALUES ("'+th+'","'+ha+'","'+pr+'","'+di+'")');
    }

    // Transaction error callback
    //
    function errorCB(tx, err) {
        alert("Error processing SQL: "+err);
    }

    // Transaction success callback
    //
    function successCB() {
        window.location.href = '#home';
        navigator.notification.alert('Reserva guardada en espera de sicronización',null,'Guardado','Aceptar');
    }
        
        almacenamiento.db.transaction(populateDB, errorCB, successCB);
},
    leerReservas: function(){
        function populateDB(tx){
            tx.executeSql('SELECT * FROM reservas',[],function(tx2,r){
            alert(r.rows.length);},function(err){
                alert('Error: '+ err.code);
            });
        }
        function errorCB(err){
            alert('Error: '+ err.code);
        }
        function sucessDB(){
        //función en caso de que sea satisfactorio
            var x = null;
        }
    },
    guardarHistorial: function(th,ha,pr,di){
        function populateDB(tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS historial (id, date, th, ha, pr, di)');
        tx.executeSql('INSERT INTO historial (th, ha, pr, di) VALUES ("'+th+'","'+ha+'","'+pr+'","'+di+'")');
    }

    // Transaction error callback
    //
    function errorCB(tx, err) {
        alert("Error processing SQL: "+err);
    }

    // Transaction success callback
    //
    function successCB() {
        window.location.href = '#home';
        navigator.notification.alert('Reserva guardada en historial',null,'Guardado','Aceptar');
    }
        
        almacenamiento.db.transaction(populateDB, errorCB, successCB);
},
        borarReserva: function(th,ha,pr,di){
        function populateDB(tx) {
        tx.executeSql('DELETE reservas');
    }

    // Transaction error callback
    //
    function errorCB(tx, err) {
        alert("Error processing SQL: "+err);
    }

    // Transaction success callback
    //
    function successCB() {
        window.location.href = '#home';
        navigator.notification.alert('ok',null,'Guardado','Aceptar');
    }
        
        almacenamiento.db.transaction(populateDB, errorCB, successCB);
},
    leerHistorial: function(){
        function populateDB(tx){
            tx.executeSql('SELECT * FROM historial',[],function(tx2,r){
            alert(r.rows.length);},function(err){
                alert('Error: '+ err.code);
            });
        }
        function errorCB(err){
            alert('Error: '+ err.code);
        }
        function sucessDB(){
        //función en caso de que sea satisfactorio
            var x = null;
        }
        almacenamiento.db.transaction(populateDB,errorCB,successCB);
    }
        
};

