# 响应性与组合API

## 响应性

## 为什么使用组合API

## setup 选项

## 提供/注入

## 模板引用

## 响应式计算与侦听

#### 响应式计算

```html
    <!-- 返回一个默认不可手动修改的 ref 对象 -->
    <script src="../js/vue.global.js"></script>
    <script>
        const count = Vue.ref(1)
        const plusOne = Vue.computed(() => count.value + 2)
        // -> 打印出 3
        console.log(plusOne.value)
        // 错误
        plusOne.value++
    </script>

	<!-- 返回一个可手动修改的 ref 对象  -->
    <script src="../js/vue.global.js"></script>
    <script>
        const count = Vue.ref(0)
        const plusOne = Vue.computed({
            get: () => count.value + 1,
            set: (val) => {
                count.value = val - 1
            }
        })
        plusOne.value = 5
        // -> 打印出 4
        console.log(count.value)
    </script>
```



#### 响应式侦听

```html
    <!-- 响应性侦听方法 watchEffect 的使用 -->
    <script src="../js/vue.global.js"></script>
    <script>
        const count = Vue.ref(0)
        // -> 打印出 0
        Vue.watchEffect(() => console.log(count.value))
        setTimeout(() => {
            // -> 打印出 1
            count.value++
        }, 1000)
    </script>
```

