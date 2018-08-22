const max = (val = '', max = 5) => {
  return val.length < max ? val : `${val.slice(0, max)}...`
}

const filterEmoji = (val) => {
  let emojireg = val
  const regRule = new RegExp('[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]', 'g')
  if (emojireg.match(regRule)) {
    emojireg = emojireg.replace(regRule, '')
  }
  return emojireg
}

const getRealLen = (val) => {
  let realLength = 0;
  let len = str.length;
  let charCode = -1;
  for (let i = 0; i < len; i++) {
    charCode = str.charCodeAt(i);
    if (charCode >= 0 && charCode <= 128) {
      realLength += 1;
    } else {
      realLength += 2;
    }
  }
  return realLength;
}

export {
  max,
  filterEmoji,
  getRealLen
}
