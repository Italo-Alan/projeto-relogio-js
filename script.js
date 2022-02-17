function relogio(){
    var date = new Date();
    hour = ("0" + date.getHours().toString()).slice(-2);
    minute = ("0" + date.getMinutes().toString()).slice(-2);
    seconds = ("0" + date.getSeconds().toString()).slice(-2);

    var day = new Array('Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado');
    var month = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novemrbo', 'Dezembro');


    var fullDate = day[date.getDay()] + ', ' + date.getDate() +' de ' + month[date.getMonth()] + ' de '+ date.getFullYear();

    var hora_final = `${hour}:${minute}:${seconds}`
    var tempo = document.getElementById('relogio-h1')

    tempo.innerHTML = hora_final;
    document.getElementById('relogio-p').innerHTML = fullDate;
}

setInterval(relogio,500);



        
    


