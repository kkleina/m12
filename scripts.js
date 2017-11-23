var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);
$('#country-name').keypress(function(e) {
  if(e.keyCode == 13) {
    searchCountries();
  };
});

function searchCountries() {
  var countryName = $('#country-name').val();
  if(!countryName.length) countryName = 'Poland';
  $.ajax({
    url: url + countryName,
    method: 'GET',
    success: showCountriesList,
    error: amptyCountriesList
  });
}

function showCountriesList(resp) {
  countriesList.empty();
  resp.forEach(function(item) {
    var name = item.name;
    var flag = $('<img>', {src: item.flag, class: 'flag'});
    $('<li>').appendTo(countriesList).append( name, flag );
  });
}

function amptyCountriesList() {
  countriesList.empty();
  $('<li>').text('No country').appendTo(countriesList);
}

