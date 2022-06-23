AFRAME.registerComponent("treasure-coins",{
    
    init:function(){
        for (var i=1;i<10;i++){
            const id=`coin${i}`
            const posX = Math.random() * 100 + -50
            const posY = Math.random() * 5 + 5
            const posZ = Math.random() * 60 + -40
            const pos = { x: posX, y: posY, z: posZ }
            
            this.createCoins(id, pos)
        }
    },
    createCoins:function(id,pos){
        const treasureEntity = document.querySelector("#coinModel")
        var coinE1 = document.createElement("a-entity")
  
        coinE1.setAttribute("id", id)
        coinE1.setAttribute("position",pos)
        coinE1.setAttribute("material","color","#ff9100")
        coinE1.setAttribute("geometry",{primitive:"circle",radius:0.9})
        coinE1.setAttribute("animation",{
            property:"rotation",
            to:"0 360 0",
            loop:true,
            dur:2500
        })
        coinE1.setAttribute("static-body",{
            shape:"sphere",
            sphereRadius:5
        })

        coinE1.setAttribute("game-play",{
            elementId:`#${id}`
        })

        treasureEntity.appendChild(coinE1)
    }


})