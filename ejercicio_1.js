/*

Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

- Tu nombre (string)

- Tu edad (number)

- ¿Eres desarrollador? (boolean)

- Tu fecha de nacimiento (Date)

- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)

*/


const Usuario = {
	Nombre:"Alan",
	Edad:21,
	Desarrollador:true,
	Nacimiento:"May 09 2001",
	LibroFavorito: {
		Titulo:"El Fantasma de Canterville",
		Autor:"Oscar Wilde",
		Fecha:"Jun 05 1995",
		Url:"https//:elfantasma-de-canterivlle.com"
	}
}

console.log(Usuario.Nombre);

console.log(Usuario.LibroFavorito.Titulo);