app.controller("myBGCtrl", function($scope) {
$scope.title = "Best Board Game List"
$scope.games = [
    {
        name: 'Alhambra',
        minplayers: 2,
        maxplayers: 6,
        age: '8+',
        info: "A competitive card & tile game",
        cover: 'assets/images/alhambra.jpg',
        likes: 0,
        dislikes: 0,
    },
    {
        name: 'Escape!',
        minplayers: 1,
        maxplayers: 5,
        age: '8+',
        cover: 'assets/images/escape.jpg',
        info: "A quick, cooperative dice game",
        likes: 0,
        dislikes: 0,
    },
    {
        name: "Power Grid",
        minplayers: 2,
        maxplayers: 6,
        age: '12+',
        cover: 'https://cf.geekdo-images.com/images/pic173153.jpg',
        info: "A competitive strategy game",
        likes: 0,
        dislikes: 0,
    },
    {
        name: "Smallworld",
        minplayers: 2,
        maxplayers: 5,
        age: '8+',
        cover: 'https://cf.geekdo-images.com/images/pic428828_md.jpg',
        info: "A highly competitive game",
        likes: 0,
        dislikes: 0,
    },
    {
        name: "Ticket to Ride",
        minplayers: 2,
        maxplayers: 5,
        age: '8+',
        cover: 'http://ecx.images-amazon.com/images/I/61dDQUfhuvL._SX300_.jpg',
        info: "A competitive game",
        likes: 0,
        dislikes: 0,
    },
    {
        name: "Treasure Hunter",
        minplayers: 2,
        maxplayers: 5,
        age: '8+',
        cover: 'https://cf.geekdo-images.com/images/pic2632365_md.jpg',
        info: "A competitive card drafting game",
        likes: 0,
        dislikes: 0,
    },
    {
        name: "7 Wonders",
        minplayers: 2,
        maxplayers: 7,
        age: '13+',
        cover: 'https://cf.geekdo-images.com/images/pic860217.jpg',
        info: "A competitve card drafting game",
        likes: 0,
        dislikes: 0,
    }]

$scope.plusOne = function(index) {
    $scope.games[index].likes += 1;
}
$scope.minusOne = function(index) {
    $scope.games[index].dislikes += 1;
}
});
