function returnLastPage() {
	history.go(0);
}

function dataSave() {
	alert('Registro Salvo com Sucesso!')	
	history.go(0);
}

function newPopup(evento){
	alert('Nome do Evento: '+evento+'\nData da Realização: 30/04/2016');
}

function excluir(){
	confirm('Confirmar exclusão do Evento?');
}