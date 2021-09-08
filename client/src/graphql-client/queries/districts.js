import gql from 'graphql-tag';
import districtInfo from '../fragments/districtInfo';

const graphqlDistricts = {
    getAll: gql`
        query getDistrictByProvince($provinceCode: Int!) {
            district(province_code: $provinceCode) {
                ...districtInfo
                province_code
                codename
            }
        }
        ${districtInfo}
    `,
};

export default graphqlDistricts;
