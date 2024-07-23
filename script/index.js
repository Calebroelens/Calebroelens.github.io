
let playerOnlineEntryV2 = (identifier, playerData) => {
    return `<div class="column is-one-third" id="${identifier}">
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">${playerData.playerName}</p>
                    </header>
                    <div class="card-content">
                        <div class="content is-flex is-justify-content-center">
                            <img src="https://crafatar.com/renders/body/${playerData.playerUUID}" alt="Skin" style="max-height: 12rem;">
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a href="https://crafatar.com/skins/${playerData.playerUUID}" class="card-footer-item"><i class="fa fa-download"></i>&nbsp;Download skin</a>
                    </footer>
                </div>
            </div>`;
}

let playerOnlineEntryV2_Loading = (identifier) => {
    return `<div class="column is-one-third" id="${identifier}">
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title" id="${identifier}_username">Loading</p>
                    </header>
                    <div class="card-content">
                        <div class="content is-flex is-justify-content-center" id="${identifier}_image">
                            <i class="fa fa-bounce fa-spinner"></i>
                        </div>
                    </div>
                    <footer class="card-footer" id="${identifier}_download">
                        
                    </footer>
                </div>
            </div>`;
}

let updateOnlinePlayersHTML = (players) => {
    document.getElementById("current_player_count").innerHTML = players['now'] || "0";
    document.getElementById("max_player_count").innerHTML = players['max'] || "16";
    let progressBar = document.getElementById("player_progress_bar");
    progressBar.value = players['now'] || 0;
    progressBar.max = players['max'] || 16;
}

let updateOnlinePlayersTableHTML = async (players) => {
    let playerList = players.list;
    let playerListEl = document.getElementById("player_list");
    /* Prefill to shown loading containers */
    let identifiers = [];
    playerList.forEach((player) => identifiers.push(`${player}_entry`));
    playerListEl.innerHTML = "";
    for(let identifier of identifiers){
        playerListEl.innerHTML += playerOnlineEntryV2_Loading(identifier);
    }
    for(let [index, player] of Object.entries(playerList)){
        let playerData = await getPlayerProfile(player);
        let identifier = identifiers[index];
        document.getElementById(`${identifier}_username`).innerHTML
            = `<p class="card-header-title">${playerData.playerName}</p>`;

        document.getElementById(`${identifier}_image`).innerHTML
            = `<img src="https://crafatar.com/renders/body/${playerData.playerUUID}" alt="Skin" style="max-height: 12rem;">`;

        document.getElementById(`${identifier}_download`).innerHTML
            = `<a href="https://crafatar.com/skins/${playerData.playerUUID}" class="card-footer-item"><i class="fa fa-download"></i>&nbsp;Download skin</a>`;
    }
}

let getPlayerProfile = async (playerName) => {
    let response = await fetch(`https://api.ashcon.app/mojang/v2/user/${playerName}`);
    let jsonData = await response.json();
    let playerUUID = jsonData["uuid"];
    return {playerName: playerName, playerUUID: playerUUID};
}

let handleUpdateServerStatus = async (err, status) => {
    if(err){
        console.error("Failed to load server status: ", err);
    }
    else{
        updateOnlinePlayersHTML(status['players']);
        await updateOnlinePlayersTableHTML(status['players']);
    }
}

let updateServerStatus = () => {
    MinecraftAPI.getServerQuery("callippoocraft.cloudnord.net", {} , handleUpdateServerStatus);
}

document.addEventListener("DOMContentLoaded", updateServerStatus);
