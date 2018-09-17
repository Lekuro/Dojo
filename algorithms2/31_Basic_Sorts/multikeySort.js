function multikeySort(arr) {
  console.log("multikeySort() data:", arr);
  var count = 0;
  var notSorted = true;
  var iteration = 1;
  while (notSorted) {
    notSorted = false;
    for (var i = 0; i < arr.length - iteration; i++) {
      count++;
      if (arr[i].lastName > arr[i + 1].lastName) {
        notSorted = true;
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    iteration++;
  }
  var timesMeet = 1;
  i = 1;
  while (i < arr.length) {
    var times = 1;
    if (arr[i].lastName === arr[i - 1].lastName) {
      times++;
      i++;
      while (arr[i].lastName === arr[i - 1].lastName) {
        times++;
        i++;
      }
      if (timesMeet < times) timesMeet = times;
    } else i++;
  }
  console.log(timesMeet);
  timesMeet -= 1;
  while (timesMeet) {
    for (i = 0; i < arr.length - 1; i++) {
      if (arr[i].lastName === arr[i + 1].lastName) {
        if (arr[i].firstName > arr[i + 1].firstName) {
          temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
        }
      }
    }
    timesMeet--;
  }
  console.log("result: ", arr, "count: ", count);
  return arr;
}
console.log(
  "multikeySort() for this challenge, you will sort an array, however the items in the array are not simple numbers. Given an array of objects, where each object contains a .firstName and a .lastName , sort the array by both last name (primary) and first name (secondary). Lee Abbey should be sorted before Aaron Carnevale, and Aaron Carnevale should be sorted before his brother Giorgio Carnevale."
);
arr = [
  { firstName: "Drew", lastName: "Pham" },
  { firstName: "Giorgio", lastName: "Carnevale" },
  { firstName: "Seth", lastName: "Abueg" },
  { firstName: "Aaron", lastName: "Carnevale" },
  { firstName: "Lee", lastName: "Abbey" },
  { firstName: "Speros", lastName: "Misirlakis" },
  { firstName: "Nicci", lastName: "Abueg" },
  { firstName: "Maria", lastName: "Wong" },
  { firstName: "Maan", lastName: "Hashem" },
  { firstName: "Jason", lastName: "Abueg" },
  { firstName: "Keita", lastName: "Jones" },
  { firstName: "Elva", lastName: "Abueg" },
  { firstName: "Amanda", lastName: "Fry" },
  { firstName: "Anna", lastName: "Abueg" }
];
multikeySort(arr);
console.log("------------------------------------------");
