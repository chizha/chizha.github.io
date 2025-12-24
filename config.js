// config.js - 配置文件
// 注意：这个文件包含敏感信息，请不要公开分享

const CONFIG = {
    // 店员后台访问密码
    STAFF_PASSWORD: "123456yE-",  // 请修改为您的密码
    
    // vika维格表配置
    VIKA_CONFIG: {
        datasheetId: 'dstdZLRwtDlCi4AyKa',
        apiToken: 'uskLW8N76RCrShK1OZUpPEP',
        viewId: 'viwUP6lh3f5q2'
    },
    
    // 制作参数
    PRODUCTION_CONFIG: {
        avgMinutesPerBox: 8.5,  // 平均每盒制作时间（分钟）
        machines: 3,            // 制作机器数量
        avgMinutesPerOrder: 2   // 每单基础准备时间（分钟）
    },
    
    // 产品价格
    PRODUCT_PRICES: {
        original: 12,  // 原味蛋卷
        seaweed: 12,   // 紫菜肉松卷
        coconut: 12    // 椰蓉椰丝卷
    },
    
    // 应用设置
    APP_SETTINGS: {
        autoRefreshInterval: 60000,  // 自动刷新间隔（毫秒）
        todayOnly: true              // 是否只显示当天订单
    }
};