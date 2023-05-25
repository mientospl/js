//zadanie1
//function oblicz() {
  //  var liczba1 = parseFloat(document.getElementById('liczba1').value);
  //  var liczba2 = parseFloat(document.getElementById('liczba2').value);
   // var operacja = document.getElementById('operacja').value;
  //  var wynik;

   // switch (operacja) {
  //      case 'dodawanie':
  //          wynik = liczba1 + liczba2;
   //         break;
    //    case 'odejmowanie':
    //        wynik = liczba1 - liczba2;
     //       break;
     //   case 'mnozenie':
    //        wynik = liczba1 * liczba2;
    //        break;
     //   case 'dzielenie':
    //        wynik = liczba1 / liczba2;
    //        break;
   // }

  //  document.getElementById('wynik').innerHTML = 'Wynik: ' + wynik;
//}
//zadanie 2
//function obliczSumeCyfr() {
  //  var liczba = document.getElementById('liczba').value;
  //  var suma = 0;
    //for (var i = 0; i < liczba.length; i++) {
  //      suma += parseInt(liczba[i]);
   // }

   // document.getElementById('wynik').innerHTML = 'Suma cyfr: ' + suma;
//}
//zadanie 3
//function wyswietlImieNazwisko() {
 //   var imie = document.getElementById('imie').value;
  //  var nazwisko = document.getElementById('nazwisko').value;
  //  var pierwszaLiteraImienia = imie.charAt(0).toUpperCase();
   // var pelneNazwisko = nazwisko.charAt(0).toUpperCase() + nazwisko.slice(1);

    //var wynik = pierwszaLiteraImienia + '. ' + pelneNazwisko;

   // document.getElementById('wynik').innerHTML = 'Wynik: ' + wynik;
//}
//zadanie 4
//function odwrocTekst() {
 //   var tekst = document.getElementById('tekst').value;
 //   var odwroconyTekst = '';

  //  for (var i = tekst.length - 1; i >= 0; i--) {
  //      odwroconyTekst += tekst.charAt(i);
  //  }

  //  document.getElementById('wynik').innerHTML = 'Wynik: ' + odwroconyTekst;
//}

//zadanie 5
//function generujHaslo() {
 //   var dlugoscHasla = 8;
  //  var znaki = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  //  var haslo = '';

   // for (var i = 0; i < dlugoscHasla; i++) {
   //     var losowyIndex = Math.floor(Math.random() * znaki.length);
   //     haslo += znaki.charAt(losowyIndex);
  //  }

   // document.getElementById('wynik').innerHTML = 'Wygenerowane hasło: ' + haslo;
//}
//zadanie 6
//function dodajFilm() {
 //   var nowyFilm = document.getElementById('nowyFilm').value;

   // if (nowyFilm !== '') {
   //     var listaFilmow = document.getElementById('listaFilmow');
    //    var nowyElement = document.createElement('li');
    //    nowyElement.textContent = nowyFilm;
     //   listaFilmow.appendChild(nowyElement);
     //   document.getElementById('nowyFilm').value = '';
   // }
//}

//zadanie 7
//var obrazekElement = document.getElementById('obrazek');
//var przesuniecie = 10;

//function przesunObrazek(kierunek) {
//    var aktualnaPozycja = parseInt(obrazekElement.style.left) || 0;
  //  var nowaPozycja = aktualnaPozycja + (przesuniecie * kierunek);
   // obrazekElement.style.left = nowaPozycja + 'px';
//}
//zadanie 8
//var liczbaDoOdgadniecia = Math.floor(Math.random() * 100) + 1;
//var liczbaProb = 0;

//function sprawdzLiczbe() {
 //   var wprowadzonaLiczba = parseInt(document.getElementById('liczba').value);
 //   var wynikElement = document.getElementById('wynik');
  //  liczbaProb++;

  //  if (wprowadzonaLiczba === liczbaDoOdgadniecia) {
  //      wynikElement.textContent = 'Gratulacje! Odgadłeś liczbę ' + liczbaDoOdgadniecia + ' po ' + liczbaProb + ' próbach.';
  //  } else if (wprowadzonaLiczba < liczbaDoOdgadniecia) {
  //      wynikElement.textContent = 'Za mało! Spróbuj ponownie.';
  //  } else {
  //      wynikElement.textContent = 'Za dużo! Spróbuj ponownie.';
  //  }

  //  document.getElementById('liczba').value = '';
//}
//zadanie 9
//function przeliczWalute() {
  //  var kwotaElement = document.getElementById('kwota');
  //  var kursElement = document.getElementById('kurs');
   // var wynikElement = document.getElementById('wynik');

   // var kwota = parseFloat(kwotaElement.value);
   // var kurs = parseFloat(kursElement.value);

   // var wynik = kwota * kurs;

   // wynikElement.textContent = wynik.toFixed(2); // Wyświetlanie wyniku z zaokrągleniem do 2 miejsc po przecinku
//}
//zadanie 10
//function generujLosowaLiczba() {
//    var min = 1;
 //   var max = 10;
  //  var losowaLiczba = Math.floor(Math.random() * (max - min + 1)) + min;
  //  return losowaLiczba;
//}

//function wyswietlLosowaLiczba() {
  //  var wynikElement = document.getElementById('wynik');
  //  var losowaLiczba = generujLosowaLiczba();
  //  wynikElement.textContent = 'Wylosowana liczba: ' + losowaLiczba;
//}
