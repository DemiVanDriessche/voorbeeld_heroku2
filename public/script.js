
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            layoutMode:'fitRows'
        });

            $('filter button').on("click", function () {
               var value = $(this).attr('data-filter');
               $grid.isotope({
                filter: value
            });
            })