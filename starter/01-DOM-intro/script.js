const node = document.body.childNodes //on met un objet de type element dans node qu'on a initialise
console.log(node);


for (let 1=0; i<node.length; i++){
  if (node[i].nodeType === Node.ELEMENT_NODE) {
  console.log(`L'élement ${i} egale ${node[i]}`)
 }
}
