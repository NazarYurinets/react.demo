
function Character(props) {
    const {character} = props
    return(
        <div>
            <h2>{character.id} -- {character.name}</h2>
            <p>{character.status}</p>
        </div>
    )

}
export default Character