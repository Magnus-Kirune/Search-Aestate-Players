import { players } from "./modules/players.js";


function searchPlayer(){

    const playerSearched = document.getElementById('searchedBox').value;
    const areaOfSearchedTeam = document.getElementById('player-team');
    areaOfSearchedTeam.innerHTML = '';

    const player = players.find((player) => {return player.name === playerSearched})

    if (player){
         player.team.forEach(function(urlImg){
           const showImage = document.createElement('img')
             showImage.src = urlImg
             showImage.style.height = '120px'
             showImage.style.width = '120px'
             showImage.style.marginLeft = '-50px'
             areaOfSearchedTeam.appendChild(showImage)
         })
    }else{
        areaOfSearched.innerHTML = 'Jogador não encontrado!'
    }
}

document.getElementById('search-btn').addEventListener('click', searchPlayer)