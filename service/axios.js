/*Nome: Felipe Augusto Pessôa Vianna
  Matrícula: 0050017091
*/

import axios from "axios";

export class PokeService {
  async getPokemon(id) {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
      const teste = await axios.get(url);
      return teste.data;
    } catch (err) {
      throw err;
    }
  }
}
