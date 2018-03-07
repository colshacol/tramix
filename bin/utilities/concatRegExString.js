exports.concatRegExString = (final, str, last) => {
  return final + `${str}${last ? '' : '|'}`.replace(/\$/g, '\\$')
}
