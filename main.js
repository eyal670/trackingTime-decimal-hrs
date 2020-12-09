// inject with chrome extension https://chrome.google.com/webstore/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld/related
jQuery(document).ready(function () {
    setTimeout(function () {
        jQuery('h2[data-comp="totalDuration"').after('<h2 class="decHrs" style="margin-left:5px;">(' + calcDecHrs() + ')</h2>');
    }, 3000);
});

jQuery(document).ready(function () {
    jQuery('h2[data-comp="totalDuration"').on('DOMSubtreeModified', function () {
        jQuery('.decHrs').text('('+calcDecHrs()+')');
    });
});

function calcDecHrs() {
    var totalString = jQuery('h2[data-comp="totalDuration"').text();
    var total = totalString.split(":");
    var decimal_portion = ("" + total[1] / 60).split(".");
    decimal_portion[1] = decimal_portion[1].substring(0, 2);
    var decimal_total = total[0] + "." + decimal_portion[1];
    return decimal_total;
}