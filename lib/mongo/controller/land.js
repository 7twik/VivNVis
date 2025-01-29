import Land from '../schema/landSchema';
import connect from '../index.js';


export async function getItem() {
    try {
        await connect();
        const res = await Land.find();
        //console.log('Items:', res);
        return {data:res};
    }
        catch (error) {
            console.error('Error posting item data:', error);
            return [];
        }
}
export async function updateItem(dat) {
    try {
        await connect();
        const data= await dat;
        console.log('LAND DATA UPDATEITEM',data);
        const im1=await data.im1;
        const im2=await data.im2;
        const im3=await data.im3;
        const im4=await data.im4;
        const im5=await data.im5;
        const im6=await data.im6;
        const im7=await data.im7;
        const im8=await data.im8;
        const im9=await data.im9;
        const im10=await data.im10;
        const im11=await data.im11;
        const im12=await data.im12;
        const vid1=await data.vid1;
        const vid2=await data.vid2;
        const vid3=await data.vid3;
        const res= await Land.updateOne({fix: 'land'},data);
        
        console.log('Item deleted:', res);
        return res;
    }
        catch (error) {
            console.error('Error posting pastorder data:', error);
            return [];
        }
}

