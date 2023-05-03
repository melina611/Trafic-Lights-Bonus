setInterval(traficLightsChangeColors, 10000)

function traficLightsChangeColors() {
    let traficLights = document.getElementById("changeLightsColor").style.backgroundColor
    if (traficLights === 'red') {
        document.getElementById("changeLightsColor").style.backgroundColor = 'yellow'
    } else if (traficLights === 'yellow') {
        document.getElementById("changeLightsColor").style.backgroundColor = 'green'
    } else {
        document.getElementById("changeLightsColor").style.backgroundColor = 'red'
    }
}
