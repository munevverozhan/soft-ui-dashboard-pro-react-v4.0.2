import axios from "api/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useAxios = (url, { headers, body } = {}) => {
    const [data, setData] = useState();
    const [errorStatus, setErrorStatus] = useState();

    const navigate = useNavigate();

    const request = () => {
        axios.get(url, {
            headers: headers,
            body: body
        }).then((response) => {
            if (response.status === 401) {
                navigate('/login');
            }
            if (!response.ok) {
                throw response.status;
            }
            return response.json();
        }).then((data) => {
            setData(data);
        }).catch((e) => {
            setErrorStatus(e);
        });
    }
  
    const appendData = (newData) => {
        axios.post(url,
            {
                headers: headers,
                body: JSON.stringify(newData)
            }).then((response) => {
                if (response.status === 401) {
                    navigate('/login');
                }
                if (!response.ok) {
                    throw response.status;
                }
                return response.json();
            }).then((d) => {
                const submitted = Object.values(d)[0];
                const newState = { ...data };
                Object.values(newState)[0].push(submitted);
                setData(newState);
            }).catch((e) => {
                console.log(e);
                setErrorStatus(e);
            });
    }
    return { request,appendData, data, errorStatus };
}
export default useAxios;