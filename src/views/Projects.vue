<template>
  <div class="members">
    <div class="index-small">
      <span class="index-topic">프로젝트</span>
      <span class="index-desc">저희 코딩팀이 제작한 프로젝트입니다.</span>
    </div>
  </div>
  <div class="introduce bg-1 cr-0">
    <div class="container">
        <div class="card-columns">
            <!-- 경고! <br>&nbsp; 등의 문구는 사용 금지 (사용시 css 깨짐) -->
            <div class="card bot-card">
                <div class="card-body"><img class="bot-card-img" src="/static/assets/img/projects/mgbot.png" alt="미니게임"><span class="card-title bot-card-title">미니게임봇</span>
                    <p class="card-text bot-card-text">다양한 미니게임 기능을 제공하는 봇입니다.</p>
                    <hr class="rounded bot-dividers">
                    <div class="btn-group" role="group" aria-label="Basic example">
                      <a href="javascript:alert('아직 작업 중입니다.');" class="btn btn-info">Website</a>
                      <a href="javascript:alert('아직 작업 중입니다.');" class="btn btn-info">초대하기</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
  .card.bot-card {
    text-align: center;
  }
</style>
