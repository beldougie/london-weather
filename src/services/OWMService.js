const APIKEY = process.env.REACT_APP_OWM_APIKEY || 'please set the api key in .env.local';

/**
 * Simple service used to connect to the Open Weather Map API
 */
export default class OWMService {
	/**
	 * Constructor
	 * 
	 * @param {String} cityCode the code for the city for which you want weather data. Can be a city name (e.g. `London`) or city name and country code divided by a comma (e.g. `London,uk`). Country codes must conform to ISO 3166.
	 */
	constructor(cityCode) {
		this.city = cityCode;
	}

	/**
	 * Builds the url required for an API call to OpenWeatherMap.org. Adds the `APPID` parameter but requires all other querystring parameters to be provided by the calling function.
	 * 
	 * @param {String} service the name of the resource required
	 * @param {String} query the query string to be attached to the url. See https://openweathermap.org/api for details of the query string parameters possible.
	 * @private
	 */
  buildUrl(service, query) {
    return `http://api.openweathermap.org/data/2.5/${service}?${query}&APPID=${APIKEY}`
  }

  /**
   * Get the current weather for the defined city.
	 * 
   * @returns {Promise}
   */
  getCurrent() {
		return fetch(this.buildUrl('weather', `q=${this.city}`))
			.then(response => response.json());
  }
}
