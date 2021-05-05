import { JSDOM } from 'jsdom'

export const createUltraTags = (html: string) => {
  const dom = new JSDOM(html)

  const all = dom.window.document.body.getElementsByTagName('*')
  let tags = []
  let ultraTags = new Set()

  for (let i = 0, max = all.length; i < max; i++) {
    let tag = all[i].tagName.toLowerCase()

    const diffObj = Object.freeze({
      tag,
      openingTag: `<${tag}>`,
      endingTag: `<\/${tag}>`,
      associatedNumber: `{{${i + 1}}}`,
    })

    if (tags.indexOf(tag) == -1) {
      tags.push(tag)
      ultraTags.add(diffObj)
    }
  }
  console.log(ultraTags)
  return ultraTags
}
