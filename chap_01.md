## 插值

#### 文本插值

```javascript
执行一次性插值
<span v-once>{{ counter }}</span>
```



#### 原始HTML插值

```java
data() {
    return {
        rawHtml: '<hr>'
    }
}
```

#### JavaScript 表达式

```javascript
{{ number + 1 }}
{{ isLogin? 'true' : 'false' }}
{{ message.split('').reverse().join('') }}
```

Vue 生命周期

```javascript
Vue.createApp({
    data() {
        return {
            message: '生命周期钩子'
        }
    },
    created() {
        // this 指向调用它的 Vue.js 实例
        console.log('message 是：' + this.message)      // "message" 是测试钩子函数
    }
}) 
```

