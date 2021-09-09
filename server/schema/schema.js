import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type Province {
        id: ID!
        name: String
        code: Int
        division_type: String
        codename: String
        phone_code: Int
        districts: [District]
        district(code: Int!): District
    }

    type District {
        id: ID!
        name: String
        code: Int
        division_type: String
        codename: String
        province_code: Int
        wards: [Ward]
    }

    type Ward {
        id: ID!
        name: String
        code: Int
        division_type: String
        codename: String
        district_code: Int
    }

    type Profile {
        id: ID!
        name: String
        avatar: String
        phoneNumber: String
        province: String
        district: String
        ward: String
    }

    # ROOT TYPE
    type Query {
        provinces: [Province]
        province(code: Int!): [Province]

        districts: [District]
        district(province_code: Int!): [District]

        wards: [Ward]
        ward(district_code: Int!): [Ward]

        profiles: [Profile]
        profile(id: ID!): Profile
    }
    type Mutation {
        createProfile(
            name: String
            avatar: String
            phoneNumber: String
            province: String
            district: String
            ward: String
        ): Profile

        editProfile(
            id: ID!
            name: String
            avatar: String
            phoneNumber: String
            province: String
            district: String
            ward: String
        ): Profile
        deleteProfile(id: ID!): Profile
    }
`;

export default typeDefs;
