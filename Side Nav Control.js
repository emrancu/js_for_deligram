window.onscroll = function() {
 
if (document.body.scrollTop > 490 || document.documentElement.scrollTop > 490) {
     
    document.querySelector("aside._1kKFMxXs_Q_0>div").setAttribute('style', "position: fixed;top: 65px;max-width: 220px;bottom: 0px; overflow-y: scroll;padding-bottom:100px")

  } else {
     
      document.querySelector("aside._1kKFMxXs_Q_0>div").removeAttribute('style')

  }



};