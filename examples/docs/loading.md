<!--
 * @Author: vickiWu
 * @Date: 2022-03-23 18:31:33
 * @LastEditTime: 2022-03-23 18:33:03
 * @LastEditors: vickiWu
 * @Description:
 * @FilePath: \wwy-map\examples\docs\loading.md
-->

## Loading 组件

加载数据时显示动效。

:::demo Loading 的基础用法。

```html
<template>
  <me-loading :loading-text="text"></me-loading>
</template>

<script>
  export default {
    data() {
      return {
        text: '页面加载中……',
      }
    },
  }
</script>
```

:::
