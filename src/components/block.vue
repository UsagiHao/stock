<template>
  <div>
    <el-table
      :data="test"
      style="width: 100%">
      <el-table-column
        label="板块id"
        width="250">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.id }}</span>
        </template>

      </el-table-column>
      <el-table-column
        label="板块"
        width="400">
        <template slot-scope="scope">
          <div style="margin-left: 10px"  @click="getBlockInfo(scope.$index, scope.row)">{{ scope.row.name }}</div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
    export default {
      name: "block",
      data(){
        return{
          blockForm:{
            id:'',
            name:'',
            beginPrice:'',
            endPrice:'',
            maxPrice:'',
            minPrice:'',
            tradingVolume: ''
          },
          test:[]
        }
      },

      created() {
        this.getBlocks();
      },

      methods: {
        getBlocks() {
          /*let username = localStorage.getItem("username")
          let http = new XMLHttpRequest();
          let path = 'http://localhost:8080/user/findUserByUsername?username=' + username
          http.open('GET', path, true)
          http.setRequestHeader('Content-type', 'application/json; charset=utf-8')
          http.send(null)
          http.onreadystatechange = function () {
            if (http.readyState === 4 && http.status === 200) {
              this.userForm = JSON.parse(http.responseText)
              console.log(http.responseText)
            }
          }.bind(this)*/
          this.$axios("https://my-json-server.typicode.com/usagihao/demo/posts")
            .then(res => {
              console.log(res);
              this.test = res.data
            })
            .catch(err => {
              console.log(err)
            });
        },

        getBlockInfo(index, row) {
          localStorage.setItem("blockId", row.id);
          console.log(localStorage.getItem("blockId"));
          this.$router.push({path:'/blockInfo'})
        }

      }
    }
</script>

<style scoped>

</style>
