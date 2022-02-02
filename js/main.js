var apix = 'https://voltiumwallet.com/api/txn.php';
// const timeStamp = new Date();

$(document).ready(function () {
    $.getJSON(apix, function (data) {
        var explorer = '';
        $.each(data, function (key, value) {
            function timeStamp() {
                const timeStamp = new Date(value.time * 1000);
                return timeStamp.toISOString().slice(0, 19).replace('T', ' ');
            }
             explorer += '<tr>';
             explorer += '<td><a href="hash/index.html?s=' + value.blockhash + '">' + value.blockhash + '</a></td>';
             explorer += '<td style="color: #f5f5f5;">' + timeStamp(); + '</td>';
             explorer += '<td style="color: #f5f5f5;">' + value.address + '</td>';
             explorer += '<td style="color: #f5f5f5;">' + value.amount + '</td>';
             explorer += '<td style="color: #f5f5f5;"><div class="badge badge-outline-success">Approved</div></td>';
             explorer += '</tr>';
        });
        $('#data').append(explorer);
    });
 });