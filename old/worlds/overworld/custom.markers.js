/*

This is a JavaScript file you can edit to add custom markers to the map.
uNmINeD does not overwrite this file during map generation.

Steps:

    1. Edit this file using Notepad or a code editor (do not use document editors like Microsoft Word)
    2. Change the line "isEnabled: false," to "isEnabled: true," to display the markers
    3. Change or remove the example markers
    4. Add your own markers

Marker format:

    {
        x: X coordinate of the marker (in Minecraft block units),
        z: Z coordinate of the marker (in Minecraft block units),
        image: marker image URL to display (in quotes),
        imageScale: scale of the image (e.g. 1 = display full size, 0.5 = display half size),
        imageAnchor: [0.5, 1] means the tip of the pin is at the center-bottom of the image (see OpenLayers documentation for more info),
        text: marker text do display (in quotes),
        textColor: text color in HTML/CSS format (in quotes),
        offsetX: horizontal pixel offset of the text,
        offsetY: vertical pixel offset of the text,
        font: text font in HTML/CSS format (in quotes),
    },

Things to keep in mind:

* There are opening and closing brackets for each marker "{" and "}"
* Property names are case sensitive (i.e. "textColor" is okay, "TextColor" is not)
* There is a comma (",") at the end of each line except the opening brackets ("{")

You can use https://mapmarker.io/editor to generate custom pin images.
Use the imageScale property if the pin image is too large.

*/

UnminedCustomMarkers = {

    isEnabled: true,

    markers: [

        // {
        //     x: 1232,
        //     z: 1315,
        //     image: "worlds/overworld/markerimages/iron_ingot.webp",
        //     imageAnchor: [0.5, 1],
        //     imageScale: 0.25,
        //     text: "Iron farm",
        //     textColor: "red",
        //     offsetX: 0,
        //     offsetY: 20,
        //     font: "bold 20px Calibri,sans serif",
        // },
        // {
        //     x: 1166,
        //     z: 1366,
        //     image: "worlds/overworld/markerimages/emerald.webp",
        //     imageAnchor: [0.5, 1],
        //     imageScale: 0.25,
        //     text: "Villager Hall",
        //     textColor: "red",
        //     offsetX: 0,
        //     offsetY: 20,
        //     font: "bold 20px Calibri,sans serif",
        // },
        // {
        //     x: 1200,
        //     z: 1516,
        //     image: "worlds/overworld/markerimages/bee.webp",
        //     imageAnchor: [0.5, 1],
        //     imageScale: 0.25,
        //     text: "Bee Farm",
        //     textColor: "red",
        //     offsetX: 0,
        //     offsetY: 20,
        //     font: "bold 20px Calibri,sans serif",
        // },
        // {
        //     x: 2500,
        //     z: 362,
        //     image: "worlds/overworld/markerimages/slimeball.webp",
        //     imageAnchor: [0.5, 1],
        //     imageScale: 0.25,
        //     text: "Slime Farm",
        //     textColor: "red",
        //     offsetX: 0,
        //     offsetY: 20,
        //     font: "bold 20px Calibri,sans serif",
        // },
    ]
}
