<template>

<div class="container">
            <div class="row m-5">
            <div class="card p-0" v-if="car">
            
                <div class="card-body">
                    <h5 class="card-title">{{this.car.brand}}</h5>
                    <p class="card-text ">Modello : <br>
                        {{thiscar.model}}
                    </p>
                    <div class="pb-3 " v-if="car.optionals">
                        <p>Optionals:</p>
                        <span v-for="optional in car.optionals" class="badge rounded-pill text-bg-primary me-3">{{optional.name}}</span>
                    </div>
                    <div v-else>
                        Nessuna optional selezionato!
                    </div>
                </div>
            </div>
        </div>

        </div>

</template>

<script>
import axios from 'axios';
export default {
    name: 'SingleCar',
    data() {
        return {
            car: null,
            baseUrl: 'http://localhost:8000'
        }
    },
    methods: {
        getCars(){
                const id = this.$route.params.id;
            
            console.log(id);

            axios.get(`${this.baseUrl}/api/car/${id}`)
            .then(response => {
                console.log(response);
                if(response.data.success){
                    this.car = response.data.car;
                }
            });
    }
  },
  mounted() {
    this.getCars();
  }
}
</script>