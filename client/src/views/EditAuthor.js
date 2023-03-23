import { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";

export const EditAuthor = (props) => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [nationality, setNationality] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const [validationErrors, setValidationErrors] = useState(null);

    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/authors/${id}`)
        .then((res) => {
            const {name, dateOfBirth, nationality, imageUrl} = res.data;
        
            setName(name);
        
            setDateOfBirth(dateOfBirth);
        
            setNationality(nationality);
        
            setImageUrl(imageUrl);
        })
        .catch((err) => {
            console.log(err);
            
        });
    }, [id]);

    const handleUpdateAuthor = (e) => {
        e.preventDefault();

        const data = {
            name,
            dateOfBirth,
            nationality,
            imageUrl };

        axios
            .put(`http://localhost:8000/api/authors/${id}`, data)
            .then((response) => {
                console.log(response);
                navigate(`/authors/${id}`);
            })
            .catch((err) => {
                console.log(err);
                setValidationErrors(err?.response?.data?.errors);
            });
    };

    // const birthDate = new Date(dateOfBirth);
    // const formattedBirthDate = birthDate.toLocaleDateString("en-US", {
    //     year: "numeric",
    //     month: "2-digit",
    //     day: "2-digit"
    // }).replace(/\//g, "-").split("-").reverse().join("-");

    return (
        <div className="w-50 p-4 rounded mx-auto shadow">
            <h3 className="text-center">Edit Author</h3>

            <form
                onSubmit={(event) => {
                    handleUpdateAuthor(event);
                }}
            >
                <div className="form-group">
                    <label className="h6">Name:</label>
                    {validationErrors?.name && <span className='text-danger ms-1'>{validationErrors.name.message}</span>}
                    <input
                        value={name}
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                        type="text"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="h6">Date of Birth:</label>
                    {validationErrors?.dateOfBirth && <span className='text-danger ms-1'>{validationErrors.dateOfBirth.message}</span>}
                    <input
                        value={dateOfBirth}
                        onChange={(event) => {
                            setDateOfBirth(event.target.value);
                        }}
                        type="date"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="h6">Nationality:</label>
                    {validationErrors?.nationality && <span className='text-danger ms-1'>{validationErrors.nationality.message}</span>}
                    <input
                        value={nationality}
                        onChange={(event) => {
                            setNationality(event.target.value);
                        }}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label className="h6">Image URL:</label>
                    {validationErrors?.imageUrl && <span className='text-danger ms-1'>{validationErrors.imageUrl.message}</span>}
                    <input
                        value={imageUrl}
                        onChange={(event) => {
                            setImageUrl(event.target.value);
                        }}
                        type="text"
                        className="form-control"
                    />
                </div>

                <button className="btn btn-sm btn-outline-success mt-2">Submit</button>
            </form>
        </div>
    )
}