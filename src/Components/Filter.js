import MovieCard from './MovieCard'
const Filter=(props)=>{

    

    const filtredMovies=props.db1.filter(el=>(isNaN(props.Eval)|| props.Eval=="" ) ? true:el.rating==props.Eval )
    .filter(el=>el.title.toLowerCase().includes(props.keyword.toLowerCase()))
    .map(el=>MovieCard(el))
    return(
        <>
        {filtredMovies}
        </>
    )
}

export default Filter