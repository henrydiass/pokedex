import PokeCard from "@/components/PokeCard";
import { useRouter } from "next/router";
export async function getStaticProps( context: any ) {
    // const router = useRouter()
    // const pokeid = router.query.pokeid

    const data = await fetch(`https://pokeapi.co/api/v2/pokemon`)


    const { pokemons } = await data.json()

    return {
        props: { pokemons }
    }
}   

export async function getStaticPaths() {

}


export default function cards({ results }: any) {
    return(
        <div className="cards">
            <PokeCard pokemonEntity={results.name}/>
        </div>
    )

}