
import React from 'react';

import ReactDom from 'react-dom';

/*
*   首先调用React中的createElement方法创建虚拟DOM，该方法中有三个必须参数:
*
*       1.元素的名字 h1、span、div之类的————是个字符串
*       2.元素的属性id、class之类的————是一个对象(没有的话需要传一个null)
*       3.子节点
*       ...
*       n.更多的子节点
* */
const h1 = React.createElement('h1', null, 'Hello React');

/*
*   之后需要调用ReactDom中的render方法，把虚拟dom渲染到页面上，该方法有两个必须得参数
*
*       1.虚拟DOM的名称
*       2.页面上的容器，该参数是一个dom对象
* */
ReactDom.render(h1, document.getElementById('box'));