import gql from 'graphql-tag';
import wardInfo from '../fragments/wardInfo';

const graphqlWards = {
    getAll: gql`
        query getWardsByDistrict($districtCode: Int!) {
            ward(district_code: $districtCode) {
                ...wardInfo
                codename
                district_code
            }
        }
        ${wardInfo}
    `,
};

export default graphqlWards;
