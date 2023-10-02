import './Tag.css'

export default function Tag(props) {
    //console.log(props)

    const text = props.text;
    return <div className='tag'>{text}</div>


}
