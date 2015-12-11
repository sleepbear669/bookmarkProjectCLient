/**
 * Created by sleepbear on 2015. 12. 3..
 */
bookmarkApp.controller("myPhraseController", function ($scope, $http) {
    $scope.fetchedMemberPhrase = [];
    function init() {
        if($scope.loginStatus){
            fetchedMemberBookmark($scope.loginMember.id);
        }
    }


    function fetchedMemberBookmark(memberId){
        var url = "bookmark/card/{memberId}".replace("{memberId}", memberId);
        var req = {method: "GET", url: "http://localhost:8080/api/" + url, data: ""};
        $http(req)
            .success(function (data) {
                $scope.fetchedMemberPhrase = data;
            }).error(function () {
            console.log("에러");
        });
    }

    init();
});