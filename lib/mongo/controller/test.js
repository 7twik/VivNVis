import Test from '../schema/testSchema.js';
import connect from '../index.js';

export async function createItem(data) {
    try {
        await connect();

        const dat= await data;
        console.log('Item data:', dat);
        const res = await Test.create(dat);
        console.log('Item created:', res);
        return res;
    }
    catch (error) {
        console.error('Error posting pastorder data:', error);
        return [];
    }
}

export async function getItem() {
    try {
        await connect();
        const res = await Test.find();
        console.log('Items:', res);
        return {data:res};
    }
    catch (error) {
        console.error('Error posting item data:', error);
        return [];
    }
}

export async function deleteItem(dat) {
    try {
        await connect();
        const title=await dat.id;
        const res= await Test.deleteOne({Name:title});
        console.log('Item deleted:', res);
        return res;
    }
    catch (error) {
        console.error('Error posting pastorder data:', error);
        return [];
    }
}