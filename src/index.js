import "./style.scss";
import './js/Example';
import Vue from 'vue';
import Example from './js/Example';
import Modal from './js/modals/Modal';
import 'bootstrap';
window.Vue = Vue;
window.$ = require('jquery');
var app = new Vue({
	'el': '#app',
	data: {
		title: 'Hello there yo'
	},
	components: {
		example: Example,
		modal: Modal
	}
});

console.log('a')


if (checkExists('test')) {
	var test = new Vue({
		'el': '#test'
	});
}

function checkExists(el) {
	return document.getElementById('test');
}