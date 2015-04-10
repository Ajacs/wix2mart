'use strict';

var _ = require('lodash');

var elements = []



// Get list of products
exports.index = function(req, res) {
	res.json([
	{
		'id': 1,
		'name': 'Salchichas',
		'description': 'Salchichas FUD las meras meras',
		'product_img': 'http://dolcetriz.com/wp-content/uploads/2013/10/salchichas-e1381993676254.jpg'
	},
	{
		'id': 2,
		'name': 'Leche',
		'description': 'Leche wiwi. La mejor !',
		'product_img': 'http://cdn.ecoportal.net/var/ecoportal_net/storage/images/eco-noticias/harvard_elimina_la_leche_y_demas_lacteos_de_la_dieta_saludable/2009966-1-esl-ES/Harvard_elimina_la_leche_y_demas_lacteos_de_la_dieta_saludable.jpg'
	},
	{
		'id': 3,
		'name': 'Queso',
		'description': 'El mejor queso de cabra, el chingon',
		'product_img': 'http://www.cocinista.es/download/bancorecursos/recetas/hacer-queso-duro.jpg'
		
	},
	{
		'id': 4,
		'name': 'Chiles',
		'description': 'Ah pero que picosos!',
		'product_img': 'http://2012.espaciomexico.com/img.php?src=/archivos/117.jpg&ac=resize&ref=width&w=450'
		
	}
	]);
};

exports.get = function(req,res){
	res.json
}