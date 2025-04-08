import { from } from "rxjs";
import { filter } from "rxjs/operators";

enum CharacterType { hero, villain }

interface Character {
  type: CharacterType;
  name: string;
}
const characters: Character[] = [
  {
    type: CharacterType.hero,
    name: 'Batman'
  },
  {
    type: CharacterType.hero,
    name: 'Robin'
  },
  {
    type: CharacterType.villain,
    name: 'Jocker'
  }
]

const obsCharacters = from(characters);

const heros = obsCharacters.pipe(
  filter(character => character.type === CharacterType.hero)
)

heros.subscribe(hero => console.log(`hero: ${hero.name}`))
