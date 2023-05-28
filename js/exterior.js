import * as THREE from 'three';


export function createWoodFence2(numBoxes) {
    const group = new THREE.Group();
    //const numBoxes = 42;

    // set the size of each box
    const boxWidth = 3;
    const boxHeight = 12;
    const boxDepth = 1;

    // create each box and add it to the group
    for (let i = 0; i < numBoxes; i++) {
        // create a new box geometry
        const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

        // create a new mesh and add it to the group
        const material = new THREE.MeshPhongMaterial({ color: 0xffc300 });
        const mesh = new THREE.Mesh(geometry, material);

        // set the position of the box
        mesh.position.set(i * 4, 6, 0);

        // add the box to the group
        group.add(mesh);
    }

    return group;
}

export function createRoad() {
    const group = new THREE.Group();
    
    const baseGeometry = new THREE.BoxGeometry(400,1,40);
    const baseMaterial = new THREE.MeshPhongMaterial({ color: 0x808080});
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.set(0,0,120);

    // stripped lines
    for (let i = 0; i < 20; i++) {
        const lineGeometry = new THREE.BoxGeometry(7,1.2,3);
        const lineMaterial = new THREE.MeshPhongMaterial({ color: 0xffa500 });
        const line = new THREE.Mesh(lineGeometry, lineMaterial);
        line.position.set(-190 + i*20,0,120);
        group.add(line);
    }

    // sidewalk
    for (let i = 0; i < 26; i++) {
        const lineGeometry = new THREE.BoxGeometry(15,1.2,10);
        const lineMaterial = new THREE.MeshPhongMaterial({ color: 0xfffffff });
        const line = new THREE.Mesh(lineGeometry, lineMaterial);
        line.position.set(-190 + i*15.3,0,95);
        group.add(line);
    }

    for (let i = 0; i < 26; i++) {
        const lineGeometry = new THREE.BoxGeometry(15,1.2,10);
        const lineMaterial = new THREE.MeshPhongMaterial({ color: 0xfffffff });
        const line = new THREE.Mesh(lineGeometry, lineMaterial);
        line.position.set(-190 + i*15.3,0,145);
        group.add(line);
    }

    const houseWalkGeometry = new THREE.BoxGeometry(30,1,60);
    const houseWalkMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff});
    const houseWalk = new THREE.Mesh(houseWalkGeometry, houseWalkMaterial);
    houseWalk.position.set(45,0,60);

    const houseWalk2Geometry = new THREE.BoxGeometry(10,1,30);
    const houseWalk2Material = new THREE.MeshPhongMaterial({ color: 0xffffff});
    const houseWalk2 = new THREE.Mesh(houseWalk2Geometry, houseWalk2Material);
    houseWalk2.position.set(0,0,35);

    const houseWalk3Geometry = new THREE.BoxGeometry(30,1,10);
    const houseWalk3Material = new THREE.MeshPhongMaterial({ color: 0xffffff});
    const houseWalk3 = new THREE.Mesh(houseWalk3Geometry, houseWalk3Material);
    houseWalk3.position.set(15,0,45);


    group.add(base);
    group.add(houseWalk);
    group.add(houseWalk2);
    group.add(houseWalk3);
    return group;
}