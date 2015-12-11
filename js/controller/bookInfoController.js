/**
 * Created by sleepbear on 2015. 12. 3..
 */
bookmarkApp.controller("bookInfoController", function ($scope, $http) {
    $scope.fetchedBookInfo = [];
    var fetchBookInfo = function(member) {
        var req = { method : "GET", url : "http://localhost:8080/api/bookInfo", data: member};
        $http(req)
            .success(function(data) {
                $scope.fetchedBookInfo = data;
            }).error(function(){console.log("에러");});
    }

    fetchBookInfo();
});