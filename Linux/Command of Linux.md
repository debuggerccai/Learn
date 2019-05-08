## Command of Linux 

### 1.批量删除文件名中多余字符串

```shell
var file_name = 'test_1.png'

// 不指定位置
for file in `ls *.png`;do mv $file `echo $file|sed 's/_1//g'`;done

// 指定位置
// 去掉变量name从右边算起的第一个'_'字符及其右边的内容
for name in `ls *.png`;do mv $name ${name%_*}.png;done
// 去掉变量name从右边算起的最后一个'_'字符及其右边的内容
for name in `ls *.png`;do mv $name ${name%%_*}.png;done
// 去掉变量name从左边算起的第一个'_'字符及其右边的内容
for name in `ls *.png`;do mv $name ${name#_*}.png;done
// 去掉变量name从左边算起的最后一个'_'字符及其右边的内容
for name in `ls *.png`;do mv $name ${name##_*}.png;done

// 将 mv 替换为 echo 做测试
```



