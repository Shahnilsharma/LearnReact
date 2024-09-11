function customRender(reactElement,mainConatainer){
    const element = document.createElement(reactElement.type);
    element.innerHTML=reactElement.children;
   for (const prop in reactElement.props) {
     element.setAttribute(prop, reactElement.props[prop]);    
   }
    mainConatainer.appendChild(element);
}

const reactElement = {
    type:'a',
    props:{
         href:'https://www.google.com/',
         target: '_blank'
    },
    children:'Click me to visit Google '
}//in react the syntex is bit different

const mainConatainer = document.querySelector('#root');

customRender(reactElement,mainConatainer)
