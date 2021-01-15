/**
 * Created by PHausmann on 30.07.14.
 */

/**
 * Creates the EntryStore.
 *
 * @returns {EntryStore} The created EntryStore with entries.
 */

/*
 * @param _text {string} The text of this entry.
 * @param _title {string} The title of this entry.
 * @param _date {Date} The date of this entry.
 * @constructor
 */

/*
 * Adds the given Entry.
 *
 * @param _entry {Entry} The Entry we have to add.
 */

function createEntryStore() {
  let store = new EntryStore();

  store.addEntry(
    new Entry(
      "Neue Version 2.1.1 wurde veröffentlicht",
      new Date("2012,07,26"),
      "Das Generieren von Verspätungsstatistiken wurde überarbeitet."
    )
  );
  store.addEntry(
    new Entry(
      "Neue Version 2.0 Beta1 wurde veröffentlicht",
      new Date("2011,06,16"),
      "DiLoc 2.0 wurde komplett runderneuert und modernisiert.Die Startseite wurde komplett überarbeitet und ermöglicht nun wichtige Informationen übersichtlich darzustellen.Alle Module werden jetzt in Reitern oben dargestellt. Dies bietet viele Vorteile: Schneller Wechsel zwischen Modulen ist möglich und, man ist jedes mal wieder dort wo man das Modul verlassen hat.DiLoc 2.0 ist jetzt mehrsprachig. Vorerst stehen Englisch und Deutsch als Sprachen verfügbar.SyncManagerDatei-Manager und Gerätemanager sind jetzt mit Tabs getrennt, dies vereinfacht das Wechseln von einer Komponente auf die andere.Es ist jetzt auch möglich eine Liste deaktivierter Geräte zu exportieren.Es ist jetzt möglich deaktivierte Geräte wieder zu aktivieren."
    )
  );
  store.addEntry(
    new Entry(
      "Neue Version 2.0 Beta7 wurde veröffentlicht",
      new Date("2011,08,12"),
      "Die KACE-Integration ist jetzt verfügbar und kann aktiviert werden.SyncManager Performance der Geräte-Tabelle mit vielen Geräten signifikant verbessert"
    )
  );
  store.addEntry(
    new Entry(
      "Neue Version 2.0 wurde veröffentlicht",
      new Date("2011,09,22"),
      "Ein Fehler beim Laden einer deutschen Übersetzungsdatei wurde behoben. Textfehler wurden korrigiert. SyncManager Der Filter auf Geräte ohne Gruppe wird im Filtermenü jetzt richtig bezeichnet.Die Anzeige der Sortierreihenfolge in Kombination mit einem Filter wurde korrigiert. Verwaltung Die Administration wurde umbenannt in Verwaltung."
    )
  );
  store.addEntry(
    new Entry(
      "Neue Version 2.2 Beta4 wurde veröffentlicht",
      new Date("2012,09,26"),
      "Beim Anmelden aus dem lokalen Netzwerk ist der Haken Login von öffentlichem Computer jetzt automatisch nicht gesetzt. SyncManager Das verschieben von Tabs im Konfigurationsmanager ist jetzt wieder möglich. PNG-Bilder können jetzt per Doppelklick angeschaut werden.Tageszirkular Das Anlegen von Vorlagen funktioniert jetzt korrekt. Das Anlegen von Allgemeinen Informationen funktioniert jetzt korrekt. Fahrplanmanager Das Laden von Wochen funktioniert jetzt auch mit vielen Zügen."
    )
  );
  return store;
}

function suchen() {
  document.getElementById("ergebnis").innerHTML = "";
  let store = createEntryStore();
  let begriff = document.getElementById("searchField").value;
  let gefunden = [];

  store.entries.map((item) => {
    console.log("item", item.text);
    res = item.text.split(" ");
    //console.log("res", res);
    console.log("res-include", res.includes(begriff));
    if (res.includes(begriff)) {
      gefunden.push(item);
      return gefunden;
    } else {
      return 0;
    }
  });
  gefunden.length > 0
    ? gefunden
        .sort(function (a, b) {
          return new Date(b.date) - new Date(a.date);
        })
        .map((res) => {
          var tag = document.createElement("p");
          var text = document.createTextNode(
            res.title + " " + res.text + " " + res.date
          );
          tag.appendChild(text);
          var element = document.getElementById("ergebnis");
          element.appendChild(tag);
        })
    : (document.getElementById("ergebnis").innerHTML = "Kein Ergebnis");
}
