import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "../../styles/Pokedex.module.scss";

export default function Pokedex() {
  const router = useRouter();
  const [pokemonSearch, setPokemonSearch] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    router.push(`/pokedex/${pokemonSearch}`);
  };

  const onHandleChange = (e) => {
    setPokemonSearch(e.target.value);
  };

  return (
    <>
      <form className={styles.form} onSubmit={onHandleSubmit}>
        <input
          className={styles.inputPokemon}
          value={pokemonSearch}
          onChange={onHandleChange}
          type="text"
          placeholder="Cerca pokemon"
          required
        />
        <input className={styles.btnPokemon} type="submit" value="Cerca" />
      </form>
    </>
  );
}
