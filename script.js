const width = window.innerWidth;
let height= 850;

const svg = d3.select("#canvas")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg.append("circle")
    .attr("cx", 720)
    .attr("cy", 400)
    .attr("r", 350)
    .attr("stroke", "#FFFAFA")
    .attr("stroke-width", 6)
    .attr("fill", "#363568"); 

//snowfall animation 

let snowing = setInterval(function() {
    height = 600;
    let cx = Math.random() * (900 - 530) + 530;
    let cy = Math.random()* (630 - 80) + 80;
    let dx = -20 + Math.random() * 40;
    let scale = Math.random()*-0.4;

    let snowflake = svg.append("image")
        .attr("xlink:href", "images/snowflake.png");

    snowflake.attr("transform", `translate(${cx},${cy})scale(${scale})`)
        .attr("opacity", 0.6)
        .attr("class", "snowflake")
        .transition()
            .duration(3000)
            .delay(function(d, i) { return i * 50; })
            .ease(d3.easeLinear)
            .attr("transform", `translate(${cx + dx},${height})scale(${scale})rotate(-270)`)
            .remove();
}, 100);

//illustrations from www.clipartmax.com and further edited on my iPad
//snow vectors created with Figma

const snow = svg.append("image")
    .attr("xlink:href", "images/snow.png")
    .attr("width", 530)
    .attr("height", 400)
    .attr("x", 455)
    .attr("y", 490);

const snowhill = svg.append("image")
    .attr("xlink:href", "images/snowhill.png")
    .attr("width", 400)
    .attr("height", 400)
    .attr("x", 408)
    .attr("y", 380);

let base = svg.append("rect")
    .attr("x", 520)
    .attr("y", 700)
    .attr("rx", 10)
    .attr("ry", 10)
    .attr("width", 400)
    .attr("height", 100)
    .attr("stroke", "#faa48c")
    .attr("stroke-width", 5)
    .attr("fill", "#f5b39e");

const cabin = svg.append("image")
    .attr("xlink:href", "images/cabin.png")
    .attr("width", 530)
    .attr("height", 400)
    .attr("x", 310)
    .attr("y", 190);

d3.select("#candycane").on("input", function() {
    let isChecked = d3.select(this).property("checked");

    if (isChecked == true) {
        svg.append("image")
            .attr("xlink:href", "images/candycane1.png")
            .attr("class", "decoration")
            .attr("width", 100)
            .attr("height", 130)
            .attr("x", 380)
            .attr("y", 450);

        svg.append("image")
            .attr("xlink:href", "images/candycane2.png")
            .attr("class", "decoration")
            .attr("width", 100)
            .attr("height", 130)
            .attr("x", 655)
            .attr("y", 450);
    } else {
        d3.selectAll(".decoration").attr("class","unchecked");
    }
});   


const tree = svg.append("image")
    .attr("xlink:href", "images/tree.png")
    .attr("width", 350)
    .attr("height", 400)
    .attr("x", 675)
    .attr("y", 270);


//twinkling stars animation
svg.append("path")
    .attr("d", "M14.9866 0.712799L18.3543 11.0775H29.2524L20.4356 17.4833L23.8034 27.8481L14.9866 21.4423L6.16979 27.8481L9.5375 17.4833L0.720724 11.0775H11.6189L14.9866 0.712799Z")
    .attr("width", 15)
    .attr("height", 15)
    .attr("x", 300)
    .attr("y", 200)
    .attr("class", "star")
    .attr("fill", "#FFF9C1")
    .attr("transform", "translate(700,100)");

svg.append("path")
    .attr("d", "M14.9866 0.712799L18.3543 11.0775H29.2524L20.4356 17.4833L23.8034 27.8481L14.9866 21.4423L6.16979 27.8481L9.5375 17.4833L0.720724 11.0775H11.6189L14.9866 0.712799Z")
    .attr("width", 15)
    .attr("height", 15)
    .attr("x", 300)
    .attr("y", 200)
    .attr("class", "star")
    .attr("fill", "#FFF9C1")
    .attr("transform", "translate(620,180)");

svg.append("path")
    .attr("d", "M14.9866 0.712799L18.3543 11.0775H29.2524L20.4356 17.4833L23.8034 27.8481L14.9866 21.4423L6.16979 27.8481L9.5375 17.4833L0.720724 11.0775H11.6189L14.9866 0.712799Z")
    .attr("width", 15)
    .attr("height", 15)
    .attr("x", 300)
    .attr("y", 200)
    .attr("class", "star")
    .attr("fill", "#FFF9C1")
    .attr("transform", "translate(840,160)");

svg.append("path")
    .attr("d", "M14.9866 0.712799L18.3543 11.0775H29.2524L20.4356 17.4833L23.8034 27.8481L14.9866 21.4423L6.16979 27.8481L9.5375 17.4833L0.720724 11.0775H11.6189L14.9866 0.712799Z")
    .attr("width", 15)
    .attr("height", 15)
    .attr("x", 300)
    .attr("y", 200)
    .attr("class", "star")
    .attr("fill", "#FFF9C1")
    .attr("transform", "translate(740,200)");

svg.append("path")
    .attr("d", "M14.9866 0.712799L18.3543 11.0775H29.2524L20.4356 17.4833L23.8034 27.8481L14.9866 21.4423L6.16979 27.8481L9.5375 17.4833L0.720724 11.0775H11.6189L14.9866 0.712799Z")
    .attr("width", 15)
    .attr("height", 15)
    .attr("x", 300)
    .attr("y", 200)
    .attr("class", "star")
    .attr("fill", "#FFF9C1")
    .attr("transform", "translate(540,130)");

svg.append("path")
    .attr("d", "M14.9866 0.712799L18.3543 11.0775H29.2524L20.4356 17.4833L23.8034 27.8481L14.9866 21.4423L6.16979 27.8481L9.5375 17.4833L0.720724 11.0775H11.6189L14.9866 0.712799Z")
    .attr("width", 15)
    .attr("height", 15)
    .attr("x", 300)
    .attr("y", 200)
    .attr("class", "star")
    .attr("fill", "#FFF9C1")
    .attr("transform", "translate(920,220)");

d3.selectAll(".star").on("mouseover", function() {

    d3.selectAll(".star")
        .transition()
        .duration(100)
        .attr("fill", "#FFE071");

});


d3.selectAll(".star").on("mouseout", function() {

    d3.selectAll(".star")
        .transition()
        .attr("fill", "#FFF9C1");

});


//christmas tree lights

svg.append("circle")
    .attr("cx", 830)
    .attr("cy", 400)
    .attr("r", 15)
    .attr("class", "ornament")
    .attr("fill", "#FFFAFA")
    .attr("stroke", "#cacac9")
    .attr("stroke-width", 2);

svg.append("circle")
    .attr("cx", 910)
    .attr("cy", 520)
    .attr("r", 15)
    .attr("class", "ornament")
    .attr("fill", "#FFFAFA")
    .attr("stroke", "#cacac9")
    .attr("stroke-width", 2);

svg.append("circle")
    .attr("cx", 905)
    .attr("cy", 450)
    .attr("r", 10)
    .attr("class", "ornament")
    .attr("fill", "#FFFAFA")
    .attr("stroke", "#cacac9")
    .attr("stroke-width", 2);

svg.append("ellipse")
    .attr("cx", 790)
    .attr("cy", 540)
    .attr("rx", 7)
    .attr("ry", 20)
    .attr("class", "ornament")
    .attr("fill", "#FFFAFA")
    .attr("stroke", "#cacac9")
    .attr("stroke-width", 2);

svg.append("ellipse")
    .attr("cx", 835)
    .attr("cy", 475)
    .attr("rx", 7)
    .attr("ry", 20)
    .attr("class", "ornament")
    .attr("fill", "#FFFAFA")
    .attr("stroke", "#cacac9")
    .attr("stroke-width", 2);

//christmas tree light animation

d3.select("#tree").on("click", function() {

    d3.selectAll(".ornament")
        .transition() 
        .duration(150)
        .attr("fill", "#feff7d")
        .attr("stroke", "#FFFF00")
        .transition() 
        .duration(150)
        .delay(150)
        .attr("fill", "#FFFAFA")
        .attr("stroke", "#cacac9")
        .transition() 
        .duration(150)
        .delay(300)
        .attr("fill", "#feff7d")
        .attr("stroke", "#FFFF00")
        .transition() 
        .duration(100)
        .delay(500)
        .attr("fill", "#FFFAFA")
        .attr("stroke", "#cacac9")
        .transition() 
        .duration(150)
        .delay(650)
        .attr("fill", "#feff7d")
        .attr("stroke", "#FFFF00")

});


//penguin animation

let penguin = svg.append("image")
    .attr("xlink:href", "images/penguin.png")
    .attr("x", 500)
    .attr("y", 450);

d3.select("#skate-forward").on("click", function() {
    penguin.transition()
        .duration(2000)
        .attr("x", 800)
        .attr("y", 450)
        .transition()
        .duration(2000)
        .attr("x", 500)
        .attr("y", 450)
});

//snow globe color change

d3.select("#color").on("click", function() {
    base.attr("fill",'#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6))
    base.attr("stroke", null);
});

//restart 

d3.select("#restart").on("click", function() {
    
    base.attr("stroke", "#faa48c");
    base.attr("stroke-width", 5);
    base.attr("fill", "#f5b39e");

    d3.selectAll(".ornament")
        .attr("fill", "#FFFAFA")
        .attr("stroke", "#cacac9")
        .attr("stroke-width", 2);

    d3.selectAll(".decoration")
        .remove();

    d3.selectAll("#candycane").property("checked", false);
});

