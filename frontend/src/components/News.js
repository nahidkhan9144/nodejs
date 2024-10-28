import { React, useEffect, useState } from 'react'
import useCheckToken from './useCheckToken';

export default function News(props) {
    useCheckToken();
    const styleReact = {
        width: '18rem'
    };
    const [cardD, cardData] = useState([]);
    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-07-15&sortBy=publishedAt&apiKey=718c6e55d3694b9bae9cdc2014ba0407').then((res) => {
            return res.json();
        }).then((data) => {
            cardData(data.articles);
        });
    }, []);
    return (
        
            <div className="row p-3">
                {cardD && cardD.length > 0 ? (
                    cardD.map((article, index) => (
                        <div className='col-md-4' key={index}>

                            <div className="card" style={styleReact}>
                                <img src={article.urlToImage} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{article.title}</h5>
                                    <p className="card-text">{article.description}</p>
                                    <a href={article.url} className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    // <p>Loading...</p>
                    props.setLoading(true)
                )}
            </div>
        
    )
}