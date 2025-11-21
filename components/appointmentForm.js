const API_URL = 'https://n8n.srv1065547.hstgr.cloud/webhook/api/appointment';
const PATIENTS_URL = 'https://n8n.srv1065547.hstgr.cloud/webhook/api/patients';
const DOCTORS_URL = 'https://n8n.srv1065547.hstgr.cloud/webhook/api/doctors';
const ACUDIENTE_URL = 'https://n8n.srv1065547.hstgr.cloud/webhook/api/acudiente';

export function createAppointmentForm(options = {}) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  const modal = document.createElement('div');
  modal.className = 'modal-content';
  const closeBtn = document.createElement('button');
  closeBtn.className = 'modal-close';
  closeBtn.textContent = '×';
  const title = document.createElement('h3');
  title.textContent = 'Crear nueva cita';
  const form = document.createElement('form');
  form.id = 'appointmentForm';
  const grid = document.createElement('div');
  grid.className = 'modal-grid';
  const status = document.createElement('div');
  status.id = 'appointmentStatus';
  status.style.marginTop = '8px';
  status.style.color = '#c0392b';
  const actions = document.createElement('div');
  actions.style.display = 'flex';
  actions.style.justifyContent = 'flex-end';
  actions.style.gap = '8px';
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
  fechaItem.appendChild(fechaLabel);
  fechaItem.appendChild(fechaInput);

  const motivoItem = document.createElement('div');
  motivoItem.className = 'modal-item';
  const motivoLabel = document.createElement('label');
  motivoLabel.className = 'modal-label';
  motivoLabel.textContent = 'Motivo';
  const motivoInput = document.createElement('input');
  motivoInput.type = 'text';
  motivoInput.id = 'ap_motivo';
  motivoInput.required = true;
  motivoItem.appendChild(motivoLabel);
  motivoItem.appendChild(motivoInput);

  const detalleItem = document.createElement('div');
  detalleItem.className = 'modal-item';
  const detalleLabel = document.createElement('label');
  detalleLabel.className = 'modal-label';
  detalleLabel.textContent = 'Detalle';
  const detalleInput = document.createElement('textarea');
  detalleInput.id = 'ap_detalle';
  detalleInput.rows = 3;
  detalleItem.appendChild(detalleLabel);
  detalleItem.appendChild(detalleInput);

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
  totalItem.appendChild(totalLabel);
  totalItem.appendChild(totalInput);

  const abonoItem = document.createElement('div');
  abonoItem.className = 'modal-item';
  const abonoLabel = document.createElement('label');
  abonoLabel.className = 'modal-label';
  abonoLabel.textContent = 'Valor abonado';
  const abonoInput = document.createElement('input');
  abonoInput.type = 'number';
  abonoInput.step = '0.01';
  abonoInput.id = 'ap_abono';
  abonoItem.appendChild(abonoLabel);
  abonoItem.appendChild(abonoInput);

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
  restanteItem.appendChild(restanteLabel);
  restanteItem.appendChild(restanteInput);

  const comentariosItem = document.createElement('div');
  comentariosItem.className = 'modal-item';
  const comentariosLabel = document.createElement('label');
  comentariosLabel.className = 'modal-label';
  comentariosLabel.textContent = 'Comentarios';
  const comentariosInput = document.createElement('textarea');
  comentariosInput.id = 'ap_comentarios';
  comentariosInput.rows = 3;
  comentariosItem.appendChild(comentariosLabel);
  comentariosItem.appendChild(comentariosInput);

  const pacienteItem = document.createElement('div');
  pacienteItem.className = 'modal-item';
  const pacienteLabel = document.createElement('label');
  pacienteLabel.className = 'modal-label';
  pacienteLabel.textContent = 'Paciente';
  const pacienteSelect = document.createElement('select');
  pacienteSelect.id = 'ap_paciente';
  pacienteSelect.required = true;
  pacienteItem.appendChild(pacienteLabel);
  pacienteItem.appendChild(pacienteSelect);

  const doctoraItem = document.createElement('div');
  doctoraItem.className = 'modal-item';
  const doctoraLabel = document.createElement('label');
  doctoraLabel.className = 'modal-label';
  doctoraLabel.textContent = 'Doctora';
  const doctoraSelect = document.createElement('select');
  doctoraSelect.id = 'ap_doctora';
  doctoraSelect.required = true;
  doctoraItem.appendChild(doctoraLabel);
  doctoraItem.appendChild(doctoraSelect);

  const acudienteItem = document.createElement('div');
  acudienteItem.className = 'modal-item';
  const acudienteLabel = document.createElement('label');
  acudienteLabel.className = 'modal-label';
  acudienteLabel.textContent = 'Acudiente (opcional)';
  const acudienteSelect = document.createElement('select');
  acudienteSelect.id = 'ap_acudiente';
  acudienteItem.appendChild(acudienteLabel);
  acudienteItem.appendChild(acudienteSelect);

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
    status.style.color = '#c0392b';
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
    if (!fechaVal || !motivoVal || isNaN(totalVal) || !pacienteId || !doctoraId) {
      status.textContent = 'Complete los campos requeridos.';
      return;
    }
    submitBtn.disabled = true;
    submitBtn.textContent = 'Guardando...';
    try {
      const payload = {
        fecha: new Date(fechaVal).getTime(),
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

  return overlay;
}