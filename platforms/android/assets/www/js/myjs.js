//Panel button to take photo
document.getElementById('but').addEventListener("click", function(){
          init();
      });

//Panel button to take & save photo file
      document.getElementById('but').addEventListener("click", function(){
                save();
            });


//Panel button to see photos
document.getElementById('gal').addEventListener("click", function(){
          gallery();
      });


function init(){
alert("Strike a pose!");

navigator.camera.getPicture(onSuccess, onFail, {quality: 58, destinationType: Camera.DestinationType.FILE_URI});

function onSuccess(imageURI){
    alert('Pic taken!');
    var image = document.getElementById('image');
    image.src = imageURI;
    alert(image.src);
    }

function onFail(message){
    alert('Failed because: '+message);
}

}

function save(){


navigator.camera.getPicture(onSuccess, onFail, {quality: 58, destinationType: Camera.DestinationType.FILE_URI});

function onSuccess(imageURI){
    alert('Pic taken!');
    var image = document.getElementById('image');
    image.src = imageURI;
    alert(image.src);
    }

function onFail(message){
    alert('Failed because: '+message);
}

}


function gallery(){
alert("Gallery will show here");
}

