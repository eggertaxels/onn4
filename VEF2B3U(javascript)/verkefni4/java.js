function Pizza (verd, staerd, alegg) {
    this.staerd = staerd;
		this.verd = verd;
		this.alegg = alegg;
};

var bahamas = new Pizza( 2450, "Lítil Bahamas", "skinka, ananas");

var magherita = new Pizza( 3990, "Stór Margherita", "ostur, oregano");

var veljasjalfur = new Pizza( 3250, "Mið VeljaSjálfur", "ostur, skinka, sveppir");

Pizza.prototype.skrifaPizzu = function () {
    return "Stærð: " + this.staerd + ", Álegg: " + this.alegg + ", Verð: " + this.verd;
};

document.getElementById("nr1").innerHTML = bahamas.skrifaPizzu();
document.getElementById("nr2").innerHTML = magherita.skrifaPizzu();
document.getElementById("nr3").innerHTML = veljasjalfur.skrifaPizzu();