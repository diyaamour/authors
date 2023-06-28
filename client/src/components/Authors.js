import { useState, useEffect } from "react";

import axios from "axios";

import { Link } from "react-router-dom";

export const Authors = (props) => {
    const [authors, setAuthors] = useState([]);
    const [error, setError] = useState(false);

    const [deletedAuthorId, setDeletedAuthorId] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/authors")
            .then((response) => {
                setAuthors(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [deletedAuthorId]);

    const deleteAuthor = (id) => {
        axios
            .delete(`http://localhost:8000/api/authors/${id}`)
            .then((response) => {
                setDeletedAuthorId(id);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="w-50 mx-auto text-center">
            <nav className="navbar navbar-expand-lg d-inline navbar-light bg-light justify-content-center mb-4">
                <h1>Favorite Authors</h1>
                <Link class="btn btn-outline-dark" to='/authors/new'>Add an Author  🖊️ </Link>

            </nav>
            <hr />
            {authors.map((author) => {

                const { _id, name, dateOfBirth, nationality } = author;

                const birthDate = new Date(dateOfBirth);
                const formattedBirthDate = birthDate.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit"
                }).replace(/\//g, "-");

                return (
                    <div key={_id} className="shadow mb-4 rounded border p-4">
                        <h2>
                            <Link to={`/authors/${_id}`}>{name}</Link> 
                            </h2>
                        <p><span style={{ fontWeight: "bold" }}>Date of Birth: </span>{formattedBirthDate}</p>
                        <p><span style={{ fontWeight: "bold" }}>Nationality: </span>{nationality}</p>
                        <div>
                            <button onClick={(event) => deleteAuthor(_id)}
                                className="btn btn-sm btn-outline-danger mx-1"
                            >
                                Delete
                            </button>
                            <Link to={`/authors/${_id}/edit`} className="btn btn-sm btn-outline-primary mx-1">Edit</Link>
                        </div>
                    </div>
                );
            })
            }

        </div>
    )

}