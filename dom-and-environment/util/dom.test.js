import { expect, it, vi } from 'vitest'
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
it('should add an error <p> to id="erros element ', () => {
  //
  showError('test');

  const errorsEl = document.getElementById("errors")

  const errP = errorsEl.firstElementChild;
  expect(errP).not.toBeNull();
})