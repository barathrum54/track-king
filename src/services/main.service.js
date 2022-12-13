
import { useHttps } from "@/config/http.js";
import { loading } from '@/helpers/common.js'


import { getShipmentDataDemo } from "@/demo/api.js";
let isDemo = false;

const getShipmentData = async (trackingCode) => {
    trackingCode = trackingCode.replace(" ", '');
    loading(true);
    if (isDemo) {
        return getShipmentDataDemo(trackingCode);
    }
    const https = useHttps();
    const response = await https.post("/get-shipment-data", `tc=${trackingCode}`);

    return response;
};
export {
    getShipmentData
};