import { groupNumber, ordersData } from '../../data';
import OrdersPieChart from '../OrdersPieChart/OrdersPieChart';
import css from './Orders.module.css';

const Orders = () => {
    return (
        <div className={`${css.container} theme-container`}>
            <div className={css.head}>
                <img src="./logo.png" alt="Logo Image" />
                <span>Todays Orders</span>
            </div>

            <div className={`grey-container ${css.stat}`}>
                <span>Amount</span>
                <span>${groupNumber(4500)}</span>
            </div>

            <div className={css.orders}>
                {
                    ordersData.map((order, index) => ( //we haven't wrote the function with '{}' because, then we've to return the values from the function.
                        
                        <div key={index} className={css.order}>
                            <div>
                                <span>{order.name}</span>
                                <span>$ {order.change}</span>
                            </div>
                            <div>
                                <span>{order.type}</span>
                                <span>Item: {order.items}</span>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className={css.orderChart}>
                <span>Split By Orders</span>
                <OrdersPieChart />
            </div>
        </div>
    )
}

export default Orders;
