var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
    var countryName = $('#country-name').val();
    if (!countryName.length) countryName = 'Poland';
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
    });
}


function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function (item) {

        var mainList = $('<li id="containers">');
        var list = $('<ul id="secoundList">');
        var img = $('<img>').attr('src', item.flag);

        $('<li>').text("Country: " + item.name).appendTo(list);
        $('<li>').text("Region: " + item.subregion).appendTo(list);
        $('<li>').text("Capital: " + item.capital).appendTo(list);
        $('<li>').text("Time zone: " + item.timezones).appendTo(list);
        $('<li>').text("Population: " + item.population + " people").appendTo(list);
        $('<li>').text("Border neighbors: " + item.borders).appendTo(list);

        $('<li>').append(img).appendTo(list);
        $(list).appendTo(mainList);
        $(mainList).appendTo(countriesList);
    });
};
