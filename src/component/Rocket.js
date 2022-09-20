import './Rocket.css'

let Rocket = (props)=>{
    let {item} = props
    return (
        <div className={'RocketContainer'}>
            <h5>Name:{item.mission_name   }</h5>
            <p>Year:{item.launch_year}</p>
            <img src={item.links.mission_patch_small} alt={item.mission_name}/>
        </div>
    );
}

export default Rocket;