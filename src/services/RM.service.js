import { API_RM } from "../constants/Api.constants";

class RMService {
  async getAllCharacters() {
    const response = await fetch(API_RM.CHARACTERS());
    //Interceptor (se pondra a futuro)
    return response.json();
  }

  async getCharacterById(id) {
    const response = await fetch(API_RM.CHARACTER_BY_ID(id));
    //Interceptor (se pondra a futuro)
    return response.json();
  }
}

export default new RMService();
