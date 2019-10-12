<template>
    <div class="questions container">
        <h1 class="page-header">Edit Question</h1>
        <form v-on:submit="updateQuestion">
            <div class="form-group">
                <label for="question">Question</label>
                <input type="text" class="form-control" v-model="question.question">
            </div>
            <div class="form-group">
                <label for="answer">Answer</label>
                <textarea rows="10" class="form-control" v-model="question.answer"></textarea>
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
        </form>
    </div>
</template>
<script>
export default {
    name: 'EditQuestion',
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
        },
        updateQuestion(e) {
            e.preventDefault();
            let that = this;
            this.axios.put('http://localhost:3000/questions/'+this.question.id, this.question)
            .then(function (response) {
                if (response) {
                    console.log('edit question', response);
                    // 编辑成功，则返回列表页
                    that.$router.push({path:"/", query: {message: 'Update a Questioon!'}});
                }
            });
        }
    },
    created() {
        this.fetchQuestion(this.$route.params.id);
    }
}
</script>
<style scoped>
</style>