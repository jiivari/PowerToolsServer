module.exports = function(inputvariable) {

  var uri = 'https://api-2.kesko.fi/kesko/lab/products/' + inputvariable;


  var options = {
    'method': 'GET',
    'uri': uri,
    'headers': {
      'Content-Type': 'application/json',
      'x-ibm-client-id': '3f1c6a12-99e9-4c15-bc12-8b1c0ac09c07',
      'x-ibm-client-secret': 'eT6cC2rF2kQ4eR0wT6fO7eC0yW5yV6lG2dK3sO0tT1fO5bM4wV',
      'Accept-Language': 'en'
    }
  };


  return options;

}
