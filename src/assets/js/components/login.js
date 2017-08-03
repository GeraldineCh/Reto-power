'use strict';

const Login = (update) => {
  const section = $('<section class="login__bg"></section>');
	const container = $('<div id="login" class="container center"></div>');

	const rowImage = $('<div class="logo"></div>');
  const divDni = $('<div class="input-field col s6">');
  const divPassword = $('<div class="input-field col s6">');

  const inputDni = $('<input placeholder="Ingrese Dni" id="loginDni" type="text" class="validate center-align">');
  const inputPassword = $('<input placeholder="Ingrese Password" id="loginPassword" type="password" class="validate center-align">');

  const labelDni = $('<h2 for="loginDni">DNI Number: </h2>');
  const labelPassword = $('<h2 for="loginPassword">Password :</h2>');


	divDni.append(labelDni,inputDni);
  divPassword.append(labelPassword,inputPassword);

	container.append(rowImage,divDni,divPassword);

	section.append(container);

  // inputDni.on('click',(e) => {
  //   state.page = 1;
  //   update();
  // });
  // inputPassword.on('click',(e) => {
  //   state.page = 1;
  //   update();
  // });

  return section;
}