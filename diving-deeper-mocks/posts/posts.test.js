import { describe, it, expect } from "vitest";
import { extractPostData } from './posts'
describe('extractPostData()', () => {
  it('should extract title and content from the provided form data', () => {
    const testTitle = 'test title'
    const testContent = 'test titlcontent'

    const testFormData = {
      title: testTitle,
      content: testContent,
      get(identifier) {
        return this[identifier]

      }
    }

    const data = extractPostData(testFormData)

    expect(data.title).toBe(testTitle)
    expect(data.content).toBe(testContent)
  });
})