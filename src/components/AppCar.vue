<script>
 import { store } from '../store.js';
export default {
    name: 'AppCar',
    props: {
        car: Object
    },
    data() {
        return {
            baseUrl: 'http://localhost:8000'
            
        }
    },

}
</script>

<template>
    <div class="container">
        
            <div class="card-body">
                <h5 class="card-title">{{ car.brand }}</h5>
                <p class="card-text">{{ car.model }}</p>
                <p class="card-text">{{ car.price }}</p>
                <p class="card-text">{{ car.year_release }}</p>
            <div class="pb-3 ">
                <p>Optionals:</p>
                <span v-for="optional in car.optionals" class="badge rounded-pill text-bg-primary me-3">{{optional.name}}</span>
            </div>

            <router-link :to="{name: 'single-car', params: {id: car.id}}" class="btn btn-primary">
                Leggi di più
            </router-link>
        

        </div>
        
            
    </div>
   

   
    
</template>

<style lang="scss">
@use "../styles/general.scss" as *;
</style>