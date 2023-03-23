import { useState } from 'react';

import { useNavigate, Link } from 'react-router-dom';

import axios from 'axios';

export const AddAuthor = (props) => {
    const [name, setName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [nationality, setNationality] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const [validationErrors, setValidationErrors] = useState(null);

    const navigate = useNavigate();

    const handleAuthorSubmit = (e) => {
        e.preventDefault();

        const newAuthor = {
            name,
            dateOfBirth,
            nationality, 
            imageUrl
        }

        axios 
            .post("http://localhost:8000/api/authors", newAuthor)
            .then((res) => {
                console.log(res.data);
                setName("");
                setDateOfBirth("");
                setNationality("");
                setImageUrl("");
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
                setValidationErrors(err?.response?.data?.errors);
            });
    };

    return (
        <div className="w-55 p-4 rounded mx-auto shadow" style={{marginTop: 20}}>
            
            <h3 className="text-center">
                Add a New Author 
            </h3>
            <form onSubmit={handleAuthorSubmit}>
                <div className="form-group">
                    <label className="h6 ">Name:</label>
                    {validationErrors?.name && <span className='text-danger ms-1'>{validationErrors.name.message}</span>}
                    <input onChange={(e) => {
                        setName(e.target.value);
                    }}
                        type="text"
                        className="form-control"
                        value={name}
                    />
                </div>
                <div className="form-group">
                    <label className="h6">Date of Birth: </label>
                    {validationErrors?.dateOfBirth && <span className='text-danger ms-1'>{validationErrors.dateOfBirth.message}</span>}
                    <input onChange={(e) => {
                        setDateOfBirth(e.target.value);
                    }}
                        type="date"
                        className="form-control"
                        value={dateOfBirth}
                    />
                </div>
                <div className="form-group">
                    <label className="h6">Nationality:</label>
                    {validationErrors?.nationality && <span className='text-danger ms-1'>{validationErrors.nationality.message}</span>}
                    <input onChange={(e) => {
                        setNationality(e.target.value);
                    }}
                        type="text"
                        className="form-control"
                        value={nationality}
                    />
                </div>
                <div className="form-group">
                    <label className="h6">Image URL:</label>
                    {validationErrors?.imageUrl && <span className='text-danger ms-1'>{validationErrors.imageUrl.message}</span>}
                    <input onChange={(e) => {
                        setImageUrl(e.target.value);
                    }}
                        type="text"
                        className="form-control"
                        value={imageUrl}
                    />
                </div>
                <button className="btn btn-sm btn-outline-success mt-2">Add Author ➕</button>
            </form>
        </div>
    )
}