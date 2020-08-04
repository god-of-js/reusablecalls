<template>
  <div class="body">
    <div class="flex">
      <div class="profile">
        <div class="pic">
          <span>
            <i class="fas fa-camera cam"></i>
          </span>
        </div>
        <span class="useremail">
          <b>{{ userEmail() }}</b>
        </span>
        <br />
        <div class="useremails">
          Want to tell your story?
          <i class="fas fa-pencil-alt"></i>
        </div>
        <div class="public">Preview in public mode</div>
        <hr />
        <div class="i">
          <i class="fas fa-street-view"></i>
          From {{ }}
        </div>
        <div class="i">
          <i class="fas fa-user-circle"></i>
          Member since {{ }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["username"],
  components: {},
  methods: {
    userDetails() {
      return this.$store.state.currentUser.email[0].toUpperCase();
    },
    userEmail() {
      return this.$store.state.currentUser.email;
    }
  },
  computed: {}
};
</script>
<style scoped>
.body {
  margin-top: 5px;
  margin-right: -30%;
}
.flex {
  display: flex;
}
.profile {
  background-color: white;
  width: 350px;
  height: 400px;
  margin-top: 30px;
  margin-left: 50px;
  justify-content: center;
}
.pic {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: gainsboro;
  font-weight: 150;
  font-size: 25px;
  margin-top: 20px;
  margin-left: 120px;
  text-align: center;
  margin-bottom: 20px;
}
.cam {
  margin-top: 50px;
}
.useremail {
  margin-left: 60px;
  margin-top: 20px;
  font-size: 20px;
  margin-bottom: 10px;
}
.useremails {
  margin-left: 90px;
  margin-top: 10px;
  margin-bottom: 20px;
  color: grey;
}

.public {
  border: solid;
  border-color: whitesmoke;
  width: 230px;
  margin-left: 30px;
  padding-left: 30px;
  text-align: center;
  padding-right: 30px;
  padding-top: 6px;
  color: grey;
  padding-bottom: 6px;
}
hr {
  margin: 26px;
  color: whitesmoke;
}
.i {
  margin-left: 8%;
  justify-content: space-between;
}
</style>