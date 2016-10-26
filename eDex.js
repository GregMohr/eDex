$(document).ready(function() {
    $('#form1').submit(function() {
        var first = $('[name="firstName"]').val();
        var last = $('[name="lastName"]').val();
        var email = $('[name="email"]').val();
        var contact = $('[name="contact"]').val();
        var desc = $('[name="description"]').val();

        $('#cardBox').append(`
    <div class="card">
      <h4>${first} ${last}</h4>
      <p>${contact}</p>
      <p>${email}</p>
      <p class="cardDesc">${desc}</p>
    </div><!-- card end -->`);

        $('[type="text"], textarea').val("");

        return false;
    });

    $(document).on('click', '.card', function(){
        $(this).children().hide();
        $(this).children('.cardDesc').show();
        // $(this).children('.cardDesc').css('display', 'block');
    });

    $(document).on('click', '.cardDesc', function(){
        alert("howdy");
        $(this).siblings().show();
        $(this).hide();
        alert("Hiya");
    });
});
