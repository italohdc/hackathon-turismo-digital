<template>
  <div id="app">
    <div class="aligner">
      <div class="blank-align"></div>
      <div class="box full-height is-vcentered">
        <transition name="fade">
          <router-view/>
        </transition>
      </div>
      <div class="blank-align"></div>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;

  width: 100%;
  min-height: 100vh;

  padding: 25px;
  background-color: #eeeeee;
}
</style>

<style lang="scss" scoped>
.full-height {
  height: 100%;
}

.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}
</style>
