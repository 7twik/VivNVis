import Img from '../schema/imgSchema';
import connect from '../index.js';


export async function getItem() {
    try {
        await connect();
        var res=await Img.find();
        
        console.log('Items:', res);
        return {data:res};
    }
        catch (error) {
            console.error('Error posting item data:', error);
            return [];
        }
}

export async function deleteItem(dat)
{
    try {
        await connect();
        const data= await dat;
        const page=await data.page;
        const url=await data.url;
        const res= await Img.deleteOne({page:page, url:url});
        console.log('Item deleted:', res);
        return res;

    }
    catch (error) {
        console.error('Error posting pastorder data:', error);
        return [];
    }
}

export async function createItem(dat) {
    try {
        await connect();

        const data= await dat;
        console.log('Img data:', data);
        const res = await Img.create(data);
        console.log('Item created:', res);
        return res;
    }
    catch (error) {
        console.error('Error posting pastorder data:', error);
        return [];
    }
}