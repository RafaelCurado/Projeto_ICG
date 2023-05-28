import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';

export async function load(scene) {
    const loader = new GLTFLoader();

    var models = [];

    await loader.load('./models/homer_car/scene.gltf', (gltfScene) => {
        var car = gltfScene;
        car.scene.position.set(45,4,60);
        car.scene.scale.set(2,2,2);
        // let carMesh;
        // car.scene.traverse((child) => {
        //  	if(child.isMesh) {
        //  		carMesh = child;
        //  		carMesh.castShadow = true;
        //  		carMesh.receiveShadow = true;
        //  	}
        //  });
        scene.add(car.scene);
    });

    await loader.load('./models/green_car/scene.gltf', (gltfScene) => {
        var green_car = gltfScene;
        green_car.scene.position.set(-80,8,130);
        green_car.scene.scale.set(36,36,36);
        green_car.scene.rotation.y = Math.PI / 2;
        // let carMesh;
        // car.scene.traverse((child) => {
        //  	if(child.isMesh) {
        //  		carMesh = child;
        //  		carMesh.castShadow = true;
        //  		carMesh.receiveShadow = true;
        //  	}
        //  });
        //scene.add(green_car.scene);
    });


    
    await loader.load('./models/tree/scene.gltf', async (gltfScene) =>  {
        let tree = gltfScene;
        tree.scene.position.set(-16,0,-40);
        tree.scene.scale.set(7,7,7);
        // let treeMesh;
        // await tree.scene.traverse((child) => {
        //     if(child.isMesh) {
        //         treeMesh = child;
        //         treeMesh.castShadow = true;
        //         treeMesh.receiveShadow = true;
        //     }
        // });
        scene.add(tree.scene);
    });

    await loader.load('./models/tree/scene.gltf', async (gltfScene) =>  {
        let tree1 = gltfScene;
        tree1.scene.position.set(-90,0,-40);
        tree1.scene.scale.set(10,10,10);
        // let treeMesh;
        // await tree.scene.traverse((child) => {
        //     if(child.isMesh) {
        //         treeMesh = child;
        //         treeMesh.castShadow = true;
        //         treeMesh.receiveShadow = true;
        //     }
        // });
        scene.add(tree1.scene);
    });

    await loader.load('./models/tree1/scene.gltf', async (gltfScene) =>  {
        let tree2 = gltfScene;
        tree2.scene.position.set(-60,0,-90);
        tree2.scene.scale.set(45,45,45);
        // let treeMesh;
        // await tree.scene.traverse((child) => {
        //     if(child.isMesh) {
        //         treeMesh = child;
        //         treeMesh.castShadow = true;
        //         treeMesh.receiveShadow = true;
        //     }
        // });
        scene.add(tree2.scene);
    });

    await loader.load('./models/tree1/scene.gltf', async (gltfScene) =>  {
        let tree3 = gltfScene;
        tree3.scene.position.set(120,0,-60);
        tree3.scene.scale.set(45,45,45);
        // let treeMesh;
        // await tree.scene.traverse((child) => {
        //     if(child.isMesh) {
        //         treeMesh = child;
        //         treeMesh.castShadow = true;
        //         treeMesh.receiveShadow = true;
        //     }
        // });
        scene.add(tree3.scene);
    });

    

    await loader.load('./models/tree/scene.gltf', async (gltfScene) =>  {
        let tree4 = gltfScene;
        tree4.scene.position.set(90,0,-115);
        tree4.scene.scale.set(14,14,14);
        // let treeMesh;
        // await tree.scene.traverse((child) => {
        //     if(child.isMesh) {
        //         treeMesh = child;
        //         treeMesh.castShadow = true;
        //         treeMesh.receiveShadow = true;
        //     }
        // });
        scene.add(tree4.scene);
    });

    await loader.load('./models/tree1/scene.gltf', async (gltfScene) =>  {
        let tree5 = gltfScene;
        tree5.scene.position.set(-10,0,-90);
        tree5.scene.scale.set(55,55,55);
        // let treeMesh;
        // await tree.scene.traverse((child) => {
        //     if(child.isMesh) {
        //         treeMesh = child;
        //         treeMesh.castShadow = true;
        //         treeMesh.receiveShadow = true;
        //     }
        // });
        scene.add(tree5.scene);
    });

    await loader.load('./models/bush1/scene.gltf', async (gltfScene) =>  {
        let bush1 = gltfScene;
        bush1.scene.position.set(0,-8,33);
        bush1.scene.scale.set(10,10,10);
        // let treeMesh;
        // await tree.scene.traverse((child) => {
        //     if(child.isMesh) {
        //         treeMesh = child;
        //         treeMesh.castShadow = true;
        //         treeMesh.receiveShadow = true;
        //     }
        // });
        scene.add(bush1.scene);
    });
    

    await loader.load('./models/bush1/scene.gltf', async (gltfScene) =>  {
        let bush2 = gltfScene;
        bush2.scene.position.set(20,-8,33);
        bush2.scene.scale.set(10,10,10);
        // let treeMesh;
        // await tree.scene.traverse((child) => {
        //     if(child.isMesh) {
        //         treeMesh = child;
        //         treeMesh.castShadow = true;
        //         treeMesh.receiveShadow = true;
        //     }
        // });
        scene.add(bush2.scene);
    });

    await loader.load('./models/mail_box/scene.gltf', async (gltfScene) =>  {
        let mail_box = gltfScene;
        mail_box.scene.position.set(20,0,80);
        mail_box.scene.scale.set(9,9,9);
        mail_box.scene.rotation.y =  Math.PI / 2;;
        let mail_boxMesh;
        await mail_box.scene.traverse((child) => {
            if(child.isMesh) {
                mail_boxMesh = child;
                mail_boxMesh.castShadow = true;
                mail_boxMesh.receiveShadow = true;
            }
        });
        scene.add(mail_box.scene);
    });

    
	await loader.load('./models/omer/scene.gltf', async(gltfScene) =>  {
        let omer = gltfScene;
        omer.scene.position.set(10,2,7);
        omer.scene.scale.set(6,6,6);
        omer.scene.rotation.y =  Math.PI /2;
        // let omerMesh;
        // await omer.scene.traverse((child) => {
        //     if(child.isMesh) {
        //         omerMesh = child;
        //         omerMesh.castShadow = true;
        //         omerMesh.receiveShadow = true;
        //     }
        //     });
        scene.add(omer.scene);
    });

    // await loader.load('./models/doctor/scene.gltf', async(gltfScene) =>  {
    //     let doctor = gltfScene;
    //     doctor.scene.position.set(0,8,50);
    //     doctor.scene.scale.set(0.3,0.3,0.3);
    //     //doctor.scene.rotation.y =  Math.PI ;;
    //     // let doctorMesh;
    //     // await doctor.scene.traverse((child) => {
    //     //     if(child.isMesh) {
    //     //         doctorMesh = child;
    //     //         doctorMesh.castShadow = true;
    //     //         doctorMesh.receiveShadow = true;
    //     //     }
    //     //     });
    //     scene.add(doctor.scene);

    //     const mixer = new THREE.AnimationMixer(doctor.scene);
    //     const walkAnimation = mixer.clipAction(gltfScene.animations[0]);
    //     walkAnimation.play();

    //     scene.add(mixer);
    // });
    

    await loader.load('./models/sofa/scene.gltf', async(gltfScene) =>  {
        let sofa = gltfScene;
        sofa.scene.position.set(0,2,-2);
        sofa.scene.scale.set(3,3,3);
        sofa.scene.rotation.y =  Math.PI ;;
        // let sofaMesh;
        // await sofa.scene.traverse((child) => {
        //     if(child.isMesh) {
        //         sofaMesh = child;
        //         sofaMesh.castShadow = true;
        //         sofaMesh.receiveShadow = true;
        //     }
        //     });
        scene.add(sofa.scene);
    });

    await loader.load('./models/antena/scene.gltf', async(gltfScene) =>  {
        let antena = gltfScene;
        antena.scene.position.set(-15,50,14);
        antena.scene.scale.set(24,24,24);
        antena.scene.rotation.y =  Math.PI ;;
        // let antenaMesh;
        // await antena.scene.traverse((child) => {
        //     if(child.isMesh) {
        //         antenaMesh = child;
        //         antenaMesh.castShadow = true;
        //         antenaMesh.receiveShadow = true;
        //     }
        //     });
        scene.add(antena.scene);
    });

    await loader.load('./models/tv/scene.gltf', async(gltfScene) =>  {
        let tv = gltfScene;
        tv.scene.position.set(0,1,-16);
        tv.scene.scale.set(0.4,0.4,0.4);
        //tv.scene.rotation.y =  Math.PI ;
        // let tvMesh;
        // await tv.scene.traverse((child) => {
        //     if(child.isMesh) {
        //         tvMesh = child;
        //         tvMesh.castShadow = true;
        //         tvMesh.receiveShadow = true;
        //     }
        //     });
        scene.add(tv.scene);
    });
    

    console.log(models.length)
    return models;
}