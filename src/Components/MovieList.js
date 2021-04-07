
import Filter from './Filter'

const MovieList=(props)=>{

    
    console.log(props)
    return(
        <>
        <Filter keyword={props.Filtering} Eval={props.Rating} db1={props.db} />

        </>
    )
}

export default MovieList