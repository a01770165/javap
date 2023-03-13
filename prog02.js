function suma() {
	x=parseInt(document.datos.v1.value);
	y=parseInt(document.datos.v2.value);
	r=x+y;
	document.datos.opera.value="Suma";
	document.datos.res.value=r;
}

function resta() {
	x=parseInt(document.datos.v1.value);
	y=parseInt(document.datos.v2.value);
	r=x-y;
	document.datos.opera.value="Resta";
	document.datos.res.value=r;
}

function Multiplicación() {
	x=parseInt(document.datos.v1.value);
	y=parseInt(document.datos.v2.value);
	r=x*y;
	document.datos.opera.value="Multiplicación";
	document.datos.res.value=r;
}

function División() {
	x=parseInt(document.datos.v1.value);
	y=parseInt(document.datos.v2.value);
	r=x/y;
	document.datos.opera.value="División";
	document.datos.res.value=r;
}

function ejecutar(){
	op=document.datos.op.value;
	if (op=="1"){
		suma();
    }
	if (op=="2"){
		resta();
    }
	if (op=="3"){
		Multiplicación();
    }
	if (op=="4"){
		División();
    }
}
