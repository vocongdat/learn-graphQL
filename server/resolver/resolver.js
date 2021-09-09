const resolvers = {
    // Query
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

        profiles: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.getAllProfile(args),
        profile: async (parent, { id }, { mongoDataMethods }) =>
            await mongoDataMethods.getProfileById(id),
    },
    Province: {
        districts: async ({ code }, args, { mongoDataMethods }) =>
            await mongoDataMethods.getDistrictByCode(code),
        district: async (parent, { code }, { mongoDataMethods }) =>
            await mongoDataMethods.getOneDistrict(code),
    },

    District: {
        wards: async ({ code }, args, { mongoDataMethods }) =>
            await mongoDataMethods.getWardByCode(code),
    },
    // MUTATION
    Mutation: {
        createProfile: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.createProfile(args),
        editProfile: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.editProfile(args),
        deleteProfile: async (parent, { id }, { mongoDataMethods }) =>
            await mongoDataMethods.deleteProfile(id),
    },
};

export default resolvers;
