import { useEffect, useState } from "react"

export default useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(function(){
        fetch(url)
            .then(function(response){
                if(!response.ok){
                    throw Error("There was an error fetching data from\n" + url);
                }
                return response.json()
            })
            .then(function(data){
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(function(err){
                setError(err.message);
            });
    },[url]);
}