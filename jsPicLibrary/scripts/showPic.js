function showPic(whichpic){
    let source = whichpic.getAttribute('href')
    let placeholder = document.getElementById('placeholder')
    placeholder.setAttribute('src',source)
    let text = whichpic.getAttribute('title')
    let description = document.getElementById('description')
    description.firstChild.nodeValue = text
}

/* 1、查询有href属性的元素放入source
2、查询id为placeholder的元素放入placeholder
3、将placeholder所指元素的src设置为source
4、查询带有title属性的元素
5、获得id为description的元素并放入description中
6、将description的第一个节点的值换成text */