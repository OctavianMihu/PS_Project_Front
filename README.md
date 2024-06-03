# Proiectare:
Am optat pentru React în dezvoltarea front-end-ului aplicației datorită flexibilității și performanței pe care le oferă. React este o bibliotecă JavaScript foarte populară, care permite crearea de interfețe de utilizator rapide și interactive. Unul dintre principalele avantaje ale React este capacitatea sa de a utiliza componente reutilizabile, facilitând astfel dezvoltarea și întreținerea codului. De asemenea, React utilizează un DOM virtual care optimizează actualizările și redările, îmbunătățind performanța aplicației. În plus, React beneficiază de o comunitate vastă și activă, oferind acces la o multitudine de resurse, biblioteci și suport, ceea ce accelerează procesul de dezvoltare și rezolvarea problemelor.

## Pentru proiect, am folosit de asemenea Bootstrap și Axios.

Bootstrap este un framework CSS extrem de popular, care facilitează crearea rapidă și ușoară a unor interfețe de utilizator responsive și moderne. Este apreciat în mod special pentru următoarele motive:

Bootstrap este proiectat pentru a asigura că aplicațiile arată bine pe o gamă largă de dispozitive, de la telefoane mobile la desktop-uri.
Bootstrap vine cu un set de componente UI predefinite, precum butoane, formulare, carduri, navigație, și multe altele. Aceste componente sunt stilizate uniform și pot fi integrate rapid în proiect, economisind timp și efort în dezvoltarea designului.
Bootstrap beneficiază de o documentație detaliată și de o comunitate vastă de dezvoltatori. Aceasta face ca învățarea și rezolvarea problemelor să fie mult mai ușoare, datorită numeroaselor tutoriale, exemple și resurse disponibile online.
Axios este o bibliotecă JavaScript utilizată pentru efectuarea de cereri HTTP, promițând o experiență mai simplă și mai flexibilă comparativ cu fetch API nativ din JavaScript. Principalele avantaje ale folosirii Axios includ:

Axios oferă o sintaxă simplificată și intuitivă pentru efectuarea de cereri HTTP, ceea ce face codul mai curat și mai ușor de întreținut. Prin utilizarea Axios, codul pentru gestionarea cererilor HTTP devine mai concis și mai lizibil.
Axios se bazează pe promisiuni, permițând un flux de lucru asincron ușor de gestionat. Acesta suportă atât then/catch, cât și async/await, facilitând scrierea unui cod asincron clar și eficient.
Axios permite configurarea interceptoarelor pentru cereri și răspunsuri, ceea ce este extrem de util pentru gestionarea globală a erorilor, autentificarea cererilor și alte manipulări comune. Aceasta oferă un nivel suplimentar de control asupra interacțiunilor HTTP.
# Implementare:
Am implementat front-end-ul aplicației folosind React și am integrat mai multe funcționalități esențiale pentru gestionarea utilizatorilor, clienților, produselor și comenzilor. Iată o descriere detaliată a acestor funcționalități și modul în care le-am legat de backend-ul dezvoltat în Java Spring Boot prin intermediul cererilor HTTP folosind Axios.

### Login/Sign Up
Am creat pagini de autentificare și înregistrare pentru utilizatori, unde aceștia pot introduce datele necesare pentru a se conecta sau a-și crea un cont nou. Formularele de login și sign up colectează informațiile utilizatorilor și trimit aceste date către backend prin cereri HTTP POST utilizând Axios. La login, datele sunt verificate pe server, iar în cazul unui răspuns pozitiv, utilizatorul este redirecționat către pagina principală a aplicației. În cazul înregistrării, datele sunt validate și stocate în baza de date, iar utilizatorul primește un răspuns adecvat.

### Adăugare rider si driveri
Funcționalitatea de adăugare a unui client permite utilizatorilor să introducă detalii despre noi clienți. Am creat un formular React care preia aceste date și le trimite către backend printr-o cerere HTTP POST. Serverul Spring Boot primește datele, le validează și, dacă totul este în regulă, adaugă noul client în baza de date și returnează un răspuns care confirmă succesul operațiunii.

### Vizualizare rideri si driveri
Pentru a vedea toți clienții, am implementat o funcționalitate care trimite o cerere HTTP GET către server, care returnează lista de clienți stocată în baza de date. Această listă este afișată într-un tabel pe interfața utilizatorului. Funcția de căutare permite utilizatorilor să găsească rapid un client specific, trimițând o cerere HTTP GET cu parametrii de căutare (id) către server, care răspunde cu rezultatele relevante.

### Ștergere rideri si driveri
Funcționalitatea de ștergere a clienților permite utilizatorilor să elimine clienți din baza de date. În interfața aplicației, utilizatorii au opțiunea de a selecta un client din lista afișată și de a iniția procesul de ștergere. Odată ce utilizatorul confirmă dorința de a șterge un client, o cerere HTTP DELETE este trimisă către backend prin intermediul Axios. Backend-ul Java Spring Boot primește cererea, identifică clientul corespunzător în baza de date și îl elimină. După ștergere, serverul returnează un răspuns de succes, iar front-end-ul actualizează automat lista de clienți pentru a reflecta schimbările, asigurând astfel o experiență de utilizare fără întreruperi.


# Conexiunea între Front-end și Back-end
Toate aceste funcționalități sunt legate de backend-ul Java Spring Boot prin cereri HTTP standardizate. Axios este utilizat pentru a gestiona aceste cereri, trimițând datele către endpoint-urile corespunzătoare ale serverului și preluând răspunsurile. În backend, fiecare cerere este tratată de un controller specific, care efectuează operațiile necesare (validare, salvare, actualizare, ștergere) și returnează un răspuns adecvat către front-end. Această abordare asigură o comunicare eficientă și securizată între front-end și back-end, permițând utilizatorilor să gestioneze datele într-un mod intuitiv și performant.