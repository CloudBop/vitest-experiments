import { beforeEach, expect, it, vi } from 'vitest'
import fs from "fs"
import path from "path"
import { showError } from './dom'

//
// get mkup
//
const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();
// create new window (happy-dom)
const window = new Window();
document = window.document;
document.write(htmlDocumentContent)
// configure global
vi.stubGlobal('document', document)

beforeEach(() => {
  document.body.innerHTML = '';
  document.write(htmlDocumentContent)
})

it('should add an error <p> to id="error" element ', () => {
  //
  showError('test');

  const errorsEl = document.getElementById("errors")
  const errP = errorsEl.firstElementChild;
  expect(errP).not.toBeNull();
})
it('should not contain an error <p> to id="erros element before ann error happens', () => {
  //
  const errorsEl = document.getElementById("errors")
  const errP = errorsEl.firstElementChild;
  expect(errP).toBeNull();
})
it('should output an error <p> to id="error" element with correct text ', () => {
  //
  let errorMessage = "Test"
  showError(errorMessage);

  const errorsEl = document.getElementById("errors")
  const errP = errorsEl.firstElementChild;
  expect(errP.textContent).toBe(errorMessage);
  // expect(errP.innerHTML).toEqual(errorMessage);
})