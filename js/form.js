var hash_get = window.location.search;

function sortData() {
    let addressSort = hash_get.slice(3, hash_get.length);
    if (addressSort.length == 34) {
        window.location.assign('https://vltmscan.com/tx/index.html?s=' + addressSort);
    }
    if (addressSort.length == 64) {
        window.location.assign('https://vltmscan/hash/index.html?s=' + addressSort);
    }
}

sortData();