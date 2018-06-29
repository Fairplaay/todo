<template>
	<v-content>
    <v-toolbar style="border-radius: 0 0 20px 20px" height="30" color="deep-purple accent-3" dark fixed app>
      <v-spacer></v-spacer>
      <v-toolbar-title>TODO</v-toolbar-title>
      <router-link to="/"><v-btn small color="success">Home</v-btn></router-link>
        <router-link to="/login"><v-btn small color="dark">login</v-btn></router-link>
      <v-icon>accessibility</v-icon>
    </v-toolbar>
    <v-container fluid grid-list-xl>
      <v-layout row justify-center>
        <v-flex xs12 sm8 md6>
          <v-card style="border-radius: 10px 10px 0 0">
            <v-card-title style="height: 60px" center class="purple accent-3 headline">
            <v-icon large>add</v-icon> Agregar una tarea</v-card-title>
            <v-card-text>
              <v-form v-model="valid" ref="form">
                <v-text-field
                  v-model= "title"
                  required
                  :rules='titleRules'
                  lazy-validation
                  name="title"
                  label="Agregar tarea"
                  id="title"
                ></v-text-field>
                <v-text-field
                  v-model= "description"
                  required
                  :rules='descripcionRules'
                  lazy-validation
                  name="description"
                  label="Descripción"
                  id="description"
                ></v-text-field>
                <v-btn @click="submit" style="border-radius: 20px" color="purple accent-3">Guardar</v-btn>
              </v-form>
              <v-alert style="border-radius: 20px" v-model="alert" type="success" dismissible>
                Guardado exitosamente!
              </v-alert>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm8 md6>
          <v-card style="border-radius: 10px 10px 0 0">
            <v-card-title style="height: 60px" center class="purple accent-3 headline">
            <v-icon large>format_list_bulleted</v-icon>Lista de Tarea</v-card-title>
            <v-data-table
              style="border-radius: 10px 10px 0 0"
              :headers="headers"
              :items="datos"
              hide-actions
              class="elevation-1"
            >
              <template slot="items" slot-scope="props">
                <td class="text-xs-left">{{ props.item.title }}</td>
                <td class="text-xs-left">{{ props.item.description }}</td>
                <td class="text-xs-left">
                  <v-btn @click="update(props.item._id)" v-if="props.item.status == true" color="success">Hecho</v-btn>
                  <v-btn @click="update(props.item._id)" v-else color="dark">No hecho</v-btn>
                  <v-btn @click="del(props.item._id)" color="red">Eliminar</v-btn>
                </td>
              </template>
            </v-data-table>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  import axios from 'axios'
  export default {
    data: () => ({
      alert: false,
      title: '',
      description: '',
      status: false,
      datos: [],
      valid: false,
      titleRules: [
        v => !!v || 'Titulo es requerido'
      ],
      descripcionRules: [
        v => !!v || 'Descripción es requerido'
      ],
      headers: [
        {
          text: 'Titulo',
          align: 'left',
          sortable: false,
          value: 'title'
        },
        { text: 'Descripcion', value: 'description'},
        { text: 'Acción', value: 'action' }
      ],
  }),
  mounted: function(){
    this.getData()
  },
  methods: {
    getData() {
      var that = this;
      axios.get('http://localhost:9000/')
        .then(function (response) {
           that.datos = response.data
        })
        .catch(function (error) {
           console.log('Error: ' + error);
      })
    },
    submit () {
      let data = { title: this.title, description: this.description }
      axios.post('http://localhost:9000/add', data)
        .then(() => this.alert = true)
        .then(() => setTimeout(() => {
          this.alert = false
        }, 3000))
        .then(() => this.getData())
        .catch(function (error) {
           console.log('Error: ' + error);
      })
    },
    del (id) {
      axios.delete(`http://localhost:9000/del/${id}`)
        .then(() => this.getData())
        .catch(function (error) {
           console.log('Error: ' + error);
      })
    },
    update (id) {
      axios.put(`http://localhost:9000/turn/${id}`)
      .then(() => this.getData())
      .catch(function (error) {
           console.log('Error: ' + error);
      })
    }
  }
}
</script>