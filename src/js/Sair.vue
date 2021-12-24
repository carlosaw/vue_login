<script>
export default {
  mounted:function(){
    localStorage.setItem('jwt', '');
    this.$router.push({name:'login'});
  }
}
</script>

<template>

</template>

<style>

</style>