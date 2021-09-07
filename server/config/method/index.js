import Province from '../../app/model/Provinces.js';
import District from '../../app/model/Districts.js';
import Ward from '../../app/model/Wards.js';

const mongoDataMethods = {
    getAllProvinces: async () => await Province.find(),
    getProvinceByCode: async (code) => await Province.find({ code }),

    getAllDistricts: async () => await District.find(),
    getDistrictByCode: async (province_code) =>
        await District.find({ province_code }),

    getOneDistrict: async (code) => await District.findOne({ code }),

    getAllWards: async () => await Ward.find(),
    getWardByCode: async (district_code) => await Ward.find({ district_code }),
};

export default mongoDataMethods;
