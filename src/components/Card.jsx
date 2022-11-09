import Avatar from "./Avatar";
import Paragraph from "./Paragraph";

function Card(props) {
    return (
        <div className="card">
        <div className="top">
            <p>{props.id}</p>
            <h2 className="name">{props.name}</h2>
            <Avatar img={props.img}/>
        </div>
        <div className="bottom">
            <Paragraph detailInfo={props.tel}/>
            <Paragraph detailInfo={props.email}/>
        </div>
    </div>
    );
}

export default Card;