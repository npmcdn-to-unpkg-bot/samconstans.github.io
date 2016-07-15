$(function () {

        $('.bxslider').bxSlider({
            auto: false,
            autoControls: true
        });

        function grid() {
            var $grid = $('.grid').imagesLoaded(function () {
                $grid.masonry({
                    itemSelector: '.grid-item',
                    columnWidth: '.grid-sizer',
                    gutter: '.gutter-sizer',
                    percentPosition: true
                });
            });
        }

        function search() {
            $('.ideas').find('div').remove();
            var $searchKey = $('.search__field').val();

            $.ajax({
                url: 'https://pixabay.com/api/?key=2650584-e8feab9b11ed644dcec728ac9&q=' + $searchKey + '&image_type=photo',
                dataType: 'jsonp',
                success: function (data) {
                    console.log(data);
                    var $html = $('#container').html();
                    var $content = tmpl($html, data);
                    $('.ideas').append($content);
                    grid();
                },
                error: function () {
                    alert('Error!');
                }
            });
        }

        search();

        $('.search__button').on('click', function (e) {
            e.preventDefault();
            search();
            $('.search__field').val('');
        })
    }
);
