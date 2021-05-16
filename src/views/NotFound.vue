<template>
  <div>
      <div class="index-full">
          <span class="index-topic">앗, 이런!</span>
          <span class="index-desc">이 웹페이지를 표시하는 도중 문제가 발생했습니다.<br>
페이지를 새로고침하거나 홈으로 이동하세요.</span>
          <router-link class="index-button" to="/">홈으로</router-link>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import from '@/components/.vue'

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style>
</style>
