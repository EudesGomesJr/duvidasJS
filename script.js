import apiResponse from './product.js';

// ======= Sort ======

  apiResponse.sort(function (a, b) {
    if (a.rating.rate < b.rating.rate) {
      return 1;
    }
    if (a.rating.rate > b.rating.rate) {
      return -1;
    }
    // a e b são iguais
    return 0;
  });
  console.log("Array ordenada pelo rating:\n", apiResponse);

  // =====  Filter  ==============
  
  var invalidEntries = 0;
  
  function filterByICatergory(obj) {
    if (obj.category === "electronics") {      
        return true;
    } else {
      invalidEntries++;
      return false;
    }
  }
  
  var newApiResponse = apiResponse.filter(filterByICatergory);
  
  console.log("Array filtrada\n", newApiResponse);
  console.log("Número de itens que não atenderam a condição = ", invalidEntries);
  