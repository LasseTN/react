import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import NotFound from '../components/NotFound';
import DefinitionSearch from '../components/DefinitionSearch';

export default function Definition() {
    const [word, setWord] = useState(); 
    const [notFound, setNotFound] = useState(false);
    const [error, setError] = useState(false);

    let { search } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        //const url = 'https://httpstat.us/501';
        const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + search;
        fetch(url)
            .then((response) => {
                //console.log(response.status);
                if (response.status === 404) {
                    setNotFound(true);
                } else if (response.status === 401) {
                    navigate('/login')
                } else if (response.status === 500) {
                    setError(true)
                }

                if(!response.ok) {
                    setError(true);

                    throw new Error('Something went wrong');
                }

                return response.json();
            })
            .then((data) => {
                setWord(data[0]?.meanings || null); // Tjekker om data[0].meanings findes før tilskrivning
            })
            .catch((e) => {
                console.log(e.message);
                // Håndter andre typer fejl her
            });
    }, [search]); // Tilføjet search til afhængighedsarray

    if (notFound === true) {
        return (
        <>
            <NotFound />
            <Link to='/dictionary'>Search another</Link>
        </>
        );
    }

    if (error === true) {
        return (
            <>
                <p>Something went wrong, try again</p>
                <Link to='/dictionary'>Search another</Link>
            </>
        );
    }



    return (
        <>
            {word ?  
            <>
                <h1>Her er en definition:</h1>
                {word.map((meaning, index) => ( // Bruger index som nøgle
                    <p key={index}>
                        {meaning.partOfSpeech + ': '} 
                        {meaning.definitions[0].definition}
                    </p> 
                ))}
                <p>Search again:</p>
                <DefinitionSearch />
            </>
            : null}
        </>
    );
}
