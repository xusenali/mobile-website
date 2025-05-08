import { useEffect, useState } from 'react'
import axios from 'axios'


function fetsh(url) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        try {
            axios.get(url)
            .then(res => setData(res))
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false)
        }
     

    },[url])
    return { data , loading}
}

export default fetsh