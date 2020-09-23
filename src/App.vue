<template>
    <div id="app">
        {{user}}
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
        data() {
            return {
                user:  {}
            }
        },
        created() {
            this.loadUser()
        },
        methods: {
            async loadUser() {
                  const headers = { "Authorization": "Token " + localStorage.getItem("auth_token") };
                this.user = await fetch(
                    `${this.$store.getters.getServerUrl}/auth/users/me`, {headers}
                ).then(response => response.json())
                console.log()
            },
        }

    }
</script>