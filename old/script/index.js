
function playerOnlineEntry(playerName, UUID) {
    let fallbackUUIDs =  {
        "DaddyMarvel": "d49ef0b1e37d41d680a7f4fe74a57696"
    }
    let playerUUID = UUID;
    if(playerName in fallbackUUIDs){
        playerUUID = fallbackUUIDs[playerName];
    }
    return `
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <p class="card-title">${playerName}</p>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-4">
                            <img alt="Could not get skin image" src="https://crafatar.com/renders/body/${playerUUID}">
                        </div>
                        <div class="col-auto">
                            <strong>Username</strong>
                            <p>${playerName}</p>
                            <strong>Get skin</strong>
                            <p>
                                <a href="https://crafatar.com/skins/${playerUUID}" class="btn btn-success">Download</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

let handleUpdateServerStatus = async (err, status) => {
    if(err){
        console.error("Failed to load server status: ", err);
    }
    else{
        document.getElementById("player_count").innerHTML = `${status['players']['now']} / ${status['players']['max']}`;
        document.getElementById("server_version").innerHTML = status['version'];
        let playerTable = document.getElementById("player_list");
        for(let player of status['players']['list']){
            let response = await fetch(`https://api.ashcon.app/mojang/v2/user/${player}`);
            let json_data = await response.json();
            let playerUUID = json_data["uuid"];
            playerTable.innerHTML += playerOnlineEntry(player, playerUUID);
        }
    }
}

let updateServerStatus = () => {
    console.log("Pinging...");
    MinecraftAPI.getServerQuery("callippoocraft.cloudnord.net", {} , handleUpdateServerStatus);
}

document.addEventListener("DOMContentLoaded", updateServerStatus);
