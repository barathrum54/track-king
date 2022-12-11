
import { loading } from '@/helpers/common.js'
const getShipmentDataDemo = async (trackingCode) => {
    let data = {
        "trackingCode": trackingCode,
        "shipmentStatus": "Delivered",
        "shipmentDate": "2020-10-10",
        "status": "success"
    }
    await checkTrackingCodeDemo(trackingCode).then((result) => {
        console.log('1')
        disableLoading();
        return data;
    }).catch((error) => {
        console.log('2')
        disableLoading();
        throw("Tracking code not found");
    });
}


const checkTrackingCodeDemo = (trackingCode) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (trackingCode === "123") {
                resolve(true);
            } else {
                reject(false);
            }
        }, 500);
    })
}

const disableLoading = () => {
    setTimeout(() => {

        loading(false);
    }, 500);
}
export { getShipmentDataDemo }