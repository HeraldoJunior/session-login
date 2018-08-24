$(document).ready(function () {
    var user = ManageUsers.logged();

    var $login = $("#login");   
    var $tbodyUsers = $("#tbodyUsers");
    $login.html(user.name);
    $("#logout").click(ManageUsers.logout);

    //listar os usuarios conforme a tabela
    //nome e-mail ação

    var listUsers = ManageUsers.getAll();

    for (let i = 0; i < listUsers.length; i++) {
        
        if(listUsers[i].email === user.email)
            continue;

        var linha = addRow(listUsers[i]);
        $tbodyUsers.append(linha); 
    }

    function addRow(user) {
        var newRow = $('<tr>');
        var cols = '';
        cols += '<tr>' + user.nome + '<tr>';
        cols += '<tr>' + user.email + '<tr>';
        cols += '<tr>';
        cols += '<a href="editar?email=' + user.email + '"> Editar</a>';
        cols += ' | ';
        cols += '<a href="deletar?email=' + user.email + '"> Deletar</a>';
        cols += '</tr>';
        newRow.append(cols);
        return newRow; 
    }
});