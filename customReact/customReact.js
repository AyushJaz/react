function customRender(reactElement,mainContainer){

  /*------------trial approach---------*/
//   const newElement = document.createElement(reactElement.type);
//   newElement.setAttribute('href',reactElement.props.href);
//   newElement.setAttribute('target',reactElement.props.target);
//   newElement.innerHTML=reactElement.children;
//   mainContainer.appendChild(newElement);

const newElement=document.createElement(reactElement.type);
newElement.innerHTML= 'Click it to visite google';
for (const key in reactElement.props) {
  newElement.setAttribute(key,reactElement.props[key]);
}
mainContainer.appendChild(newElement);
}


const anotherElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank',
    },
    children:'Click me to visit google'
}


const mainContainer=document.getElementById('root'); 
 
customRender(anotherElement,mainContainer);