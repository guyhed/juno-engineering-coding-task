////////////////////////////////////////////// Helper code, do not edit /////////////////////////////////////////
import { allIds, fetchOrderById } from "../api";
////////////////////////////////// Your code tasks is below //////////////////////////////////////////////////////
import { groupBy } from "lodash";

export type Order = {
    id: string,
    userId: string,
    timestamp: number,
    title: string
}
export const fetchAllOrders = async () => {
    const ids = allIds;
    // .....
    //   1. TODO: fetch all ids using the "fetchOrderById" and the given ids, make it work as efficient and clean as possible.
    return getAllOrders(ids, fetchOrderById);
};

export const getAllOrders = async (ids: string[], getOrderById: (id: string) => Promise<Order>) => {
    const promises = ids.map(id => getOrderById(id));
    const orders = await Promise.all(promises);
    return orders;
};

export const bucketOrdersByUsers = async () => {
    const orders = await fetchAllOrders();
    //   2. TODO: using the function from section 1 you should now bucket the orders by user.
    // each key in the object (ordersByUsers) represents a userId and each value is an array of the orders of that user.  
    return _bucketOrdersByUsers(orders);
};

export const _bucketOrdersByUsers = (orders: Order[]) => {
    return groupBy(orders, order => order.userId);
}

export const myOwn_groupBy = <T>(items: T[], predicate: (t:T)=> string ) => {
    // In case I should have done the code myself (in real life I use lodash)
    const groups = {} as { [label: string]: T[] };
    for (const item of items) {
        const label = predicate(item);
        if (groups[label]) groups[label].push(item);
        else groups[label] = [item];
    }
    return groups;
}

export const getLast2WeeksOrders = async () => {
    //   3. TODO: fetch all Ids and return array with only the last 2 weeks orders. make it work as efficient and clean as possible.
   return _getLast2WeeksOrders(await fetchAllOrders(), Date.now())
};

export const _getLast2WeeksOrders = (orders:Order[], now:number) => {
    const twoWeeksAgo = now - 14 * 24 * 60 * 60 * 1000;
    return orders.filter(order => order.timestamp > twoWeeksAgo);
}

export const bucketOrdersByDate = async () => {
    //   4. TODO: using the function from section 3 bucket the orders by date.
    // each key in the object (ordersByDate) represents a day and each value is an array of the orders in that date.
    return _bucketOrdersByDate(await fetchAllOrders());
};

const getOrderDate = (order:Order) => (new Date(order.timestamp)).toDateString();

export const _bucketOrdersByDate = (orders:Order[]) => {
    return groupBy(orders, getOrderDate);
};
/*
fetchAllOrders()
 .then(console.log);

bucketOrdersByUsers()
 .then(console.log);

getLast2WeeksOrders()
 .then(console.log);

bucketOrdersByDate()
 .then(console.log);
*/
////////////////////////////////////////
