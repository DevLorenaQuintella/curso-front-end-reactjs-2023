import Tag from "../Tag/Tag";
import "./Card.css"

export default function Card (props) {
    const item = props.item;

    //console.log(item);

    const tags = item.tags || [];
    console.log(tags);

    return <div className='Card'>
    <h2>{item.name}</h2>

    <div className='tags'>
        {tags.map(function(tag,index){
         return <Tag text = {tag} key={`card_char_${index}`}/>
    })}
    
     {/*
     <div className='tag'>Status: Anime</div>
     <div className='tag'>Espécie: Humana</div>
     <div className='tag'>Origem: Japão</div> */}
     
    </div>
    <img src={item.image} />
   </div>

 
} 