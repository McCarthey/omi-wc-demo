---
title: "组件"
metaTitle: "组件"
metaDescription: "组件页"
---

介绍组件的使用

## 使用

以[header](/header)组件为例：

### Vue 中使用

```jsx
<template>
    <div>
        <dm-header />
    </div>
</template>

<script>
import 'omi'
import 'omi-wc-demo/dist/header/'
    // ...
</script>
```

### React 中使用

```jsx
import 'omi'
import 'omi-wc-demo/dist/header'

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <dm-header />
            </div>
        )
    }
}
```