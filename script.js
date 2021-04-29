$('#btn-gen').click(() => {
    $.ajax({
        method: 'GET',
        url: 'https://theysaidso.com/img/qod/qod-inspire.jpg'
    })
    .done((res) => {
        console.log(res);
    })
    .fail((error) => {
        console.error(error);
    })
    .always(() => console.log('request completed!'));
})