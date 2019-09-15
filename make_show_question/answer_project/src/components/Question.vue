<template>
    <div class="questions container">
        <router-link class="btn btn-default" to="/">Return</router-link>
        <h1 class="page-header">{{question.question}}
        </h1>
        <p>{{question.answer}}</p>
    </div>
</template>
<script>
export default {
    name: 'Question',
    data() {
        return {
            question: {}
        }
    },
    methods: {
        fetchQuestion(id) {
            let that = this;
            this.axios
                .get('http://localhost:3000/questions/' + id)
                .then(function (response) {
                    that.question = response.data;
                    console.log('fetch question:', that.question);
                })
        }
    },
    created() {
        this.fetchQuestion(this.$route.params.id);
    }
}
</script>
<style scoped>
</style>