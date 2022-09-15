
function Simpson(props){
    const {simpson} = props
    return(
        <div>
        <h2>{simpson.name} -- {simpson.age}</h2>
            <p>{simpson.surname} -- {simpson.info}</p>
            <img src={simpson.photo} alt={simpson.name}/>
        </div>
    );
}
export default Simpson;
