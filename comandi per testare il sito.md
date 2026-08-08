# Comandi per testare il sito (Windows 11)

Il sito usa percorsi assoluti (`/it/`, `/sim-engine.js`, …), quindi va **sempre servito da un server locale**: aprire `index.html` con doppio click NON funziona.

---

## 1. Modo più semplice — doppio click

Doppio click su **`serve.bat`**.

- Apre da solo il browser su <http://localhost:5173/>
- Lascia aperta la finestra nera mentre usi il sito
- Per fermare: chiudi la finestra **oppure** premi `Ctrl+C`

(Se manca Python, la finestra lo segnala con il link per installarlo.)

---

## 2. Da terminale (PowerShell)

Tasto destro nella cartella del sito → **Apri nel terminale**, poi:

```powershell
py -m http.server 5173
```

Poi apri nel browser: <http://localhost:5173/>
Per fermare il server: `Ctrl+C`.

---

## Pagine da controllare

| URL | Lingua |
|-----|--------|
| <http://localhost:5173/>    | 🇬🇧 Inglese |
| <http://localhost:5173/it/> | 🇮🇹 Italiano |
| <http://localhost:5173/fr/> | 🇫🇷 Francese |

Cose da provare: selettore livelli (Junior/Student/Scholar), ricerca, apertura delle schede, cambio lingua, e le simulazioni nella tab **Simulate**.

---

## Dopo aver modificato testi o traduzioni

Rigenera tutte le pagine (richiede Node.js):

```powershell
node build-pages.mjs
```

Poi ricarica la pagina nel browser con **`Ctrl+F5`** (salta la cache, così vedi subito le modifiche).
