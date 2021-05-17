const content = `export async function customValidator(field: any) {
  //do anything
  if (!field) throw new Error('Custom message')
}
`
module.exports = content
