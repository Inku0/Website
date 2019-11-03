<template>
    <div id="app">
        <todos v-bind:todos="todos" />
    </div>
</template>

<script>

    import todos from "./todos";

export default {
    name: "todo",
    components: {

    },
    data() {
        return {
            todos: [
                {
                  id: 1,
                  title: "Todo 1",
                  completed: false
                }
            ]
        }
    }
    }
</script>

<style scoped>

</style>