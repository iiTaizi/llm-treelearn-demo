# llm-treelearn-demo 协作规范

## 项目定位
- 这是一个纯静态展示站点，用于复刻 TreeLearn 的 LLM 学习界面。
- 不实现真实笔记、AI、路由、登录、存储或后端功能。
- 允许重建文本以保证清晰度；截图资产只作为视觉来源、局部装饰和对照参考。

## 文件结构
- `index.html`：页面结构和可读文本。
- `styles.css`：全部视觉样式与响应式规则。
- `script.js`：唯一交互，点击打开子对话。
- `assets/`：本地图片资产，不引用外部或微信临时路径。
- `scripts/validate-static.mjs`：无依赖静态检查脚本。
- `.github/workflows/pages.yml`：确认后启用的 GitHub Pages Actions 部署流程。

## 实现约束
- 不引入构建工具、前端框架、包管理器或外部 CDN。
- 不添加密钥、Token、遥测、第三方脚本或表单提交。
- 不新增 CI/CD 配置，除非用户明确确认发布或部署配置变更。
- 视觉元素优先用 HTML/CSS 重建；需要引用截图时必须使用 `assets/` 内的本地文件。
- 页面允许模拟按钮、输入框和链接外观，但除“打开子对话”外不得添加其他交互。

## 修改顺序
1. 需要调整规范时先改本文件。
2. 再改页面、样式、脚本或资产。
3. 改后运行验证命令。

## 验证命令
- `node scripts/validate-static.mjs`
- 浏览器打开 `index.html`，检查默认态与点击打开子对话后的状态。

## 发布红线
- 创建 GitHub 仓库、`git push`、启用 GitHub Pages 前必须单独确认。
- 添加或修改 GitHub Actions workflow 前必须单独确认。
- 不做 `reset --hard`、强制推送、删除文件或修改 Git 历史。
