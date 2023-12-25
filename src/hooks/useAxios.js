import axios from "api/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useAxios = () => {
    const [errorStatus, setErrorStatus] = useState();
    const [edit, setEdit] = useState(false);
    const [editId, setEditId] = useState(0);

    const navigate = useNavigate();

    const request = async (url, method, { headers, body } = {}) => {
        try {
            const response = await axios[method](url, {
                headers: headers,
                body: body
            });
    
            if (response.status === 401) {
                console.log('hello world then kısmı 2 ');
    
                navigate('/login');
                return null;
            }
            if (response.status !== 200) {
                console.log('hello world then kısmı 3');
    
                throw response.status;
            }
    
            return response.data;
        } catch (error) {
            console.error(error);
        }

    }

    const appendData = (newData) => {
        if (edit) {
            axios.put(url + editId, {
                data: product
            }).then(response => {
                if (response.status === 200) {
                    alert('User successfully updated.');
                }
            });
        } else {
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
                    const newState = { ...product };
                    Object.values(newState)[0].push(submitted);
                    setData(newState);
                }).catch((e) => {
                    console.log(e);
                    setErrorStatus(e);
                });
        }
    }

    const handleDelete = (id) => {
        axios.delete(url + id, {
            headers: headers
        }).then(response => {
            if (response.status === 200) {
                alert('User successfully deleted.');
            }
        }).catch((e) => {
            console.log(e);
            setErrorStatus(e);
        })
    }

    const handleShowEditForm = (product) => {
        setEdit(true);
        setEditId(product.id);
    }

    return { request, appendData, handleDelete, handleShowEditForm };
}
export default useAxios;