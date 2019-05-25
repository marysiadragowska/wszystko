var game = new Vue({
    el:'#app',
    data:{
        round:0,
        items : [
            { name: "kamień", img: "kamień.jpg"},
            { name: "papier", img: "papier.jpg"},
            { name: "nożyce", img: "nożyczki.jpg"},
        ],
            playerItem : {name:"Brak", img:"znak_zapytania.jpg"},
            computerItem : {name:"Brak", img:"znak_zapytania.jpg"},
            playerScore: 0,
            computerScore: 0,
        resultMessage: 'Start'
    },
    methods:{
        startRound: function() {
            this.round++
            var computerNumber =Math.floor(Math.random()*3);
            this.computerItem = this.items[computerNumber]
            if(this.computerItem == this.playerItem){
            console.log("remis");
            }
            //Remis
            if(this.computerItem == this.playerItem){
                this.resultMessage = 'Remis'
            }
            //Wybrałeś Kamień
            else if(this.playerItem.name == "kamień"){
                
                if(this.computerItem.name == "papier"){
                    this.resultMessage = "Przegrałeś : (";
                    this.computerScore++;
                }
                else if (this.computerItem.name == "nożyce"){
                    this.resultMessage = "Wygrałeś : (";
                    this.playerScore++;
                }
            }

                //Wybrałeś Papier
                else if(this.playerItem.name == "papier"){
                
                    if(this.computerItem.name == "nożyce"){
                        this.resultMessage = "Przegrałeś : (";
                        this.computerScore++;
                    }
                    else if (this.computerItem.name == "kamień"){
                        this.resultMessage = "Wygrałeś : (";
                        this.playerScore++;
                    }
                        
                }
                //Wybrałeś Nożyce
                else if(this.playerItem.name == "nożyce"){
                
                    if(this.computerItem.name == "kamień"){
                        this.resultMessage = "Przegrałeś : (";
                        this.computerScore++;
                    }
                    else if (this.computerItem.name == "papier"){
                        this.resultMessage = "Wygrałeś : (";
                        this.playerScore++;  
                    }
                }
            
        }
    }
})