$(document).ready(function() {

$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
});

});

$(document).ready(function() {


$('.autoplay').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  dots: true,
  arrows: false
});
});

//==================================


$(document).ready(function(){

        $("a").each(function(){
        var t = this;
        if(typeof $(t).data('form') !== "undefined"){
            $(t).click(t, function(event){
                event.preventDefault();
                $('#overlay').fadeIn(400,
                    function(){
                        var name = '#modal_form'+$(t).data('form');
                        $(name)
                            .css({  display : 'block',
                                    left    : ($(window).width() - $(name).width()) / 2 + 'px', // получаем координату центра по ширине
                                    top     : ($(window).height() - $(name).height()) / 2 + 'px' // получаем координату центра по высоте
                            }) //
                            .animate({opacity: 1, top: '10%'}, 100); // плавно прибавляем прозрачность одновременно со съезжанием вниз
                    });
            });
        }
    })




    

    $('.close, #overlay, .send, .post').click( function(){ // ловим клик по крестику или подложке
        $('.mf').each(function(){
            if($(this).is(":visible"))
                $(this).animate({opacity: 0, top: '45%'}, 100,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
            function(){ // после анимации
                $(this).css('display', 'none'); // делаем ему display: none;
                $('#overlay').fadeOut(100); // скрываем подложку
            }
            );
        });

        // если это отправка - то шлем данные на сервер и показываем спасибо
        if($(this).hasClass('post')==true){
            var form = $(this).closest('form');
            var p = {};
            $(":input", form).each(function(){
                if(typeof this.name !== "undefined")
                    p[this.name]=$(this).val();
            });
            $.getJSON("mail.php", p , function(i){
            });
            $('#overlay1').fadeIn(100,
                function(){
                    $('#modal')
                        .css({  display : "block",
                            left    : ($(window).width() - $('#modal').width()) / 2 + 'px', // получаем координату центра по ширине
                            top     : ($(window).height() - $('#modal').height()) / 2 + 'px' // получаем координату центра по высоте
                        }) //
                        .animate({opacity: 1, top: '10%'}, 100); // плавно прибавляем прозрачность одновременно со съезжанием вниз
                });
        }
    });

});



//======================












// $(document).ready(function() { 
//     $('a#go, a#go1').click( function(event){ 
//         event.preventDefault(); 
//         $('#overlay').fadeIn(400, 
//             function(){ 
//                 $('#modal_form') 
//                     .css('display', 'block') // 
//                     .animate({opacity: 1, top: '10%'}, 100); // плавно прибавляем прозрачность одновременно со съезжанием вниз
//         });
//     });
//     /* Закрытие модального окна, тут делаем то же самое но в обратном порядке */
//     $('#modal_close, #overlay,.send1.two.post').click( function(){ // ловим клик по крестику или подложке
//         $('#modal_form')
//             .animate({opacity: 0, top: '45%'}, 100,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
//                 function(){ // после анимации
//                     $(this).css('display', 'none'); // делаем ему display: none;
//                     $('#overlay').fadeOut(100); // скрываем подложку
//                 }
//             );
//     });

//     alignCenter($('#modal_form'));
//     function alignCenter(elem) {
//     elem.css({
//       left: ($(window).width() - elem.width()) / 2 + 'px', // получаем координату центра по ширине
//       top: ($(window).height() - elem.height()) / 2 + 'px' // получаем координату центра по высоте
//     })
//   }


// });

// $(document).ready(function() { 
//     $('a#go3').click( function(event){ 
//         event.preventDefault(); 
//         $('#overlay').fadeIn(400, 
//             function(){ 
//                 $('#modal_form2') 
//                     .css('display', 'block') // 
//                     .animate({opacity: 1, top: '10%'}, 100); // плавно прибавляем прозрачность одновременно со съезжанием вниз
//         });
//     });
//     /* Закрытие модального окна, тут делаем то же самое но в обратном порядке */
//     $('#modal_close, #overlay,.send1').click( function(){ // ловим клик по крестику или подложке
//         $('#modal_form2')
//             .animate({opacity: 0, top: '45%'}, 100,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
//                 function(){ // после анимации
//                     $(this).css('display', 'none'); // делаем ему display: none;
//                     $('#overlay').fadeOut(100); // скрываем подложку
//                 }
//             );
//     });
//     alignCenter($('#modal_form2'));
//     function alignCenter(elem) {
//     elem.css({
//       left: ($(window).width() - elem.width()) / 2 + 'px', // получаем координату центра по ширине
//       top: ($(window).height() - elem.height()) / 2 + 'px' // получаем координату центра по высоте
//     })
//   }


// });



// $(document).ready(function() { 
//     $('a#go5').click( function(event){ 
//         event.preventDefault(); 
//         $('#overlay').fadeIn(400, 
//             function(){ 
//                 $('#modal_form4') 
//                     .css('display', 'block') // 
//                     .animate({opacity: 1, top: '10%'}, 100); // плавно прибавляем прозрачность одновременно со съезжанием вниз
//         });
//     });
//     /* Закрытие модального окна, тут делаем то же самое но в обратном порядке */
//     $('#modal_close, #overlay,.send4').click( function(){ // ловим клик по крестику или подложке
//         $('#modal_form4')
//             .animate({opacity: 0, top: '45%'}, 100,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
//                 function(){ // после анимации
//                     $(this).css('display', 'none'); // делаем ему display: none;
//                     $('#overlay').fadeOut(100); // скрываем подложку
//                 }
//             );
//     });
//     alignCenter($('#modal_form4'));
//     function alignCenter(elem) {
//     elem.css({
//       left: ($(window).width() - elem.width()) / 2 + 'px', // получаем координату центра по ширине
//       top: ($(window).height() - elem.height()) / 2 + 'px' // получаем координату центра по высоте
//     })
//   }

// });



// // ===========  thank ==========


// $(document).ready(function() { 
//     $('a.thank, #thanks1, #thanks, .send1.two.post, .send.three').click( function(event){ 
//         event.preventDefault(); 
//         $('#overlay1').fadeIn(100, 
//             function(){ 
//                 $('#modal') 
//                     .css('display', 'block') // 
//                     .animate({opacity: 1, top: '10%'}, 100); // плавно прибавляем прозрачность одновременно со съезжанием вниз
//         });
//     });
//     /* Закрытие модального окна, тут делаем то же самое но в обратном порядке */
//     $(' #overlay,.send,.closes').click( function(){ // ловим клик по крестику или подложке
//         $('#modal')
//             .animate({opacity: 0, top: '45%'}, 100,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
//                 function(){ // после анимации
//                     $(this).css('display', 'none'); // делаем ему display: none;
//                     $('#overlay1').fadeOut(100); // скрываем подложку
//                 }
//             );
//     });
//     alignCenter($('#modal'));
//     function alignCenter(elem) {
//     elem.css({
//       left: ($(window).width() - elem.width()) / 2 + 'px', // получаем координату центра по ширине
//       top: ($(window).height() - elem.height()) / 2 + 'px' // получаем координату центра по высоте
//     })
//   }

// });


//  // 22222222

// $(document).ready(function() { 
//     $('a#go5').click( function(event){ 
//         event.preventDefault(); 
//         $('#overlay').fadeIn(400, 
//             function(){ 
//                 $('#modal_form4') 
//                     .css('display', 'block') // 
//                     .animate({opacity: 1, top: '10%'}, 100); // плавно прибавляем прозрачность одновременно со съезжанием вниз
//         });
//     });
//     /* Закрытие модального окна, тут делаем то же самое но в обратном порядке */
//     $('#modal_close, #overlay, .zend5').click( function(){ // ловим клик по крестику или подложке
//         $('#modal_form4')
//             .animate({opacity: 0, top: '45%'}, 100,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
//                 function(){ // после анимации
//                     $(this).css('display', 'none'); // делаем ему display: none;
//                     $('#overlay').fadeOut(100); // скрываем подложку
//                 }
//             );
//     });
//     alignCenter($('#modal_form4'));
//     function alignCenter(elem) {
//     elem.css({
//       left: ($(window).width() - elem.width()) / 2 + 'px', // получаем координату центра по ширине
//       top: ($(window).height() - elem.height()) / 2 + 'px' // получаем координату центра по высоте
//     })
//   }

// });





// $(document).ready(function() { 
//     $('a#go4').click( function(event){ 
//         event.preventDefault(); 
//         $('#overlay').fadeIn(100, 
//             function(){ 
//                 $('#modal_form3') 
//                     .css('display', 'block') // 
//                     .animate({opacity: 1, top: '10%'}, 100); // плавно прибавляем прозрачность одновременно со съезжанием вниз
//         });
//     });
//     /* Закрытие модального окна, тут делаем то же самое но в обратном порядке */
//     $('#modal_close, #overlay, .send3').click( function(){ // ловим клик по крестику или подложке
//         $('#modal_form3')
//             .animate({opacity: 0, top: '45%'}, 100,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
//                 function(){ // после анимации
//                     $(this).css('display', 'none'); // делаем ему display: none;
//                     $('#overlay').fadeOut(100); // скрываем подложку
//                 }
//             );
//     });
//     alignCenter($('#modal_form3'));
//     function alignCenter(elem) {
//     elem.css({
//       left: ($(window).width() - elem.width()) / 2 + 'px', // получаем координату центра по ширине
//       top: ($(window).height() - elem.height()) / 2 + 'px' // получаем координату центра по высоте
//     })
//   }

// });












// $(document).ready(function() { 
//     $('a#go6').click( function(event){ 
//         event.preventDefault(); 
//         $('#overlay').fadeIn(100, 
//             function(){ 
//                 $('#modal_form5') 
//                     .css('display', 'block') // 
//                     .animate({opacity: 1, top: '10%'}, 100); // плавно прибавляем прозрачность одновременно со съезжанием вниз
//         });
//     });
//     /* Закрытие модального окна, тут делаем то же самое но в обратном порядке */
//     $('#modal_close, #overlay, .send2').click( function(){ // ловим клик по крестику или подложке
//         $('#modal_form5')
//             .animate({opacity: 0, top: '45%'}, 100,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
//                 function(){ // после анимации
//                     $(this).css('display', 'none'); // делаем ему display: none;
//                     $('#overlay').fadeOut(100); // скрываем подложку
//                 }
//             );
//     });
//     alignCenter($('#modal_form5'));
//     function alignCenter(elem) {
//     elem.css({
//       left: ($(window).width() - elem.width()) / 2 + 'px', // получаем координату центра по ширине
//       top: ($(window).height() - elem.height()) / 2 + 'px' // получаем координату центра по высоте
//     })
//   }

// });





$(document).ready(function() { 
    /* Закрытие модального окна, тут делаем то же самое но в обратном порядке */
    $(' #overlay1,.closes, .send').click( function(){ // ловим клик по крестику или подложке
        $('#modal')
            .animate({opacity: 0, top: '45%'}, 100,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
                function(){ // после анимации
                    $(this).css('display', 'none'); // делаем ему display: none;
                    $('#overlay1').fadeOut(100); // скрываем подложку
                }
            );
    });
    alignCenter($('#modal'));
    function alignCenter(elem) {
    elem.css({
      left: ($(window).width() - elem.width()) / 2 + 'px', // получаем координату центра по ширине
      top: ($(window).height() - elem.height()) / 2 + 'px' // получаем координату центра по высоте
    })
  }

});