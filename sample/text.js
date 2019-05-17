var xhr = new XMLHttpRequest()
xhr.open('GET', '/msi?team=IG', true)
xhr.send()
xhr.onload = function(){
  console.log(JSON.parse(xhr.responseText))
}