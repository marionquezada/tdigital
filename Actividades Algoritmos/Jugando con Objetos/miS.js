var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

//¿Cómo harías print/log de la edad de John?
for(var i=0;i<users.length;i++){
	if(users[i].name=='John'){
		document.write("La edad de John es: "+users[i].age);
	}
}
//¿Cómo harías print/log del nombre del primer objeto?
document.write("<br/>El nombre del primer objeto es: "+users[0].name);

//¿Cómo harías print/log del nombre y la edad de cada usuario utilizando un for loop? 
for(var i=0;i<users.length;i++){

		document.write("<br/>"+users[i].name+" - "+users[i].age);
	
}