function log(name, ok) {
  console.log(`[citas.render] ${ok ? 'OK' : 'FAIL'}: ${name}`);
}

export function runCitasRenderTest() {
  const loading = document.getElementById('loadingScreen');
  const main = document.getElementById('mainContent');
  const table = document.querySelector('table');
  const actions = document.querySelector('.actions');
  const btnNueva = document.getElementById('btnNuevaCita');

  log('loadingScreen exists', !!loading);
  log('mainContent exists', !!main);
  log('table exists', !!table);
  log('actions bar exists', !!actions);
  log('Nueva cita button exists', !!btnNueva);

  const mainVisible = main && (getComputedStyle(main).display !== 'none');
  log('mainContent is visible', !!mainVisible);

  log('Form component does not block initial render', !!mainVisible && !!btnNueva);
}