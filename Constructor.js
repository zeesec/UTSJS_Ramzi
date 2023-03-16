class SorumMobil {
    constructor(merkMobil, hargaMobil, warnaMobil, seriMobil) {
        this.merkMobil = merkMobil;
        this.hargaMobil = hargaMobil;
        this.warnaMobil = warnaMobil;
        this.seriMobil = seriMobil;
    }

    beli() {
        return ' Mobil ' + this.merkMobil + ' telah dibeli ';
    }

    testDrive(tujuan, brpLama) {
        return ' Mobil ' + this.merkMobil + ' menyala dan di test drive ke ' + tujuan + ' selama ' + brpLama + ' jam ';
    }

    Cancel() {
        return 'mobil' +  this.merkMobil + ' tidak jadi dibeli ';
    }
}

var mobil = new SorumMobil('apansa, 1000000000, rainbow, z700');
console.info(mobil.merkMobil)
console.info(mobil.hargaMobil)
console.info(mobil.warnaMobil)
console.info(mobil.seriMobil)

console.info(mobil.beli())
console.info(mobil.Cancel())
console.info(mobil.testDrive('depok', 2))