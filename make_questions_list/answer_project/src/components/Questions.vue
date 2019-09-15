<template>
    <div class="questions container">
        <h1 class="page-header">Question List</h1>
        <table class="table table-striped">
            <thead>
                <th>ID</th>
                <th>Questions</th>
                <th>Answer</th>
                <th></th>
            </thead>
            <tbody>
                <tr v-for="question in questions" :key="question.id">
                    <td>{{question.id}}</td>
                    <td>{{question.question}}</td>
                    <td>{{question.answer}}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: 'Questions',
    data() {
        return {
            questions: []
        }
    },
    methods: {
        fetchQuestions() {
            let that = this;
            this.axios
                .get('http://localhost:3000/questions')
                .then(function (response) {
                    that.questions = response.data;
                });
        }
    },
    created() {
        this.fetchQuestions();
    }
}
</script>
<style scoped>
</style>