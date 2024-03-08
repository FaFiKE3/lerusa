 let block = document.querySelector ('.block')
let body = document.querySelector ('body')
let lerk = document.querySelector ('.ler')


body.addEventListener ('click', function(e) {
 block.style.transform = `translate(${e.pageX - 25}px, ${e.pageY - 25}px)`
 block.style.opacity = 0.5 
 anime ({
     targets : '.block',
     opacity: 0,
     scale: 2,
     display: 'none',
     duration: 800
 })
})
  
   const listImages = [
    { src: 'https://github.com/FaFiKE3/lerusa/blob/main/IMG-20240221-WA0031.jpg?raw=true',
       nameImg: 'ler',
    },
    { src: 'https://github.com/FaFiKE3/lerusa/blob/main/IMG-20240303-WA0036.jpg?raw=true',
       nameImg: 'ler2',
    },
    { src: 'https://github.com/FaFiKE3/lerusa/blob/main/IMG-20240303-WA0010.jpg?raw=true',
       nameImg: 'ler3',
    },
    { src: 'https://github.com/FaFiKE3/lerusa/blob/main/IMG-20240303-WA0013.jpg?raw=true',
       nameImg: 'ler4',
    },
    { src: 'https://github.com/FaFiKE3/lerusa/blob/main/IMG-20240202-WA0019.jpg?raw=true',
       nameImg: 'ler5',
    },
    { src: 'https://github.com/FaFiKE3/lerusa/blob/main/IMG-20240112-WA0142.jpg?raw=true',
       nameImg: 'ler6',
    },
    { src: 'https://github.com/FaFiKE3/lerusa/blob/main/IMG-20240106-WA0151.jpg?raw=true',
       nameImg: 'ler7',
    },
    { src: 'https://github.com/FaFiKE3/lerusa/blob/main/IMG-20231227-WA0142.jpg?raw=true',
       nameImg: 'ler8',
    },
    { src: 'https://github.com/FaFiKE3/lerusa/blob/main/IMG-20231223-WA0040.jpg?raw=true',
       nameImg: 'ler9',
    },

   ]

    const img = document.querySelector  ('img')
    

   const setImg = (currentDataImg) => {
      img.src = currentDataImg.src;
       img.alt = currentDataImg.nameImg ;
        
    } ;
   

    setImg (listImages[0])

    body.addEventListener ('click', onChangeImg )

     let count = 0 ;
 
    function onChangeImg () {
        if (count == listImages.length - 1) {
             count = 0
        } else {
            count += 1;
        }
        
       
       setImg(listImages[count]) ;

    }