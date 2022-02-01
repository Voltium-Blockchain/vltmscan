$(document).ready(function () {
    $.getJSON('https://voltiumwallet.com/api/txn.php', function (data) {
        var explorer = '';
        $.each(data, function (key, value) {
             explorer += '<tr>';
             explorer += '<td><a href="hash/">' + value.blockhash + '</a></td>';
             explorer += '<td style="color: #f5f5f5;">' + value.blocktime + '</td>';
             explorer += '<td style="color: #f5f5f5;">' + value.address + '</td>';
             explorer += '<td style="color: #f5f5f5;">' + value.amount + '</td>';
             explorer += '<td style="color: #f5f5f5;"><div class="badge badge-outline-success">Approved</div></td>';
             explorer += '</tr>';
        });
        $('#data').append(explorer);
    });
 });