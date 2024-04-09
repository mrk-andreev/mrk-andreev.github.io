window.addEventListener("load", function () {
    var COUNTER_VALUE_CONTAINER_NAME = "counter-value";
    var ENDPOINT = "https://yqfiwpsxz3.execute-api.eu-west-2.amazonaws.com/default/counterFunction";
    var page = location.pathname;
    if (!page) {
        page = "";
    }
    page = "/" + page.split("/").filter(function (part) {
        return part && part.length > 0
    }).join("/");


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
                localStorage.setItem(page, viewsCount);
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
        for (var container in containers) {
            container.innerText = viewsCount;
        }
    }

    if (localStorage.getItem(page)) {
        updateCounterInUi(localStorage.getItem(page));
    } else {
        fetchCounterValue();
    }
});
