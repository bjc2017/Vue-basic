1、MVVM 框架的三要素：响应式、模板引擎及其渲染
a、响应式：vue 如何监控数据变化？
b、模板：vue 模板如何编写和解析？
c、渲染：vue 如何将模板转换成 html？

2、计算属性 vs 监听器
监听器更通用，理论上计算属性能实现的侦听器也能实现
处理数据的场景不同，监听器适合一个数据影响多个数据，计算属性适合一个数据受多个数据影响
计算属性有缓存性，计算所得的值如果没有变化不会重复执行
监听器适合执行异步操作或较大开销操作的情况

3、生命周期钩子
三个阶段：初始化、更新、销毁
初始化：beforeCreate、created、beforeMount、mounted
更新：beforeUpdate、updated
销毁：beforeDestroy、destroyed

使用场景
{
beforeCreate(){} // 执行时组件实例还未创建，通常用于插件开发中执行一些初始化任务
  created(){} // 组件初始化完毕，各种数据可以使用，常用于异步数据获取
  beforeMount(){} // 未执行渲染、更新，dom 未创建
  mounted(){} // 初始化结束，dom 已创建，可用于获取访问数据和 dom 元素
  beforeUpdate(){} // 更新前，可用于获取更新前各种状态
  updated(){} // 更新后，所有状态已是最新
  beforeDestroy(){} // 销毁前，可用于一些定时器或订阅的取消
  destroyed(){} // 组件已销毁，作用同上
}

Vue 组件化的理解
组件化是 Vue 的精髓，Vue 应用就是由一个个组件构成的。Vue 的组件化涉及到的内容非常多，当面试时
被问到：谈一下你对 Vue 组件化的理解。这时候有可能无从下手，可以从以下几点进行阐述：
定义：组件是可复用的 Vue 实例，准确讲它们是 VueComponent 的实例，继承自 Vue。
优点：从上面案例可以看出组件化可以增加代码的复用性、可维护性和可测试性。
使用场景：什么时候使用组件？以下分类可作为参考：
通用组件：实现最基本的功能，具有通用性、复用性，例如按钮组件、输入框组件、布局组件等。
业务组件：它们完成具体业务，具有一定的复用性，例如登录组件、轮播图组件。
页面组件：组织应用各部分独立内容，需要时在不同页面组件间切换，例如列表页、详情页组件
如何使用组件
定义：Vue.component()，components 选项，sfc
分类：有状态组件，functional，abstract
通信：props，$emit()/$on()，provide/inject，$children/$parent/$root/$attrs/\$listeners
内容分发：<slot>，<template>，v-slot
使用及优化：is，keep-alive，异步组件
组件的本质
vue 中的组件经历如下过程
组件配置 => VueComponent 实例 => render() => Virtual DOM=> DOM
所以组件的本质是产生虚拟 DOM
