/**
 * Created by sleepbear on 2015. 12. 3..
 */
bookmarkApp.controller("bookmarkController", function ($scope, $http) {
    $scope.writeCard = writeCard;
    $scope.init = init;
    $scope.bookmarking = bookmarking;
    $scope.writeComment = writeComment;
    $scope.fetchedAllCard = [];
    function init() {
        fetchedCard();
    };

    function bookmarking(cardId){
        var url = "{memberId}/insert/{cardId}".replace("{memberId}", $scope.loginMember.id).replace("{cardId}", cardId);
        var req = {method: "GET", url: "http://localhost:8080/api/" + url, data: ""};
        $http(req)
            .success(function (data) {
            }).error(function () {
            console.log("에러");
        });
    }

    function fetchedCard() {
        var req = {method: "GET", url: "http://localhost:8080/api/bookmark/card", data: ""};
        $http(req)
            .success(function (data) {
                $scope.fetchedAllCard = data;
            }).error(function () {
            console.log("에러");
        });
    }
    function writeCard(card) {
        card.memberId = $scope.loginMember.id;
        var req = { method : "POST", url : "http://localhost:8080/api/write/card", data: card};
        $http(req)
            .success(function(data) {
                fetchedCard();
            }).error(function(){console.log("에러");});
    };
    function writeComment(comment, cardId) {
        comment.bookMarkCardId = cardId;
        $scope.loginMember.id;
        var req = { method : "POST", url : "http://localhost:8080/api/write/comment", data: comment};
        $http(req)
            .success(function(data) {
            }).error(function(){console.log("에러");});
    };

    init();
});