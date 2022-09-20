const User = (user, showUser) =>{
    return(
        <div>
            <h3>{user.id} -- {user.name}</h3>
            <button onClick={() => showUser(User)}>Click</button>
        </div>
    )

}
export {User}
