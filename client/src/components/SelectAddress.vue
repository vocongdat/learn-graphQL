<template>
    <div>
        <FormSelection
            title="Provinces"
            :arrayOption="provinces"
            @setCode="provinceCode"
        />
        <FormSelection
            title="Districts"
            :arrayOption="district"
            @setCode="districtCode"
        />
        <FormSelection title="wards" :arrayOption="ward" @setCode="wardCode" />
    </div>
</template>

<script>
import graphqlProvinces from '../graphql-client/queries/provinces';
import graphqlDistricts from '../graphql-client/queries/districts';
import graphqlWards from '../graphql-client/queries/wards';
import FormSelection from './FormSelection.vue';

export default {
    name: 'SelectAddress',
    components: {
        FormSelection,
    },
    apollo: {
        provinces: graphqlProvinces.getAll,
        district: {
            query: graphqlDistricts.getAll,
            variables() {
                return {
                    provinceCode: Number(
                        this.$store.state.Provinces.provinceCode
                    ),
                };
            },
        },
        ward: {
            query: graphqlWards.getAll,
            variables() {
                return {
                    districtCode: Number(
                        this.$store.state.Districts.districtCode
                    ),
                };
            },
        },
    },
    methods: {
        provinceCode(e) {
            this.$store.dispatch('Provinces/setProvinceCode', e.target.value);
        },
        districtCode(e) {
            this.$store.dispatch('Districts/setDistrictCode', e.target.value);
        },
        wardCode(e) {
            console.log(e);
        },
    },
};
</script>

<style></style>
