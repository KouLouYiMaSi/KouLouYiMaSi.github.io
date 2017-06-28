------
<!--x=0 y=0 z=0 rotate=0-->
### 应用服务器第一次访问OpenId服务器
* 访问的url为：https://login.netease.com/connect/
* 需要在url后面拼接上经过url encode的参数
* 参数列表如下图

------
<!--x=0 y=550 z=-550 rotate-x=90-->
![](../image/firstParam.png)
------
<!--x=1500 y=550 z=-550 rotate-x=90-->
### OpenId服务器返回的参数
> https://client.example.org/cb?code=*&state=*
* state参数，state与之前访问的不一致则拒绝请求
* code参数有效时间600秒

------
<!--x=1500 y=2000 z=-550 rotate=160-->
### 应用服务器根据code获取Access token
* https://login.netease.com/connect/token
* 前面返回的code作为post参数请求
* grant_type:固定为authorization_code
* redirect_uri：为应用服务器访问url
* client_id和client_secret

------
<!--x=1500 y=3000 z=-550 rotate=160-->
### 返回成功
```
 {
     "access_token": 获取用户信息用
     "token_type": 固定字符串Bearer
     "refresh_token":用于刷新access_token（可选）
     "expires_in": access_token过期时间
     "id_token": 用于可信登录的鉴定
 }
```

------
<!--x=1500 y=5000 z=0 rotate=1000-->
### 应用服务器校验id_token获取登录人信息
* 应用服务器与Openid服务器安全通信，解密并校验id_token
* 校验成功后通过access_token获取用户信息，需要再请求一次
```
  GET /connect/userinfo HTTP/1.1
  HOST: login.netease.com
  Authorization: Bearer 0e9566e174504604bd13308c596c2bfd
```

------
<!--x=1500 y=8000 z=0 rotate=900-->
[结束，点我返回！](../index.html#/3/0)