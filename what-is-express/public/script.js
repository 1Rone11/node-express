/*
 * @Author: Zkiki
 * @Date: 2023-07-03 09:40:47
 * @LastEditTime: 2023-07-03 17:57:25
 * @LastEditors: Please set LastEditors
 * @FilePath: \official-meeting-web\script.js
 * @Description: 
 */
/**
 * 1. yarn 安装依赖
 * 2. 传参运行 script.js
 * 2.1 init 下载 node_modules
 * 2.2 dev 启动开发环境
 * 2.3 prod 生产部署
 */
const { program } = require('commander');
const shell = require('shelljs');
const { fork } = require('child_process');
const path = require('path');
/**
 * 初始化下载 npm 依赖
 */
function init() {
    const baseDir = process.cwd();
    shell.cd(baseDir);
    shell.cd('src-server');
    shell.exec('yarn install --verbose')
    shell.cd(baseDir);
    shell.cd('src-web');
    shell.exec('yarn install --verbose')
}

/**
 * 开发环境
 */
function dev() {
    fork(path.join('child', 'dev-web.js'))
    fork(path.join('child', 'dev-server.js'))
}
function clean() {
    shell.rm('-rf', 'dist/')
}
/**
 * 打包部署生产环境
 */
function prod() {
    clean()
    fork(path.join('child', 'prod-web.js'))
    fork(path.join('child', 'prod-server.js'))
}

/**
 * 发布到生产环境
 */
function publish() {
    fork(path.join('child', 'publish.js'))
}

program.command('init').description('初始化下载npm依赖').action(init)
program.command('dev').description('构建dev环境').action(dev)
program.command('prod').description('构建prod生产环境').action(prod)
program.command('clean').description('清除构建代码').action(clean)
program.command('publish').description('发布构建代码').action(publish)

program.parse();