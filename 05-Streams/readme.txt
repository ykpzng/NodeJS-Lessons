- Strem olamadan verinin tamamı ram belleğe alınır. Bu da ram bellğin şişmesine neden olur

- Stream ile 
- Dosya okumaya başlandığında parçalara bölünür ve parçalar sırayla gelir. 
- Büyük dosyalar için istenen parçayı almak gibi düşünülebilir.
- Videonun yavaş yavaş yüklenmesi gibi.
- bu durum da yüklenme süresini oldukça kısaltır.
- File Stream da data chunk denilen parçalara bölünür.

- nodJS de streamlar birer eventEmiter dır.

fs.readFile
console
CHUNK -->Buffer nesnesi
.end
