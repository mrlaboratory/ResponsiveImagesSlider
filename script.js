// $(".imgResMR").mouseover(function(){
//     $(".imgResMR .buttonDiv").slideDown();
//   });
 
//   $(".imagesSliderMR img, .imgResMR .buttonDiv").mouseout(function(){
//     $(".imgResMR .buttonDiv").slideUp();
//   });

var photos = ['img/1.png','img/2.png','img/3.png','img/4.png','img/5.png'];

var img = document.querySelector('.imagesSliderMR img');

var i = 0;
function next(){
if(i<photos.length-1){
   i++;
   img.src=photos[i];

}else{

   i=0;
   img.src=photos[i];
}

}
function prev(){
   if(i>0){
      i--;
      img.src=photos[i];
   
   }else{
   
      i=photos.length-1;
      img.src=photos[i];
   }
   
   }