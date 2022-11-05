import React from 'react'
// import { data } from "./data"
import { useParams, Link, useNavigate } from "react-router-dom"

function ArticleDetails({ data }) {
    console.log(useParams(), "<<<<<<<<<<<")
    const { name } = useParams()
    const navigate = useNavigate()
    const filtered = data.filter(article => article.title === name)[0]

    const restOfTheData = data.filter(article => article.title !== name)
    console.log(filtered)
    const handleNavigate = (title) => {
        navigate(`/articleList/${title}`)
    }
    return (
        <div>

            <div>
                <h1>{filtered.title}</h1>
                <h3>{filtered.subTitle}</h3>
                <p>{filtered.description.props.children}</p>
            </div>
            <div>
                <h5>People alse read these articles.</h5>
                {restOfTheData.map(article => {
                    return (

                        <div style={{ cursor: "pointer", boxShadow: "0 0 5px grey", padding: "5px", margin: "5px" }} onClick={() => handleNavigate(article.title)}>
                            <h4>{article.title}</h4>
                            <p>

                                {article.description.props.children.slice(0, 100)}...
                            </p>
                        </div>

                    )
                })}

            </div>
        </div>
    )
}

export default ArticleDetails