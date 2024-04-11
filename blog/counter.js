window.addEventListener("load", function () {
    var COUNTER_VALUE_CONTAINER_NAME = "counter-value";
    var ENDPOINT = "https://counter.aws.mrkandreev.name/counterFunction";
    var page = location.pathname;
    if (!page) {
        page = "";
    }
    page = "/" + page.split("/").filter(function (part) {
        return part && part.length > 0 && part !== 'index.html';
    }).join("/");


    // TODO: refactor with promise
    function fetchCounterValue() {
        fetch(ENDPOINT, {
            "method": "POST",
            "mode": "cors",
            "content-type": "application/x-www-form-urlencoded",
            "body": btoa(page)
        }).then(function (res) {
            return res.json();
        }).catch(function (err) {
            console.error(err)
        }).then(function (data) {
            var viewsCount = '?';
            try {
                viewsCount = data["views_count"];
                sessionStorage.setItem(page, viewsCount);
            } catch (e) {
                console.error(e);
            }
            updateCounterInUi(viewsCount);
        }).catch(function (err) {
            console.error(err)
        });
    }

    function updateCounterInUi(viewsCount) {
        var containers = document.getElementsByClassName(COUNTER_VALUE_CONTAINER_NAME);
        for (var i=0; i<containers.length; i++) {
            containers[i].innerText = viewsCount;
        }
    }

    if (sessionStorage.getItem(page)) {
        updateCounterInUi(sessionStorage.getItem(page));
    } else {
        fetchCounterValue();
    }
});
