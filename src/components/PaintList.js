import React from 'react';

import './PaintList.css';

import levicat from '../assets/img/Paint/levicat.png';
import llevame from '../assets/img/Paint/llevame.png';
import palosdeciego from '../assets/img/Paint/palos-de-ciego.png';
import skelet from '../assets/img/Paint/skelet.png';

export const PaintList = () => {
    return (
        <>
            <div className="container">
                <h2 className="text-center m-3">Mis trabajos</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card">
                            <img src={ levicat } className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={ llevame } className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={ palosdeciego } className="card-img-top" alt="..." />
                                <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={ skelet } className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}