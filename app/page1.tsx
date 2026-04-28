// 使用 use client 指令启用客户端渲染
// 在NEXTjS里面,所有的的组件都是服务端组件,它运行在服务器上,不能处理点击事件等交互逻辑
// 如果需要使用这些功能,就需要在组件文件的顶部添加 "use client" 指令,告诉Next.js这个组件需要在客户端渲染,这样就可以使用React的状态管理和事件处理功能了
"use client";

import { useState } from "react";

export default function Home() {
  // 定义一个状态变量 count 和一个更新函数 setCount，初始值为0
  const [count, setCount] = useState(0);

  return (
    <div>
       <h1 className="text-2xl font-bold mb-4">欢迎来到 AI编程之家学习网站</h1>
       <p className="mb-4">这里涵盖了相关AI编程的教学资源和实战案例</p>

       {/* 构建点击事件的按钮 点击按钮时，调用 setCount 函数将 count 的值加1，从而更新页面显示的点击次数*/}
      <button onClick={() => setCount(count + 1)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        点击我！当前点击次数：{count}  
      </button>
    </div>

  )
}