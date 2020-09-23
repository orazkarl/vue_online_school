<template lang="html">

    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm"
         id="navbar">

        <h4 class="my-0 mr-md-auto font-weight-normal"><a href="/" class="header-name">Онлайн школа</a></h4>
        <nav class="my-2 my-md-0 mr-md-3">
            <a class="p-2 text-dark" href="/">Курсы</a>
            <!-- <a class="p-2 text-dark" href="#">Enterprise</a>
            <a class="p-2 text-dark" href="#">Support</a>
            <a class="p-2 text-dark" href="#">Pricing</a> -->
        </nav>
        <!--        <a class="btn btn-outline-primary" href="/login">Войти</a>-->

        <button v-if="!auth" @click="goLogin()" class="btn btn-primary">Вход</button>
        <button v-else @click=" logout()"class="btn btn-primary" >Выход</button>


    </div>
</template>

<script>




    export default {
        name: "Nav",
        computed: {
            auth() {
                if (localStorage.getItem("auth_token")) {
                    return true
                }
            }
        },

        methods: {
            goLogin() {
                this.$router.push({name: "Login"})

            },
            logout() {
                localStorage.removeItem("auth_token")
                window.location = '/login'
            },

        },

    }
</script>

<style lang="css" scoped>
    .header-name {
        /*text-decoration: none;*/
        color: #343a40 !important;
    }
</style>
