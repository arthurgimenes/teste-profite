import React from 'react';
import banner1 from './img-banner1.svg'
import banner2 from './img-banner1.svg'
import banner3 from './img-banner1.svg'
const Banner = (props) => {
    const banners = [
        { 'title': 'title', 'link': props.link, 'img': banner1 },
        { 'title': 'title2', 'link': props.link, 'img': banner2 },
        { 'title': 'title3', 'link': props.link, 'img': banner3 }
    ]
    return (
        <section className="banner">
            <ul className="banner-itens">
                {banners.map((itens, key) => {
                    return (
                        <li key={key} className="banner-itens-item">
                            <a href={itens.link}>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6">
                                            {itens.title}
                                        </div>
                                        <div className="col-md-6">
                                            <figure className="banner-itens-item-image">
                                                <img src={itens.img} alt={itens.title} />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </section>
    )

}

export default Banner;