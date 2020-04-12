<template>
  <main id="footer">
    <footer class="footer__container">
      <p>&copy; {{date}} All rights reserved. Built with &hearts; by Obinna Leo</p>
    </footer>
  </main>
</template>

<script>
export default {
  data(){
    return{
      date: new Date().getFullYear()
    }
  }
  
}
</script>

<style scoped>
#footer {
  width: 100vw;
}

#footer .footer__container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #D2A53E;
  margin-top: 40px;
}

#footer .footer__container p{
  font-size: 12px;
  color: #E2E8F0;
}

</style>