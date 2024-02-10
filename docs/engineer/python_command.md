# Python 相关的一些零碎知识

## Python 根据号码获取国家信息

参考资料：[从python中的国家代码获取国家名称](https://segmentfault.com/q/1010000043298736)，[python-phonenumbers](https://github.com/daviddrysdale/python-phonenumbers)

```python
import phonenumbers
from phonenumbers.phonenumberutil import (
    region_code_for_country_code,
    region_code_for_number,
)

pn = phonenumbers.parse('+442083661177')
print(region_code_for_country_code(pn.country_code))
```

```python
>>> import phonenumbers
>>> from phonenumbers.phonenumberutil import region_code_for_country_code
>>> from phonenumbers.phonenumberutil import region_code_for_number
>>> pn = phonenumbers.parse('+442083661177')
>>> print(region_code_for_country_code(pn.country_code))
GB
>>> print(region_code_for_number(pn))
GB
```

## 隐藏【Chrome正在受到自动测试软件的控制】(新版方法)

老版本隐藏【Chrome正在受到自动测试软件的控制】的方式：

```python
options.add_argument('disable-infobars')
```

今天按照之前的办法发现不行了，新版本的方法：

```python
option = Options()
option.add_experimental_option(name="useAutomationExtension", value=False)
option.add_experimental_option(name="excludeSwitches", value=['enable-automation'])
webdriver.Chrome(options=option)
```
