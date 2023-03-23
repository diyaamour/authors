import { useEffect, useState } from "react";

import axios from "axios";

import { useParams, useNavigate, Link } from "react-router-dom";

export const Author = (props) => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [author, setAuthor] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                setAuthor(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const handleDelete = () => {
        axios
            .delete(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                console.log(res);
                navigate("/authors");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    if (author === null) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    const { _id, name, dateOfBirth, nationality, imageUrl } = author;
    const birthDate = new Date(dateOfBirth);
    const formattedBirthDate = birthDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    }).replace(/\//g, "-");
    return (

        <div className="w-50 mx-auto text-center">
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
                <h1 ><Link to='/' className="text-decoration-none" style={{ color: 'black' }}>Favorite Authors</Link> </h1>
            </nav>
            <div className="shadow mb-4 rounded border p-4">
                <img src={imageUrl} className="w-100 rounded" alt={name} />
                <h1 >{name}</h1>
                <p>Date of Birth: {formattedBirthDate}</p>
                <p>Nationality: {nationality}</p>
                <button onClick={handleDelete}
                    className="btn btn-sm btn-outline-danger mx-1"
                >
                    Delete
                </button>
            </div>
        </div>
    )

}