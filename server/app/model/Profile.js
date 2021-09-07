import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProfileSchema = new Schema(
    {
        name: {
            type: String,
        },
        phoneNumber: {
            type: String,
        },
        province: {
            type: String,
        },
        district: {
            type: String,
        },
        ward: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('profiles', ProfileSchema);
