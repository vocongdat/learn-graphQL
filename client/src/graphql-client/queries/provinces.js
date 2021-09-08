import gql from 'graphql-tag';
import provinceInfo from '../fragments/provinceInfo';

const graphqlProvinces = {
    getAll: gql`
        query {
            provinces {
                ...provinceInfo
                phone_code
            }
        }
        ${provinceInfo}
    `,
};

export default graphqlProvinces;
