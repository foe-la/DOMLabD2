// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

let mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "#4a4e4d";
mainEl.textContent = ('SEI Rocks!')
mainEl.classList.add("flex-ctr");

let topMenuEL = document.querySelector("#top-menu");
topMenuEL.style.height = "100%";
topMenuEL.style.backgroundColor = "#0e9aa7";
topMenuEL.classList.add("flex-around");

let subMenuEl = document.querySelector("#sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "#3da4ab";
subMenuEl.classList.add("flex-around");

for(let i = 0; i < menuLinks.length; i++) {
    const menuLink = menuLinks[i];

    const aEl = document.createElement("a");
aEl.textContent = menuLink.text; 
aEl.setAttribute("href", menuLink.href);
topMenuEL.appendChild(aEl);
}

menuLinks.forEach((element) => {
  const a = document.createElement('a');
  a.setAttribute('href', element.href);
  a.textContent = element.text;
  a.setAttribute('subLinks', element.subLinks);
  document.querySelector('nav').appendChild(a);
})


//Part II

let subMenuEl = document.querySelector('#sub-menu');

subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = '#3da4ab';
subMenuEl.setAttribute('class', 'flex-around');
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';


let topMenuLinks = document.querySelectorAll('a');
let showingSubMenu = false;

topMenuEl.addEventListener('click', function linkIsWorking(evt){
  evt.preventDefault()
  
  for(let i = 0; i < topMenuLinks.length; i++){
      if(evt.target === topMenuLinks[i]){      
          console.log(topMenuLinks[i].text) 
          if(topMenuLinks[i].hasAttribute('class','active')){  
              topMenuLinks[i].classList.remove('active')
              showingSubMenu = false
              subMenuEl.style.top = '0'
              return
          }
      }
      topMenuLinks[i].classList.remove('active')      
      if(evt.target === topMenuLinks[i]){            
          topMenuLinks[i].setAttribute('class', 'active')
      }
      if(evt.target.getAttribute('subLinks') !== 'undefined'){    
          showingSubMenu = true
          menuLinks.forEach((item) => {
              if(item.text === evt.target.textContent){
                  buildSubMenu(item.subLinks)
                  function buildSubMenu(arr){
                      subMenuEl.textContent = ''
                      for(let v = 0; v < arr.length; v++){
                          const a = document.createElement('a')
                          a.setAttribute('href', arr[v].href)
                          a.textContent = arr[v].text
                          subMenuEl.appendChild(a)
                      }
                  }
              }
          })
          subMenuEl.style.top = '100%'
          return
      }else{
          showingSubMenu = false
          subMenuEl.style.top = 0
      } 
  }
})

subMenuEl.addEventListener('click', function headerChange(evt) {
  evt.preventDefault()
  for(let i = 0; i < topMenuLinks.length; i++){
      if(evt.target === topMenuLinks[i]){   
          console.log(topMenuLinks[i].text) 
      }
  }
  showingSubMenu = false
  subMenuEl.style.top = '0'
  topMenuLinks.forEach((element) => {
      element.classList.remove('active')
  })
  if(evt.target.showingSubMenu = true){
      h1.textContent = evt.target.text
      // un sure??
  }else if(evt.target.showingSubMenu = false){   
      h1.textContent = evt.target.text
      console.log(h1)
  }else{
      return
  }
})