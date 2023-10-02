import Tag from "../Tag/Tag";
import "./Card.css"

export default function Card (props) {
    const item = props.item;

    return <div className='Card'>
    <h2>{item.nome}</h2>

    <div className='tags'>
        <Tag/>
     {/*
     <div className='tag'>Status: Anime</div>
     <div className='tag'>Espécie: Humana</div>
     <div className='tag'>Origem: Japão</div> */}
     
    </div>
    <img src={item.imagemUrl} />
   </div>


} 