const { ref, onBeforeUnmount } = Vue

const app = Vue.createApp({
  setup () {
    const progress = ref([
      { loading: false, percentage: 0 },
      { loading: false, percentage: 0 },
      { loading: false, percentage: 0 }
    ])
    
    const intervals = [ null, null, null ]

    function startComputing (id) {
      progress.value[ id ].loading = true
      progress.value[ id ].percentage = 0

      intervals[ id ] = setInterval(() => {
        progress.value[ id ].percentage += Math.floor(Math.random() * 8 + 10)
        if (progress.value[ id ].percentage >= 100) {
          clearInterval(intervals[ id ])
          progress.value[ id ].loading = false
        }
      }, 700)
    }

    onBeforeUnmount(() => {
      intervals.forEach(val => {
        clearInterval(val)
      })
    }) 
    return {
      tab: ref('hud'),
      splitterModel: ref(20),
      selection: ref([]),
      changemap: ref('Circle'),
      changefps: ref('Optimized'),
      progress,
      startComputing,
      outsidemap: ref(true),
      logo: ref(true),
      streets: ref(true),
      compass: ref(true),
      map: ref(true),
      mapBorders: ref(true),
      openMenuSounds: ref(true),
      resetHudSounds: ref(true),
      checklistSounds: ref(true),
      mapNotif: ref(true),
      lowFuel: ref(true),
      cinematicNotif: ref(true),
    }
    
  }
})

app.use(Quasar, { config: {} })
app.mount('#menu')

document.onkeyup = function (data) {
  if (data.key == 'Escape') {
    closeMenu()
  }
};

function closeMenu() {
  $("#openmenu").fadeOut(550);
  $.post('https://lj-menu/closeMenu');
}
function restartHud() {
  $.post('https://lj-hud/restartHud');
}
function showOutMap() {
  $.post('https://lj-hud/showOutMap');
}
function showBrand() {
  $.post('https://lj-brand/showBrand');
}
function openMenuSounds() {
  $.post('https://lj-hud/openMenuSounds');
}
function resetHudSounds() {
  $.post('https://lj-hud/resetHudSounds');
}
function checklistSounds() {
  $.post('https://lj-hud/checklistSounds');
}
function showMapNotif() {
  $.post('https://lj-hud/showMapNotif');
}
function showFuelAlert() {
  $.post('https://lj-hud/showFuelAlert');
}
function showCinematicNotif() {
  $.post('https://lj-hud/showCinematicNotif');
}
function dynamicHealth() {
  $.post('https://lj-hud/dynamicHealth');
}
function dynamicArmor() {
  $.post('https://lj-hud/dynamicArmor');
}
function dynamicHunger() {
  $.post('https://lj-hud/dynamicHunger');
}
function dynamicThirst() {
  $.post('https://lj-hud/dynamicThirst');
}
function dynamicStress() {
  $.post('https://lj-hud/dynamicStress');
}
function dynamicOxygen() {
  $.post('https://lj-hud/dynamicOxygen');
}
function dynamicEngine() {
  $.post('https://lj-hud/dynamicEngine');
}
function dynamicNitro() {
  $.post('https://lj-hud/dynamicNitro');
}
function ToggleMapShape() {
  $.post('https://lj-hud/ToggleMapShape');
}
function changeFPS() {
  $.post('https://lj-hud/changeFPS');
}
function ToggleMapBorders() {
  $.post('https://lj-hud/ToggleMapBorders');
}
function HideMap() {
  $.post('https://lj-hud/HideMap');
}
function HideCompass() {
  $.post('https://lj-compass/HideCompass');
}
function HideStreets() {
  $.post('https://lj-compass/HideStreets');
}
function cinematicMode() {
  $.post('https://lj-hud/cinematicMode');
}
function hideReticle() {
  $.post('https://lj-hud/hideReticle');
}

$(document).ready(function () {
  window.addEventListener("message", function (event) {
    switch (event.data.action) {
    case "open":
      Open(event.data);
      break;
    }
  });
});

Open = function (data) {
  $("#openmenu").fadeIn(150);
}
$('.closeMenu').click(() => {
  closeMenu()
});
$('.OutsideMap').click(() => {
  showOutMap()
});
$('.ShowBrand').click(() => {
  showBrand()
});
$('.ResetHud').click(() => {
  restartHud()
});
$('.MenuSound').click(() => {
  openMenuSounds()
});
$('.ResetSound').click(() => {
  resetHudSounds()
});
$('.CheckListSound').click(() => {
  checklistSounds()
});
$('.MapNotif').click(() => {
  showMapNotif()
});
$('.LowFuel').click(() => {
  showFuelAlert()
});
$('.CinematicNotif').click(() => {
  showCinematicNotif()
});
$('.Health').click(() => {
  dynamicHealth()
});
$('.Armor').click(() => {
  dynamicArmor()
});
$('.Hunger').click(() => {
  dynamicHunger()
});
$('.Thirst').click(() => {
  dynamicThirst()
});
$('.Stress').click(() => {
  dynamicStress()
});
$('.Oxygen').click(() => {
  dynamicOxygen()
});
$('.Engine').click(() => {
  dynamicEngine()
});
$('.Nitro').click(() => {
  dynamicNitro()
});
$('.FpsChange').click(() => {
  changeFPS()
});
$('.MapShape').click(() => {
  ToggleMapShape()
});
$('.MapBorders').click(() => {
  ToggleMapBorders()
});
$('.HideMap').click(() => {
  HideMap()
});
$('.HideCompass').click(() => {
  HideCompass()
});
$('.HideStreets').click(() => {
  HideStreets()
});
$('.Cinematic').click(() => {
  cinematicMode()
});
$('.HideReticle').click(() => {
  hideReticle()
});
