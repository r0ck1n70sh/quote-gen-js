$('#btn-gen').click(() => {
    $.ajax({
        method: 'GET',
        url: 'https://goquotes-api.herokuapp.com/api/v1/random?count=1'
    })
    .done((res) => {
        console.log(res);
        $('.p-quote').text(res.quotes[0].text);
        $('.p-auth').text(res.quotes[0].author);

        console.log(res.quotes[0].text);
        console.log(res.quotes[0].author)
    })
    .fail((error) => {
        console.error(error);
    })
    .always(() => console.log('request completed!'));
})