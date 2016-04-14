function returnLastPage() {
	history.go(-1);
}

function dataSave() {
	alert('Registro Salvo com Sucesso!')	
	history.go(-1);
}

function newPopup(evento){
	alert('Nome do Evento: '+evento+'\nData da Realização: 30/04/2016');
}