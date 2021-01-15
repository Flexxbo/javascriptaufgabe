/**
 * Created by PHausmann on 30.07.14.
 */

/**
 * A data wrapper for an entry.
 * test
 *
 * @param _text {string} The text of this entry.
 * @param _title {string} The title of this entry.
 * @param _date {Date} The date of this entry.
 * @constructor
 */
class Entry
{
	/**
	 * @param _text {string} The text of this entry.
	 * @param _title {string} The title of this entry.
	 * @param _date {Date} The date of this entry.
	 */
	constructor(_title, _date, _text)
	{
		this.title = _title;
		this.text = _text;
		this.date = _date;
	}
}
