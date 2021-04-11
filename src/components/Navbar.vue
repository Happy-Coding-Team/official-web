<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark navbar-setting">
        <div class="container"><router-link class="navbar-brand" to="/"><img class="logo" alt="logo" src="/logo630.png" height="30px" /><span class="navbar-main">즐거운 코딩팀</span></router-link><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon" /></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item"><router-link exact class="nav-link" to="/">홈 <span class="sr-only">(current)</span></router-link></li>
                <li class="nav-item"><router-link class="nav-link" to="/members">팀원 소개 <span class="sr-only">(current)</span></router-link></li>
                <!-- <li class="nav-item"><router-link class="nav-link" to="#">프로젝트 이름 <span class="sr-only">(current)</span></a></li> -->
                <!-- <li class="nav-item"><router-link class="nav-link" to="#">프로젝트 이름 <span class="sr-only">(current)</span></a></li> -->
                <!-- <li class="nav-item"><router-link class="nav-link" to="#">프로젝트 이름 <span class="sr-only">(current)</span></a></li> -->
                <!-- <li class="nav-item"><router-link class="nav-link" to="#">프로젝트 이름 <span class="sr-only">(current)</span></a></li> -->
                <li class="nav-item"><router-link class="nav-link" to="/forum">포럼 <span class="sr-only">(current)</span></router-link></li>
                <li class="nav-item"><router-link class="nav-link" to="/career">팀원모집 <span class="sr-only">(current)</span></router-link></li>
            </ul>
            </div>
        </div>
      </nav>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
