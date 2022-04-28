import '../../App.css';

const Card = (props) => {
    return ( 
        <div className="cardWrapper">
            <h1>{props.name}</h1>
        </div>
     );
}
 
export default Card;