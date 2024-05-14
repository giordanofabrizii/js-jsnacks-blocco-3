1. TuttiFrutti
Cartella array-lista
Descrizione:
Abbiamo un frigorifero pieno di frutta: 'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'  
C'è anche una pesca sul tavolo, la mettiamo nel frigo.
Stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?

Fasi
1. creare l'array con la frutta del frigorifero
2. aggiungere la pesca all'array della frutta
3. verificare se nell'array di frutta c'è il cocomero:
   - se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
   - se non lo trovo: "Oh no, devo uscire a comprare il cocomero!"Suggerimenti/Indicazioni:
Sì, lo sappiamo che esistono le funzioni includes() e indexOf() ma noi non le vogliamo utilizzare per cercare nel frigorifero.

<!-- pseudocodice -->
definisco una lista di elementi (frutta)
aggiungo un altro elemento nella lista
creo un ciclo for che scorre tutti gli elementi della lista
   se almeno uno di questi elementi e' "cocomero"
      ritorno true
   altrimenti
      ritorno false

2. La coda dell'Array
Cartella: array_tail
Creiamo  un array chiedendo all'utente quanti elementi dovrà contenere e
generando tanti numeri casuali (compresi nell'intervallo da 1 a 100) per quanti sono gli elementi da inserire.
Stampiamo poi gli ultimi 5 elementi dell'Array

Bonus:
Chiediamo all'utente quanti elementi dell'array dovremo stampare

Suggerimenti:
Probabilmente  conviene controllare che il numero di elementi della coda non sia più grande del numero di elementi totali dell'array

<!-- pseudocodice -->
creo un array vuoto
chiedo all'utente un numero
   verifico che sia compreso tra 1 e 100
creo un ciclo for da 0 al numero dell'utente
   per ogni istanza, aggiungo un numero casuale alla fine della lista
chiedo all'utente quanti elementi voglio stampare
   controllo che sia minore/uguale alla length
creo un ciclo for al contrario da length al numero che mi ha detto l'utente
   stampo l'elemento


3.  (Bonus)
Cartella: array_bonus
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

<!-- pseudocodice -->
creo due array
creo le variabili "arrayMinore" e "arrayMaggiore"
assegno, con un if, ad arrayMinore il valore dell'array piu corto e il contrario per arrayMaggiore
creo un ciclo for che parte da arrayMinore.lenght ad arrayMaggiore.lenght
   aggiungo un numero casuale ad arrayMinore
assegno al mio array piu corto il valore di arrayMinore