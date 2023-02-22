<template>
    <div class="task">
        <h3>{{task.title}}</h3>
        <div class="icons">
        </div>
    </div>
    
</template>

<script>
export default {
    name:'TaskDetails',
    props: {
        task: Object,
    },
    setup () {

        return {}
    }
}
</script>

