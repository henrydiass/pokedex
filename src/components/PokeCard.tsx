import Image from "next/image";
import Link from "next/link";


export default function PokeCard(pokemonEntity: any) {
    return(
        <div className="card h-400 w-200 bg-green-500 flex flex-col justify-center items-center rounded-lg">
            <Image src={pokemonEntity.sprites.front_default} className="h-1/5 w-1/2" alt="poke-card" />
            <p className="font-bold text-xl text-lime-400">Name: {pokemonEntity.name}</p>
            <Link href={"/pokemon/" + pokemonEntity.id} className="btn btn-primary ">Detalhes</Link>
        </div>
    )
}