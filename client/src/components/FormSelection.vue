<template>
    <div class="to-blue-50 inline-block">
        <label for="title" class="pr-4">{{ title | capitalize }}</label>
        <select
            name="title"
            id="title"
            class="bg-purple-500 box-border h-8 w-auto px-3 rounded-md"
            @change="setCode"
        >
            <option
                v-for="item in arrayOption"
                :key="item.id"
                v-bind:value="item.code"
                class="bg-green-400"
            >
                {{ item.name }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'FormSelection',
    props: {
        title: {
            type: String,
            default: 'Lựa chọn',
            required: false,
        },
        arrayOption: {
            type: Array,
            required: true,
        },
        option: {
            type: Array,
            required: false,
        },
    },
    filters: {
        capitalize: (value) => {
            if (!value) return '';
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        },
    },
    methods: {
        setCode(val) {
            this.$emit('setCode', val);
        },
    },
};
</script>
