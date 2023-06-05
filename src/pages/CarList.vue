<script>
import axios from "axios";
import AppCar from '../components/AppCar.vue';

export default {
    name: 'CarList',
    components: {
    AppCar,
},
    data() {
        return {
            baseUrl: 'http://localhost:8000',
            cars: [],
           
        }
    },
    methods: {
        getCars() {
            axios.get(`${this.baseUrl}/api/cars`,
                {
                    params :{
                       
                    }
                }
            )
            .then(response => {
                console.log(response);
                this.cars = response.data.results;
                
            });
           
        }
    },
    mounted() {
        this.getCars();
    }
}
</script>

<template>
<div class="container">
    <h2 class="text-center">Elenco delle macchine</h2>
    <div class="row ">
        <div class="col-4" v-for="car in cars">
            <AppCar :car="car"  :key="car.id" />
        </div>
        
    </div>
   
       
</div>


   

</template>

<style lang="scss">
@use "../styles/general.scss" as *;
</style>