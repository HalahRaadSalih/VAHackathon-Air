var app = angular.module('air');
app.controller('HomeController', function(){
	console.log('HomeController')
});

app.controller('ContactsController', function($scope){
	$scope.contacts = [
		{
			name: 'Anabel Hoang',
			image: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAAoAAAAJDQ4NDIwZmVjLWYwNWItNDQwNC1hMTkyLTk1ODViNjE0MjRjMQ.jpg',
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
});

app.controller('DashboardFull', function($scope){
	$scope.items = [
    {
        title: 'I live in Boise Idaho and I was woundering if there are any physicians that you would recomend?',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil consequuntur, nesciunt dicta, esse rem ducimus itaque quis. Adipisci ullam nam qui illum debitis sit ad in delectus, repudiandae non dolorum!",
        image: "https://cdn0.vox-cdn.com/images/verge/default-avatar.v9899025.gif",
        author: 'The Mother Goose',
        createdAt: Date.now(),
        votes: 1,
        reputation: 75,
        favorite: false,
        commentBool: false,
        comments: [{
            comment: 'Mentor',
            author: 'Mentor-305'
        },{
            comment: 'Dr. anon at 555 main street knows his stuff here is his contact info',
            author: 'Vet-555'
        }
        ],
        addCommentsBool: false
    },
    {
        title: 'Cairo Is Uber Cool',
        description: "Bitters typewriter 8-bit, PBR&B vice cronut williamsburg pitchfork. Master cleanse locavore etsy, brunch williamsburg cold-pressed butcher yuccie craft beer waistcoat meditation swag blue bottle retro. Tattooed etsy vice try-hard kitsch jean shorts. Viral ugh franzen, waistcoat chambray four dollar toast tumblr slow-carb fixie literally put a bird on it poutine celiac. 8-bit celiac roof party normcore ethical meggings pinterest, four dollar toast semiotics. Fixie cornhole mlkshk, organic chillwave forage gluten-free butcher salvia paleo you probably haven't heard of them yuccie. Pabst hashtag hammock, fingerstache truffaut wolf tattooed.",
        image: "https://cdn0.vox-cdn.com/images/verge/default-avatar.v9899025.gif",
        author: 'The Mother Goose',
        createdAt: Date.now(),
        votes: 5,
        reputation: 75,
        favorite: false,
        commentBool: false,
        comments: [{
            comment: 'coolski',
            author: 'Mentor'
        }],
        addCommentsBool: false
    },
    {
        title: "I haven't been feeling to great recently",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil consequuntur, nesciunt dicta, esse rem ducimus itaque quis.",
        author: 'Anon',
        image: "https://cdn0.vox-cdn.com/images/verge/default-avatar.v9899025.gif",
        createdAt: Date.now(),
        votes: 30,
        reputation: 75,
        favorite: false,
        commentBool: false,
        comments: [{
            comment: 'Mentor',
            author: 'Mentor'
        }],
        addCommentsBool: false
    },
    {
        title: 'VA clinicians you would recomend near Tucson AZ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil consequuntur, nesciunt dicta, esse rem ducimus itaque quis.',
        image: "https://cdn0.vox-cdn.com/images/verge/default-avatar.v9899025.gif",
        author: 'The Mother Goose',
        createdAt: Date.now(),
        votes: 0,
        reputation: 75,
        favorite: false,
        commentBool: false,
        comments: [{
            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil consequuntur, nesciunt dicta, esse rem ducimus itaque quis.',
            author: 'Mentor'
        }],
        addCommentsBool: false
    }];

    $scope.showComments = function(item) {
        if (item.commentBool === true) {
            item.commentBool = false;
        } else {
            item.commentBool = true;
        }
    }

    $scope.search = {
        string: ''
    }

    $scope.comment = {
    }

    $scope.item = {
        votes: 0,
        favorite: false,
        createdAt: Date.now(),
        comments: []
    };

    $scope.showForm = false;


    $scope.addAComment = function(item) {
        if (item.addCommentsBool === true) {
            item.addCommentsBool = false;
        } else {
            item.addCommentsBool = true;
        }
    }
    $scope.showF = function() {
        if ($scope.showForm === true) {
            $scope.showForm = false;
        } else {
            $scope.showForm = true;
        }
        console.log('hit')
    }
    $scope.upVote = function(item) {
        item.votes += 1;
    }
    $scope.downVote = function(item) {
        item.votes -= 1;
    }
    $scope.addPost = function(item, myForm) {
        if(myForm.$valid){
            item.votes = 0;
            item.createdAt = Date.now();
            item.commentBool = false;
            item.addCommentsBool = false;
            $scope.items.push(item);
            $scope.item = {};
            $scope.showForm = false;
        } else {
            console.log(myForm);
        }
    }
    $scope.addComment = function(comment, item){
        item.comments.push(comment);
        $scope.comment = {};
        item.addCommentsBool = false;
    }
    $scope.sortReverse  = true;
})

app.animation('.slide', [function() {
    return {
        // make note that other events (like addClass/removeClass)
        // have different function input parameters
        enter: function(element, doneFn) {
        jQuery(element).fadeIn(1000, doneFn)
        // remember to call doneFn so that angular
        // knows that the animation has concluded
        },

        move: function(element, doneFn) {
        jQuery(element).fadeIn(1000, doneFn);
        },

        leave: function(element, doneFn) {
        jQuery(element).fadeOut(1000, doneFn)
        }
    }
}]);
