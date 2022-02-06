var hash_get = window.location.search;

function detailsHash() {
    // alert(hash_get.length);
    let hash_final = hash_get.slice(3, 67);
    var apix = 'https://voltiumwallet.com/api/hash.php?hash=' + hash_final;
    
    $(document).ready(function () {
        $.getJSON(apix, function (data) {
            var explorer = '';
            $.each(data, function (key, value) {
                explorer += '<td> Hash </td>';
                explorer += '<td>' + value.hash + '</td>';
            });
            $('#hash').append(explorer);
        });
     });

    $(document).ready(function () {
        $.getJSON(apix, function (data) {
            var explorer = '';
            $.each(data, function (key, value) {
                function timeStamp() {
                    const timeStamp = new Date(value.time * 1000);
                    return timeStamp.toISOString().slice(0, 19).replace('T', ' ');
                }
                explorer += '<td> Time </td>';
                explorer += '<td>' + timeStamp(); + '</td>';
            });
            $('#time').append(explorer);
        });
     });

     $(document).ready(function () {
        $.getJSON(apix, function (data) {
            var explorer = '';
            $.each(data, function (key, value) {
                explorer += '<td> Size </td>';
                explorer += '<td>' + value.size + ' MiB</td>';
            });
            $('#size').append(explorer);
        });
     });

     $(document).ready(function () {
        $.getJSON(apix, function (data) {
            var explorer = '';
            $.each(data, function (key, value) {
                explorer += '<td> Confirmations </td>';
                explorer += '<td>' + value.confirmations + '</td>';
            });
            $('#confirmations').append(explorer);
        });
     });

     $(document).ready(function () {
        $.getJSON(apix, function (data) {
            var explorer = '';
            $.each(data, function (key, value) {
                explorer += '<td> PreviousBlock </td>';
                explorer += '<td>' + value.previousblockhash + '</td>';
            });
            $('#previousblockhash').append(explorer);
        });
     });

     $(document).ready(function () {
        $.getJSON(apix, function (data) {
            var explorer = '';
            $.each(data, function (key, value) {
                explorer += '<td> NextBlock </td>';
                explorer += '<td>' + value.nextblockhash + '</td>';
            });
            $('#nextblockhash').append(explorer);
        });
     });

    $(document).ready(function () {
        $.getJSON(apix, function (data) {
            var explorer = '';
            $.each(data, function (key, value) {
                explorer += '<td> Nonce </td>';
                explorer += '<td>' + value.nonce + '</td>';
            });
            $('#nonce').append(explorer);
        });
     });

     $(document).ready(function () {
        $.getJSON(apix, function (data) {
            var explorer = '';
            $.each(data, function (key, value) {
                explorer += '<td> Tx </td>';
                explorer += '<td><a href="../tx/">' + value.tx + '</a></td>';
            });
            $('#tx').append(explorer);
        });
     });

    let detailsStatusKey = '<td> Status </td>';
    let detailsStatusValue = '<td> <div class="badge badge-outline-success">Approved</div> </td>';

    document.getElementById('status').innerHTML = detailsStatusKey + detailsStatusValue;

}

detailsHash();