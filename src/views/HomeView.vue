<template>
  <div class="container-fluid">
    <center>
      <h3 class="mt-4">
        TELECHARGEUR DE VIDEO YOUTUBE
      </h3>
    </center>
    <div class="d-flex justify-content-center">
      <form action="" method="post" @submit.prevent="Download">
        <div class="form-group">
        <label for="url">Url de la video</label>
        <input type="url"
          class="form-control" v-model="form.url" id="url" aria-describedby="helpId" placeholder="">
        <small id="helpId" class="form-text text-muted">
          Coller l'url de video youtube
        </small>
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Type</label>
        <select disabled class="form-control" v-model="form.type" id="">
          <option value="audio">Audio MP3</option>
          <option  selected value="video">Video MP4</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Qualité de la video ou de l'audio</label>
        <select class="form-control" v-model="form.quality" id="">
          <option value="18">360p</option>
          <option value="137">1080p HD</option>
          <option value="136">720p HD</option>
        </select>
      </div>
      <button class="btn btn-danger w-100">Télécharger</button>

      <div class="border-top text-muted mt-3">
        Copyright &copy; Francis ALAPHIA
      </div>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios"

export default {
  name: 'HomeView',
  components: {
   
  },
  data() {
    return {
      form:{
        url:"",
        type:"video",
        quality:136
      }
    }
  },

  methods: {
    async Download(){
      if(this.form.url){
        await axios.post(`http://localhost:2022/`,this.form).then((resp)=>{
        if(resp.data.status ==="finish"){
          alert(`La video ${resp.data.video} est finie`)
        }
      })
      }
    }
  },
}
</script>
