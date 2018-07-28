var app = angular.module("dynamicFieldsPlugin", []);

app.controller("dynamicFields", function($scope) {

    $scope.choices = [{ id: 'likelihood1', name: 'likelihood1' }];

    $scope.addNewChoice = function() {
        var newItemNo = $scope.choices.length + 1;
        $scope.choices.push({ 'id': 'likelihood' + newItemNo, 'name': 'likelihood' + newItemNo });
    };

    $scope.removeNewChoice = function() {
        var newItemNo = $scope.choices.length - 1;
        if (newItemNo !== 0) {
            $scope.choices.pop();
        }
    };

    $scope.showAddChoice = function(choice) {
        return choice.id === $scope.choices[$scope.choices.length - 1].id;
    };

});