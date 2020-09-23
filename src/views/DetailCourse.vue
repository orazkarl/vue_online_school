<template>
    <div class="container-fluid col-md-10">
        <div class="card">
            <div class="card-header">
                <h1>{{course.discipline_name}}</h1>
            </div>
            <div class="card-body">
                <div class="list-group">
                    <div class="list-group-item">
                        <p v-html="course.discipline_description"></p>
                        <div class="list-group">
                            <div class="list-group-item border-none">
                                <a href="#"><span><i class="fa fa-lg fa-folder"></i> Материалы</span></a>
                            </div>
                            <div class="list-group-item border-none">
                                <a href="#"><span><i class="fa fa-lg fa-users"></i> Посещаемость</span></a>
                            </div>
                        </div>
                    </div>
                    <div class="list-group-item">
                        <div class="card">
                            <div class="card-header">
                                <h5>Урок №1</h5>
                            </div>
                            <div class="card-body">
                                <div class="list-group">
                                    <a href="#" class="list-group-item border-none"><span><i
                                            class="fa fa-lg fa-file"></i> Материалы</span></a>
                                    <a href="#" class="list-group-item border-none"><span><i
                                            class="fa fa-lg fa-upload"></i> Лаб 1</span></a>
                                    <a href="#" class="list-group-item border-none"><span><i
                                            class="fa fa-lg fa-file-pdf-o"></i> Лекция 1</span></a>
                                    <a href="#" class="list-group-item border-none"><span><i
                                            class="fa fa-lg fa-file-word-o"></i> Лекция 1</span></a>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailCourse",
        props: ['id'],
        data() {
            return {
                course: {}
            }
        },
        created() {
            this.loadCourse()
        },
        methods: {
            async loadCourse() {
                const headers = { "Authorization": "Token " + localStorage.getItem("auth_token") };
                this.course = await fetch(
                    `${this.$store.getters.getServerUrl}/api/discipline/${this.id}`, {headers}
                ).then(response => response.json())
            }

        }
    }
</script>

<style lang="css" scoped>
</style>
