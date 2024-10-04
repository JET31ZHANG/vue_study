# 内置指令

## v-bind

#### 指令用法

#### 绑定class

#### 绑定style

## 条件渲染指令

#### v-if

#### v-show

## 列表渲染指令

#### 基本用法

```html
    <!-- 遍历普通数组 -->
    <ul>
        <li v-for="(item, index) in items">
            {{index}} - {{ item }}
        </li>
    </ul>

    <!-- 遍历对象数组 -->
    <ul>
        <li v-for="user in users">
            {{ user.uname }}
        </li>
    </ul>

    <!-- 遍历对象属性 -->
    <li v-for="(value, key, index) in myObject">
        {{ ++index }}.{{ key }}: {{ value }}
    </li>

    <!-- 迭代数字 -->
    <li v-for="i in 100">
        {{ i }}
    </li>
```




#### 数组更新

#### 过滤与排序

## 事件处理

#### v-on 监听

#### $event 访问原生DOM

#### 修饰符

## 表单与v-model

#### 基本用法

#### 修饰符

## 购物车实例
