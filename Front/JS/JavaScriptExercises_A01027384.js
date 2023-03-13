// 1. Escribe una función que encuentre el primer carácter de un cadena de texto que no se repite. Prueba tu función con: 'abacddbec'
function findFirstNonRepeatedChar(str) {
    for (let el = 0; el < str.length; el++) {
      const element = str[el];
      let count = 0;
      for (let i = 0; i < str.length; i++) {
        const element2 = str[i];
        if (element === element2) {
          count++;
        }
      }
      if (count === 1) {
        return element;
      }
    }
  }
  
  // 2. Escribe una función que implemente el algoritmo 'bubble-sort' para ordenar una lista de números.
  function bubbleSort(arr) {
    let sorted = false;
    while (!sorted) {
      sorted = true;
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          sorted = false;
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
        }
      }
    }
    return arr;
  }
  
  // 3. Escribe dos funciones: la primera que invierta un arreglo de números y regrese un nuevo arreglo con el resultado; la segunda que modifique el mismo arreglo que se pasa como argumento. No se permite usar la función integrada 'reverse'.
  function reverseArray(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      newArr.push(arr[i]);
    }
    return newArr;
  }
  
  // 4. Escribe una función que reciba una cadena de texto y regrese una nueva con la primer letra de cada palabra en mayúscula.
  function capitalize(str) {
    str = str.split("");
    str[0] = str[0].toUpperCase();
    for (let i = 0; i < str.length; i++) {
      if (str[i] == " ") {
        str[i + 1] = str[i + 1].toUpperCase();
      }
    }
    str = str.join("");
    return str;
  }
  
  // 5. Escribe una función que calcule el máximo común divisor de dos números.
  function gcd(a, b) {
    const min = a < b ? a : b; // operador ternario
    const max = a > b ? a : b;
    let gcd = 1; // 1 es el mínimo común divisor (default)
    for (let i = 2; i <= min; i++) {
      // solo necesitamos iterar hasta el mínimo de los dos números
      if (min % i === 0 && max % i === 0) {
        gcd = i;
      }
    }
    return gcd;
  }
  
  // 6. Crea una función que cambie una cadena de texto a 'Hacker Speak'. Por ejemplo, para la cadena 'Javascript es divertido', su hacker speak es: 'J4v45c1pt 35 d1v3rt1d0'.
  function hackerSpeak(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz ";
    alphabet = alphabet.split("");
    let hackerAlphabet = "48cd3f6h1Jk1mn0pqr57uvwxy2 ";
    hackerAlphabet = hackerAlphabet.split("");
  
    str = str.split("");
    for (let i = 0; i < str.length; i++) {
      let a = alphabet.indexOf(str[i]);
      str[i] = hackerAlphabet[a];
    }
    return str.join("");
  }
  
  // 7. Escribe una función que reciba un número, y regrese una lista con todos sus factores. Por ejemplo: factoriza(12) -> [1, 2, 3, 4, 6, 12].
  function factorize(num) {
    let factors = [];
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        factors.push(i);
      }
    }
    return factors;
  }
  
  // 8. Escribe una función que quite los elementos duplicados de un arreglo y regrese una lista con los elementos que quedan. Por ejemplo: quitaDuplicados([1, 0, 1, 1, 0, 0]) -> [1, 0]
  function removeDuplicates(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (newArr.indexOf(arr[i]) == -1) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  
  // 9. Escribe una función que reciba como parámetro una lista de cadenas de texto, y regrese la longitud de la cadena más corta.
  function shortestString(arr) {
    min = arr[0].length;
    for (let index = 0; index < arr.length; index++) {
      const string = arr[index];
      const strlen = string.length;
      if (strlen < min) {
        min = strlen;
      }
    }
    return min;
  }
  
  // 10. Escribe una función que revise si una cadena de texto es un palíndromo o no.
  function isPalindrome(str) {
    let str2;
    str2 = str.toLowerCase().split("").reverse().join("");
    return str2 === str.toLowerCase();
  }
  // 11. Escribe una función que tome una lista de cadena de textos y devuelva una nueva lista con todas las cadenas en orden alfabético.
  function alphabetize(arr) {
    // arr.sort(); // no usar este metodo
    return arr;
  }
  
  // 12. Escribe una función que tome una lista de números y devuelva la mediana y la moda.
  function centralTendencies(arr) {
    let mode;
    let median;
    if (arr.length % 2 == 0) {
      median = (arr[arr.length / 2] + arr[arr.length / 2 + 1]) / 2;
    } else{
      median = arr[(arr.length + 1) / 2];
    }
    
    for (let i = 0; i < arr.length; i++) {
      let count = 0;
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
          count++;
        }
      }
      if (count > mode) {
        mode = arr[i];
      }
    }
    return [median, mode];
  }
  
  // 13. Escribe una función que tome una lista de cadenas de texto y devuelva la cadena más frecuente.
  function mostFrequent(params) {}
  
  // 14. Escribe una función que tome un número y devuelva verdadero si es una potencia de dos, falso de lo contrario.
  function isPowerOfTwo(int) {
    int = int/2;
    console.log(int);
    if (int%2 == 0) {
      isPowerOfTwo(int);
    }
    else if (int == 1) {
      console.log("true");
      return true;
    }
    else{
      console.log("false");
      return false;
    }
  }
  
  // 15. Escribe una función que tome una lista de números y devuelva una nueva lista con todos los números en orden descendente.
  function sortDescending(arr)  {
    let sorted = false;
    while (!sorted) {
      sorted = true;
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
          sorted = false;
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
        }
      }
    }
    return arr;
  }
  
  
  // Ejecución de las funciones
  // 1
  console.log(
    "1. Función que encuentra el primer carácter de un cadena de texto que no se repite"
  );
  console.log(findFirstNonRepeatedChar("abacddbec"));
  // 2
  console.log(
    "2. Escriba una función que implemente el algoritmo 'bubble-sort' para ordenar una lista de números."
  );
  console.log(bubbleSort([4, 8, 2, 5, 6, 4, 2, 6, 1]));
  // 3
  console.log(
    "3. Escribe dos funciones: la primera que invierta un arreglo de números y regrese un nuevo arreglo con el resultado; la segunda que modifique el mismo arreglo que se pasa como argumento. No se permite usar la función integrada 'reverse'."
  );
  console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));
  // 4
  console.log(
    "4. Escribe una función que reciba una cadena de texto y regrese una nueva con la primer letra de cada palabra en mayúscula."
  );
  console.log(capitalize("hello world from javascript"));
  // 5
  console.log(
    "5. Escribe una función que calcule el máximo común divisor de dos números."
  );
  console.log(gcd(12, 18));
  // 6
  console.log(
    "6. Crea una función que cambie una cadena de texto a 'Hacker Speak'."
  );
  console.log(hackerSpeak("Javascript es divertido"));
  // 7
  console.log(
    "7. Escribe una función que reciba un número, y regrese una lista con todos sus factores."
  );
  console.log(factorize(12));
  // 8
  console.log(
    "8. Escribe una función que quite los elementos duplicados de un arreglo y regrese una lista con los elementos que quedan."
  );
  console.log(removeDuplicates([1, 0, 1, 1, 0, 0]));
  // 9
  console.log(
    "9. Escribe una función que reciba como parámetro una lista de cadenas de texto, y regrese la longitud de la cadena más corta."
  );
  console.log(shortestString(["Hola", "soy", "Pablo", "y", "tengo", "21"]));
  // 10
  console.log(
    "10. Escribe una función que revise si una cadena de texto es un palíndromo o no."
  );
  console.log(isPalindrome("anitalavalatina"));
  // 11
  console.log(
    "11. Escribe una función que tome una lista de cadena de textos y devuelva una nueva lista con todas las cadenas en orden alfabético."
  );
  console.log(alphabetize(["Hola", "Pablo", "Alex", "es", "mi", "amigo"]));
  // 12
  console.log(
    "12. Escribe una función que tome una lista de números y devuelva la mediana y la moda."
  );
  console.log(centralTendencies([1, 2, 3, 4, 5, 6, 7, 8, 9]));
  // 13
  console.log(
    "13. Escribe una función que tome una lista de cadenas de texto y devuelva la cadena más frecuente."
  );
  console.log(mostFrequent(["Hola", "soy", "Pablo"]));
  // 14
  console.log(
    "14. Escribe una función que tome un número y devuelva verdadero si es una potencia de dos, falso de lo contrario."
  );
  console.log(isPowerOfTwo(8));
  // 15
  console.log(
    "15. Escribe una función que tome una lista de números y devuelva una nueva lista con todos los números en orden descendente."
  );
  console.log(sortDescending([1, 2, 3, 4, 5, 6, 7, 8, 9]));
  