var jsonString = '[{"name":"Manchester GTUG","meetup":"First Monday of every month","tags":["gtug","google","manchester","madlab"]},{"name":"Manchester jQuery Group","meetup":"First Tuesday of every month","tags":["jquery","javascript","jresig","madlab"]},{"name":"Hybrid!","meetup":"First Monday of every month","tags":["jquery","javascript","jresig","madlab"]}]';

var myData = JSON.parse(jsonString);

$(document).ready(function () {
    var $grouplist = $('#groups');
    $.each(myData, function () {
        $('<li>' + this.name + '</li>').appendTo($grouplist);
    });
});
