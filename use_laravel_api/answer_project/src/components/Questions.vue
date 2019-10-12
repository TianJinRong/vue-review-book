<template>
    <div class="questions container">
        <Alert v-if="message" v-bind:message="message"></Alert>
        <h1 class="page-header">Question List</h1>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Questions</th>
                    <th>Answer</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="question in questions" :key="question.id">
                    <td>{{question.id}}</td>
                    <td>{{question.question}}</td>
                    <td>{{question.answer}}</td>
                    <td>
                        <router-link class="btn btn-primary" :to="'/question/'+question.id">Detail</router-link>
                        <button class="btn btn-danger" v-on:click="confirmDelete(question.id)" data-toggle="modal" data-target="#confirm">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- Modal -->
        <div class="modal fade" id="confirm" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">Delete</h4>
            </div>
            <div class="modal-body">
                <p>Are you sure to delete this question?</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-danger" v-on:click="deleteQuestion()" data-dismiss="modal">Yes</button>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import Alert from '@/components/Alert'
export default {
    name: 'Questions',
    data() {
        return {
            questions: [],
            message: '',
            toDeleteQuestionId: 0,
        }
    },
    methods: {
        fetchQuestions() {
            let that = this;
            this.axios
                .get('http://questions.com/api/questions')
                .then(function (response) {
                    that.questions = response.data.data;
                });
            if (this.$route.query && this.$route.query.message) {
                this.message = this.$route.query.message;
            }
        },
        confirmDelete(id) {
            this.toDeleteQuestionId = id;
            console.log('confirming delete question, id:', id);
        },
        deleteQuestion() {
            console.log('delete id:', this.toDeleteQuestionId);
            let that = this;
            this.axios
                .delete('http://questions.com/api/questions/'+this.toDeleteQuestionId)
                .then(function (response) {
                    that.message = 'Delete Success!';
                    that.fetchQuestions();
                })
        }
    },
    created() {
        this.fetchQuestions();
    },
    components: {
        Alert
    }
}
</script>
<style scoped>
</style>