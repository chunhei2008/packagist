# 介绍

packagist基于Hyperf构建的私有composer仓库服务

## 配置项目

```
# 修改 satis.json
{
  "name": "your-packagist-name",
  "homepage": "your-packagist-domain",
  "repositories": [
    {
      "type": "git",        // git方式
      "url": "https://gitlab.xxxxxxx.com/your-gitlab-group/your-component.git"   // 项目的git地址
    },
    {
      "type": "git",
      "url": "https://gitlab.xxxxxxx.com/your-gitlab-group/your-other-component.git"
    }
  ],
  "require": {
    "your-gitlab-group/your-component": "*",    // 组件以及组件的约束
    "your-gitlab-group/your-other-component": "*"
  }
}
```

## 更新命令

```bash
composer satis-build
```

## 配置

```
# 配置全局 your-composerrepository

# 阿里云镜像
composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/

# 伊智私有仓库
composer config -g repo.your-composer-repository composer https://your-composer-repository-domain/

# 查看是否配置成功

composer config -g --list 

看到下面两行表示配置成功

[repositories.your-packagist.org.type] composer
[repositories.your-packagist.org.url] https://your-composer-repository-domain/
[repositories.packagist.org.type] composer
[repositories.packagist.org.url] https://mirrors.aliyun.com/composer/


# 项目配置

"repositories": {
    "packagist": {
        "type": "composer",
        "url": "https://mirrors.aliyun.com/composer"
    },
    "your-packagist": {
        "type": "composer",
        "url": "https://your-composer-repository-domain"
    }
}

```

## 使用

```
# 一般仓库使用

composer require your-repository/your-component

```