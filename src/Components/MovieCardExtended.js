
import './MovieCardExtended.css'

const MovieCardExtended=(props)=>{

  let rating;
  if (props.movie.rating==5){
    rating=<><input type="radio" id="star5" name="rating" defaultValue={5}  /><label className="full" htmlFor="star5" title="Awesome - 5 stars" />
          <input type="radio" id="star4" name="rating" defaultValue={4} /><label className="full" htmlFor="star4" title="Pretty good - 4 stars" />
          <input type="radio" id="star3" name="rating" defaultValue={3} /><label className="full" htmlFor="star3" title="Meh - 3 stars" />
          <input type="radio" id="star2" name="rating" defaultValue={2} /><label className="full" htmlFor="star2" title="Kinda bad - 2 stars" />
          <input type="radio" id="star1" name="rating" defaultValue={1} /><label className="full" htmlFor="star1" title="Sucks big time - 1 star" />
          </>;
  } else if (props.movie.rating==4){
    rating=<><input type="radio" id="star4" name="rating" defaultValue={4}  /><label className="full" htmlFor="star4" title="Pretty good - 4 stars" />
    <input type="radio" id="star3" name="rating" defaultValue={3} /><label className="full" htmlFor="star3" title="Meh - 3 stars" />
    <input type="radio" id="star2" name="rating" defaultValue={2} /><label className="full" htmlFor="star2" title="Kinda bad - 2 stars" />
    <input type="radio" id="star1" name="rating" defaultValue={1} /><label className="full" htmlFor="star1" title="Sucks big time - 1 star" />
    </>
  } else if (props.movie.rating==3){
    rating=<>
    <input type="radio" id="star3" name="rating" defaultValue={3}  /><label className="full" htmlFor="star3" title="Meh - 3 stars" />
    <input type="radio" id="star2" name="rating" defaultValue={2} /><label className="full" htmlFor="star2" title="Kinda bad - 2 stars" />
    <input type="radio" id="star1" name="rating" defaultValue={1} /><label className="full" htmlFor="star1" title="Sucks big time - 1 star" />
    </>
  } else if (props.movie.rating==2){
    rating=<>
    <input type="radio" id="star2" name="rating" defaultValue={2}  /><label className="full" htmlFor="star2" title="Kinda bad - 2 stars" />
    <input type="radio" id="star1" name="rating" defaultValue={1} /><label className="full" htmlFor="star1" title="Sucks big time - 1 star" />
    </>
  } else if (props.movie.rating==1){
    rating=<>
    <input type="radio" id="star1" name="rating" defaultValue={1}  /><label className="full" htmlFor="star1" title="Sucks big time - 1 star" />
    </>
  }

    return (
        <>
<div className="movie-card1">
  <div className="container1111">
    <a href="#" >{props.movie.image_2}</a>
    <div className="hero1" >
      <div className="details1">
        <div className="title11">{props.movie.title} </div>
        <div className="title21">{props.movie.subtitle}</div>    
        <fieldset className="rating1">
          {rating}
          
        </fieldset>
        
      </div> {/* end details */}
    </div> {/* end hero */}
    <div className="description1">
      <div className="column11">
        <span className="tag1">action</span>
        <span className="tag1">fantasy</span>
        <span className="tag1">adventure</span>
      </div> {/* end column1 */}
      <div className="column21">
        <p>{props.movie.description}</p>
      </div> {/* end column2 */}
      
    </div> {/* end description */}
    <div className="iframe">
  <iframe width="560" height="315" src={props.movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  </div> {/* end container */}
  
</div> {/* end movie-card */}
</>

    )
}
export default MovieCardExtended
