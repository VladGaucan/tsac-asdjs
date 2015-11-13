/*
Esercizio 1
Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore negativo
*/
// Iterative
// Spazio: O(1) 
// Tempo: O(n)
function ex_1_I(a) {
    var tot = 0;
    for(i = 0; i < a.length; ++i) {
        var x = a[i];
        if (x > 0) {
            tot += x;
        } else {
            return tot;
        }
    }
    return tot;
}


// Ricorsive
// Spazio: O(n) 
// Tempo: O(n)
function ex_1_R(a) {
    if (a.length == 0 || a[0] < 0) {
        return 0;
    } else {
        return a[0] + ex_1_R(a.slice(1));
    }
}


/*
Esercizio 2
Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
*/
// Spazio: O(1) 
// Tempo: O(n)
function ex_2_I(a) {
    var tot = 0;
    for(i = 0; i < a; ++i) {
        tot += 1 + 2 * i;
    }
    return tot;
}


// Spazio: O(n) 
// Tempo: O(n)
function ex_2_R(a) {
    if (a == 0) {
        return 0;
    } else {
        return 2 * a - 1 + ex_2_R(a - 1);
    }
}



/*
Esercizio 3
Dato un array di 10 elementi, calcolarne la media
*/
// Iterative
// Spazio: O(1)
// Tempo: O(n)
function ex_3_I(a){
    m = 0;
    for( i = 0; i<a.length; i++){
        m = m + a[i];
    }
return m/a.length;
}


// Ricorsive
// Spazio: O(n)
// Tempo: O(n)
function ex_3_R(a){
    m = 0;
    if ( a.length == 0 ) m = 0;
    else m = (ex_3_R(a.slice(1))*(a.length-1) + a[0])/a.length;
return m;
}



/*
Esercizio 4
Dato un intervallo [a, b] con a e b due interi positivi, restituire la somma di tutti i numeri 
compresi all’interno dell’intervallo, estremi inclusi. Nel caso che b fosse minore di a, 
calcolare la somma nell’intervallo [b,a] 
Esempio:  
sumInterval(3, 5) => 12 
sumInterval(5, 3) => 12 
*/
// Iterative
// Spazio: O(n)
// Tempo: O(n)
function ex_4_I(a, b){
    s = 0;
    if (a <= b){
        for( i = a; i<=b; i++){
            s = s + i;
        }
     }else{
         for( i = b; i<=a; i++ ){
            s = s + i;
         }
     }
return s;
}


// Ricorsive
// Spazio: O(n)
// Tempo: O(n)
function ex_4_R(a, b){
    s = 0;
    if ( a==b )   s = a;
    else if ( a<b ) s = b + ex4R(a, (b-1));
    else s = a + ex_4_R((a-1), b);
return s;
}



/*
Esercizio 5
Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo 
operatore somma. 
Esempio: 
mult(2, 3) => 6  
*/
// Iterative
// Spazio: O(1)
// Tempo: O(n)

function ex_5_I(a, b){
    s = 0;
    for( i = 0; i<b; i++){
       s = s + a;
    }
 return s;
}


// Ricorsive
// Spazio: O(n)
// Tempo: O(n)
function ex_5_R(a, b){
    s = 0;
    if ( b == 1 ) s = a;
    else s = a + ex_5_R(a, (b-1));
return s;
}



/*
Esercizio 6
Si calcoli la divisione e il resto della divisione tra due numeri a, b maggiori a zero, tramite 
l’utilizzo dei soli operatori somma e sottrazione. 
Esempio: 
div(5, 3) => 1 resto 2 
*/
// Iterative
// Spazio: O(n)
// Tempo: O(n)
function ex_6_I(a, b){
   s = 0;
   x = a;
   if( a<b ){
		s = a + " diviso a " + b + " da resto " + a;
		return s;	    
    }
   for( i=1; i<=b; i++){
		a = a - b;
		if( a<b ){
			s = x + " diviso a " + b + " da " + i + " resto " + a;
			return s;
		}   
   }
}


// Ricorsive
// Spazio: O(n)
// Tempo: O(n)
function ex_6_R(a, b){
	quanto=0; resto=0; messaggio=0;
	if( a<b ){
		quanto=0;
		resto=a;
	}else{
		ex_6_R((a, b), b);
		quanto = quanto + 1;
		a = a - b;	
	}
	messaggio = "Il risultato è " + quanto + " resto " + resto;
	return messaggio;
}


/*
Esercizio 7
Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite l’utilizzo dei soli 
operatori somma, sottrazione e della funzione mult. Esempio: 
pow(2, 3) => 8 
*/
// Iterative
// Spazio: O(n)
// Tempo: O(n^2)
function ex_7_I(a, b){
    s = 0; k = a;
    for( i = 1; i<b; i++){
        for( j = 0; j<k; j++){
            s = s + a;
        }
    a = s;
    if( i < (b-1) ) s = 0;
     }
return s;
}


// Ricorsive
//Variante 1
// Spazio: O(n)
// Tempo: O(n^2)
function ex_7_R(a, b){
    s = 0; 
    if ( b == 0 ) s == 1;
    else if ( b == 1) s = a;
     else
        s = a * ex_7_R( a, (b-1));
return s;
}

// Ricorsive
//Variante 2
// Spazio: O(n)
// Tempo: O(n)
function ex_7_R(a, b){
    s = 0; k = a;
    for( i = 1; i<b; i++){
        s = s + ex_5_R(a,k);
        k = ex_5_R(a,k);
}
return s;
}



/*Esercizio 8
Dato un array contenente n^2 elementi, scrivere un algoritmo che permetta di inserire tutti gli 
oggetti in un array bidimensionale n x n. 
*/
// Iterative
// Spazio: O(n)
// Tempo: O(n^2)
function ex_8_I(a){
    b = Math.sqrt(a.length);
    var f = new Array();
    if(Number.isInteger(b) == false)
        return 'Il tuo array non è del tipo n quadrato! Introdurre un altro array!';
    k = 0;
    for ( i = 0; i<b; i++ ){
        f[i] = new Array();
        for ( j = 0; j<b; j++ ){
            f[i][j] = a[k];
            k++;
        }
     }
return f;
}