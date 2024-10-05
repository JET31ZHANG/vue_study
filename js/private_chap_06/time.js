/*
*  为统一使用时间戳进行逻辑判断，在编写指令 v-time 前事先编写一系列与时间相关的函数，
*  将这些函数封装在 Time 对象中 
*/ 

const Time = {
    // 获得当前时间戳
    getUnix: function() {
        let date = new Date()
        return date.getTime()
    },
    // 获得今天 0 点 0 分 0 秒的时间戳
    getTodayUnix: function() {
        let date = new Date()
        date.setHours(0)
        date.setMinutes(0)
        date.setSeconds(0)
        date.setMilliseconds(0)
        return date.getTime()
    },
    // 获取标准年月日
    getNormalDate: function(time) {
        let date = new Date(time)
        let month = date.getMonth() + 1
        let monthFormate = month < 10 ? ('0' + month) : month
        let day = date.getDate() < 10 ? ('0' + date.getDate()) : date.getDate()
        return date.getFullYear() + '-' + monthFormate + '-' + day
    },
    // 自定义指令需要调用的函数，参数为毫秒级时间戳
    getFormatTime: function(timeStamp) {
        let now = this.getUnix()                                    // 获得当前时间数
        let today = this.getTodayUnix()                             // 获得今天 0 点 0 分 0 秒的时间戳
        let timer = (now - timeStamp) / 1000                        // 转换为秒级时间
        let timeFormat =''
        if(timer <= 0)
            timeFormat = '刚刚'
        else if(Math.floor(timer / 60) <= 0)                        // 一分钟以前刚刚显示
            timeFormat = '刚刚' 
        else if(timer < 3600)                                       // 一分钟至一小时显示 XX 分钟前
            timeFormat = Math.floor(timer / 60) + '分钟前'
        else if(timer >= 3600 && (timeStamp - today) >= 0)          // 一小时至一天显示 XX 小时前
            timeFormat = Math.floor(timer / 3600) + '小时前'
        else if(timer / 86400 <= 31)                                // 一天至一个月显示 XX 天前
            timeFormat = Math.ceil(timer / 86400) + '天前'
        else                                                        // 大于一个月显示 XX 年 XX 月 XX 日
            timeFormat = this.getNormalDate(timeStamp)
        return timeFormat
    } 
}