$(document).ready(function() {
    $("form").submit(function(event) {
        event.preventDefault();
        $('.shopping-list').append(
            '<li>' + '<span class="shopping-item">' +
            $('#shopping-list-entry').val() + '</span>' +
            '<div class="shopping-item-controls">' +
            '<button class="shopping-item-toggle">' +
            '<span class="button-label">check</span>' +
            '</button>' +
            '<button class="shopping-item-delete">' +
            '<span class="button-label">delete</span>' +
            '</button>' +
            '</div>' +
            '</li>');
        $(this)[0].reset();

    });

    $('.container').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    })
    $('.container').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('div').siblings('span').toggleClass('shopping-item__checked');
    })


});
