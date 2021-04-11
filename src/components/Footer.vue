<template>
  <div>
      <div class="footer">
          <div class="container">
              <div class="footer-grid">
                  <div class="footer-desc">
                      <h4 class="footer-topic">
                          즐거운 코딩팀
                      </h4>
                      대표: _HALEY#2265<br />
                      Copyright 2021 HALEY, All rights reserved.
                  </div>
                  <div class="footer-desc">
                      <span class="footer-box">
                          <i alt="discord" class="fab fa-discord" height="20px" />
                          <router-link to="/forum" class="footer-link">
                              즐거운 코딩팀 공식 포럼
                          </router-link>
                      </span>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
