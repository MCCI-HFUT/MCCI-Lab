# MCCI Lab 实验室主页：成员资料更新指南

成员资料位于 `_members/`；头像放在 `images/members/`。

## 更新已有成员的信息

1. 用自己的 GitHub 账号登录，打开 `_members/` 找到自己的 `.md` 文件。
2. 点击文件右上角的编辑图标，修改 YAML 字段和正文；不要修改其他同学的信息。
3. 将头像按文件名规则上传到 `images/members/`，建议 JPG、正方形、500×500 像素左右、尽量不超过 300 KB。
4. 在自己的 `.md` 文件 YAML 中填写 `image: /images/members/英文文件名.jpg`。
5. 提交到个人分支并发起 Pull Request，请网站管理员审核合并。若没有写权限，可先 Fork 仓库并从 Fork 发起 Pull Request。

## 新成员

复制 `_templates/member-profile.md` 到 `_members/英文名.md` 并填写；`role`、`cohort` 和 `member_order` 应参照同组已有成员。中文与英文网页目前共用仓库里的成员数据；不要擅自改变页面结构。

## 注意事项

- 所有个人照片、邮箱与个人链接应获得本人同意后再公开。
- 不上传证件、私人电话或其他敏感信息。
- 发起 Pull Request 不等于网页已经更新；需等管理员合并及网站部署完成。
- 普通 GitHub 仓库 Write 权限不能严格限制成员只能编辑自己的文件，建议保留管理员 PR 审核机制。
