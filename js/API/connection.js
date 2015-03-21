var connection = {
    isConnected: function(){
        alert(navigator.connection.type);
        if(navigator.connection.type != Connection.NONE)
            return true;
        else
            return false;
    }
};