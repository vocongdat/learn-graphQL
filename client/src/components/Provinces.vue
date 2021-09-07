<template>
    <div>
        <ul v-for="province in provinces" :key="province.id">
            <li>{{ province.name }}</li>
        </ul>
    </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
    name: 'Provinces',
    apollo: {
        provinces: gql`
            query {
                provinces {
                    name
                    code
                    division_type
                    phone_code
                }
            }
        `,
    },
};
</script>

<style lang="scss" scoped>
ul {
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    li {
        list-style: none;
    }
}
</style>
