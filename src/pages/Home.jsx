import { useEffect } from 'react'
import axios from 'axios'

function Home() {
    useEffect(() => {
        async function main() {
            console.log(await axios.get("https://jsonplaceholder.typicode.com/user"))
            }
            main();
    }, [])

    return <h1>Home</h1>
}

export default Home
