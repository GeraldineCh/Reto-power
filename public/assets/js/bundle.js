(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const Header = () => {
    const header = $('<header><div class="container"></div></header>');
    const title = $('<h1 class="center-align">Estado participate</h1>');
    const peso = $('<div class="input-field col s12"></div>');
    const peso1 = $('<label for="pesoInicial">Peso: </label>');
    const peso2 = $('<input id="pesoInicial" type="text" class="validate">');
    const peso3 = $('<span><br>*Mínimo 40kg, máx. 200kg.</span>');
    const talla = $('<div class="input-field col s12"></div>');
    const talla1 = $('<label for="talla">Talla: </label>');
    const talla2 = $('<input id="talla" type="text" class="validate">');
    const talla3 = $('<span><br>*Mínimo 50cm, máx. 250cm</span>');
    const meta = $('<div class="input-field col s12"></div>');
    const meta1 = $('<label for="meta">Meta de peso: </label>');
    const meta2 = $('<input disabled id="meta" type="text" class="validate">');
    const fuma = $('<div class="input-field col s12"></div>');
    const fuma1 = $('<label for="fuma">¿Fuma? </label>');
    const fuma2 = $('<input name="group1" type="radio" id="fumaSi"/><label for="test1">Sí</label>');
    const fuma3 = $('<input name="group1" type="radio" id="fumaNo"/><label for="test1">No</label>');
    const cantidad = $('<div class="input-field col s12"></div>');
    const cantidad1 = $('<label for="fuma">¿Con qué frecuencia fuma? </label>');
    const cantidad2 = $('<input name="group2" type="radio" id="fumaDiario"/><label for="test1">Diario</label>');
    const cantidad3 = $('<input name="group2" type="radio" id="fumaInterdiario"/><label for="test1">Interdiario</label>');
    
    header.append(title);
 
 peso.append(peso1);
 peso.append(peso2);
 peso.append(peso3);
 
 talla.append(talla1);
 talla.append(talla2);
 talla.append(talla3);
 
 meta.append(meta1);
 meta.append(meta2);
 
 fuma.append(fuma1);
 fuma.append(fuma2);
 fuma.append(fuma3);
 
 cantidad.append(cantidad1);
 cantidad.append(cantidad2);
 cantidad.append(cantidad3);
    
 header.append(peso);
 header.append(talla);
 header.append(meta);
 header.append(fuma);
 header.append(cantidad);
 
    return header;
}
'use strict';

const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');
    wrapper.append(Header());
    root.append(wrapper);
}

const state = {
    user: null,
};

$( _ => {
    const root = $('#root');
    render(root);
});
},{}]},{},[1])