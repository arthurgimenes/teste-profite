import React from 'react'
import './principal.scss'
import SetaD from '../../assets/imgs/section1/setaD'
import SetaE from '../../assets/imgs/section1/setaE'



const Principal = () => {
    return (
        <div className="principal">
            <div className="section1">
                <div className="left">
                    <button className="btn">
                        <SetaE />
                    </button>   
                    <div className="line">
                    </div>
                    <h1 className="titulo">Nossa especialidade: <br/> experiência de compra.</h1>
                </div>
                <div className="right-opacity">
                    <button className="btn">
                        <SetaD />
                    </button>
                </div>
                <div className="right">
                </div>
            </div>
        </div>
    )
}

export default Principal;