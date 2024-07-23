let locations = [
    {'name': 'Hiroshima', 'tags': ['base', 'shop'], 'locations': [['overworld', [-3650, '~', 1200]]]},
    {'name': 'Tsjernobil', 'tags': ['farm'], 'locations': [['overworld', [33, '~', 218]]]},
    {'name': 'End portal', 'tags': ['poi'], 'locations': [['nether', [-8, 39, 229]]]},
    {'name': 'The island', 'tags': ['base'], 'locations': [['overworld', [906, '~', -173]]]},
    {'name': 'Bikini Attol', 'tags': ['farm'], 'locations': [['overworld', [270, 200, 614]], ['nether', [34, '~', 77]]]},
    {'name': 'Witherrose Farm', 'tags': ['farm'], 'locations': [['end', [335, 64, 1057]]]},
    {'name': 'World Trade Center', 'tags': ['base'], 'locations': [['overworld', [130, '~', -440]]]}
];

let getTagColor = (tag) => {
    return {
        'farm': 'is-success',
        'shop': 'is-warning',
        'poi': 'is-danger',
        'base': 'is-info',
    }[tag];
}

let getWorldName = (world) => {
    return {
        'overworld': 'Overworld',
        'end': 'The End',
        'nether': 'Nether'
    }[world];
}

let createLocationHTML = (location) => {
    let tagsElements = "";
    location.tags.forEach((tag) => tagsElements +=
       `<span class="tag ${getTagColor(tag)} is-medium ml-1 mr-1"><strong>${tag}</strong></span>`
    );
    let locationElements = "";
    location.locations.forEach((loc) => locationElements += `
        <div class="has-background-primary-soft p-2 box">
            <strong>${getWorldName(loc[0])}</strong> : 
            <div class="control">
                <input class="input" type="text" value="${loc[1][0]} ${loc[1][1]} ${loc[1][2]}" readonly>
            </div>
        </div>
    `);
    return `
    <div class="card">
        <header class="card-header">
            <h4 class="card-header-title">${location.name}</h4>
            <div class="p-2">
                ${tagsElements}
            </div>
        </header>
        <div class="card-content">
            <div class="content">
                ${locationElements}
            </div>
        </div>
    </div>
    `;
}

let initialiseLocations = () => {
    let locationsEl = document.getElementById("locations");
    for(let location of locations){
        locationsEl.innerHTML += createLocationHTML(location);
    }
}

let init = () => {
    /* Initialise the locations */
    initialiseLocations();
}

document.addEventListener("DOMContentLoaded", init);