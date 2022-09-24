
function jasaAnggota () {
var a = document.getElementById('shu-bersih').value;
var b = document.getElementById('modal-koperasi').value;
var c = document.getElementById('omset-penjualan').value;
var d = document.getElementById('dana-cadangan').value;
var e = document.getElementById('jasa-anggota').value;    
var f = document.getElementById('dana-pengurus').value;
var g = document.getElementById('dana-karyawan').value;
var h = document.getElementById('dana-sosial').value;
var i = document.getElementById('dana-patungan-lingkungan').value;
var j = document.getElementById('jasa-modal').value;
var k = document.getElementById('jasa-usaha').value;

// simpanan poko, wajib dan jumlah belanja anggota 1
var l = document.getElementById('sp-sw1').value;
var m = document.getElementById('jb-1').value;

// simpanan poko, wajib dan jumlah belanja anggota 2
var n = document.getElementById('sp-sw2').value;
var o = document.getElementById('jb-2').value;

// ================================================
// jasa anggota
var hh = parseInt(a) *  parseInt(e) / 100;
// jasa modal
var gg = parseInt(b) *  parseInt(e) / 100;
// jasa usaha
var jj = parseInt(b)  *  parseInt(k) / 100; 

// shu anggota 1
var vv = parseInt(l) * gg / parseInt(b);
var kk = parseInt(m) * jj / parseInt(c);
var ll  = vv + kk;

// shu anggota 2
var mm = parseInt(n) * gg / parseInt(b);
var nn = parseInt(o) * jj / parseInt(c);
var oo = mm + nn;



    // jasa anggota
    // jasa anggota x SHU bersih
    function aa () {    
        // var hh = parseInt(a) *  parseInt(e) / 100; 
        document.getElementById('janggota').innerHTML = e;
        document.getElementById('sbersih').innerHTML = a ;
        document.getElementById('hasil-ja').innerHTML =hh ;
    }
    aa();

    // jasa modal
    // jasa anggota x modal koperasi
    function bb () {
        // var gg = parseInt(b) *  parseInt(e) / 100; 
        document.getElementById('jm-1').innerHTML = e;
        document.getElementById('m-p').innerHTML = b ;
        document.getElementById('hasil-jm').innerHTML =gg ;
    }
    bb();

    // jasa usaha
    // jasa usaha x modal koperasi

    function cc () {
        // var jj = parseInt(b)  *  parseInt(k) / 100; 
        document.getElementById('j-u').innerHTML = k;
        document.getElementById('m-k').innerHTML = b;
        document.getElementById('hasil-ju').innerHTML = jj ;
    }
    cc();

    // SHU anggota 1
    
    function cetakShu1() {
        document.getElementById('sa-user-1').innerHTML = l;
        document.getElementById('jum-user-1').innerHTML = gg;
        document.getElementById('map').innerHTML= b ;
        document.getElementById('hasil-jm-1').innerHTML= vv ;
    }
    cetakShu1();

    function cetakShu2() {
        document.getElementById('va-user-1').innerHTML = m;
        document.getElementById('ju-user-1').innerHTML = jj;
        document.getElementById('mup').innerHTML= c ;
        document.getElementById('hasil-ju-1').innerHTML= kk ;
        document.getElementById('total-shu-user1').innerHTML = ll;
    }
    cetakShu2();

    // SHU anggota 2
    
    function cetakShu3() {
        document.getElementById('sa-user-2').innerHTML = n;
        document.getElementById('jum-user-2').innerHTML = gg;
        document.getElementById('map-1').innerHTML= b ;
        document.getElementById('hasil-jm-2').innerHTML= mm ;
    }
    cetakShu3();

    function cetakShu4() {
        document.getElementById('va-user-2').innerHTML = n;
        document.getElementById('ju-user-2').innerHTML = jj;
        document.getElementById('mup-1').innerHTML= c ;
        document.getElementById('hasil-ju-2').innerHTML= nn ;
        document.getElementById('dua').innerHTML = oo;
    }
     
    cetakShu4();
}   


