/**
 * Created by sleepbear on 2015. 12. 3..
 */
bookmarkApp.controller("joinController", function ($scope, $http) {
    $scope.submit= submit;

    function submit(member) {
        var req = { method : "POST", url : "http://localhost:8080/api/join", data: member};
        $http(req)
            .success(function(data) {
                if(data) {
                    alert("가입 완료");
                }else {
                    alert("실패")
                }
            }).error(function(){console.log("에러");});
    }
});