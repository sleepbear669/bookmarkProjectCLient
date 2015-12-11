/**
 * Created by sleepbear on 2015. 12. 3..
 */
bookmarkApp.controller("mainController", function ($scope, $http) {
    $scope.signIn= signIn;
    $scope.loginStatus = false;
    $scope.loginMember = {};
    function signIn(member) {
        var req = { method : "POST", url : "http://localhost:8080/api/login", data: member};
        $http(req)
            .success(function(data) {
                $scope.loginMember.id = data.id;
                $scope.loginMember.email = data.email;
                $scope.loginMember.nickname = data.nickname;
                $scope.loginStatus = data.status;
            }).error(function(){console.log("에러");});
    }
});