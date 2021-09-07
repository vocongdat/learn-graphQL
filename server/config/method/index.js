import Province from '../../app/model/Provinces.js';
import District from '../../app/model/Districts.js';
import Ward from '../../app/model/Wards.js';

const mongoDataMethods = {
    getAllProvinces: async () => await Province.find(),
    getProvinceByCode: async (code) => await Province.find({ code }),

    getAllDistricts: async (condition = null) =>
        condition === null
            ? await District.find()
            : await District.find({ condition }),
    getDistrictByCode: async (province_code) =>
        await District.find({ province_code }),

    getAllWards: async () => await Ward.find(),
    getWardByCode: async (district_code) => await Ward.find({ district_code }),
};

export default mongoDataMethods;
