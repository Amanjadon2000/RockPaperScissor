let btn=document.querySelectorAll('.btn');

let userImage=document.querySelector('.user-image');
let computerImage=document.querySelector('.computer-image');
let resultDisplay=document.querySelector('.result');

btn.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        removeAllImages();
        let userPic;
        let img = document.createElement("img");
        if(button.id=='rock'){
            
            img.src=`rock.jpg`;
            userPic='rock';
        }
        if(button.id=='paper'){
            
            img.src=`paper.jfif`;
            userPic='paper';

        }
        if(button.id=='scissor'){
            
            img.src=`scissor.jpg`;
            userPic='scissor';

        }
      
        userImage.append(img);     
        setTimeout(() => {
            removeAllCompImages();
            let computerChoice=getComputerChoice();
            let computerPic;
            let img = document.createElement("img");
            if(computerChoice==1){
                img.src='rock.jpg'
                computerPic='rock'
            }
            else if(computerChoice==2){
                img.src='scissor.jpg'
                computerPic='scissor'
            }
            else{
                img.src='paper.jfif'
                computerPic='paper'
            }
            
            computerImage.append(img);
            let result;
            if(userPic=='paper' && computerPic=='scissor'){
                result='You Lose 😥'
            }
            else if(userPic=='paper' && computerPic=='rock'){
                result='You Win 🎉'
            }
            else if(userPic=='rock' && computerPic=='scissor'){
                result='You Win 🎉'
            }
            else if(userPic=='rock' && computerPic=='paper'){
                result='You Lose 😥'
            }
            else if(userPic=='scissor' && computerPic=='paper'){
                result='You Win 🎉'
            }
            else if(userPic=='scissor' && computerPic=='rock'){
                result='You Lose 😥'
            }
            else{
                result='Tie'
            }
            resultDisplay.innerHTML='';
            resultDisplay.innerText=result;
          
        }, 100);   

    })
})
function getComputerChoice(){
    return Math.floor(Math.random()*btn.length)+1;
}
function removeAllImages(){
userImage.innerHTML='';

}
function removeAllCompImages(){
computerImage.innerHTML='';
}