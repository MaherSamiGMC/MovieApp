
import './MovieCard.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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
//         <>
// <div className="movie-card">
//   <div className="container">
//     <a href="#" >{props.image_2}</a>
//     <div className="hero" >
//       <div className="details">
//         <div className="title1">{props.title} <span>PG-13</span></div>
//         <div className="title2">{props.subtitle}</div>    
//         <fieldset className="rating">
//           {rating}
          
//         </fieldset>
//         <span className="likes">109 likes</span>
//       </div> {/* end details */}
//     </div> {/* end hero */}
//     <div className="description">
//       <div className="column1">
//         <span className="tag">action</span>
//         <span className="tag">fantasy</span>
//         <span className="tag">adventure</span>
//       </div> {/* end column1 */}
//       <div className="column2">
//         <p>{props.description}<a href="#">read more</a></p>
//       </div> {/* end column2 */}
//     </div> {/* end description */}
//   </div> {/* end container */}
// </div> end movie-card
// </>





<>
  <div className="container">
    <div className="cellphone-container">    
      <div className="movie">       
      
        <div className="menu"><i className="material-icons"></i></div>
        <div className="movie-img" style={{backgroundImage: `url(${props.image_1})`}} ></div>
        <div className="text-movie-cont">
          <div className="mr-grid">
            <div className="col1">
              <h1>{props.title}</h1>
              <ul className="movie-gen">
                <li>{props.subtitle}</li>
              </ul>
              <fieldset className="rating">
//           {rating}
          
//         </fieldset>
            </div>
          </div>
          {/* <div className="mr-grid summary-row">
            <div className="col2">
              <h5>SUMMARY</h5>
            </div>
            <div className="col2">
              <ul className="movie-likes">
                <li><i className="material-icons"></i>124</li>
                <li><i className="material-icons"></i>3</li>
              </ul>
            </div>
          </div> */}
          {/* <div className="mr-grid">
            <div className="col1">
              <p className="movie-description">A group of elderly people are giving interviews about having lived in a climate of crop blight and constant dust reminiscent of The Great 
                Depression of the 1930's. The first one seen is an elderly woman stating her father was a farmer, but did not start out that way. </p>
            </div>
          </div>
          <div className="mr-grid actors-row">
            <div className="col1">
              <p className="movie-actors">Matthew McConaughey, Anne Hathaway, Jessica Chastain</p>
            </div>
          </div> */}
          
          <div className="mr-grid action-row">
          
            <div className="col2"><button className="watch-btn"><Link to={`movie/${props.title.split(" ").join("")}`}>MORE DETAILS</Link></button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <a href="https://dribbble.com/geehm" target="_blank">
    <img className="dribbble-link" src="https://image.flaticon.com/icons/png/512/124/124037.png" />
  </a> */}
  </>

    )
}
export default MovieCard
