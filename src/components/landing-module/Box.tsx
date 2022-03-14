import React from 'react';

interface BoxProps {
    data: any;
}

export const Box = (props: BoxProps) => {
    return (
        <div className='box-card'>
            <div className="card">
            <img className="card-img-top img-box" src={props?.data?.thumbnail?.path +'.'+props?.data?.thumbnail?.extension} alt="Card image" style={{width:"100%"}} />
            <div className="card-body">
                <h4 className="card-title">{props.data.name}</h4>
                <p className="card-text">{props?.data?.description ? props?.data?.description : props.data.name}</p>
                
            </div>
            </div>
        </div>
    );
}