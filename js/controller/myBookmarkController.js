/**
 * Created by sleepbear on 2015. 12. 3..
 */
bookmarkApp.controller("myBookmarkController", function ($scope, $http) {
    var fetchBookmarker= fetchBookmarker;
    $scope.fetchedBookmarker = [];
    function init() {
        if($scope.loginStatus){
            fetchBookmarker($scope.loginMember.id);
        }
    }
    function fetchBookmarker(member) {
        var url = "bookmarker/{memberId}".replace("{memberId}", member);
        var req = { method : "GET", url : "http://localhost:8080/api/" + url, data: ""};
        $http(req)
            .success(function(data) {
                $scope.fetchedBookmarker = data;
            }).error(function(){console.log("에러");});
    }

    init();
});