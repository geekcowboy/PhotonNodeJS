# Photon_NodeJS
Demo code of using a Particle.io Photon, node.js and HTML to interact with a Photon via a webpage

This is a proof of concept repository to show how to use a particle.io Photon with node.js and HTML.
As for hardware, uses a simple photoresistor and a fixed resistor to create a voltage divider that lets the 
Photon measure the brightness of the ambient light.

Allows for 3 interactions:

1) Automatic update of webpage text showing the user whether the it is bright or dark
2) User can press a button to request the raw analog value from the Photon ADC
3) Using radio buttons, the user can toggle the LED connected to pin D7

IMPORTANT:  Remember to edit the Photon Server/index.html file with your token keys!!! (total of 4 changes)
