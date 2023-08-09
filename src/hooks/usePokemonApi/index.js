import {useEffect, useState} from "react";

const usePokemonApi = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
            .then((res) => res.json())
            .then((data) => {
                setData(data.results);
                setIsLoading(false);
            })
            .catch((err) => console.log(err.message))
    }, [])

    return { data, isLoading };
}

export default usePokemonApi;
