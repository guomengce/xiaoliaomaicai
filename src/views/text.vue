<template>
  <div>
    <!-- <div>{{count}},是{{countType}}</div>
    <button @click="increment">+</button>
    <button @click="IncrementIfOdd">偶数+</button>-->
    <!-- _________________________________________________________ -->

    <!-- todoList -->
    <div class="todo-header">
      <input type="text" placeholder="请输入今天的任务清单，按回车键确认" v-model="text" />
      <van-button size="mini" type="danger" @click="addTodo">添加</van-button>
    </div>
    <ul class="todo-main">
      <li
        :style="{backgroundColor: item.checked?'#ddd':'#fff'}"
        v-for="(item,index) in list"
        :key="item.id"
      >
        <label>
          <input type="checkbox" v-model="item.checked" />
          <span style="padding-left:10px;">{{item.text}}</span>
        </label>
        <van-button plain hairline size="mini" type="danger" @click="delList(index)">删除</van-button>
      </li>
    </ul>

    <div class="todo-footer">
      <div>
        <label>
          <input slot="isCheck" type="checkbox" v-model="selectedAllOrNot" />
        </label>
        <span>
          <span style="padding-left:0.5rem;" slot="finish">已完成{{finishedCount}}件 / 总计{{todosCount}}件</span>
        </span>
      </div>
      <van-button plain hairline size="mini" type="danger" @click="delFinishedTodos">清除已完成任务</van-button>
    </div>

    <!-- <button @click="saveTodolist">save</button> -->
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
// import list from '@/note.js'
export default {
  data () {
    return {
      list: [{
        id: 0,
        text: 'dsvavd',
        checked: true
      },
      {
        id: 1,
        text: 'fdb',
        checked: true
      },
      {
        id: 2,
        text: 'b',
        checked: true
      },
      {
        id: 3,
        text: 'r',
        checked: true
      },
      {
        id: 4,
        text: 'g',
        checked: true
      },
      {
        id: 5,
        text: 'w',
        checked: true
      }],

      testObj: {


      },
      // header
      text: "",
      btnIsShow: false,

      // footer
      selectedAllOrNot: "",

    };
  },

  components: {},

  computed: {
    ...mapState(['count', 'todos']),
    ...mapGetters(['countType', 'todosCount', 'finishedCount']),
    // bgColor(){

    // }
    // count () {
    //   return this.$store.state.count
    // },
    // type () {
    //   return this.$store.getters.countType
    // }
  },
  created () {
    // console.log(this.list);
  },

  methods: {
    saveTodolist () {
      sessionStorage.setItem('list', JSON.stringify(this.list))
    },
    /**简洁调用*/
    // ...mapMutations(['increment']),
    // ...mapActions(['actionIncrement', 'IncrementIfOdd']),
    /**普通调用*/
    // increment () {
    //   // this.$store.commit('increment');//mutations調用
    //   // this.$store.dispatch('actionIncrement');//actions調用
    // },
    // IncrementIfOdd () {
    //   // this.$store.dispatch('IncrementIfOdd')
    // }
    /****************************************************/
    // 请求数据
    // ...mapActions(['addTodo', 'delTodo', 'selectedAllTodo', 'delFinishedTodos']),
    dealShow (isShow) {
      this.btnIsShow = isShow;
    },
    addTodo () {
      const text = this.text.trim();
      let todo = { text, checked: false };
      this.$store.dispatch('addTodo', todo);
      this.text = '';
    },
    delFinishedTodos () {
      this.$store.dispatch('delFinishedTodos');
    },
    delList (index) {
      this.$store.dispatch('delTodo', index)
    }
  }
}

</script>
<style scoped>
/* header */
.todo-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.51rem;
}
.todo-header input {
  width: calc(100% - 80px);
  height: 28px;
  margin: 10px;
  box-sizing: border-box;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
  outline: none;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(255, 0, 0, 0.8);
  box-shadow: inset 0 1px 1px rgba(255, 0, 0, 0.075),
    0 0 8px rgba(255, 0, 0, 0.6);
}

/* list */
.todo-main {
  margin-left: 0;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0;
}
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  height: 3rem;
  line-height: 3rem;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  padding: 4px 10px;
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

.todo-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
}
</style>