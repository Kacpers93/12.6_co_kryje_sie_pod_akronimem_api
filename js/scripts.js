var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
var capitalList = $("#capital-name");
var timezoneList = $("#time-zones");
var populationList = $("#population");
var bordersList = $("#border");
//var flagsElement = $('#flagimg')
//var flag = .append(item.flag)

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
    capitalList.empty();
    timezoneList.empty();
    populationList.empty();
    bordersList.empty();
    resp.forEach(function (item) {
        
        
        $('<li>').text(item.name).appendTo(countriesList);
        $('<li>').text("Region: " + item.subregion).appendTo(countriesList);
        
        
//        $('<li>').addClass('flagimage').prepend('<img class="flagimg" src="#" />').attr("src", (item.flag)).appendTo(countriesList);
        
        
//        $('<img class="flagimg" src="#" />')
        
        
//        $('<li>').attr('id', 'flagimage').appendTo(countriesList);
//        $('<img class="flagimg" src="#" />').appendTo(flagsElement);
//        var flagsElement = $('#flagsimage');
        
        
        
        
//        $('<li>').prepend('<img src="#" />').appendTo(countriesList);
//        $('img').attr("src",(item.flag));
        
        
        
        
        
//        .attr("src", (item.flag))
        
        
        
//        $('<li>').attr(item.flag).appendTo(countriesList);
        
//        $('<li>').prepend('<img/>').attr('src',(item.flag)).appendTo(countriesList);
        
        
//        $('<li>').append(item.flag).appendTo(countriesList);
        
        
        
//        $('<li>').prepend('<img src="#" />').appendTo(countriesList);
//        $
        
        
        
//        $('<li>').prepend('<img src="#" />').attr("src",(item.flag.appendTo("img"))).appendTo(countriesList);
//        $('<img>').prop("src",(item.flag.appendTo("img")));
        
        
        $('<li>').text(item.capital).appendTo(capitalList);
        $('<li>').text(item.timezones).appendTo(timezoneList);
        $('<li>').text(item.population + " people").appendTo(populationList);
        $('<li>').text(item.borders).appendTo(bordersList);
    });
};
