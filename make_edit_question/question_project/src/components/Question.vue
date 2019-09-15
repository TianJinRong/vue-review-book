<template>
    <div class="questions container">
        <router-link class="btn btn-default" to="/">Return</router-link>
        <h1 class="page-header">{{question.question}}
            <button class="btn btn-danger" data-toggle="modal" data-target="#confirm">Delete</button>
        </h1>
        <p>{{question.answer}}</p>
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
        },
        deleteQuestion() {
            console.log('delete id:', this.question.id);
            let that = this;
            this.axios
                .delete('http://localhost:3000/questions/'+this.question.id)
                .then(function (response) {
                    that.$router.push({path:'/', query: {message: 'Delete Success!'}})
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