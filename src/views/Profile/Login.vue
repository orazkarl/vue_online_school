<template>

    <div class="container text-center">
        <!--        <Notification :message="notification.message" :type="notification.type" v-if="notification.message"/>-->
        <h2 v-if="wrongCred">Wrong credentials entered!. Please enter your correct details.</h2>
        <form class="form-signin" v-on:submit.prevent="loginUser">
            <img class="mb-4" src="../../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
            <h1 class="h3 mb-3 font-weight-normal">Войти</h1>
            <div class="form-group">
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" v-model="email"
                       required autofocus>
            </div>
            <div class="form-group">
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="password"
                       required>
            </div>
            <button class="btn btn-lg btn-primary btn-block">Войти</button>

        </form>

    </div>
</template>
<script>

    export default {
        name: "Login",
        components: {
            Notification
        },
        data() {
            return {
                email: '',
                password: '',
                // notification: {
                //     message: '',
                //     type: '',
                // },
                wrongCred: false

            }
        },

        methods: {
            loginUser() { // call loginUSer action
                this.$store.dispatch('loginUser', {
                    email: this.email,
                    password: this.password
                })
                    .then(() => {
                        this.wrongCred = false
                        this.$router.push({name: 'Home'})
                    })
                    .catch(err => {
                        console.log(err)
                        this.wrongCred = true //
                    })
            }

        }

    }


</script>

<style lang="css" scoped>

</style>