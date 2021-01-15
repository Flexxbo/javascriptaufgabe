/**
 * Created by PHausmann on 30.07.14.
 */

/**
 * A store of Entry-objects.
 */
class EntryStore {
  constructor() {
    this.entries = [];
  }
  addEntry(_entry) {
    this.entries.push(_entry);
  }
}
