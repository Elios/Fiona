<template>
    <Modal
            title="登录&注册"
            v-model="showLogin"
            :mask-closable="false">
        <Tabs v-model="loginOrLogon">
            <TabPane label="登录" name="login">
                <template>
                    <Form :model="formItems" :label-width="80" :rules="ruleValidate" ref="login">
                        <FormItem label-for="name" label="用户名" prop="uname">
                            <Input type="text" element-id="name" v-model="formItems.uname" placeholder="请输入用户名"
                                   clearable></Input>
                        </FormItem>
                        <FormItem label-for="loginpwd" label="密码" prop="pwd">
                            <Input type="password" element-id="loginpwd" v-model="formItems.pwd" placeholder="密码"
                                   clearable></Input>
                        </FormItem>
                    </Form>
                </template>
            </TabPane>
            <TabPane label="注册" name="logon">
                <template>
                    <Form :model="formItems" :label-width="80" :rules="ruleValidate" ref="logon">
                        <FormItem lable-for="uname" label="用户名" prop="uname">
                            <Input type="text" element-id="uname" placeholder="请输入用户名" v-model="formItems.uname"
                                   clearable></Input>
                        </FormItem>
                        <FormItem label-for="logonpwd" label="密码" prop="pwd">
                            <Input type="password" element-id="logonpwd" placeholder="请输入密码" v-model="formItems.pwd"
                                   clearable></Input>
                        </FormItem>
                        <FormItem label="性别" prop="gender">
                            <RadioGroup v-model="formItems.gender">
                                <Radio label="male">男</Radio>
                                <Radio label="female">女</Radio>
                            </RadioGroup>
                        </FormItem>
                        <FormItem label-for="email" label="邮箱" prop="email">
                            <Input type="email" element-id="email" placeholder="请输入邮箱" v-model="formItems.email"
                                   clearable></Input>
                        </FormItem>
                        <FormItem label-for="phone" label="电话" prop="phone">
                            <Input type="text" element-id="phone" placeholder="请输入电话号码" v-model="formItems.phone"
                                   clearable></Input>
                        </FormItem>
                        <!--<FormItem label="上传头像">-->
                        <!--<template v-if="show">-->
                        <!--<div>-->
                        <!--<img :src="formItems.avatar">-->
                        <!--<div class="upload-img-cover">-->
                        <!--<Icon type="ios-trash-outline" @click.native="removeAvatar"></Icon>-->
                        <!--</div>-->
                        <!--</div>-->
                        <!--</template>-->
                        <!--<template v-else>-->
                        <!--<Upload-->
                        <!--ref="avatar"-->
                        <!--:format="['jpg','png','jpeg']"-->
                        <!--accept="image/png,img/jpg,img/jpeg"-->
                        <!--:max-size="2048"-->
                        <!--action="/logon"-->
                        <!--:on-success="handleUploadSuccess"-->
                        <!--:on-error="handleUploadError"-->
                        <!--:on-format-error="handleFormatError"-->
                        <!--:on-exceeded-size="handleExceededSize"-->
                        <!--style="display: inline-block;width:58px;"-->
                        <!--type="drag"-->
                        <!--&gt;-->
                        <!--<div style="width:58px;height: 58px;">-->
                        <!--<Icon type="ios-camera" size="20"></Icon>-->
                        <!--</div>-->
                        <!--</Upload>-->
                        <!--</template>-->
                        <!--</FormItem>-->
                    </Form>
                </template>
            </TabPane>
        </Tabs>
        <div slot="footer">
            <Button type="primary" @click.prevent="login" v-if="loginOrLogon === 'login'"
                    :loading="modal_loading">登录
            </Button>
            <Button type="primary" @click.prevent="logon" v-else :loading="modal_loading">注册</Button>
            <Button @click.prevent="reset(loginOrLogon)">重置</Button>
        </div>
    </Modal>
</template>

<script>
export default {
  name: 'LoginNLogon',
  data () {
    const validatePhone = (rule, value, callback) => {
      const reg = new RegExp(/^1\d{10}$/)
      if (value === '') {
        callback(new Error('电话号码不能为空'))
      } else if (!reg.test(value)) {
        callback(new Error('电话号码格式错误'))
      }
      callback()
    }
    return {
      show: false,
      showLogin: false,
      loginOrLogon: 'login',
      modal_loading: false,
      formItems: {
        uname: '',
        pwd: '',
        gender: '',
        email: '',
        phone: ''
      },
      ruleValidate: {
        uname: [
          {
            required: true,
            message: '用户名不能为空',
            trigger: 'blur'
          }
        ],
        pwd: [
          {
            required: true,
            message: '密码不能为空',
            trigger: 'blur'
          }
        ],
        email: [
          {
            required: true,
            message: '邮箱不能为空',
            trigger: 'blur'
          },
          {
            type: 'email',
            message: '邮箱格式错误',
            trigger: 'blur'
          }
        ],
        phone: [
          {
            required: true,
            validator: validatePhone,
            trigger: 'blur'
          }
        ],
        gender: [
          {
            required: true,
            message: '请选择性别'
          }
        ]
      }

    }
  },
  methods: {
    login () {
      let that = this
      this.$refs['login'].validate((valid) => {
        if (valid) {
          this.modal_loading = true
          this.$axios({
            method: 'post',
            url: '/api/login',
            data: this.formItems
          }).then(() => {
            that.$Message.info('登录成功')
            that.$store.commit('user/SET_UNAME', that.formItems.uname)
            that.showLogin = false
          }).catch(() => {
            that.$Message.error('登录失败，请确认用户名和密码是否正确或稍后再试。')
          }).finally(() => {
            that.modal_loading = false
          })
        } else {
          this.$Message.error('请确认输入的信息是否正确')
        }
      })
    },
    reset (name) {
      this.$refs[name].resetFields()
    },
    logon () {
      this.$refs['logon'].validate((valid) => {
        if (valid) {
          let that = this
          this.modal_loading = true
          this.$axios({
            method: 'post',
            url: '/api/logon',
            data: this.formItems
          }).then(() => {
            that.$Message.info('注册成功')
            that.$store.commit('user/SET_UNAME', that.formItems.uname)
            that.showLogin = false
          }).catch(() => {
            that.$Message.error('用户名已存在')
          }).finally(() => {
            that.modal_loading = false
          })
        } else {
          this.$Message.error('请确认输入的信息是否正确')
        }
      })
    }
    // handleUploadSuccess(res,file){
    //     this.formItems.avatar = file.url;
    //     this.$Message.info("头像"+file.name+"上传成功");
    // },
    // handleUploadError(err,file){
    //     this.$Message.error("头像"+file+"上传失败，请稍后再试或反馈给我们。错误信息:"+err);
    // },
    // handleFormatError(file){
    //     this.$Message.error("头像"+file.name+"格式错误，请上传.jpg、.png、.jpeg格式的图片");
    // },
    // handleExceededSize(file){
    //     this.$Message.error("头像"+file.name+"过大，请上传小于2M的图片");
    // },
    // removeAvatar(){
    //     this.formItems.avatar = '';
    //     this.show = false;
    // }
  }
}
</script>

<style scoped>
    .upload-img-cover {

    }
</style>
