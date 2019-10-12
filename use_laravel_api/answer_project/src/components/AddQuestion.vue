<template>
    <div class="add-question container">
        <h1 class="page-header">Add Question</h1>
        <form v-on:submit="addQuestion">
            <div class="form-group">
                <label for="question">Question</label>
                <input type="text" class="form-control" v-model="question.question">
            </div>
            <div class="form-group">
                <label for="answer">Answer</label>
                <input type="text" class="form-control" v-model="question.answer">
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
        </form>
    </div>
</template>
<script>
export default {
    name: 'AddQuestion',
    data() {
        return {
            question: {}
        }
    },
    methods: {
        addQuestion(e) {
            e.preventDefault();
            let that = this;
            this.axios
                .post('http://questions.com/api/questions', this.question)
                // .post('http://localhost:3000/questions', this.question)
                .then(function (response) {
                    that.$router.push({path: '/', query: {message: 'Add question success!'}});
                });
        }
    }
}
</script>