# llm-treelearn-demo

TreeLearn 静态界面复刻，用于展示 `LLM 的整体结构` 与 `Attention Head` 子对话。

## 特点
- 纯静态 HTML/CSS/JS，无构建依赖。
- 正文和对话文本采用 DOM 重建，保证清晰度。
- 截图源文件保存在 `assets/`，用于局部装饰与视觉对照。
- 唯一交互：点击浮层里的“打开子对话”，切换到右侧完整子对话面板。

## 本地查看
直接用浏览器打开 `index.html`。

## 验证
```bash
node scripts/validate-static.mjs
```

## GitHub Pages
计划部署地址：

```text
https://iitaizi.github.io/llm-treelearn-demo/
```
