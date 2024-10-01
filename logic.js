
let gridItems=document.getElementsByClassName("square")
let gameIsFinished=false
let boardArr=[
    "0","1","2",
    "3","4","5",
    "6","7","8"
]
//counters (X,O) Number of wins
let counterX=0
let counterO=0
//متغير الحجرة الوحدة
let content="X"

for( const item of gridItems){
    let value=item.getAttribute("value")
    item.addEventListener("click",function(){
        //انتهت اللعبة
        
        
        if(gameIsFinished){
            evaluateBoard()
            return
        }
        if(boardArr[value]=="X" || boardArr[value]=="O"){
            return
        }
        // game is continue
        let squareContent1=document.querySelector(`.square[value="${value}"]`)
        squareContent1.innerHTML=content
        boardArr[value]=content
        // Who is The Winner??
        evaluateBoard()
            if(content=="X"){
                content="O"
            }else{
                content="X"
            }

            //turn o or x
            document.getElementById("instruction").textContent=`${content} turn`
    })
}


// add x and o for the boardArr
function evaluateBoard(){
if(boardArr[0]==boardArr[1] && boardArr[1]==boardArr[2]
    ||
    boardArr[0]==boardArr[3] && boardArr[3]==boardArr[6]
    ||
    boardArr[0]==boardArr[4] && boardArr[4]==boardArr[8]
    ||
    boardArr[2]==boardArr[5] && boardArr[5]==boardArr[8]
    ||
    boardArr[1]==boardArr[4] && boardArr[4]==boardArr[7]
    ||
    boardArr[2]==boardArr[4] && boardArr[4]==boardArr[6]
    ||
    boardArr[6]==boardArr[7] && boardArr[7]==boardArr[8]
    ||
    boardArr[3]==boardArr[4] && boardArr[4]==boardArr[5]
  )
{
    let winner=(content== "O" ?"O":"X")
    gameIsFinished=true
    //طباعة مين الي فاز و عدد مرات الفوز
   if(winner=="X"){
    counterX++
    alertify.alert(`${winner} Won!.. Number of Wins X: ${counterX}`)
   }
   else{
    counterO++
    alertify.alert(`${winner} Won!.. Number of Wins O: ${counterO}`)
   }
  
}

// في حال صار في تعادل
    let isDraw=true
    for(const square of boardArr)
    {
        if(square !="X" && square !="O"){
            isDraw=false
        }
    }
    //draw 
    if(isDraw){
        gameIsFinished=true
    
        alertify.alert(`Draw`)
    }

}


//عم نعمل ريست للعبة
document.getElementById("reset-btn").addEventListener("click",function(){
    for(const item of gridItems){
        let value1=item.getAttribute("value")
        let squareContent=document.querySelector(`.square[value="${value1}"]`)
        squareContent.innerHTML=" "
        boardArr=[
            "0","1","2",
            "3","4","5",
            "6","7","8"
        ]
     
      }
      //reset everything  and start with X
    gameIsFinished=false
    content="X"
    document.getElementById("instruction").innerHTML=`${content} turn`
})


function evaluateBoard(){
if(boardArr[0]==boardArr[1] && boardArr[1]==boardArr[2]
    ||
    boardArr[0]==boardArr[3] && boardArr[3]==boardArr[6]
    ||
    boardArr[0]==boardArr[4] && boardArr[4]==boardArr[8]
    ||
    boardArr[2]==boardArr[5] && boardArr[5]==boardArr[8]
    ||
    boardArr[1]==boardArr[4] && boardArr[4]==boardArr[7]
    ||
    boardArr[2]==boardArr[4] && boardArr[4]==boardArr[6]
    ||
    boardArr[6]==boardArr[7] && boardArr[7]==boardArr[8]
    ||
    boardArr[3]==boardArr[4] && boardArr[4]==boardArr[5]
  )
{
    let winner=(content== "O" ?"O":"X")
    gameIsFinished=true
    //طباعة مين الي فاز و عدد مرات الفوز
   if(winner=="X"){
    counterX++
    alertify.alert(`${winner} Won!.. Number of Wins X: ${counterX}`)
   }
   else{
    counterO++
    alertify.alert(`${winner} Won!.. Number of Wins O: ${counterO}`)
   }
  
}

// في حال صار في تعادل
    let isDraw=true
    for(const square of boardArr)
    {
        if(square !="X" && square !="O"){
            isDraw=false
        }
    }
    //draw 
    if(isDraw){
        gameIsFinished=true
    
        alertify.alert(`Draw`)
    }

}
