import styles from "./PokemonCard.module.scss";

export type Pokemon = {
  id: string;
  name: string;
  image: string;
};

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <img src={pokemon.image} alt={pokemon.name + "Pokemon poster"} />
      </div>
      <div className={styles.name}>{pokemon.name}</div>
    </div>
  );
};

export default PokemonCard;
