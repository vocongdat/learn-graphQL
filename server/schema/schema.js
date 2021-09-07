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

    # ROOT TYPE
    type Query {
        provinces: [Province]
        province(code: Int!): [Province]

        districts: [District]
        district(province_code: Int!): [District]

        wards: [Ward]
        ward(district_code: Int!): [Ward]
    }
`;

export default typeDefs;
