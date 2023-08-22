import styles from "./styles.module.css"
import {useQuery} from "react-query";
import pokemonApi from "../../../../api";
import {useEffect, useRef, useState} from "react";
import clsx from "clsx";

const PokemonCard = ({name}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dialogRef = useRef()
    const {data, isLoading} = useQuery({
        queryKey: ["pokemon", name],
        queryFn: () => pokemonApi.get(`/pokemon/${name}`).then((res) => res.data)
    })

    const {data: speciesData} = useQuery({
        queryKey: ["pokemon-species", name],
        queryFn: () => pokemonApi.get(`/pokemon-species/${name}`).then((res) => res.data)
    })

    const handleClose = () => {
        setIsOpen(false)
    }

    const handleOpen = () => {
        dialogRef.current.showModal()
    }


    useEffect(() => {
        console.log(data)
    }, [data])

    useEffect(() => {
        console.log(speciesData)
    }, [speciesData])
    return (
        data && speciesData ?
           <>
               <div className={styles.card} onClick={handleOpen} oncancel={handleClose}>
                   <h4>{name}</h4>
                   <div className={styles.statContainer}>
                       <span className={styles.stat} data-name={data.stats[1].stat.name}>{data.stats[1].base_stat}</span>
                       <span className={styles.stat} data-name={data.stats[2].stat.name}>{data.stats[2].base_stat}</span>
                   </div>
                   <div className={styles.typeContainer}>
                       {data.types.map(({slot, type}) =>
                           <span className={styles.type} style={{background: `var(--type-${type.name})`}}>{type.name}</span>
                       )}
                   </div>
                   <img
                       className={styles.coverImage}
                       src={data.sprites.other["official-artwork"].front_default}
                       style={{background: "linear-gradient(90deg, rgba(255,255,255,0.3) 30%, rgba(0,0,0,0.3) 100%) " + speciesData?.color.name}}
                   />
               </div>
               <dialog ref={dialogRef} className={styles.modal} >
                   <img
                       className={styles.modalCoverImage}
                       src={data.sprites.other["official-artwork"].front_default}
                       style={{background: "linear-gradient(270deg, rgba(255,255,255,0.3) 0%, rgba(0,0,0,0.1) 100%) " + speciesData?.color.name}}
                   />
                   <div
                       className={styles.modalData}
                       style={{background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 40%, rgba(255,255,255,0.3) 100%) " + speciesData?.color.name}}
                   >
                       <h3>{name}</h3>
                       <p>{speciesData.generation.name}</p>
                   </div>
               </dialog>
           </>
            :
            <div className={clsx(styles.card, styles.cardLoading)}/>
    )
}

export default PokemonCard;
