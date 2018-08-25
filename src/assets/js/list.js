$(document).ready(function () {    
    var user = ManageUsers.logged();
    var $login = $("#login");
    var $tbodyUsers = $("#tbodyUsers")
    $login.html(user.name);

    $("#logout").click(ManageUsers.logout);
    
    //Listar os usuários conforme a tabela
    // Nome | Email | Actions

    var listUsers = ManageUsers.getAll();

    for (var i=0; i<listUsers.length; i++){
        if (listUsers[i].email === user.email)
        continue;
       var linha = addRow(listUsers[i]);
       $tbodyUsers.append(linha);
    }
    function addRow(user){
        var newRow = $("<tr>");
        var cols = "";
        cols += '<td>' + user.name + '</td>';        
        cols += '<td>' + user.email + '</td>';        
        cols += '<td>'
        cols += '<a href= "editar.html?email=>' + user.email + '">Editar</a>';
        cols += ' | '
        cols += '<a href= "deletar.html?email=>' + user.email + '">Deletar</a>';
        cols += ' | '
        newRow.append(cols);
        return newRow;
    }

    
});