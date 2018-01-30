var config = {
	container: "#basic-example",    
	
	connectors: {
		type: 'step'
	},
	node: {
		HTMLclass: 'nodeExample1'
    }
},
    
	
	farmer = {
        text: {
            name: "Farmer",
        },
        image: "img/farmer1.png"
    },

    postsToSell = {
        parent: farmer,
        text:{
            name: "Posts to Sell",
        },
        stackChildren: true,
        image: "img/farmer2.png"
    },
    matchFarmersAndBuyers = {
        parent: postsToSell,
        stackChildren: true,
        text:{
            name: "Matching farmers and buyers",
        },
        image: "img/fd1.png"
    },

    chart_config = [
        config,
        farmer,
		matchFarmersAndBuyers
    ];

