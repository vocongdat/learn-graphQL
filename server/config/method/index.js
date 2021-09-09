import Province from '../../app/model/Provinces.js';
import District from '../../app/model/Districts.js';
import Ward from '../../app/model/Wards.js';
import Profile from '../../app/model/Profile.js';

const mongoDataMethods = {
    // GET
    getAllProvinces: async () => await Province.find(),
    getProvinceByCode: async (code) => await Province.find({ code }),

    getAllDistricts: async () => await District.find(),
    getDistrictByCode: async (province_code) =>
        await District.find({ province_code }),

    getOneDistrict: async (code) => await District.findOne({ code }),

    getAllWards: async () => await Ward.find(),
    getWardByCode: async (district_code) => await Ward.find({ district_code }),
    getAllProfile: async () => await Profile.find(),
    getProfileById: async (id) => await Profile.findById(id),

    // POST
    createProfile: async (args) => {
        const newProfile = new Profile(args);
        return await newProfile.save();
    },
    editProfile: async (args) => {
        await Profile.findByIdAndUpdate(args.id, args);
        return Profile(args);
    },
    deleteProfile: async (id) => await Profile.findByIdAndDelete(id),
};

export default mongoDataMethods;
