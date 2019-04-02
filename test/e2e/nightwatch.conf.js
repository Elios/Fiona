require('babel-register')
const config = require('../../config')
const phantomjs = require('phantomjs-prebuilt')

// http://nightwatchjs.org/gettingstarted#settings-file
module.exports = {
  // 测试文件存放目录
  src_folders: ['test/e2e/specs'],
  // JUnit XML 测试报表的存放目录
  output_folder: 'test/e2e/reports',
  // 自定义断言文件存放目录
  custom_assertions_path: ['test/e2e/custom-assertions'],
  // custom_commands_path 自定义命令文件存放目录
  // page_objects_path 页面对象文件存放目录
  // globals_path 全局模块配置文件目录

  // Selenium服务器的运行配置项
  selenium: {
    // 配置是否自动管理Selenium进程
    start_process: true,
    // start_sesssion 配置是否自动启用Selenium会话。当不需要与Selenium进行交互时可设置为false

    // 指定Selenium jar运行文件目录
    server_path: require('selenium-server').path,
    host: '127.0.0.1',
    // Selenium服务器启动时占用的端口
    port: 4444,
    // 命令行参数列表
    cli_args: {
      // webdriver.firefox.profile: Selenium 默认为每个会话创建一个独立的Firefox配置方案

      // webdriver.chrome.driver: NightWatch 可以使用Chrome加载测试，要先下载ChromeDriver的二进制运行库对此进行支持。
      // 此配置项用于指定ChromeDriver的安装位置。还需再test_settings配置内使用desiredCapabilities对象为Chrome建立配置方案。
      'webdriver.chrome.driver': require('chromedriver').path

      // webdriver.ie.driver: Nightwatch也支持IE，其作用与用法和Chrome相同
    }
  },

  // 测试配置
  // 将用于所有的测试实例，在E2E测试中可通过Nightwatch提供的默认实例对象browser获取这些配置值
  test_settings: {
    // default应用于所有环境，其他的配置会覆盖与default相同的配置
    default: {
      // 配置正在接受连接的Selenium服务器侦听的端口
      selenium_port: 4444,
      // 配置正在接受连接的Selenium服务器主机地址
      selenium_host: 'localhost',
      // 是否显示扩展的Selenium命令日志
      silent: true,
      // 启动测试的url。可从测试的browser.launchUrl中获取
      launch_url: 'http://localhost:' + (process.env.PORT || config.dev.port),
      // 配置测试环境使用的全局变量或全局配置项
      globals: {}
    },

    dev: {
      // 用于描述浏览器的相关参数并传递至Selenium WebDriver，Selenium将会在新的会话内启用此配置所指定的浏览器
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },

    production: {
      launch_url: '',
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },

    phantom: {
      desiredCapabilities: {
        browserName: 'phantomjs',
        javascriptEnabled: true,
        acceptSslCerts: true,
        'phantomjs.page.settings.userAgent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5)  AppleWebKit/537.36 ' +
          '(KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36',
        'phantomjs.binary.path': phantomjs.path
      }
    }
  }
}
