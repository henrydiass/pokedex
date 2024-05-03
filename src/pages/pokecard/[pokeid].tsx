export async function getStaticProps(context: any) {
    const { params } = context;
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokeid}`)
    const pokemon = await data.json()
    
    return {
        props: { pokemon },
    }

}

export async function getStaticPaths() {
    const data = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const pokemons = await data.json()

    const paths = pokemons.map((pokemon: any) => {
        return {
            params: {
                pokeid: `${pokemon.id}`
            }
        }
    })

    return { paths, fallback: false }
}

export default function Pokemon({ pokemon }: any) {

}