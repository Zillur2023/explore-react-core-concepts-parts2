export default function Friend({friend}) {
    const {name,email,id,phone,username,website} = friend
    return (
        <div style={{border:'2px solid tomato',margin:'5px'}}>
            <p><strong>Id :</strong>{id}</p>
            <p><strong>Email :</strong>{email}</p>
            <p><strong>Name :</strong>{name}</p>
            <p><strong>Phone :</strong>{phone}</p>
            <p><strong>UserName :</strong>{username}</p>
            <p><strong>WebSite :</strong>{website}</p>
            
        </div>
    )
}