import React from 'react';

const OrderedItem = (props) => {
    console.log(props);
    const { description, price, quantity, title, weight, imgUrl, key, name } = props.product;

    // const {name, quantity, key, price} = props.product;
    // const reviewItemStyle = {
    //     borderBottom: '1px solid lightgray',
    //     marginBottom: '5px',
    //     paddingBottom: '5px',
    //     marginLeft: '200px'
    // };
    return (
        <div className="container col-md-12 d-flex justify-content-around border-bottom ">
            <h6 className="col-md-3">{description}</h6>
            <h6 className="col-md-3">{quantity}</h6>
            <h6 className="col-md-3"> $ {price}</h6>
            <button
                className="btn btn-danger col-md-3"
                onClick={() => props.removeProduct(key)}
            >Remove </button>
        </div>
        // <div style={reviewItemStyle} className="review-item">
        //     <h4 className="product-name">{description}</h4>
        //     <p>Quantity: {quantity}</p>
        //     <p>Price: $ {price}</p>
        //     <br/>
        //     <button 
        //         className="btn btn-danger"
        //         onClick={() => props.removeProduct(key)}
        //     >Remove </button>
        // </div>
    );
};

export default OrderedItem;