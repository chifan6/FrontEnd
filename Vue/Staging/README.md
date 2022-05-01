###修改默认配置
- 使用vue inspect > output.js能显示webpack的配置
- 在vue.config.js中能修改webpack中的配置信息

###ref
- ref 被用来给元素或子组件注册引用信息。
- 引用信息将会注册在父组件的 $refs 对象上。

###props
- props 可以是数组或对象，用于接收来自父组件的数据。props 可以是简单的数组，或者使用对象作为替代，对象允许配置高级选项，如类型检测、自定义验证和设置默认值。
  - 当使用的是对象时：
    - type:生命接收的数据类型
    - default:当没有接收到数据时的默认值
    - required:参数是布尔值 定义该 prop 是否是必填项
  - 当使用的是数组时：
    - ["xxx","xxx","xxx"]

### mixins混合（混入）
- 混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。
- 在main.js中使用Vue.mixin()能让Vue管理的组件都有mixins.js的功能
- 在组件中使用需要在组件的mixins选项中配置一个数组: mixins:[xxx,xxx,xxx]

### 插件
- 插件通常用来为 Vue 添加全局功能
- 使用插件时需要在vm之前定义Vue.use(插件名称)
- plugin.js暴露一个对象,将需要添加的全局功能写在install(Vue){}方法中
  - 方法接收一个Vue构造函数   