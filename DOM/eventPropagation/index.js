window.addEventListener('click',function(){
    console.log('window');
    
},true);

document.addEventListener('click',function(){
    console.log('document');
    
},true)

document.querySelector('.div2').addEventListener('click',function(e){
    e.stopPropagation();
    console.log("DIV2");
    
},true)

document.querySelector('.div1').addEventListener('click',function(e){
    console.log("DIV1");
    
},true)

document.querySelector('.btn').addEventListener('click',function(e){
    console.log(e.target.innerHTML = "clicked!!");
    
},true)