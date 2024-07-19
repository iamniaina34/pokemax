import axios from 'axios';

/**
 * Class representing an API for fetching Pokémon data.
 * Visit https://pokeapi.co/ for more informations.
 */
class PokeApi {
    /**
     * Static cache to store responses from previous requests.
     * @type {Object.<string, any>}
     * @static
     */
    static cache = {};

    /**
     * Performs an HTTP GET request to the specified URL.
     * @param {string} url - The URL of the resource to fetch.
     * @returns {Promise<any>} A promise containing the data from the HTTP response if the request is successful.
     * @throws {Error} Throws an error if the request fails.
     * @static
     */
    static async fetch(url) {
        if (PokeApi.cache[url]) {
            return PokeApi.cache[url];
        }
        try {
            const response = await axios.get(url);
            PokeApi.cache[url] = response.data;
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}

export default PokeApi;
