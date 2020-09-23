<template>
    <div id="app">
        <Nav/>
        <router-view/>
    </div>
</template>

<style>
    @import "assets/dist/css/bootstrap.css";
    @import "assets/css/index.css";
</style>
<script>
    import Nav from "./components/Nav";

    export default {
        components: {Nav},

    }
</script>