
const cicty = ['москва', 'новокузнецк', 'кемерово'];
const fixcity = cicty.map(city => city[0].toUpperCase + city.slice(1));

console.log('fixcity: ', fixcity);
