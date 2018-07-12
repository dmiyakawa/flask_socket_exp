window.setInterval(function() {
    $.ajax({
        type: 'GET',
        url: '/session',
        success: function(data) {
            $('#http-session').text(data['session']);
            $('#http-user').text(data['user']);
        }
    });
}, 1000);

$('#submit-http').click(function() {
    $.ajax({
        type: 'POST',
        url: '/session',
        data: JSON.stringify({session: $('#http-session-set').val()}),
        contentType: 'application/json'
    });
});
$('#login-http').click(function() {
    $.ajax({
        type: 'POST',
        url: '/session',
        data: JSON.stringify({user: $('#http-user-set').val()}),
        contentType: 'application/json'
    });
});
$('#logout-http').click(function() {
    $.ajax({
        type: 'POST',
        url: '/session',
        data: JSON.stringify({user: null}),
        contentType: 'application/json'
    });
});


// Socket.IO handlers
var socket = null;

$('#connect').click(function() {
    if (!socket) {
        socket = io.connect(location.href);
        socket.on('refresh-session', function(data) {
            $('#socketio-session').text(data['session']);
            $('#socketio-user').text(data['user']);
        });

        $('#connect').text('Disconnect');
        $('#socketio').show();
    }
    else {
        socket.disconnect();
        socket = null;
        $('#socketio').hide();
        $('#connect').text('Connect');
        $('#socketio-session').text('');
        $('#socketio-user').text('');
    }
});

window.setInterval(function() {
    if (socket)
        socket.emit('get-session');
}, 1000);

$('#submit-socketio').click(function() {
    socket.emit('set-session', {session: $('#socketio-session-set').val()});
});
$('#login-socketio').click(function() {
    socket.emit('set-session', {user: $('#socketio-user-set').val()});
});
$('#logout-socketio').click(function() {
    socket.emit('set-session', {user: null});
});
