var app = angular.module('air');
app.controller('HomeController', function(){
	console.log('HomeController')
});

app.controller('ContactsController', function($scope){
	// group members
	$scope.contacts = [
		{
			name: 'Anabel Hoang',
			image: 'https://lh3.googleusercontent.com/-vxtOFsB6c08/UtWelvFRt3I/AAAAAAAAHpU/VgWmi3EqqaQ/s200-no/anonymous_200.gif',
			linkedIn: 'https://www.linkedin.com/in/anabelhoang',
			github: ''
		},
		{
			name: 'Eugene Huang',
			image: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAASJAAAAJDMxZjBiY2ZmLTM5YTItNDQ5NS05NDBjLTEzYjZkMWY0NDE4Yw.jpg',
			linkedIn: 'https://www.linkedin.com/in/elhuang',
			github: ''
		},
		{
			name: 'Natalie Low',
			image: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/7/005/019/2fa/2c4038a.jpg',
			linkedIn: 'https://www.linkedin.com/in/natalie-low-32724521',
			github: ''
		},
		{
			name: 'Prathishta Rebala',
			image: 'https://media.licdn.com/media/AAEAAQAAAAAAAAKyAAAAJGNmMDViMDY1LTVlNGUtNGQ5ZC1hNGIzLTVjOTRlNzZkZTFkYQ.jpg',
			linkedIn: 'https://www.linkedin.com/in/prathishtarebala',
			github: 'https://github.com/prathi019'
		},
		{
			name: 'Halah Salih',
			image: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAARlAAAAJDM4NTVhNmU2LTBhOWQtNDI4OC05MmRjLTNhMDhjYjZiYTkzYQ.jpg',
			linkedIn: 'https://www.linkedin.com/in/halah-al-shaikhly-541b7650',
			github: 'https://github.com/HalahRaadSalih'
		},
		{
			name: 'Cairo Stewart',
			image: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAJaAAAAJDQwNjJkMjZkLTk3YmYtNGVlNC1hNmVkLTMwODY4M2IxZGYxNA.jpg',
			linkedIn: 'https://www.linkedin.com/in/cairo-stewart-18741394',
			github: 'https://github.com/masakistewart'
		},
		{
			name: 'Edward Tierra',
			image: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAARBAAAAJDU1ZDBjYjUzLWVkMzktNGJhZi04MTc1LTQ1MjU0M2NlYWYxMw.jpg',
			linkedIn: 'https://www.linkedin.com/in/ed-tierra-8b696633',
			github: 'https://github.com/Thatsedrich'
		}
	];
	console.log('Contacts')
})
