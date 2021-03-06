angular.module('PlaceholderImageApp', [])
    .controller('AppController', AppController);



function AppController($scope, $compile) {
    $scope.width = 400;
    $scope.height = 150;
    $scope.fillStyle = "#ffffff";
    $scope.strokeStyle = "#cccccc";
    $scope.font = "sans-serif";
    $scope.fontSize = "13px";
    $scope.fontColor = "#000000";

    $scope.generate = function() {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');

        document.body.appendChild(canvas);
        $compile(canvas)($scope);

        canvas.width = $scope.width;
        canvas.height = $scope.height;


        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = $scope.fillStyle;
        ctx.fillRect(0, 0, $scope.width, $scope.height);
        ctx.strokeStyle = $scope.strokeStyle;
        ctx.strokeRect(0, 0, $scope.width, $scope.height);

        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo($scope.width, $scope.height);
        ctx.moveTo($scope.width,0);
        ctx.lineTo(0, $scope.height);
        ctx.stroke();

        ctx.font = $scope.fontSize + " " + $scope.font;
        ctx.fillStyle = $scope.fontColor;
        ctx.fillText($scope.width + "x" + $scope.height, $scope.width - ctx.measureText($scope.width + "x" + $scope.height).width - 2, $scope.height - 2, $scope.width);

        $scope.imageData = canvas.toDataURL();
        canvas.remove();


    };
}