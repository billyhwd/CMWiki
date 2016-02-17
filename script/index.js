jQuery(function($) {

    $('#label-group-creator').click(function() {
        var rawString = $('#label-group').val();

        $('#output').text(labelConcat(rawString));
    });

    function labelConcat(str) {
        var strArray = str.split(/, \s*/g);
        var output = '';

        for (var i = 0 ; i < strArray.length ; i++) {
            output += 'label:' + strArray[i] + ' ';
        }

        return output;
    }

});
