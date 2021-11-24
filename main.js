const button1 = document.querySelector('button.kwadrat');
const button2 = document.querySelector('button.dowolna');
const button3 = document.querySelector('button.trojkat');

function potegaKwadrat(wartosc) {

    return wartosc * wartosc;
}

button1.addEventListener('click', function () {
    const wynik = document.querySelector('p.kwadrat');
    const liczba = document.getElementById('input').value;
    wynik.innerHTML = potegaKwadrat(liczba);

});


function potegaDowolna(podstawa, potega) {
    let wynik = 1;
    for (let i = 0; i < potega; i++) {
        wynik = wynik * podstawa
    }
    return wynik;
}

button2.addEventListener('click', function () {
    const wynik = document.querySelector('p.dowolna');
    const podstawa = document.getElementById('podstawa').value;
    const potega = document.getElementById('potega').value;

    wynik.innerHTML = potegaDowolna(podstawa, potega);
});

function sprawdzTrojkat(a, b, c) {

    a = Number(a);
    b = Number(b);
    c = Number(c);
    if (a + b > c && a + c > b && b + c > a) {
        return "Da sie ! :)";
    } else {
        return "Nie da sie :(";
    }
}

button3.addEventListener('click', function () {
    const wynik = document.querySelector('p.trojkat');
    const a = document.getElementById('a').value;
    const b = document.getElementById('b').value;
    const c = document.getElementById('c').value;

    wynik.innerText = sprawdzTrojkat(a, b, c);


})