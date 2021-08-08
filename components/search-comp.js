const searchTemp = `<div><input type="text" class="search-form__input" v-model="searchLine" placeholder="Search for Item.." />
<button v-on:click="filtered" class="search-form__input_submit"><i class="fas fa-search"></i></button></div>`

Vue.component('search-comp', {
    template: searchTemp,
    data() {
        return {
            searchLine: ''
        }
    },
    methods: {
        filtered() {
            this.$emit('filtered', this.searchLine)
        }
    },
    props: []
});