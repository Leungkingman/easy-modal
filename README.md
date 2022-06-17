# easy-modal

## 编译
```
npm run build
```

### 使用方式：
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>component-demo</title>
  </head>
  <body>
      <div>body</div>
  </body>
  <script type="text/javascript" src="./dist/bundle.js"></script>
  <script type="text/javascript">
    var m = new Modal({
      title: 'test-modal',
      channel: 'channel',
      onShow: function() {
        console.log('modal show')
      },
      onClose: function() {
        console.log('modal close')
      }
    })
    m.show()
  </script>
</html>
```
