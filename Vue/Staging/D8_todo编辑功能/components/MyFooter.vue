<template>
  <div class="todo-footer" v-if="todos.length">
    <label>
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
          <span>已完成{{ DoneTotal }}</span> / 全部{{ Total }}
        </span>
    <button class="btn btn-danger" @click="ChangeDone">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: ["todos"],
  computed: {
    //todo的总数
    Total() {
      return this.todos.length
    },
    //todo完成的总数
    DoneTotal() {
      return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
    },
    //全选
    isAll: {
      get() {
        return this.Total === this.DoneTotal
      },
      set(value) {
        this.$emit("changeAll",value)
      }
    }
  },
  methods:{
    //删除已完成的任务
    ChangeDone(){
      //判断是否有已完成的todo
      if(this.DoneTotal){
        if (confirm("确定要清除已完成的任务吗?")) this.$emit("ClearDone")
      }else {
        alert("没有已完成的任务哦!")
      }
    }
  }
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>