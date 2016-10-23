function transcribe (value) {
	
	value = value.toLowerCase()
	
	// convert double consonants
	value = value.replace(/zh/g,"ẑ")
	value = value.replace(/ch/g,"ĉ")
	value = value.replace(/sh/g,"ŝ")
	var consonants = 'bpmfdtlgkhjqxzẑcĉsŝwy'
	
	// break into syllables
	value = value.replace(/'/g," ")
	value = value.replace(/ng/g,"ŋ")
	value = value.replace(/ŋ([^ ])/g,"ŋ $1")
	value = value.replace(/([^ ])n([^ ])/g,"$1n $2")

	var syllables = ''
	for (var i=0;i<value.length;i++) {
		if (inSet(consonants,value[i])) syllables += ' '+value[i]
		else syllables += value[i] 
		}
	value = syllables.trim()

	// replace accents
	value = value.replace(/á/g,"a")
	value = value.replace(/ā/g,"a")
	value = value.replace(/ǎ/g,"a")
	value = value.replace(/à/g,"a")

	value = value.replace(/é/g,"e")
	value = value.replace(/ē/g,"e")
	value = value.replace(/ě/g,"e")
	value = value.replace(/è/g,"e")
	
	value = value.replace(/í/g,"i")
	value = value.replace(/ī/g,"i")
	value = value.replace(/ǐ/g,"i")
	value = value.replace(/ì/g,"i")
	
	value = value.replace(/ó/g,"o")
	value = value.replace(/ō/g,"o")
	value = value.replace(/ǒ/g,"o")
	value = value.replace(/ò/g,"o")
	
	value = value.replace(/ú/g,"u")
	value = value.replace(/ū/g,"u")
	value = value.replace(/ǔ/g,"u")
	value = value.replace(/ù/g,"u")
	

	// special yu sounds
	value = value.replace(/yue/g,"Y̯E")
	value = value.replace(/yuan/g,"Y̯ɛn")
	value = value.replace(/yun/g,"Yn")
	value = value.replace(/yu/g,"Y")

	// replace y
	value = value.replace(/y/g,"i")
	value = value.replace(/w/g,"u")

	// convert consonants
	value = value.replace(/ẑ/g,"ʈʂ")
	value = value.replace(/ĉ/g,"ʈʂʰ")
	value = value.replace(/ŝ/g,"ʂ")
	value = value.replace(/p/g,"pʰ")
	value = value.replace(/b/g,"p")
	value = value.replace(/t/g,"tʰ")
	value = value.replace(/d/g,"t")
	value = value.replace(/k/g,"kʰ")
	value = value.replace(/g/g,"k")
	value = value.replace(/x/g,"ɕ")
	value = value.replace(/h/g,"x")
	value = value.replace(/j/g,"ʨ")
	value = value.replace(/q/g,"ʨʰ")
	value = value.replace(/z/g,"ʦ")
	value = value.replace(/c/g,"ʦʰ")
	value = value.replace(/r/g,"ɻ")

	// special i sounds
	value = value.replace(/ʦi/g,"ʦɹ̩")
	value = value.replace(/ʦʰi/g,"ʦʰɹ̩")
	value = value.replace(/si/g,"sɹ̩")
	value = value.replace(/ʈʂi/g,"ʈʂɻ")
	value = value.replace(/ʈʂʰi/g,"ʈʂʰɻ")
	value = value.replace(/ʂi/g,"ʂɻ")
	value = value.replace(/ɻi/g,"ɻɚ")
	
	// special u sounds
	value = value.replace(/ʨu/g,"ʨü")
	value = value.replace(/ʨʰu/g,"ʨʰü")
	value = value.replace(/ɕu/g,"ɕü")

	// vowels
	value = value.replace(/ii/g,"i")
	value = value.replace(/uu/g,"u")
	value = value.replace(/iao/g,"IɑU")
	value = value.replace(/ian/g,"Iɛn")
	value = value.replace(/ioŋ/g,"Iʊŋ")
	value = value.replace(/iaŋ/g,"Iɑŋ")
	value = value.replace(/uai/g,"UaI")
	value = value.replace(/uan/g,"Uan")
	value = value.replace(/üan/g,"Y̯ɛn")
	value = value.replace(/uaŋ/g,"Uɑŋ")
	value = value.replace(/ai/g,"aI")
	value = value.replace(/ei/g,"EI")
	value = value.replace(/ao/g,"ɑU")
	value = value.replace(/ou/g,"OU")
	value = value.replace(/oŋ/g,"ʊŋ")
	value = value.replace(/eŋ/g,"əŋ")
	value = value.replace(/aŋ/g,"ɑŋ")
	value = value.replace(/en/g,"ən")
	value = value.replace(/un/g,"Uən")
	value = value.replace(/ün/g,"Yn")
	value = value.replace(/eɻ/g,"əɻ")
	value = value.replace(/ia/g,"Iä")
	value = value.replace(/ie/g,"IE")
	value = value.replace(/iu/g,"IOU")
	value = value.replace(/ua/g,"Uä")
	value = value.replace(/ui/g,"UEI")
	value = value.replace(/ue/g,"y̯E")
	value = value.replace(/üe/g,"y̯E")
	value = value.replace(/uo/g,"UO̞")
	value = value.replace(/o/g,"UO̞")
	value = value.replace(/e/g,"ɤ")
	value = value.replace(/ü/g,"y")
	value = value.replace(/ê/g,"ɛ̝")
	value = value.replace(/io/g,"i̯ɔ̝")
	value = value.replace(/o/g,"ɔ̝")
	
	value = value.replace(/U/g,"u̯")
	value = value.replace(/I/g,"i̯")
	value = value.replace(/E/g,"e")
	value = value.replace(/O/g,"o")
	value = value.replace(/Y/g,"y")
	
	value = value.replace(/[ ]+/g,' ')
	value = value.replace(/\n /g,'\n')
	return value
	}







function inSet (group, ch) {
	if (group.indexOf(ch) > -1) return true
	else { return false }
	}



