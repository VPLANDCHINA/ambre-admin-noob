<!--
 * @Author       : yuanrunwei
 * @Date         : 2020-05-18 12:05:37
 * @LastEditors  : yuanrunwei
 * @LastEditTime : 2020-05-18 12:13:16
 * @FilePath     : \ambre-admin-noob\README.md
--> 
# dtpc-admin

```
install:yarn install
```
```
dev:yarn serve
```
```
build:yarn test/build
```

#version

# ⭐AMBRE⭐

## v-input:顶部搜索栏

### 组件引用

```
<v-input
:list="list"              // 组件内功能项列表
@search="search">         // 查询方法
</v-input>
```

### 参数说明

```
{
  placeholder: '',        //
  type: 'select',         //
  props: 'test',          //
  options: [              //
    {
      label: '第一项',
      value: '1'
    }
  ]
}
```
