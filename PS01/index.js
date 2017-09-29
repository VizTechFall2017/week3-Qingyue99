var svg = d3.select('svg');

/* Your code goes here */

myArray = [];

for (i=0; i < 315; i++) {
    var object = {cx: 770 * Math.random(), cy: Math.random() * 575, r:19* Math.random()};

    myArray.push(object);
    svg.selectAll('circle')
        .data(myArray)
        .enter()
        .append('circle')
        .attr('cx', function (d) {

            console.log(d);
            return d.cx;
        })
        .attr('cy', function (d) {
            console.log(d);
            return d.cy;

        })
        .attr('r', function (d) {
            console.log(d);
            return d.r;

        })

        .attr('fill', "#596C68")
        .attr('opacity','.3')
        .attr('stroke','black')};


    console.log(myArray);




