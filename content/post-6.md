---
title: AI编程实战：用AI辅助开发一个简单的Python数据可视化工具
date: 2026-04-30
tags: ["AI", "Python", "数据可视化", "实战教程"]
---

## 一、实战准备：环境配置
### 1. 明确需求
开发一个Python数据可视化工具，实现以下功能：
- 读取Excel文件中的数据（包含日期、销售额）
- 生成柱状图（展示每日销售额）
- 生成折线图（展示销售额变化趋势）
- 保存图表到本地

### 2. 所需依赖库
借助AI提问：“开发Python数据可视化工具，读取Excel并生成柱状图、折线图，需要安装哪些依赖库？”
AI给出答案：需要安装pandas（读取Excel）、matplotlib（生成图表）、openpyxl（解析Excel文件）

### 3. 安装依赖库
打开终端，执行以下命令：
```bash
pip install pandas matplotlib openpyxl
```

## 二、AI辅助开发：分步实现功能
我们分3步实现，每一步都借助AI生成代码，再根据需求修改优化，高效又省力。

### 第一步：读取Excel数据
需求：读取Excel文件（sales.xlsx），获取日期和销售额数据，处理缺失值。
向AI提问：“用Python的pandas读取Excel文件（sales.xlsx），读取日期和销售额列，处理缺失值，给出代码。”

AI生成代码，我们修改优化后：
```python
import pandas as pd

# 读取Excel文件
def read_excel_data(file_path):
    # 读取Excel，指定日期列和销售额列
    df = pd.read_excel(file_path, usecols=["日期", "销售额"], engine="openpyxl")
    # 处理缺失值（删除包含缺失值的行）
    df = df.dropna()
    # 转换日期格式
    df["日期"] = pd.to_datetime(df["日期"])
    return df

# 测试读取数据
data = read_excel_data("sales.xlsx")
print("读取的数据：")
print(data.head())
```

### 第二步：生成柱状图和折线图
需求：根据读取的数据，生成柱状图（每日销售额）和折线图（销售额趋势），设置图表标题、坐标轴标签，调整样式。
向AI提问：“用matplotlib根据pandas读取的数据，生成柱状图和折线图，柱状图展示每日销售额，折线图展示趋势，设置标题、坐标轴标签，调整样式，给出代码。”

AI生成代码，我们整合优化后：
```python
import matplotlib.pyplot as plt

# 生成数据可视化图表
def generate_chart(data):
    # 设置中文字体（避免乱码）
    plt.rcParams['font.sans-serif'] = ['SimHei']
    plt.rcParams['axes.unicode_minus'] = False

    # 创建画布，设置大小
    fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(10, 8))

    # 1. 柱状图：每日销售额
    ax1.bar(data["日期"], data["销售额"], color="#1f77b4", alpha=0.8)
    ax1.set_title("每日销售额柱状图", fontsize=14, fontweight="bold")
    ax1.set_xlabel("日期", fontsize=12)
    ax1.set_ylabel("销售额（元）", fontsize=12)
    ax1.tick_params(axis="x", rotation=45)  # 日期标签旋转45度，避免重叠

    # 2. 折线图：销售额变化趋势
    ax2.plot(data["日期"], data["销售额"], color="#ff7f0e", linewidth=2, marker="o")
    ax2.set_title("销售额变化趋势折线图", fontsize=14, fontweight="bold")
    ax2.set_xlabel("日期", fontsize=12)
    ax2.set_ylabel("销售额（元）", fontsize=12)
    ax2.tick_params(axis="x", rotation=45)
    ax2.grid(True, alpha=0.3)  # 添加网格，便于查看

    # 调整子图间距
    plt.tight_layout()

    # 保存图表到本地
    plt.savefig("sales_chart.png", dpi=300, bbox_inches="tight")
    print("图表已保存到本地：sales_chart.png")
```

### 第三步：整合代码，完成完整工具
将读取Excel和生成图表的函数整合，添加主函数，实现一键运行：
```python
# 主函数：整合所有功能
def main():
    # 1. 读取Excel数据
    try:
        data = read_excel_data("sales.xlsx")
    except Exception as e:
        print(f"读取Excel失败：{e}")
        return

    # 2. 生成可视化图表
    generate_chart(data)
    print("数据可视化工具运行完成！")

# 运行主函数
if __name__ == "__main__":
    main()
```

## 三、AI辅助调试：解决常见问题
### 问题1：Excel文件读取失败
报错：FileNotFoundError: [Errno 2] No such file or directory: 'sales.xlsx'
向AI提问：“Python读取Excel报错FileNotFoundError，如何解决？”
AI给出解决方案：
1. 检查Excel文件路径是否正确（将sales.xlsx放在代码同一目录下）
2. 确认文件名拼写正确（区分大小写）

### 问题2：图表中文乱码
报错：图表中中文显示为乱码（方框）
向AI提问：“matplotlib生成图表中文乱码，如何解决？”
AI给出解决方案：添加中文字体设置（已在代码中添加）

## 图片插入（全部使用网络图片）
![Python数据可视化工具开发界面](https://picsum.photos/id/160/800/400)
![Python柱状图与折线图示例](https://picsum.photos/id/20/800/400)
![Excel数据读取与可视化流程](https://picsum.photos/id/42/800/400)

## 四、实战总结与拓展
### 总结
本次实战，我们借助AI辅助，快速完成了Python数据可视化工具的开发，全程无需手动编写复杂代码，重点掌握：
1. 如何向AI精准提问，获取有用的代码
2. 如何修改、优化AI生成的代码，适配自己的需求
3. 遇到问题时，用AI调试报错，高效解决问题

### 拓展方向（可借助AI继续开发）
1. 增加数据筛选功能（如筛选指定日期范围的销售额）
2. 生成更多图表类型（如饼图、直方图）
3. 添加GUI界面，让工具更易用
4. 支持读取CSV文件，扩大适用范围

> 提示：实战完成后，可将代码上传到GitHub，同时将生成的图表插入到博客中，记录自己的AI编程实战过程，逐步提升自己的实战能力。