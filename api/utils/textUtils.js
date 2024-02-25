const hasWhiteSpaceOrTurkishCharacter = (str) => {
  // Boşluk kontrolü
  if (str.indexOf(' ') !== -1) {
    return true
  }

  // Türkçe karakter kontrolü
  const turkishCharacters = /[ğüşıöçĞÜŞİÖÇ]/
  return turkishCharacters.test(str)
}

function translateToTurkish(text) {
  const translationRules = {
    sort: 'Şort',
    't-shirt': 'T-Shirt',
    jean: 'Jean',
    // Diğer çeviri kurallarını ekleyebilirsiniz
  }

  // Küçük harfe çevirerek eşleşmeyi kontrol et
  const lowerCaseText = text.toLowerCase()
  const translation = translationRules[lowerCaseText]

  // Eğer çeviri kuralı bulunduysa çeviriyi döndür, bulunamadıysa orijinal metni döndür
  return translation || text
}

module.exports = {
  hasWhiteSpaceOrTurkishCharacter,
  translateToTurkish,
}
