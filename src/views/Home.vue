<template>
    <div class="home">

        <div class="container-fluid">
            <div class="card">
                <div class="card-header">
                    <h2>Мои курсы</h2>
                </div>
                <div class="card-body">
                    <div v-for="dislipline in listDiscipline" :key="dislipline.id"
                         class="courses frontpage-course-list-enrolled">
                        <hr>
                        <div class="coursebox ">
                            <div class="info">
                                <h3 class="coursename">
                                    <a href="#" @click="goTo(dislipline.id)">{{dislipline.discipline_name}}</a>
                                </h3>
                                <div class="moreinfo"></div>
                            </div>
                            <div class="content">
                                <ul class="teachers">
                                    <li>Учитель: <a href="">Orazali Karl</a></li>

                                </ul>
                            </div>
                        </div>
                        <hr>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="paging paging-morelink"><a href="#">Все курсы</a></div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                listDiscipline: []
            }
        },
        components: {},
        created() {
            this.loadListDiscipline()
        },
        methods: {
            async loadListDiscipline() {
                this.listDiscipline = await fetch(
                    `${this.$store.getters.getServerUrl}/api/discipline/`
                ).then(response => response.json())
            },
            goTo(id) {
                this.$router.push({name: 'DetailCourse', params: {id: id}})
            }

        }
    }
</script>
