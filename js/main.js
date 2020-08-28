$(function(){
    $('.header__slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
    })

    let switcher = true;

    $('.header__burger').on('click', function() {
        $('.menu__list').toggleClass('menu__list--active');
        $('.header__burger').toggleClass('header__burger--active');
        if (switcher == true) {
            $('body').css('overflow','hidden');
            switcher = false;
        }
        else  {
            $('body').css('overflow','auto');
            switcher = true;
        }
    });

    $('.hostings__price-data').each(function(){
        const pricePerMonth = this.dataset.money;
        const sum = pricePerMonth * 12
        $( this ).text(sum);
    })

  
    $('.button-group__btn--year').on('click', function() {
        $('.hostings__price-data').each(function(){
            const pricePerMonth = this.dataset.money;
            const sum = pricePerMonth * 12;
            $( this ).text(sum);
            $('.button-group__btn--year').addClass('button-group__btn--active');
            $('.button-group__btn--month').removeClass('button-group__btn--active');
        })
    })

    $('.button-group__btn--month').on('click', function() {
        $('.hostings__price-data').each(function(){
            const pricePerMonth = this.dataset.money;
            const sum = pricePerMonth * 1;
            $( this ).text(sum);
            $('.button-group__btn--month').addClass('button-group__btn--active');
            $('.button-group__btn--year').removeClass('button-group__btn--active');
        })
    })

    $('.reviews__slider').slick ({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-prev.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-next.png" alt=""></button>',
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                }
            },
        ]
    });





});