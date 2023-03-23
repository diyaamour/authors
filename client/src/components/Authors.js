import { useState, useEffect } from "react";

import axios from "axios";

export const Authors = (props) => {
    const [authors, setAuthors] = useState([]);
    const [error, setError] = useState(false);

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
    }, []);

    return (
        <div className="w-50 mx-auto text-center">
            <nav className="navbar navbar-expand-lg  d-inline navbar-light bg-light sticky-top justify-content-center mb-4">
                <h1>Favorite Authors</h1>
                <button type="button" class="btn btn-outline-dark">Add an Author  🖊️ </button>
                
            </nav>
            <hr />
            {authors.map((author) => {

                const { _id, name, dateOfBirth, nationality } = author;

                const birthDate = new Date(dateOfBirth);

                // format the date using toLocaleDateString with the desired options
                const formattedBirthDate = birthDate.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit"
                }).replace(/\//g, "-");

                return (
                    <div key={_id} className="shadow mb-4 rounded border p-4">
                        <h2>{name}</h2>
                        <p><span style={{fontWeight:"bold"}}>Date of Birth: </span>{formattedBirthDate}</p>
                        <p><span style={{fontWeight:"bold"}}>Nationality: </span>{nationality}</p>
                    </div>
                );
            })
            }

        </div>
    )

}