import Pokemon from "../pokemon/Pokemon";
import styles from "./index.module.scss";

const PokemonList = ({ pokemonList, title }) => {
  return (
    <div className={styles.PokemonList}>
      <h2>{title}</h2>
      <div className={styles.list}>
        {pokemonList.map((pokemon) => (
          <Pokemon pokemonData={pokemon} key={pokemon.url} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
