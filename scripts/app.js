function returnLastPage() {
	history.go(-1);
}

function dataSave() {
	alert('Registro Salvo com Sucesso!')	
	if (device.platform === "iOS" && parseInt(device.version) === 9) {
   	console.log("version" + device.version);
    console.log("iOS 9");
    history.go(0);
  } else {
    window.history.back();
  }
}