import React from 'react';

export default function ArticlesList({articles}) {
        return (
                <ul>
                        {articles.map(article => (
                            <li key={article.objectID}>
                                <a href={article.url} target="_blank" rel="noreferrer">
                                    {article.title}
                                </a>
                            </li>
                        ))}
                    </ul>
        )
}

