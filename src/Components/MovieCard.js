
import './MovieCard.css'

const MovieCard=(props)=>{

  let rating;
  if (props.rating==5){
    rating=<><input type="radio" id="star5" name="rating" defaultValue={5}  /><label className="full" htmlFor="star5" title="Awesome - 5 stars" />
          <input type="radio" id="star4" name="rating" defaultValue={4} /><label className="full" htmlFor="star4" title="Pretty good - 4 stars" />
          <input type="radio" id="star3" name="rating" defaultValue={3} /><label className="full" htmlFor="star3" title="Meh - 3 stars" />
          <input type="radio" id="star2" name="rating" defaultValue={2} /><label className="full" htmlFor="star2" title="Kinda bad - 2 stars" />
          <input type="radio" id="star1" name="rating" defaultValue={1} /><label className="full" htmlFor="star1" title="Sucks big time - 1 star" />
          </>;
  } else if (props.rating==4){
    rating=<><input type="radio" id="star4" name="rating" defaultValue={4}  /><label className="full" htmlFor="star4" title="Pretty good - 4 stars" />
    <input type="radio" id="star3" name="rating" defaultValue={3} /><label className="full" htmlFor="star3" title="Meh - 3 stars" />
    <input type="radio" id="star2" name="rating" defaultValue={2} /><label className="full" htmlFor="star2" title="Kinda bad - 2 stars" />
    <input type="radio" id="star1" name="rating" defaultValue={1} /><label className="full" htmlFor="star1" title="Sucks big time - 1 star" />
    </>
  } else if (props.rating==3){
    rating=<>
    <input type="radio" id="star3" name="rating" defaultValue={3}  /><label className="full" htmlFor="star3" title="Meh - 3 stars" />
    <input type="radio" id="star2" name="rating" defaultValue={2} /><label className="full" htmlFor="star2" title="Kinda bad - 2 stars" />
    <input type="radio" id="star1" name="rating" defaultValue={1} /><label className="full" htmlFor="star1" title="Sucks big time - 1 star" />
    </>
  } else if (props.rating==2){
    rating=<>
    <input type="radio" id="star2" name="rating" defaultValue={2}  /><label className="full" htmlFor="star2" title="Kinda bad - 2 stars" />
    <input type="radio" id="star1" name="rating" defaultValue={1} /><label className="full" htmlFor="star1" title="Sucks big time - 1 star" />
    </>
  } else if (props.rating==1){
    rating=<>
    <input type="radio" id="star1" name="rating" defaultValue={1}  /><label className="full" htmlFor="star1" title="Sucks big time - 1 star" />
    </>
  }

    return (
        <>
<div className="movie-card">
  <div className="container">
    <a href="#" >{props.image_2}</a>
    <div className="hero" >
      <div className="details">
        <div className="title1">{props.title} <span>PG-13</span></div>
        <div className="title2">{props.subtitle}</div>    
        <fieldset className="rating">
          {rating}
          
        </fieldset>
        <span className="likes">109 likes</span>
      </div> {/* end details */}
    </div> {/* end hero */}
    <div className="description">
      <div className="column1">
        <span className="tag">action</span>
        <span className="tag">fantasy</span>
        <span className="tag">adventure</span>
      </div> {/* end column1 */}
      <div className="column2">
        <p>{props.description}<a href="#">read more</a></p>
      </div> {/* end column2 */}
    </div> {/* end description */}
  </div> {/* end container */}
</div> {/* end movie-card */}
</>

    )
}
export default MovieCard
