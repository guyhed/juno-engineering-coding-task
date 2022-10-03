import exp from "constants";
import { fetchOrderById } from "../api";
import { Order, getAllOrders, _bucketOrdersByDate, _getLast2WeeksOrders, _bucketOrdersByUsers } from "./ecommerce"

const testOrders: Order[] = [
    { id: '1', userId: 'shlomo', timestamp: (new Date('Tue Oct 04 2022 01:24:46')).getTime(), title: 't1' },
    { id: '2', userId: 'shlomo', timestamp: (new Date('Fri Aug 05 2022 01:45:42')).getTime(), title: 't2' },
    { id: '3', userId: 'shaul', timestamp: (new Date('Tue Oct 04 2022 03:24:46')).getTime(), title: 't3' },
    { id: '4', userId: 'shaul', timestamp: (new Date('Tue Oct 06 2022 04:24:46')).getTime(), title: 't4' }
]
const testIds = testOrders.map(t => t.id);
const getById = (id: string) => Promise.resolve(testOrders.find(t => t.id == id) as Order);
const now = (new Date('Tue Oct 06 2022 10:24:46')).getTime();

const ORDER_ID = "70ef599e5eca171b2bce84d1"
test("Ecommerce - fetchOrderById", async () => {
    let orders = await fetchOrderById(ORDER_ID);
    expect(orders).toBeTruthy();
});

test("Ecommerce - getAllOrders should get an order for any valid id", async () => {
    const all = await getAllOrders(testIds, getById);
    expect(all.length).toEqual(testIds.length);
});

test("Ecommerce - _bucketOrdersByDate", () => {
    const groups = _bucketOrdersByDate(testOrders);
    expect(Object.keys(groups).length).toEqual(3);
    expect(Object.values(groups).map(g => g.length).sort()).toEqual([1, 1, 2]);
});

test("Ecommerce - _bucketOrdersByUsers", () => {
    const groups = _bucketOrdersByUsers(testOrders);
    expect(Object.keys(groups).sort()).toEqual(["shaul", "shlomo"]);
    expect(Object.values(groups).map(g => g.length).sort()).toEqual([2, 2]);
});


test("Ecommerce - _getLast2WeeksOrders", () => {
    const orders = _getLast2WeeksOrders(testOrders, now);
    expect(orders.length).toEqual(3);
});


