/*'use strict';

const Welcome = (update) => {
  const section = $('<section class="welcome__bg"></section>');
	const container = $('<div id="welcome" class="container center"></div>');

	const rowImage = $('<div class="logo"></div>');
	const rowBtn = $('<div class="welcome_btn contentButton row"></div>');
  const rowBtn1 = $('<div class="welcome_btn contentButton row"></div>');

	const btnSignUp = $('<button type="button" class="btn-welcome yellow waves-effect waves-light btn-large" name="button">Sign up</button>');
	const btnLogIn = $('<button type="button" class="btn-welcome yellow waves-effect waves-light btn-large" name="button">Log in</button>');

	rowBtn.append(btnSignUp);
  rowBtn1.append(btnLogIn);
	container.append(rowImage,rowBtn,rowBtn1);

	section.append(container);

  btnSignUp.on('click',(e) => {
    state.page = 1;
    update();
  });
  btnLogIn.on('click',(e) => {
    state.page = 1;
    update();
  });

  return section;
}
*/