import { useState } from "react";
import axios from 'axios';

const useFetch = (url) => {
    const [infoApi, setInfoApi] = useState();
    const [hasError, setHasError]=useState(false)

    const getApi = () => {
        axios.get(url)
            .then(res => {
                setInfoApi(res.data)
                setHasError(false)
            })

            .catch(err => {
                setHasError(true)
            });
    };

    return [infoApi, getApi, hasError, setInfoApi];
};

export default useFetch;
