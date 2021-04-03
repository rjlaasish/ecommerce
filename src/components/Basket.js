import React from 'react';

export default function Basket(props) {
    const {cartItems, onAdd, onRemove} = props;
    console.log(cartItems)
    const getPrice = (price) => {
        const foreignprice = Number(price.substring(1, price.length));
        return (foreignprice * 117.17).toFixed(2)
    }

    const itemsPrice = cartItems.map(items => {
        return items.qty * getPrice(items.price)
    })

    // const taxPrice = itemsPrice * 0.14;
    // const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice.reduce(function (a, b) {
        return a + b;
    }, 0);
    ;


    return (
        <aside className="block col-1">
            <h2>Cart Items</h2>
            <div>
                {cartItems.length === 0 && <div>Cart is empty</div>}
                {cartItems.map((item) => (
                    <div key={item.id} className="row">
                        <div className="col-2">{item['name ']}</div>
                        <div className="col-2">
                            <button onClick={() => onRemove(item)} className="remove">
                                -
                            </button>
                            {' '}
                            <button onClick={() => onAdd(item)} className="add">
                                +
                            </button>
                        </div>

                        <div className="col-2 text-right">
                            {item.qty} x Rs.{getPrice(item.price)}
                        </div>
                    </div>
                ))}

                {cartItems.length !== 0 && (
                    <>
                        <hr></hr>


                        <div className="row">
                            <div className="col-2">
                                <strong>Total Price</strong>
                            </div>
                            <div className="col-1 text-right">
                                <strong>Rs.{totalPrice.toFixed(2)}</strong>
                            </div>
                        </div>
                        <hr/>

                    </>
                )}
            </div>
        </aside>
    );
}
