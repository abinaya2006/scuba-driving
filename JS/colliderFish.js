AFRAME.registerComponent("fish", {
    
    init: function () {
      for (var i = 1; i <= 10; i++) {
        const id = `fish${i}`
  
        const posX = Math.random() * 100 + -50
        const posY = Math.random() * 5 + 5
        const posZ = Math.random() * 60 + -40
        const pos = { x: posX, y: posY, z: posZ }
        this.createFish(id, pos)
      }
    },
    createFish: function (id, pos) {
      const Fish = document.querySelector("#fishmodels")
      var fishE1 = document.createElement("a-entity")
  
      fishE1.setAttribute("id", id)
      fishE1.setAttribute("position", pos)
      fishE1.setAttribute("rotation", { x: 0, y: 180, z: 0 })
  
      fishE1.setAttribute("scale", { x: 0.2, y: 0.2, z: 0.2 })
  
      fishE1.setAttribute("gltf-model", "./model/fish/scene.gltf")
      fishE1.setAttribute("static-body",{
        shape:"sphere",
        sphereRadius:5
    })
  
      
      fishE1.setAttribute("animation", {
        property: "position",
        to: "110 10 -20",
        loop: "true",
        dur: 10000
      })
  
      fishE1.setAttribute("animation-mixer", {})
  
      Fish.appendChild(fishE1)
    }
  })
  