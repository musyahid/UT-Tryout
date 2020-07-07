function hapusDataGanda(data) {
    var x,
        len=data.length,
        out=[],
        obj={};
   
    for (x=0; x<len; x++) {
      obj[data[x]]=0;
    }
    for (x in obj) {
      out.push(x);
    }
    return out;
  }
  var data = ["Jakarta", "Aceh", "Malang", "Medan", "Bontang", "Jogja", "Jakarta", "Bandung", "Malang", "Solo", "Palembang", "Bandung"];
  result = hapusDataGanda(data);
  console.log(data);
  console.log(result);