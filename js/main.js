angular.module('PlaceholderImageApp', [])
    .controller('AppController', AppController);



function AppController($scope, $compile) {
    $scope.width = "400";
    $scope.height = "150";
    $scope.font = "13px sans-serif";

    $scope.generate = function() {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');

        document.body.appendChild(canvas);
        $compile(canvas)($scope);

        canvas.width = $scope.width;
        canvas.height = $scope.height;


        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, $scope.width, $scope.height);
        ctx.strokeStyle = "#cccccc";
        ctx.strokeRect(0, 0, $scope.width, $scope.height);

        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo($scope.width, $scope.height);
        ctx.moveTo($scope.width,0);
        ctx.lineTo(0, $scope.height);
        ctx.stroke();

        ctx.font = $scope.font;
        ctx.fillStyle = "black";
        ctx.fillText($scope.width + "x" + $scope.height, $scope.width -  ctx.measureText($scope.width + "x" + $scope.height).width - 2, $scope.height - 2, $scope.width);

        $scope.imageData = canvas.toDataURL();
        canvas.remove();


    };
}