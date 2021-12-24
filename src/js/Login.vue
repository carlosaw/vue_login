<template>
	<div>
		<h2>Página de LOGIN</h2>
        
        <p class="error" v-if="errorMsg != ''">{{errorMsg}}</p>

        <label>
            E-mail:<br/>
            <input type="email" v-model="email" />
        </label>
        <label>
            Senha:<br/>
            <input type="password" v-model="pass" />
        </label>
        <button v-on:click="entrar">Entrar</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
            email:'',
            pass:'',
            errorMsg:''
		}
    },
    methods:{
        entrar:function() {
            
            fetch('https://alunos.b7web.com.br/apis/loginteste/users/login', {
                method:'POST',
                body:JSON.stringify({
                    email:this.email,
                    pass:this.pass
                })
            })
            .then(r=>r.json())
            .then(json=>{

                this.errorMsg = json.error;

                if(json.error == '' && json.jwt != '') {
                    localStorage.setItem('jwt', json.jwt);
                    this.$router.push({name:'home'});
                }
                
                localStorage.getItem

                console.log(json);
            });
        }
    }
}
</script>

<style>
    span {
        color: #0000FF;
    }
    label {
        display: block;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .error {
        color: #FF0000;
    }
</style>