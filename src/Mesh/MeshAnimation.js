import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import * as noise from "./noise.js"

export default class MeshAnimation extends Component {
  componentDidMount() {

    var w = 320;
    var h = 240;
    var scl = 8;
    var cols, rows;
    var vertices;
    var mesh;
    var renderer;

    var terrain;
    var flying = 0;

    var easing = 0.05;
    var rotation = 0;
    var targetRotation = 0;

    var offsetEasing = 0.09;
    var offsetAdd = 0.1;
    var targetOffsetAdd = 0.09;

    var easeToNewValue = false;

    var mouseX = 0;
    var mouseY = 0;

    var windowInnerWidth = 0;
    var windowInnerHeight = 0;
    var windowOuterHeight = 0;

    var switchedToLandscape = false;

    var buttonHovered = false;
    var flickerInterval = null;

    function map(in_num, in_min, in_max, out_min, out_max) {
        return (in_num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    cols = w / scl;
    rows = h / scl;

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      20000
    );
    camera.position.z = 500;

    terrain = new Array(cols);
    for(var i = 0; i < cols; i++){
        terrain[i] = new Array(rows)
    }

    var yoff = flying;
    for (var y = 0; y < rows; y++){
      var xoff = 0;
        for(var x = 0; x < cols; x++){
            var value = noise.perlin2(xoff, yoff);
            terrain[x][y] = map(value, -1, 1, -30, 30);
            xoff += offsetAdd;
        }
        yoff += offsetAdd;
    }

    var geometry = new THREE.PlaneBufferGeometry( w, h, cols-1, rows-1);
    geometry.rotateX( - Math.PI / 2);

    vertices = geometry.attributes.position.array;

    for (var y = 0; y < rows; y++){
        for(var x = 0; x < cols; x++){
            var index = (y*cols+x)*3+1;
            vertices[index] = terrain[x][y];
        }
    }

    var meshMaterial = new THREE.MeshBasicMaterial({wireframe: true, transparent: true, color: "#808080"});
    meshMaterial.wireframeLinewidth = 1.0;
    mesh = new THREE.Mesh( geometry, meshMaterial);
    mesh.position.y = 53;
    mesh.rotation.x = Math.PI/6;
    mesh.rotation.y = Math.PI/4;

    scene.add( mesh );

    renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setClearColor( 0x000000, 0 );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    this.mount.appendChild(renderer.domElement);

    var animate = function() {

      setTimeout( function() {
          requestAnimationFrame( animate );
      }, 1000 / 30 );

      var deltaOffSet = targetOffsetAdd - offsetAdd;
      offsetAdd += deltaOffSet*offsetEasing;

      flying -= 0.01;
      var yoff = flying;
      for (var y = 0; y < rows; y++){
          var xoff = 0;
          for(var x = 0; x < cols; x++){
              var value = noise.simplex2(xoff, yoff);
              terrain[x][y] = map(value, -1, 1, -30, 30);
              xoff += offsetAdd;
          }
          yoff += offsetAdd;
      }

      for (var y = 0; y < rows; y++){
          for(var x = 0; x < cols; x++){
              var index = (y*cols+x)*3+1;
              vertices[index] = terrain[x][y];
          }
      }

      mesh.geometry.attributes.position.needsUpdate = true;

      if(windowOuterHeight < windowInnerWidth){
        if(windowInnerWidth <= 768){
          camera.position.z = 250;
        } else {
          camera.position.z = 220;
        }
      } else {

        if(windowInnerWidth < 768){
          camera.position.z = 450;
        } else {
          camera.position.z = 370;
        }
      }
      renderer.render(scene, camera);
    };
    animate();
  }
  render() {
    return <div ref={ref => (this.mount = ref)} />;
  }
}
