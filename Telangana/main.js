$(document).ready(function() {

    $nav=$('.nav');
    $toggleCollapse=$('.toggle-collapse');

    /**click event nav */
    $toggleCollapse.click(function() {
        $nav.toggleClass('collapse');
    })

});    