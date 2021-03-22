<template>
  <div id="demo">
    <transition-group tag="div" class="img-slider" name="slide">
      <div v-for="number in [currentImg]" v-bind:key="number">
        <img :src="imgList[Math.abs(currentImg) % imgList.length]" />
      </div>
    </transition-group>
    <h1>test</h1>
    <h1>test</h1>
    <h1>test</h1>
    <h1>test</h1>
    <h1>test</h1>
    <h1>test</h1>
    <h1>test</h1>
    <h1>test</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        "https://c4.wallpaperflare.com/wallpaper/157/340/999/car-sports-car-supercar-lamborghini-aventador-wallpaper-preview.jpg",
        "https://c4.wallpaperflare.com/wallpaper/323/372/925/lamborghini-car-lamborghini-aventador-vehicle-wallpaper-preview.jpg",
        "https://c4.wallpaperflare.com/wallpaper/763/507/696/nissan-nissan-skyline-car-skyline-wallpaper-preview.jpg"
      ],
      currentImg: 0,
    };
  },
  mounted() {
    setInterval(() => {
        this.currentImg = this.currentImg + 1;
    }, 5000);
  }
};
</script>

<style>
#demo {
  overflow: hidden;
}

.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}

.img-slider {
  overflow: hidden;
  position: relative;
  height: 350px;
  width: 100%;
  margin: 0 auto;
}

img {
  width: 100%;
  object-fit: cover;
}

.img-slider img {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>