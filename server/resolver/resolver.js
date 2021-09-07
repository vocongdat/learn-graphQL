import { books, authors } from '../data/index.js';
const resolvers = {
    Query: {
        provinces: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.getAllProvinces(),
        province: async (parent, { code }, { mongoDataMethods }) =>
            await mongoDataMethods.getProvinceByCode(code),

        districts: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.getAllDistricts(),
        district: async (parent, { province_code }, { mongoDataMethods }) =>
            await mongoDataMethods.getDistrictByCode(province_code),

        wards: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.getAllWards(),
        ward: async (parent, { district_code }, { mongoDataMethods }) =>
            await mongoDataMethods.getWardByCode(district_code),
    },
    Province: {
        districts: async ({ code }, args, { mongoDataMethods }) =>
            await mongoDataMethods.getDistrictByCode(code),
    },

    District: {
        wards: async ({ code }, args, { mongoDataMethods }) =>
            await mongoDataMethods.getWardByCode(code),
    },
};

export default resolvers;
