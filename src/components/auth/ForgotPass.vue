<template>
	<v-card-text>
	  <small>Forgot your password?</small>
	    <v-dialog v-model="dialog" persistent max-width="400px">
	      <a class="grey--text text--darken-2" slot="activator" flat small>Recover it</a>
	      <v-card>
	      	<v-card-actions class="py-0">
	      	  <v-spacer></v-spacer>
			      <v-btn large flat icon color="blue darken-1" @click.native="dialog = false"><v-icon color="error">close</v-icon></v-btn>
	      	</v-card-actions>
	      	<v-container>
	      	  <v-layout row wrap>
	      	    <v-flex xs10 offset-xs1>
	      	      <v-card-title>
						      <span class="headline">Forgot your password?</span>
						    </v-card-title>
	      	    </v-flex>
			      	<v-flex xs12>
		            <div class="pa-1 h-30">Email</div>
			            <v-text-field
		                label="Email"
		                required
		                :rules="email"
		                solo
		                class="input elevation-0 mt-1 mb-2"
		              />
		          </v-flex>
		          <v-flex xs6 offset-xs3>
		            <v-card-actions>
						      <v-btn large class="white--text" color="blue darken-1" @click.native="dialog = false">RESET PASSWORD</v-btn>			
						    </v-card-actions>
		          </v-flex>
		          <v-flex xs8 offset-xs2>
	      	      <v-card-title>
						      <span class="text-center caption grey--text">Don't have an account yet? <a href="#" flat small style="text-decoration: none" class="grey--text text--darken-3"><strong>Sign Up</strong></a></span>
						      <span class="caption grey--text">Already have an account? <a href="#" flat small style="text-decoration: none" class="grey--text text--darken-3"><strong>Sign In</strong></a></span>
						    </v-card-title>
	      	    </v-flex>
			      </v-layout>
			    </v-container>
			  </v-card>
			</v-dialog>
	</v-card-text>
</template>

<script>
export default{
  data: () => ({
    dialog: false,
    email: [
      v => !!v || 'The email is required',
    ],
  }),
};
</script>