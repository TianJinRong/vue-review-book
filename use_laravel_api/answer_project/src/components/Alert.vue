<template>
    <div class="alert container">
        <div class="alert alert-warning alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <strong>Message: </strong> {{message}}
        </div>
    </div>
</template>
<script>
export default {
    name: 'Alert',
    props: ['message']
}
</script>
<style scoped>
</style>