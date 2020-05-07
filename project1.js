$(function () {
    const options = [
        'html',
        'css',
        'javascript',
        'java',
        'golang',
        'csharp',
        'jav',
        'go-to-shopping',
    ]
    //sau khi thả chuột click ra là keyup, nhấn xuống là keydown
    $('form .language-search').keyup(function (e) {
        //console.log($(this).val());
        const curChar = $(this).val();
        const listOptions = options.filter(val => val.includes(curChar));
        //console.log('new list: ', listOptions)
        $('.option-list').empty();
        if (listOptions.length > 0) {
            $('.option-list').fadeIn();
            listOptions.forEach(val => {
                //xu ly truoc khi appendto
                //======cach 1
                // const splitVal = val.split(curChar).join(`<span style="color: red">${curChar}</span>`);
                // appendToList(splitVal);
                // const newVal = val.replace(curChar, "hello");
                //=======cach 2
                const regex = new RegExp(`${curChar}`, 'gi');
                const replaceStr = val.replace(regex, `<span style="color: red">${curChar}</span>`);
                appendToList(replaceStr);
                //console.log(replaceStr);
                // $(`<li>${val}</li>`).appendTo('.option-list');
            });
        }
        else {
            hideList();
        }

    });
    $('body').click(function (e) {
        e.preventDefault();
        if ($('.option-list').css('display') !== 'none') {
            hideList();
        }
    });
    $('body').on('click', '.option-list li', function () {
        //e.stopPropagation();//chỉ nhận sự kiện click của cái này
        const curText = $(this).text();
        $('form .language-search').val(curText);
        hideList();
    });
    // $('form .language-search').blur(function (e) {
    //     e.preventDefault();
    //     $('.option-list').hide();
    // });
});
function hideList() {
    $('.option-list').hide();
}
function appendToList(val) {
    $(`<li> ${val}</li>`).appendTo('.option-list');
}