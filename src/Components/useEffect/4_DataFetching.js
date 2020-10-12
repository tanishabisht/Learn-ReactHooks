import React from 'react'
import axios from 'axios'

export default function DataFetching(){

    const [posts, setPosts] = React.useState({})
    const [id, setId] = React.useState(1)
    const [buttonClickId, setButtonClickId] = React.useState(1)

    React.useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => console.log(err))
    }, [buttonClickId])

    return(
        <div>
            <input type='text' value={id} onChange={(e) => setId(e.target.value)}/>
            <button onClick={() => setButtonClickId(id)}>Fetch Post</button>
            <ul><li>{posts.title}</li></ul>
        </div>
    )
}