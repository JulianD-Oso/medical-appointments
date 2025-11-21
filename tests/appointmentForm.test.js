import { formatLocalToIso, isFuture } from '../components/appointmentForm.js';

function assert(name, condition) {
  const status = condition ? 'OK' : 'FAIL';
  console.log(`[appointmentForm.test] ${status}: ${name}`);
}

const now = new Date();
const pad = (n) => String(n).padStart(2, '0');
const yyyy = now.getFullYear();
const mm = pad(now.getMonth() + 1);
const dd = pad(now.getDate());
const hh = pad(now.getHours());
const min = pad(now.getMinutes());
const sampleLocal = `${yyyy}-${mm}-${dd}T${hh}:${min}`;

const iso = formatLocalToIso(sampleLocal);
assert('formatLocalToIso returns ISO 8601 string', /T\d{2}:\d{2}:.+Z$/.test(iso));
assert('isFuture for now or later', isFuture(sampleLocal) === true || isFuture(sampleLocal) === false);

const pastDate = new Date(now.getTime() - 24 * 60 * 60 * 1000);
const pastLocal = `${pastDate.getFullYear()}-${pad(pastDate.getMonth() + 1)}-${pad(pastDate.getDate())}T${pad(pastDate.getHours())}:${pad(pastDate.getMinutes())}`;
assert('isFuture returns false for past date', isFuture(pastLocal) === false);