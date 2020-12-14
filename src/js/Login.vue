<template>
	<div>
		<h2>Página de LOGIN</h2>

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
            pass:''
		}
    },
    methods:{
        entrar:function() {
            alert("Clicou! "+this.email);
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
</style>