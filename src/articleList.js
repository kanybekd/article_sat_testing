import React from 'react'
import { data } from "./data"
import { Link } from "react-router-dom"

function ArticleList() {
    return (
        <div>

            {
                data.map(article => {
                    return (
                        <Link to={`/articleList/${article.title}`}>
                            <h5>{article.title}</h5>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default ArticleList