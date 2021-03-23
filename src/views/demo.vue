<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside :width="isCollapse?'64px':'200px'">
        <div class="cButton" @click="ifCollapse">|||</div>
        <el-menu
          :default-active="activePath"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#333744"
          text-color="#fff"
          active-text-color="#ffd04b"
          :unique-opened="true"
          :collapse="isCollapse"
          :collapse-transition="false"
          :router="true">
          <el-submenu :index="item.id" v-for="item in testDemo" :key="item.id">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.text}}</span>
            </template>
            <el-menu-item :index="'/'+subitem.path" v-for="subitem in item.children" :key="subitem.id" @click="saveNavState('/'+subitem.path)">{{subitem.text}}</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  mounted () {
    this.$http.get('users', { data: this.activeIndex })
  },
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      isCollapse: false,
      activePath: '',
      testDemo: [
        {
          id: 1,
          text: '商品管理',
          children: [
            {
              text: '商品价格管理',
              id: 11,
              path: 'goods'
            },
            {
              text: '商品进出货管理',
              id: 12,
              path: 'outIn'
            }
          ]
        },
        {
          id: 2,
          text: '综合管理',
          children: [
            {
              text: '综合信息管理',
              id: 21,
              path: 'all'
            },
            {
              text: '考评管理',
              id: 22,
              path: 'test'
            }
          ]
        },
        {
          id: 3,
          text: '个人信息',
          children: [{
            text: '个人信息',
            id: 31,
            path: 'information'
          }]
        }
      ]
    }
  },
  created () {
    this.activePath = window.sessionStorage.getItem('activepath')
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    demo () {
      this.$http.post('/demo', { hello: 'hello' })
    },
    ifCollapse () {
      this.isCollapse = !this.isCollapse
    },
    saveNavState (activepath) {
      console.log(activepath)
      window.sessionStorage.setItem('activepath', activepath)
    }
  }

}
</script>

<style scoped>
  .el-container {
    width: 100%;
    height: 100%;
  }
  .el-header {
    background-color: #303133;
  }
  .el-aside {
    background-color: #333744;
  }
  .cButton {
    width: 100%;
    height: 20px;
    text-align: center;
    background-color: #606266;
    font-size: 10px;
  }
  .el-menu {
    border-right: 0;
  }
</style>
