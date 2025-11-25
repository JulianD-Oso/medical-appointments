const API_URL = 'https://n8n.srv1065547.hstgr.cloud/webhook/api/appointment';
const PATIENTS_URL = 'https://n8n.srv1065547.hstgr.cloud/webhook/api/patients';
const DOCTORS_URL = 'https://n8n.srv1065547.hstgr.cloud/webhook/api/doctors';
const ACUDIENTE_URL = 'https://n8n.srv1065547.hstgr.cloud/webhook/api/acudiente';

function isFuture(localStr) {
  const d = new Date(localStr);
  const now = new Date();
  return d.getTime() >= now.getTime();
}

function formatLocalToIso(localStr) {
  const d = new Date(localStr);
  return d.toISOString();
}

export function createAppointmentForm(options = {}) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  const style = document.createElement('style');
  style.textContent = `
    .af-form h3 { margin: 0 0 8px 0; color: var(--color-primary, #00a093); font-family: 'Inter', sans-serif; }
    .af-input-wrapper { position: relative; }
    .af-field-icon { position: absolute; left: 10px; top: 50%; transform: translateY(-50%); font-size: 16px; color: var(--color-primary, #00a093); }
    .af-input { width: 100%; padding: 10px 12px 10px 34px; border: 1px solid var(--color-border, #cbd5e1); border-radius: 8px; outline: none; transition: box-shadow .2s, border-color .2s; background: var(--color-surface, #fff); color: var(--color-text-primary, #0f172a); }
    .af-input:focus { border-color: var(--color-primary, #00a093); box-shadow: 0 0 0 3px rgba(0,160,147,0.15); }
    .af-textarea { min-height: 90px; resize: vertical; }
    .af-select { appearance: none; background: var(--color-surface, #fff); color: var(--color-text-primary, #0f172a); }
    .af-help { display: block; font-size: 12px; color: var(--color-text-secondary, #64748b); margin-top: 6px; }
    .af-error { margin-top: 6px; color: var(--color-error, #c0392b); font-size: 12px; font-weight: 600; }
    .af-actions .btn { padding: 10px 14px; border-radius: 8px; }
    .af-actions .btn-primary { background: linear-gradient(135deg, var(--color-primary, #00bfae), var(--color-primary-hover, #00a093)); color: var(--color-text-inverse, #fff); border: 1px solid var(--color-primary, #00a093); }
    .af-actions .btn-primary:hover { background: linear-gradient(135deg, var(--color-primary-hover, #00a093), var(--color-primary, #00867a)); }
    .af-actions .btn-secondary { background: var(--color-background-secondary, #eef2f7); color: var(--color-text-primary, #0f172a); border: 1px solid var(--color-border, #cbd5e1); }
    .af-actions .btn-secondary:hover { background: var(--color-background-tertiary, #e2e8f0); }
    .modal-content { border-radius: 12px; box-shadow: 0 16px 40px var(--color-shadow, rgba(0,0,0,0.25)); background: var(--color-surface, #fff); }
    .modal-grid { grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); }
    .modal-item { border: 1px solid var(--color-border, #eef2f7); }
    .modal-label { display: flex; align-items: center; gap: 8px; color: var(--color-text-primary, #0f172a); }
    
    /* Estilos específicos para tema oscuro */
    [data-theme="dark"] .af-input { background: var(--color-surface, #1f2937); color: var(--color-text-primary, #f9fafb); border-color: var(--color-border, #374151); }
    [data-theme="dark"] .af-input:focus { border-color: var(--color-primary, #3b82f6); box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15); }
    [data-theme="dark"] .af-select { background: var(--color-surface, #1f2937); color: var(--color-text-primary, #f9fafb); border-color: var(--color-border, #374151); }
    [data-theme="dark"] .af-textarea { background: var(--color-surface, #1f2937); color: var(--color-text-primary, #1f2937); border-color: var(--color-border, #374151); }
    [data-theme="dark"] .modal-content { background: var(--color-surface, #1f2937); }
    [data-theme="dark"] .modal-label { color: var(--color-text-primary, #f9fafb); }
    [data-theme="dark"] .af-help { color: var(--color-text-secondary, #9ca3af); }
    [data-theme="dark"] .af-field-icon { color: var(--color-text-secondary, #9ca3af); }
    [data-theme="dark"] .modal-item { border-color: var(--color-border, #374151); }
    [data-theme="dark"] .af-actions .btn-secondary { background: var(--color-background-tertiary, #374151); color: var(--color-text-primary, #f9fafb); border-color: var(--color-border, #4b5563); }
    [data-theme="dark"] .af-actions .btn-secondary:hover { background: var(--color-border, #4b5563); }
    [data-theme="dark"] .af-actions .btn-primary { background: linear-gradient(135deg, var(--color-primary, #3b82f6), var(--color-primary-hover, #2563eb)); border-color: var(--color-primary, #3b82f6); }
    [data-theme="dark"] .af-actions .btn-primary:hover { background: linear-gradient(135deg, var(--color-primary-hover, #2563eb), var(--color-primary, #1d4ed8)); }
    [data-theme="dark"] .modal-overlay { background: rgba(0, 0, 0, 0.8); }
    [data-theme="dark"] .modal-close { color: var(--color-text-secondary, #9ca3af); }
    [data-theme="dark"] .modal-close:hover { color: var(--color-text-primary, #f9fafb); }
    [data-theme="dark"] .af-error { color: var(--color-error, #f87171); }
    [data-theme="dark"] #appointmentStatus { color: var(--color-error, #f87171); }
    
    /* Mejoras de accesibilidad y contraste */
    .af-input:disabled { background: var(--color-disabled-background, #f3f4f6); color: var(--color-disabled, #9ca3af); }
    .af-select:disabled { background: var(--color-disabled-background, #f3f4f6); color: var(--color-disabled, #9ca3af); }
    .af-textarea:disabled { background: var(--color-disabled-background, #f3f4f6); color: var(--color-disabled, #9ca3af); }
    
    [data-theme="dark"] .af-input:disabled { background: var(--color-disabled-background, #374151); color: var(--color-disabled, #6b7280); }
    [data-theme="dark"] .af-select:disabled { background: var(--color-disabled-background, #374151); color: var(--color-disabled, #6b7280); }
    [data-theme="dark"] .af-textarea:disabled { background: var(--color-disabled-background, #374151); color: var(--color-disabled, #6b7280); }
    
    /* Placeholder styling */
    .af-input::placeholder { color: var(--color-text-tertiary, #9ca3af); }
    .af-textarea::placeholder { color: var(--color-text-tertiary, #9ca3af); }
    
    [data-theme="dark"] .af-input::placeholder { color: var(--color-text-tertiary, #6b7280); }
    [data-theme="dark"] .af-textarea::placeholder { color: var(--color-text-tertiary, #6b7280); }
  `;
  overlay.appendChild(style);
  const modal = document.createElement('div');
  modal.className = 'modal-content';
  const closeBtn = document.createElement('button');
  closeBtn.className = 'modal-close';
  closeBtn.textContent = '×';
  closeBtn.style.cssText = 'background: none; border: none; font-size: 24px; cursor: pointer; padding: 0; line-height: 1; color: var(--color-text-secondary, #9ca3af);';
  const title = document.createElement('h3');
  title.textContent = 'Crear nueva cita';
  const form = document.createElement('form');
  form.id = 'appointmentForm';
  form.className = 'af-form';
  const grid = document.createElement('div');
  grid.className = 'modal-grid';
  const status = document.createElement('div');
  status.id = 'appointmentStatus';
  status.style.marginTop = '8px';
  status.style.color = 'var(--color-error, #c0392b)';
  const actions = document.createElement('div');
  actions.style.display = 'flex';
  actions.style.justifyContent = 'flex-end';
  actions.style.gap = '8px';
  actions.className = 'af-actions';
  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.className = 'btn btn-primary';
  submitBtn.textContent = 'Guardar';
  const cancelBtn = document.createElement('button');
  cancelBtn.type = 'button';
  cancelBtn.className = 'btn btn-secondary';
  cancelBtn.textContent = 'Cancelar';

  const fechaItem = document.createElement('div');
  fechaItem.className = 'modal-item';
  const fechaLabel = document.createElement('label');
  fechaLabel.className = 'modal-label';
  fechaLabel.textContent = 'Fecha';
  const fechaInput = document.createElement('input');
  fechaInput.type = 'datetime-local';
  fechaInput.id = 'ap_fecha';
  fechaInput.required = true;
  const fechaWrap = document.createElement('div');
  fechaWrap.className = 'af-input-wrapper';
  const fechaIcon = document.createElement('span');
  fechaIcon.className = 'af-field-icon';
  fechaIcon.textContent = '';
  fechaInput.className = 'af-input';
  const fechaErr = document.createElement('div');
  fechaErr.className = 'af-error';
  fechaErr.id = 'err_ap_fecha';
  const fechaHelp = document.createElement('small');
  fechaHelp.className = 'af-help';
  fechaHelp.textContent = 'Formato: 2025-11-11T20:13:21.833Z';
  fechaWrap.appendChild(fechaIcon);
  fechaWrap.appendChild(fechaInput);
  fechaItem.appendChild(fechaLabel);
  fechaItem.appendChild(fechaWrap);
  fechaItem.appendChild(fechaHelp);
  fechaItem.appendChild(fechaErr);

  const motivoItem = document.createElement('div');
  motivoItem.className = 'modal-item';
  const motivoLabel = document.createElement('label');
  motivoLabel.className = 'modal-label';
  motivoLabel.textContent = 'Motivo';
  const motivoInput = document.createElement('input');
  motivoInput.type = 'text';
  motivoInput.id = 'ap_motivo';
  motivoInput.required = true;
  const motivoWrap = document.createElement('div');
  motivoWrap.className = 'af-input-wrapper';
  const motivoIcon = document.createElement('span');
  motivoIcon.className = 'af-field-icon';
  motivoIcon.textContent = '';
  motivoInput.className = 'af-input';
  const motivoErr = document.createElement('div');
  motivoErr.className = 'af-error';
  motivoErr.id = 'err_ap_motivo';
  motivoWrap.appendChild(motivoIcon);
  motivoWrap.appendChild(motivoInput);
  motivoItem.appendChild(motivoLabel);
  motivoItem.appendChild(motivoWrap);
  motivoItem.appendChild(motivoErr);

  const detalleItem = document.createElement('div');
  detalleItem.className = 'modal-item';
  const detalleLabel = document.createElement('label');
  detalleLabel.className = 'modal-label';
  detalleLabel.textContent = 'Detalle';
  const detalleInput = document.createElement('textarea');
  detalleInput.id = 'ap_detalle';
  detalleInput.rows = 3;
  const detalleWrap = document.createElement('div');
  detalleWrap.className = 'af-input-wrapper';
  const detalleIcon = document.createElement('span');
  detalleIcon.className = 'af-field-icon';
  detalleIcon.textContent = '';
  detalleInput.className = 'af-input af-textarea';
  const detalleErr = document.createElement('div');
  detalleErr.className = 'af-error';
  detalleErr.id = 'err_ap_detalle';
  detalleWrap.appendChild(detalleIcon);
  detalleWrap.appendChild(detalleInput);
  detalleItem.appendChild(detalleLabel);
  detalleItem.appendChild(detalleWrap);
  detalleItem.appendChild(detalleErr);

  const totalItem = document.createElement('div');
  totalItem.className = 'modal-item';
  const totalLabel = document.createElement('label');
  totalLabel.className = 'modal-label';
  totalLabel.textContent = 'Valor total';
  const totalInput = document.createElement('input');
  totalInput.type = 'number';
  totalInput.step = '0.01';
  totalInput.id = 'ap_total';
  totalInput.required = true;
  const totalWrap = document.createElement('div');
  totalWrap.className = 'af-input-wrapper';
  const totalIcon = document.createElement('span');
  totalIcon.className = 'af-field-icon';
  totalIcon.textContent = '';
  totalInput.className = 'af-input';
  const totalErr = document.createElement('div');
  totalErr.className = 'af-error';
  totalErr.id = 'err_ap_total';
  totalWrap.appendChild(totalIcon);
  totalWrap.appendChild(totalInput);
  totalItem.appendChild(totalLabel);
  totalItem.appendChild(totalWrap);
  totalItem.appendChild(totalErr);

  const abonoItem = document.createElement('div');
  abonoItem.className = 'modal-item';
  const abonoLabel = document.createElement('label');
  abonoLabel.className = 'modal-label';
  abonoLabel.textContent = 'Valor abonado';
  const abonoInput = document.createElement('input');
  abonoInput.type = 'number';
  abonoInput.step = '0.01';
  abonoInput.id = 'ap_abono';
  const abonoWrap = document.createElement('div');
  abonoWrap.className = 'af-input-wrapper';
  const abonoIcon = document.createElement('span');
  abonoIcon.className = 'af-field-icon';
  abonoIcon.textContent = '';
  abonoInput.className = 'af-input';
  const abonoErr = document.createElement('div');
  abonoErr.className = 'af-error';
  abonoErr.id = 'err_ap_abono';
  abonoWrap.appendChild(abonoIcon);
  abonoWrap.appendChild(abonoInput);
  abonoItem.appendChild(abonoLabel);
  abonoItem.appendChild(abonoWrap);
  abonoItem.appendChild(abonoErr);

  const restanteItem = document.createElement('div');
  restanteItem.className = 'modal-item';
  const restanteLabel = document.createElement('label');
  restanteLabel.className = 'modal-label';
  restanteLabel.textContent = 'Valor restante';
  const restanteInput = document.createElement('input');
  restanteInput.type = 'number';
  restanteInput.step = '0.01';
  restanteInput.id = 'ap_restante';
  restanteInput.readOnly = true;
  const restanteWrap = document.createElement('div');
  restanteWrap.className = 'af-input-wrapper';
  const restanteIcon = document.createElement('span');
  restanteIcon.className = 'af-field-icon';
  restanteIcon.textContent = '';
  restanteInput.className = 'af-input';
  restanteWrap.appendChild(restanteIcon);
  restanteWrap.appendChild(restanteInput);
  restanteItem.appendChild(restanteLabel);
  restanteItem.appendChild(restanteWrap);

  const comentariosItem = document.createElement('div');
  comentariosItem.className = 'modal-item';
  const comentariosLabel = document.createElement('label');
  comentariosLabel.className = 'modal-label';
  comentariosLabel.textContent = 'Comentarios';
  const comentariosInput = document.createElement('textarea');
  comentariosInput.id = 'ap_comentarios';
  comentariosInput.rows = 3;
  const comentariosWrap = document.createElement('div');
  comentariosWrap.className = 'af-input-wrapper';
  const comentariosIcon = document.createElement('span');
  comentariosIcon.className = 'af-field-icon';
  comentariosIcon.textContent = '';
  comentariosInput.className = 'af-input af-textarea';
  comentariosWrap.appendChild(comentariosIcon);
  comentariosWrap.appendChild(comentariosInput);
  comentariosItem.appendChild(comentariosLabel);
  comentariosItem.appendChild(comentariosWrap);

  const pacienteItem = document.createElement('div');
  pacienteItem.className = 'modal-item';
  const pacienteLabel = document.createElement('label');
  pacienteLabel.className = 'modal-label';
  pacienteLabel.textContent = 'Paciente';
  const pacienteSelect = document.createElement('select');
  pacienteSelect.id = 'ap_paciente';
  pacienteSelect.required = true;
  const pacienteWrap = document.createElement('div');
  pacienteWrap.className = 'af-input-wrapper';
  const pacienteIcon = document.createElement('span');
  pacienteIcon.className = 'af-field-icon';
  pacienteIcon.textContent = '';
  pacienteSelect.className = 'af-input af-select';
  const pacienteErr = document.createElement('div');
  pacienteErr.className = 'af-error';
  pacienteErr.id = 'err_ap_paciente';
  pacienteWrap.appendChild(pacienteIcon);
  pacienteWrap.appendChild(pacienteSelect);
  pacienteItem.appendChild(pacienteLabel);
  pacienteItem.appendChild(pacienteWrap);
  pacienteItem.appendChild(pacienteErr);

  const doctoraItem = document.createElement('div');
  doctoraItem.className = 'modal-item';
  const doctoraLabel = document.createElement('label');
  doctoraLabel.className = 'modal-label';
  doctoraLabel.textContent = 'Doctora';
  const doctoraSelect = document.createElement('select');
  doctoraSelect.id = 'ap_doctora';
  doctoraSelect.required = true;
  const doctoraWrap = document.createElement('div');
  doctoraWrap.className = 'af-input-wrapper';
  const doctoraIcon = document.createElement('span');
  doctoraIcon.className = 'af-field-icon';
  doctoraIcon.textContent = '';
  doctoraSelect.className = 'af-input af-select';
  const doctoraErr = document.createElement('div');
  doctoraErr.className = 'af-error';
  doctoraErr.id = 'err_ap_doctora';
  doctoraWrap.appendChild(doctoraIcon);
  doctoraWrap.appendChild(doctoraSelect);
  doctoraItem.appendChild(doctoraLabel);
  doctoraItem.appendChild(doctoraWrap);
  doctoraItem.appendChild(doctoraErr);

  const acudienteItem = document.createElement('div');
  acudienteItem.className = 'modal-item';
  const acudienteLabel = document.createElement('label');
  acudienteLabel.className = 'modal-label';
  acudienteLabel.textContent = 'Acudiente (opcional)';
  const acudienteSelect = document.createElement('select');
  acudienteSelect.id = 'ap_acudiente';
  const acudienteWrap = document.createElement('div');
  acudienteWrap.className = 'af-input-wrapper';
  const acudienteIcon = document.createElement('span');
  acudienteIcon.className = 'af-field-icon';
  acudienteIcon.textContent = '';
  acudienteSelect.className = 'af-input af-select';
  acudienteWrap.appendChild(acudienteIcon);
  acudienteWrap.appendChild(acudienteSelect);
  acudienteItem.appendChild(acudienteLabel);
  acudienteItem.appendChild(acudienteWrap);

  grid.appendChild(fechaItem);
  grid.appendChild(motivoItem);
  grid.appendChild(detalleItem);
  grid.appendChild(totalItem);
  grid.appendChild(abonoItem);
  grid.appendChild(restanteItem);
  grid.appendChild(comentariosItem);
  grid.appendChild(pacienteItem);
  grid.appendChild(doctoraItem);
  grid.appendChild(acudienteItem);

  actions.appendChild(cancelBtn);
  actions.appendChild(submitBtn);
  form.appendChild(grid);
  form.appendChild(status);
  form.appendChild(actions);
  modal.appendChild(closeBtn);
  modal.appendChild(title);
  modal.appendChild(form);
  overlay.appendChild(modal);

  function computeRestante() {
    const t = parseFloat(totalInput.value || '0');
    const a = parseFloat(abonoInput.value || '0');
    const r = Math.max(0, t - a);
    restanteInput.value = isNaN(r) ? '' : String(r.toFixed(2));
  }

  totalInput.addEventListener('input', computeRestante);
  abonoInput.addEventListener('input', computeRestante);
  function validateField(id, valid, message) {
    const el = document.getElementById('err_' + id);
    if (!el) return true;
    el.textContent = valid ? '' : message;
    const input = document.getElementById(id);
    if (input) input.setAttribute('aria-invalid', valid ? 'false' : 'true');
    return valid;
  }

  fechaInput.addEventListener('input', () => {
    const v = fechaInput.value;
    const ok = !!v && !isNaN(new Date(v).getTime()) && isFuture(v);
    validateField('ap_fecha', ok, 'Seleccione una fecha válida en el futuro.');
  });
  motivoInput.addEventListener('input', () => {
    const v = motivoInput.value.trim();
    validateField('ap_motivo', v.length > 0, 'El motivo es requerido.');
  });
  detalleInput.addEventListener('input', () => {
    const v = detalleInput.value.trim();
    validateField('ap_detalle', v.length > 0, 'El detalle es requerido.');
  });
  totalInput.addEventListener('input', () => {
    const v = parseFloat(totalInput.value);
    validateField('ap_total', !isNaN(v) && v > 0, 'Ingrese un valor total válido.');
  });
  abonoInput.addEventListener('input', () => {
    const v = parseFloat(abonoInput.value || '0');
    const t = parseFloat(totalInput.value || '0');
    validateField('ap_abono', !isNaN(v) && v >= 0 && v <= t, 'El abono no puede exceder el total.');
  });
  pacienteSelect.addEventListener('change', () => {
    const ok = !!pacienteSelect.value;
    validateField('ap_paciente', ok, 'Seleccione un paciente.');
  });
  doctoraSelect.addEventListener('change', () => {
    const ok = !!doctoraSelect.value;
    validateField('ap_doctora', ok, 'Seleccione una doctora.');
  });

  const focusablesQuery = 'button, [href], input, select, textarea';
  function trapFocus(e) {
    if (e.key !== 'Tab') return;
    const focusables = modal.querySelectorAll(focusablesQuery);
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
  overlay.addEventListener('keydown', trapFocus);
  overlay.addEventListener('keydown', (e) => { if (e.key === 'Escape') { if (options.onClose) options.onClose(); overlay.remove(); } });

  closeBtn.addEventListener('click', () => {
    if (options.onClose) options.onClose();
    overlay.remove();
  });
  cancelBtn.addEventListener('click', () => {
    if (options.onClose) options.onClose();
    overlay.remove();
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.style.color = 'var(--color-error, #c0392b)';
    status.textContent = '';
    const fechaVal = fechaInput.value;
    const motivoVal = motivoInput.value.trim();
    const detalleVal = detalleInput.value.trim();
    const totalVal = parseFloat(totalInput.value);
    const abonoVal = parseFloat(abonoInput.value || '0');
    const restanteVal = parseFloat(restanteInput.value || '0');
    const comentariosVal = comentariosInput.value.trim();
    const pacienteId = pacienteSelect.value;
    const doctoraId = doctoraSelect.value;
    const acudienteId = acudienteSelect.value || null;
    const vFecha = !!fechaVal && !isNaN(new Date(fechaVal).getTime()) && isFuture(fechaVal);
    const vMotivo = motivoVal.length > 0;
    const vDetalle = detalleVal.length > 0;
    const vTotal = !isNaN(totalVal) && totalVal > 0;
    const vAbono = !isNaN(abonoVal) && abonoVal >= 0 && abonoVal <= totalVal;
    const vPaciente = !!pacienteId;
    const vDoctora = !!doctoraId;
    validateField('ap_fecha', vFecha, 'Seleccione una fecha válida en el futuro.');
    validateField('ap_motivo', vMotivo, 'El motivo es requerido.');
    validateField('ap_detalle', vDetalle, 'El detalle es requerido.');
    validateField('ap_total', vTotal, 'Ingrese un valor total válido.');
    validateField('ap_abono', vAbono, 'El abono no puede exceder el total.');
    validateField('ap_paciente', vPaciente, 'Seleccione un paciente.');
    validateField('ap_doctora', vDoctora, 'Seleccione una doctora.');
    if (!(vFecha && vMotivo && vDetalle && vTotal && vAbono && vPaciente && vDoctora)) {
      status.textContent = 'Complete los campos requeridos.';
      return;
    }
    submitBtn.disabled = true;
    submitBtn.textContent = 'Guardando...';
    try {
      const payload = {
        fecha: formatLocalToIso(fechaVal),
        motivo: motivoVal,
        detalle: detalleVal,
        valor_total: Number(totalVal),
        valor_abono: Number(abonoVal),
        valor_restante: Number(restanteVal),
        comentarios: comentariosVal,
        id_paciente: parseInt(pacienteId, 10),
        id_doctora: parseInt(doctoraId, 10),
        id_acudiente: acudienteId ? parseInt(acudienteId, 10) : null
      };
      const resp = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!resp.ok) throw new Error('Error al crear la cita');
      if (options.onSuccess) options.onSuccess();
      overlay.remove();
    } catch (err) {
      status.textContent = 'No se pudo crear la cita.';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Guardar';
    }
  });

  (async () => {
    try {
      const [patientsResp, doctorsResp, acudienteResp] = await Promise.all([
        fetch(PATIENTS_URL),
        fetch(DOCTORS_URL),
        fetch(ACUDIENTE_URL)
      ]);
      const patients = patientsResp.ok ? await patientsResp.json() : [];
      const doctors = doctorsResp.ok ? await doctorsResp.json() : [];
      const acudientes = acudienteResp.ok ? await acudienteResp.json() : [];
      pacienteSelect.innerHTML = '<option value="">Seleccione paciente</option>' +
        patients.map(p => `<option value="${p.id_paciente}">${p.nombre} (${p.numero_identificacion || ''})</option>`).join('');
      doctoraSelect.innerHTML = '<option value="">Seleccione doctora</option>' +
        doctors.map(d => `<option value="${d.id_doctoras}">${d.nombre} (${d.cedula || ''})</option>`).join('');
      const acudienteOptions = acudientes.map(a => {
        const val = a.id_acudiente !== undefined ? a.id_acudiente : '';
        const label = `${a.nombre || ''} (${a.numero_identificacion || ''})`;
        return `<option value="${val}">${label}</option>`;
      }).join('');
      acudienteSelect.innerHTML = '<option value="">Sin acudiente</option>' + acudienteOptions;
    } catch {
      pacienteSelect.innerHTML = '<option value="">Seleccione paciente</option>';
      doctoraSelect.innerHTML = '<option value="">Seleccione doctora</option>';
      acudienteSelect.innerHTML = '<option value="">Sin acudiente</option>';
    }
  })();

  const now = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  const yyyy = now.getFullYear();
  const mm = pad(now.getMonth() + 1);
  const dd = pad(now.getDate());
  const hh = pad(now.getHours());
  const min = pad(now.getMinutes());
  fechaInput.value = `${yyyy}-${mm}-${dd}T${hh}:${min}`;
  setTimeout(() => fechaInput.focus(), 0);

  return overlay;
}

export { formatLocalToIso, isFuture };