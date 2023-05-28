import * as THREE from 'three';

export function createHouseBase(length, width, height, thickness) {

    //const wmaterial = new THREE.MeshPhongMaterial( {color: 0xffffff} );
    const textureLoader = new THREE.TextureLoader();
    const parede = textureLoader.load('./img/parede.avif');
    const wmaterial = new THREE.MeshPhongMaterial({ map: parede }); 
    const windowmaterial = new THREE.MeshStandardMaterial({ color: 0x99e6ff, transparent: true, opacity: 0.5 });
    const door = textureLoader.load('./img/door.png');
    const doormaterial = new THREE.MeshPhongMaterial({ map: door });
    const roofing = textureLoader.load('./img/roof2.jpg');
    const roofingmaterial = new THREE.MeshPhongMaterial({ map: roofing });

    // all 4 walls
    const backwallgeometry = new THREE.BoxGeometry(length + thickness, height, thickness);
    const leftwallgeometry = new THREE.BoxGeometry(thickness, height, width);
    const rightwallgeometry = new THREE.BoxGeometry(thickness, height, width);

    // front wall

    var frontwallGroup = new THREE.Group();
    const fwTopGeometry = new THREE.BoxGeometry(length + thickness, height/5, thickness);
    const fwTop = new THREE.Mesh(fwTopGeometry, wmaterial);
    fwTop.position.y = height/2.5;
    
    const fwLatGeometry = new THREE.BoxGeometry(length/7, height, thickness);
    const fwLat1 = new THREE.Mesh(fwLatGeometry, wmaterial);
    fwLat1.position.x = length/2 - (length/7)/2.6;
    const fwLat2 = new THREE.Mesh(fwLatGeometry, wmaterial);
    fwLat2.position.x = -(length/2 - (length/7)/2.6);
    
    const fwMidBlocksGeometry = new THREE.BoxGeometry((length/7)*2, height/5, thickness);
    const fwMidBlocks1 = new THREE.Mesh(fwMidBlocksGeometry, wmaterial);
    fwMidBlocks1.position.y = -2*(height/5);
    fwMidBlocks1.position.x = -1.62*(length/7);
    const fwMidBlocks2 = new THREE.Mesh(fwMidBlocksGeometry, wmaterial);
    fwMidBlocks2.position.y = -2*(height/5);
    fwMidBlocks2.position.x = 1.62*(length/7);
    const fwMidBlocks3 = new THREE.Mesh(fwMidBlocksGeometry, wmaterial);
    fwMidBlocks3.position.y = 0;
    fwMidBlocks3.position.x = -1.62*(length/7);
    const fwMidBlocks4 = new THREE.Mesh(fwMidBlocksGeometry, wmaterial);
    fwMidBlocks4.position.y = 0;
    fwMidBlocks4.position.x = 1.62*(length/7);
    const fwMidBlocksGeometryHalfSized = new THREE.BoxGeometry((length/7), height/5, thickness);
    const fwMidBlocks5 = new THREE.Mesh(fwMidBlocksGeometryHalfSized, wmaterial);
    fwMidBlocks5.position.y = -1*(height/5);
    fwMidBlocks5.position.x = -1.12*(length/7);
    const fwMidBlocks6 = new THREE.Mesh(fwMidBlocksGeometryHalfSized, wmaterial);
    fwMidBlocks6.position.y = -1*(height/5);
    fwMidBlocks6.position.x = 1.12*(length/7);
    const fwMidBlocks7Geometry = new THREE.BoxGeometry((length/7)*1.3, (height/5)*2, thickness);
    const fwMidBlocks7 = new THREE.Mesh(fwMidBlocks7Geometry, wmaterial);
    fwMidBlocks7.position.y = 0.5*(height/5);
    fwMidBlocks7.position.x = 0;

    // fw door
    const fwDoorGeometry = new THREE.BoxGeometry((length/7)*1.3, (height/5)*2, thickness);
    const fwDoor= new THREE.Mesh(fwMidBlocks7Geometry, doormaterial);
    fwDoor.position.y = -1.5*(height/5);
    fwDoor.position.x = 0;	
    //fwDoor.rotation.y -= Math.PI/2;
    fwDoor.name = 'door'

    // fw windows
    const fwMidBlocksWindowTop1 = new THREE.Mesh(fwMidBlocksGeometry, windowmaterial);
    fwMidBlocksWindowTop1.position.y = 1*(height/5);
    fwMidBlocksWindowTop1.position.x = -1.62*(length/7);
    const fwMidBlocksWindowTop2 = new THREE.Mesh(fwMidBlocksGeometry, windowmaterial);
    fwMidBlocksWindowTop2.position.y = 1*(height/5);
    fwMidBlocksWindowTop2.position.x = 1.62*(length/7);
    const fwMidBlocksWindowMid1 = new THREE.Mesh(fwMidBlocksGeometryHalfSized, windowmaterial);
    fwMidBlocksWindowMid1.position.y = -1*(height/5);
    fwMidBlocksWindowMid1.position.x = -2.12*(length/7);
    const fwMidBlocksWindowMid2 = new THREE.Mesh(fwMidBlocksGeometryHalfSized, windowmaterial);
    fwMidBlocksWindowMid2.position.y = -1*(height/5);
    fwMidBlocksWindowMid2.position.x = 2.12*(length/7);

    frontwallGroup.add(fwMidBlocks1);
    frontwallGroup.add(fwMidBlocks2);
    frontwallGroup.add(fwMidBlocks3);
    frontwallGroup.add(fwMidBlocks4);
    frontwallGroup.add(fwMidBlocks5);
    frontwallGroup.add(fwMidBlocks6);
    frontwallGroup.add(fwMidBlocks7);
    frontwallGroup.add(fwDoor);
    frontwallGroup.add(fwMidBlocksWindowTop1);
    frontwallGroup.add(fwMidBlocksWindowTop2);
    frontwallGroup.add(fwMidBlocksWindowMid1);
    frontwallGroup.add(fwMidBlocksWindowMid2);
    frontwallGroup.add(fwTop);
    frontwallGroup.add(fwLat1);
    frontwallGroup.add(fwLat2);

    // right wall

    //const rightwallGroup = new THREE.Group();


    // sides

    const sideshape = new THREE.Shape();
    sideshape.moveTo( 0,0 );
    sideshape.lineTo( width, 0);
    sideshape.lineTo( width/2, width/2 );
    sideshape.lineTo( 0, 0 );

    const extrudeSettings1 = {
        steps: 2,
        depth: thickness
    };

    const sidegeometry = new THREE.ExtrudeGeometry( sideshape, extrudeSettings1 );
    const sideleft = new THREE.Mesh( sidegeometry, wmaterial ) ;
    sideleft.position.set(-1.026*(length/2),height/2,width/2);
    sideleft.rotation.y = Math.PI/2;

    const sideright = new THREE.Mesh( sidegeometry, wmaterial ) ;
    sideright.position.set(0.96*(length/2),height/2,width/2);
    sideright.rotation.y = Math.PI/2;



    // roofing

    const roofinggeometry = new THREE.BoxGeometry(length + thickness, width, thickness);
    const roofing1 = new THREE.Mesh(roofinggeometry, roofingmaterial);
    roofing1.position.y = height/1.5;
    roofing1.rotation.x = - Math.PI / 4;
    roofing1.position.z = width/3;

    const roofing2 = new THREE.Mesh(roofinggeometry, roofingmaterial);
    roofing2.position.y = height/1.5;
    roofing2.rotation.x = Math.PI / 4;
    roofing2.position.z = - width/3;
    


    // the other 3 walls

    const backwall = new THREE.Mesh( backwallgeometry, wmaterial );
    const leftwall = new THREE.Mesh( leftwallgeometry, wmaterial );
    const rightwall = new THREE.Mesh( rightwallgeometry, wmaterial );

    leftwall.position.x = length/2 * (-1),
    rightwall.position.x = length/2;

    backwall.position.z = width/2 * (-1);
    frontwallGroup.position.z = width/2;
    


    // floor

    const floorGeometry = new THREE.BoxGeometry(length, thickness, width);
    const floorImg = textureLoader.load('./img/floor2.jpg');
    //const floorMaterial = new THREE.MeshPhongMaterial( {color: 0xffffff} );
    const floorMaterial = new THREE.MeshPhongMaterial( {map: floorImg });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.position.y = -(height/2 - (thickness/2));

    // roof
    const roofGeometry = new THREE.BoxGeometry(length, thickness, width);
    const roofMaterial = new THREE.MeshPhongMaterial( {color: 0xffffff} );
    const roof = new THREE.Mesh(roofGeometry, roofMaterial);
    roof.position.y = height/2 - thickness/2;


    // INTERIOR
    const carpet = new THREE.Group();

    const carpet1geo = new THREE.CylinderGeometry(5, 5, 0.2, 32 );
    const carpet1material = new THREE.MeshPhongMaterial( { color: 0xff9999 } ); 
    const carpet1 = new THREE.Mesh( carpet1geo, carpet1material ); 
    carpet1.position.y = -18;
    carpet1.position.z = -10;

    const carpet2geo = new THREE.CylinderGeometry(4, 4, 0.1, 32 );
    const carpet2material = new THREE.MeshPhongMaterial( { color: 0xff33cc } ); 
    const carpet2 = new THREE.Mesh( carpet2geo, carpet2material ); 
    carpet2.position.y = -17.9;
    carpet2.position.z = -10;

    carpet.add(carpet1);
    carpet.add(carpet2);
    




    var house = new THREE.Group();

    house.add(backwall);
    house.add(leftwall);
    house.add(frontwallGroup);
    house.add(rightwall);
    house.add(floor);
    house.add(roof);
    house.add(sideleft);
    house.add(sideright);
    house.add(roofing1);
    house.add(roofing2);

    house.add(carpet);

    house.position.y = height/2;

    return house

}

export function createHouseSec(length, width, height, thickness) {
    //const length = 60;
    //const width = 40;
    //const height = 30;
    //onst thickness = 2;

    //const wmaterial = new THREE.MeshPhongMaterial( {color: 0xffffff} );
    const textureLoader = new THREE.TextureLoader();
    const parede = textureLoader.load('./img/parede.avif');
    const wmaterial = new THREE.MeshPhongMaterial({ map: parede }); // green color
    const roofing = textureLoader.load('./img/roof2.jpg');
    const roofingmaterial = new THREE.MeshPhongMaterial({ map: roofing });




    // all 4 walls
    const backwallgeometry = new THREE.BoxGeometry(length + thickness, height, thickness);
    const leftwallgeometry = new THREE.BoxGeometry(thickness, height, width);
    const frontwallgeometry = new THREE.BoxGeometry(length + thickness, height, thickness);
    const rightwallgeometry = new THREE.BoxGeometry(thickness, height, width);


    // sides

    const sideshape = new THREE.Shape();
    sideshape.moveTo( 0,0 );
    sideshape.lineTo( width, 0);
    sideshape.lineTo( width/2, width/2 );
    sideshape.lineTo( 0, 0 );

    const extrudeSettings1 = {
        steps: 2,
        depth: thickness
    };

    const sidegeometry = new THREE.ExtrudeGeometry( sideshape, extrudeSettings1 );
    const sideleft = new THREE.Mesh( sidegeometry, wmaterial ) ;
    sideleft.position.set(-1.026*(length/2),height/2,width/2);
    sideleft.rotation.y = Math.PI/2;

    const sideright = new THREE.Mesh( sidegeometry, wmaterial ) ;
    sideright.position.set(0.93*(length/2),height/2,width/2);
    sideright.rotation.y = Math.PI/2;

    // roofing 
    const roofinggeometry = new THREE.BoxGeometry(length + thickness, width, thickness);
    const roofing1 = new THREE.Mesh(roofinggeometry, roofingmaterial);
    roofing1.position.y = height/1.5;
    roofing1.rotation.x = - Math.PI / 4;
    roofing1.position.z = width/3;

    const roofing2 = new THREE.Mesh(roofinggeometry, roofingmaterial);
    roofing2.position.y = height/1.5;
    roofing2.rotation.x = Math.PI / 4;
    roofing2.position.z = - width/3;



    // front wall
    // var frontwallGroup = new THREE.Group();
    // const fwTopGeometry = new THREE.BoxGeometry(length + thickness, height/5, thickness);
    // const fwTop = new THREE.Mesh(fwTopGeometry, wmaterial);
    // fwTop.position.y = 10;
    // frontwallGroup.add(fwTop);


    //frontwallGroup.position.z = width/2; 
    
    const backwall = new THREE.Mesh( backwallgeometry, wmaterial );
    const leftwall = new THREE.Mesh( leftwallgeometry, wmaterial );
    const frontwall = new THREE.Mesh( frontwallgeometry, wmaterial );
    const rightwall = new THREE.Mesh( rightwallgeometry, wmaterial );

    leftwall.position.x = length/2 * (-1),
    rightwall.position.x = length/2;

    backwall.position.z = width/2 * (-1);
    frontwall.position.z = width/2;
    


    // floor
    const floorGeometry = new THREE.BoxGeometry(length, thickness, width);
    const floorImg = textureLoader.load('./img/floor2.jpg');
    //const floorMaterial = new THREE.MeshPhongMaterial( {color: 0xffffff} );
    const floorMaterial = new THREE.MeshPhongMaterial( {map: floorImg });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.position.y = -(height/2 - (thickness/2));

    // roof
    const roofGeometry = new THREE.BoxGeometry(length, thickness, width);
    const roofMaterial = new THREE.MeshPhongMaterial( {color: 0xffffff} );
    const roof = new THREE.Mesh(roofGeometry, roofMaterial);
    roof.position.y = height/2 - thickness/2;

    var house = new THREE.Group();

    house.add(backwall);
    house.add(leftwall);
    house.add(frontwall);
    //house.add(frontwallGroup);
    house.add(rightwall);
    house.add(floor);
    house.add(roof);
    house.add(roofing1);
    house.add(roofing2);
    house.add(sideleft);
    house.add(sideright);

    house.position.y = height/2;

    return house

}

export function createGarage(length, width, height, thickness) {


    //const wmaterial = new THREE.MeshPhongMaterial( {color: 0xffffff} );
    const textureLoader = new THREE.TextureLoader();
    const parede = textureLoader.load('./img/parede.avif');
    const wmaterial = new THREE.MeshPhongMaterial({ map: parede }); // green color
    const roofing = textureLoader.load('./img/roof2.jpg');
    const roofingmaterial = new THREE.MeshPhongMaterial({ map: roofing });




    // all 4 walls
    const backwallgeometry = new THREE.BoxGeometry(length + thickness, height, thickness);
    const leftwallgeometry = new THREE.BoxGeometry(thickness, height, width);
    //const frontwallgeometry = new THREE.BoxGeometry(length + thickness, height, thickness);
    const rightwallgeometry = new THREE.BoxGeometry(thickness, height, width);

    // front wall / garage gate

    var frontwallGroup = new THREE.Group();
    
    const fwTopGeometry = new THREE.BoxGeometry(length + thickness, height/5, thickness);
    const fwTop = new THREE.Mesh(fwTopGeometry, wmaterial);
    fwTop.position.y = height/2.5;
    fwTop.position.z = width/2;

    const fwSidesGeometry = new THREE.BoxGeometry(thickness*2, height, thickness);
    const fwSideLeft= new THREE.Mesh(fwSidesGeometry, wmaterial);
    fwSideLeft.position.x = -(length/2) + thickness/2;
    fwSideLeft.position.z = width/2;

    const fwSideRight= new THREE.Mesh(fwSidesGeometry, wmaterial);
    fwSideRight.position.x = (length/2) - thickness/2;
    fwSideRight.position.z = width/2;

    const gate = new THREE.BoxGeometry(length + thickness, height/5, thickness);


    frontwallGroup.add(fwTop);
    frontwallGroup.add(fwSideLeft);
    frontwallGroup.add(fwSideRight);



    // sides

    const sideshape = new THREE.Shape();
    sideshape.moveTo( 0,0 );
    sideshape.lineTo( length, 0);
    sideshape.lineTo( length/2, length/2 );
    sideshape.lineTo( 0, 0 );

    const extrudeSettings1 = {
        steps: 2,
        depth: thickness
    };

    const sidegeometry = new THREE.ExtrudeGeometry( sideshape, extrudeSettings1 );
    const sidefront = new THREE.Mesh( sidegeometry, wmaterial ) ;
    sidefront.position.set(-(length/2),height/2,width/2 - thickness/1.6);

    const sideback = new THREE.Mesh( sidegeometry, wmaterial ) ;
    sideback.position.set(-(length/2),height/2,- (width/2 + thickness/1.6));

    // roofing 
    const roofinggeometry = new THREE.BoxGeometry(thickness, length*0.9, width*1.2);
    const roofing1 = new THREE.Mesh(roofinggeometry, roofingmaterial);
    roofing1.position.y = height/1.2;
    roofing1.rotation.z = - Math.PI / 4;
    roofing1.position.x = -(length/3.3);

    const roofing2 = new THREE.Mesh(roofinggeometry, roofingmaterial);
    roofing2.position.y = height/1.2;
    roofing2.rotation.z = Math.PI / 4;
    roofing2.position.x = length/3.3;


    //frontwallGroup.position.z = width/2; 
    
    const backwall = new THREE.Mesh( backwallgeometry, wmaterial );
    const leftwall = new THREE.Mesh( leftwallgeometry, wmaterial );
    //const frontwall = new THREE.Mesh( frontwallgeometry, wmaterial );
    const rightwall = new THREE.Mesh( rightwallgeometry, wmaterial );

    leftwall.position.x = length/2 * (-1),
    rightwall.position.x = length/2;

    backwall.position.z = width/2 * (-1);
    //frontwall.position.z = width/2;
    


    // floor
    const floorGeometry = new THREE.BoxGeometry(length, thickness, width);
    const floorImg = textureLoader.load('./img/garage_floor.jpg');
    //const floorMaterial = new THREE.MeshPhongMaterial( {color: 0xffffff} );
    const floorMaterial = new THREE.MeshPhongMaterial( {map: floorImg });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.position.y = -(height/2 - (thickness/2));

    // roof
    const roofGeometry = new THREE.BoxGeometry(length, thickness, width);
    const roofMaterial = new THREE.MeshPhongMaterial( {color: 0xffffff} );
    const roof = new THREE.Mesh(roofGeometry, roofMaterial);
    roof.position.y = height/2 - thickness/2;

    var house = new THREE.Group();

    //house.add(backwall);
    house.add(leftwall);
    //house.add(frontwall);
    house.add(frontwallGroup);
    house.add(rightwall);
    house.add(floor);
    house.add(roof);
    house.add(sidefront);
    house.add(sideback);
    house.add(roofing1);
    house.add(roofing2);

    house.position.y = height/2;

    return house

}



export function createHouse(length, width, height, thickness) {
                           //   60,    40,     40,     2
    var house = new THREE.Group();
    var housebase = createHouseBase(length, width, height, thickness);
    var housesec = createHouseSec(length/2,width*3/4,height,thickness);
    var housegarage = createGarage(length/2,width/2,height/2,thickness);

    housesec.position.x = length/2 + length/4;
    housegarage.position.x = length/2 + length/4;

    housesec.position.z = -(width/8);
    housegarage.position.z = (width/2);

    house.add(housebase);
    house.add(housesec);
    house.add(housegarage);

    return house;
}


