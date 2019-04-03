<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
$color-primary: #a1c4fd;
$color-secondary: #c2e9fb;
$color-tertiary: #7c9ad2;
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background: #a1c4fd; /* fallback for old browsers */
  background: -webkit-linear-gradient(center, $color-primary, $color-secondary);
  background: -moz-linear-gradient(center, $color-primary, $color-secondary);
  background: -o-linear-gradient(center, $color-primary, $color-secondary);
  background: linear-gradient(to left, $color-primary, $color-secondary);
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
